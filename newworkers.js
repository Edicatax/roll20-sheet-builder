//Set Damage Bonus
on("change:curstr change:cursiz change:strengthCast", function() {
  getAttrs(["curstr", "cursiz","strengthCast","damagebonus"], function(pvalue) {
    console.log("************ Start Damage Bonus ************");
    console.log("curstr value: " + pvalue.curstr);
    console.log("cursiz value: " + pvalue.cursiz);
    console.log("damagebonus value: " + pvalue.damagebonus);
    var curStrength = parseInt(pvalue.curstr);
    var curSize = parseInt(pvalue.cursiz);
    var curDB = parseInt(pvalue.damagebonus);
    var StplusSi = curStrength + curSize;
    console.log("Str+Size value: " + StplusSi);
    var DBonus = "-1d4";
    var mDBonus = "-1d2";
    var DBonusC = 0;
    var maxDb1 = 0;
    var maxDb2 = 0;

    //Determine Bonus
    if (StplusSi < 13) {
      console.log("-- Str+Siz is less than 13 --");
      DBonus = "-1d4";
      mDBonus = "-1d2";		

      if (pvalue.strengthCast==="on"){						
        DBonus = "0";
        mDBonus = "0";
      }

      console.log("DBonus value: " + DBonus);
      /*setAttrs({ damagebonus: DBonus,mdamagebonus: mDBonus,maxDb:maxDb1});*/
    }
    else if (StplusSi < 25) {
      console.log("-- Str+Siz is less than 25 --");
      DBonus = "0";
      mDBonus = "0";

      if (pvalue.strengthCast==="on"){						
        DBonus = "1d4";
        mDBonus = "1d2";
        maxDb1=4;
        maxDb2=2							
      }						

      console.log("DBonus value: " + DBonus);
      /*setAttrs({ damagebonus: DBonus,mdamagebonus: mDBonus,maxDb:maxDb1});*/
    }
    else if (StplusSi < 33) {
      console.log("-- Str+Siz is less than 31 --");
      DBonus = "1d4";
      mDBonus = "1d2";					
      console.log("DBonus value: " + DBonus);
      maxDb1=4;
      maxDb2=2
      if (pvalue.strengthCast==="on"){						
        DBonus = "1d6";
        mDBonus = "1d3";
        maxDb1=6;
        maxDb2=3							
      }												



      /*setAttrs({ damagebonus: DBonus,mdamagebonus: mDBonus,maxDb:maxDb1  });*/
    }
    else if (StplusSi < 41) {
      console.log("-- Str+Siz is less than 31 --");
      DBonus = "1d6";
      mDBonus = "1d3";					
      console.log("DBonus value: " + DBonus);
      maxDb1=6;
      maxDb2=3

      if (pvalue.strengthCast==="on"){						
        DBonus = "2d6";
        mDBonus = "1d6";
        maxDb1=12;
        maxDb2=6							
      }							

      /*setAttrs({ damagebonus: DBonus,mdamagebonus: mDBonus,maxDb:maxDb1  });*/
    }			
    else { //StplusSi is greater than 
      DBonusC = 2+Math.floor(parseFloat((StplusSi - 40) / 16));
      if (pvalue.strengthCast==="on"){						
        DBonusC += 1;
      }						

      console.log("DBonusC value: " + DBonusC);

      DBonus = DBonusC + "d6";
      maxDb1 = DBonusC*6;
      maxDb2 = maxDb1/2;
      mDBonus = DBonusC + "d3";					
      console.log("DBonus value: " + DBonus);
      /*setAttrs({ damagebonus: DBonus,mdamagebonus: mDBonus,maxDb:maxDb1,mmaxDb:maxDb2 });*/
    }    

    setAttrs({ damagebonus: DBonus,mdamagebonus: mDBonus,maxDb:maxDb1,mmaxDb:maxDb2 });
    console.log("************ End Damage Bonus ************");
  });
});


//reset weapon str/ def penalties if str changes
on("change:curstr change:curdex change:cursiz", function() {
  /* Start melee Section */
  getSectionIDs("repeating_melee", function(idArray) {
    if (idArray.length > 0) {
      _.each(idArray, function(currentID, i) {
        getAttrs(["repeating_melee_" + currentID + "_wpnstr","repeating_melee_" + currentID + "_wpndex","curstr","curdex" ], function(values) {
          console.log("what have we here");
          var wStr = parseInt(values["repeating_melee_" + idArray[i] + "_wpnstr"]);
          var wDex = parseInt(values["repeating_melee_" + idArray[i] + "_wpndex"]);
          var cStr = parseInt(values.curstr);
          var cDex = parseInt(values.curdex);
          var minMod = 0;
          var strMod = cStr-wStr;
          var dexMod = cDex-wDex;
          var totmod = 0;
          var attrsToSet = {};
          if (strMod < 0){
            console.log("Below min str");
            console.log(strMod*5);
            totmod += strMod*5;
          }
          if (dexMod < 0){
            console.log("Below min dex");
            console.log(dexMod*5);
            totmod += dexMod*5;
          }
          //mimmod
          var missleModId = "repeating_melee_" + idArray[i] + "_minmod";
          attrsToSet[missleModId] = totmod;
          console.log("attrsToSet");
          console.log(attrsToSet);		
          setAttrs(attrsToSet);
        });
      });
    }
  });
  /* End melee section  */				

  /* Start missle Section */
  getSectionIDs("repeating_missle", function(idArray) {
    if (idArray.length > 0) {
      _.each(idArray, function(currentID, i) {
        getAttrs(["repeating_missle_" + currentID + "_mdbtoggle","repeating_missle_" + currentID + "_wpnstr","repeating_missle_" + currentID + "_wpndex","curstr","curdex","mdamagebonus" ], function(values) {
          console.log("what have we here");
          var wStr = parseInt(values["repeating_missle_" + idArray[i] + "_wpnstr"]);
          var wDex = parseInt(values["repeating_missle_" + idArray[i] + "_wpndex"]);
          var mdb = values["repeating_missle_" + idArray[i] + "_mdbtoggle"]
          var cStr = parseInt(values.curstr);
          var cDex = parseInt(values.curdex);
          var minMod = 0;
          var strMod = cStr-wStr;
          var dexMod = cDex-wDex;
          var totmod = 0;
          var mdbStr = "0";
          var attrsToSet = {};
          if (strMod < 0){
            console.log("Below min str");
            console.log(strMod*5);
            totmod += strMod*5;
          }
          if (dexMod < 0){
            console.log("Below min dex");
            console.log(dexMod*5);
            totmod += dexMod*5;
          }
          //mimmod
          var missleModId = "repeating_missle_" + idArray[i] + "_minmod";
          attrsToSet[missleModId] = totmod;
          console.log("attrsToSet");
          console.log(attrsToSet);		
          setAttrs(attrsToSet);

          //set missle damage bonus
          var missletoggleId = "repeating_missle_" + idArray[i] + "_wpnmdb";
          if (mdb=="on"){

            mdbStr = values.mdamagebonus;
          }

          attrsToSet[missletoggleId] = mdbStr;
          console.log("new missle bonus");
          console.log(attrsToSet);		
          setAttrs(attrsToSet);								
        });
      });
    }
  });
  /* End missle section  */
});

on('change:repeating_equipment remove:repeating_equipment',function(){
  TAS.repeatingSimpleSum('equipment','equipment_weight','enc_totalf');
});

on('change:repeating_spiritspells remove:repeating_spiritspells',function(){
  TAS.repeatingSimpleSum('spiritspells','mpcost','spiritint');
});

on('change:repeating_equipment2 remove:repeating_equipment2',function(){
  //TAS.repeatingSimpleSum('equipment','equipment_weight','carry_total2');
  TAS.repeating("equipment2")
    .attr("carry_total2")
    .field("equipment_weight","carried")
    .reduce(function(m,r){

      console.log("carried "+(r.F["carried"]));
      if ( (r.F["carried"]) == 1){
        return m + (r.F["equipment_weight"]);
      } else{
        return m;
      }


    },0,function(t,r,a){
      a.S["carry_total2"]=t;
    })
    .execute();
});					

//////QS sheet workers end///////////////////////////

//Set Current enc mod
on("change:carry_total2 change:carry_max2", function() {
  getAttrs(["carry_total2","carry_max2"], function(pvalue) {
    var new_mod = 0;
    var swim_mod = 0;
    const carry_total = Math.floor(parseInt(pvalue.carry_total2));
    const carry_max   = Math.ceil(parseInt(pvalue.carry_max2));
    if (carry_total >  Math.ceil(carry_max/2)){
      swim_mod = ((Math.ceil(carry_max/2) - carry_total))*5;
    }

    var dodge_mod = 0-carry_total;
    if (carry_total > carry_max){
      dodge_mod = 0-carry_max;
      new_mod = (carry_max-carry_total)*5;
      swim_mod = swim_mod - new_mod;
    }
    setAttrs({enc_mod2:new_mod,dodge_mod2:dodge_mod,swim_mod2:swim_mod});
  });
});	

on("remove:repeating_agilitySkills", function(eventinfo){
  getAttrs(["agility_mod","curdex"], function(pvalue) {		
    var skill = Object.values(eventinfo.removedInfo)[0];
    skill = skill.toLowerCase();
    skill = skill.trim();			
    if (skill === "dodge"){
      var mod = parseInt(pvalue.agility_mod);
      console.log("!!!!!!! agility_mod "+mod);
      var base = (parseInt(pvalue.curdex))*2
      console.log("!!!!!!! base "+base);

      setAttrs({dodge:mod+base});							
    }					
  });	
});



on("change:repeating_melee2:skillName", function(eventInfo) {
  getAttrs(["repeating_melee2_skillName"], function(pvalue) {		
    let sourceA = eventInfo.sourceAttribute
    let  repeatRow = sourceA.match(/[^_]*_[^_]*_[^_]*/g);
    var wpnSkill = pvalue.repeating_melee2_skillName;
    getSkillValues(wpnSkill,"repeating_meleeskills",repeatRow);
    getSkillValues(wpnSkill,"repeating_shieldskills",repeatRow);
    getSkillValues(wpnSkill,"repeating_naturalwpnskills",repeatRow);
  });
});	


on("change:repeating_missle2:skillName", function(eventInfo) {
  getAttrs(["repeating_missle2_skillName"], function(pvalue) {		
    console.log("!!!!!! stuff  "+JSON.stringify(eventInfo.sourceAttribute));
    let sourceA = eventInfo.sourceAttribute
    let  repeatRow = sourceA.match(/[^_]*_[^_]*_[^_]*/g);
    var wpnSkill = pvalue.repeating_missle2_skillName;
    console.log("changed weapon skill to "+wpnSkill);
    var skillVal=getSkillValues(wpnSkill,"repeating_missileskills",repeatRow);
  });
});				

function getSkillValues2(wpnSkill,section,section2,skillTotal){
	getSectionIDs(section, function(idArray) {
		if (idArray.length < 1) {
			return;
		}

		_.each(idArray, function(currentID, i) {
			getAttrs([section+"_" + currentID + "_skillName",section+"_" + currentID + "_skillTotal"], function(values) {
				console.log("!!!!!! stuff3  "+JSON.stringify(values));
				let skillname = values[section+"_" + idArray[i] + "_skillName"];
				console.log("!!!!!! wpnSkill "+wpnSkill+" skillname "+skillname);
				if (skillname != wpnSkill){	
					return;
				}								
				console.log("!!!!!!!!!!!! found2 "+wpnSkill);
				let attrsToSet = {[section+"_" + idArray[i] +'_skillTotal']: skillTotal};								
				console.log("attrs to set "+JSON.stringify(attrsToSet));

				setAttrs(attrsToSet);
			});
		});
	});	
}	


on("change:repeating_agilitySkills:skillValue", function() {
  getAttrs(["repeating_agilitySkills_skillValue"], function(pvalue) {		

    var checkVal = 0;
    if (parseInt(pvalue.repeating_agilitySkills_skillValue) > 0){
      checkVal=1;
    }

    setAttrs({repeating_agilitySkills_check_exp_toggle:checkVal});			   
  });
});		


on('sheet:opened',function(){
  getAttrs(["setupDone2","version"], function(pvalue) {
    if (parseInt(pvalue.version)==1){	
      var SetupDone2=parseInt(pvalue.setupDone2);
      if (SetupDone2==0){

        incSkill("repeating_agilityskills","Boat","5","0","1");
        incSkill("repeating_agilityskills","Climb","40","0","1");
        incSkill("repeating_agilityskills","Dodge","DEX*2","1","1");	
        incSkill("repeating_agilityskills","Drive","5","0","1");								
        incSkill("repeating_agilityskills","Jump","DEX*3","1","1");									
        incSkill("repeating_agilityskills","Ride (.......)","5","0","1");									
        incSkill("repeating_agilityskills","Swim","15","0","1");									

        incSkill("repeating_communicationskills","Act","5","0","1");									
        incSkill("repeating_communicationskills","Art","5","0","1");
        incSkill("repeating_communicationskills","Bargain","5","0","1");											
        incSkill("repeating_communicationskills","Charm","15","0","1");											
        incSkill("repeating_communicationskills","Dance","10","0","1");											
        incSkill("repeating_communicationskills","Disguise","5","0","1");
        incSkill("repeating_communicationskills","Fast Talk","5","0","1");
        incSkill("repeating_communicationskills","Intimidate","15","0","1");
        incSkill("repeating_communicationskills","Intrigue","5","0","1")				
        incSkill("repeating_communicationskills","Orate","10","0","1")
        incSkill("repeating_communicationskills","Sing","10","0","1")												
        incSkill("repeating_communicationskills","Speak (Other Language)","0","0","1")								
        incSkill("repeating_communicationskills","Speak (Own Language)","50","0","1")

        incSkill("repeating_knowledgeskills","Alchemy","0","0","0");									
        incSkill("repeating_knowledgeskills","Animal Lore","5","0","0");									
        incSkill("repeating_knowledgeskills","Battle","10","0","1");									
        incSkill("repeating_knowledgeskills","Celestial Lore","5","0","0");
        incSkill("repeating_knowledgeskills","Cult Lore (Cult)","5","0","0");
        incSkill("repeating_knowledgeskills","Customs (Local)","5","0","0");								
        incSkill("repeating_knowledgeskills","Customs (Other)","0","0","1");
        incSkill("repeating_knowledgeskills","Elder Race Lore","5","0","0");
        incSkill("repeating_knowledgeskills","Evaluate","10","0","1");
        incSkill("repeating_knowledgeskills","Farm","10","0","1");
        incSkill("repeating_knowledgeskills","First Aid","10","0","1");											incSkill("repeating_knowledgeskills","Game","10","0");
        incSkill("repeating_knowledgeskills","Herd","5","0","1");
        incSkill("repeating_knowledgeskills","Homeland Lore (Own)","30","0");
        incSkill("repeating_knowledgeskills","Homeland Lore (...)","0","0");
        incSkill("repeating_knowledgeskills","Manage Household","10","0","1");
        incSkill("repeating_knowledgeskills","Mineral Lore","5","0","0");								
        incSkill("repeating_knowledgeskills","Peaceful Cut","10","0","1");
        incSkill("repeating_knowledgeskills","Plant Lore","5","0","0");
        incSkill("repeating_knowledgeskills","Read/Write (....)","0","0","1");
        incSkill("repeating_knowledgeskills","Survival","5","0","1");
        incSkill("repeating_knowledgeskills","Treat Disease","5","0","1");								
        incSkill("repeating_knowledgeskills","Treat Poison","5","0","1");

        incSkill("repeating_magicskills","Meditate","0","0","1");
        incSkill("repeating_magicskills","Prepare Corpse","10","0","1");
        incSkill("repeating_magicskills","Spirit Combat","20","0","1");
        incSkill("repeating_magicskills","Spirit Lore","0","0","0");																		
        incSkill("repeating_magicskills","Spirit Travel","10","0","1");

        incSkill("repeating_magicskills","Worship (...)","5","0","1");

        incSkill("repeating_manipulationskills","Conceal","5","0","1");
        incSkill("repeating_manipulationskills","Craft (...)","10","0","1");
        incSkill("repeating_manipulationskills","Devise","5","0","1");
        incSkill("repeating_manipulationskills","Play Instrument (...)","5","0","1");
        incSkill("repeating_manipulationskills","Sleight","5","0","1");

        incSkill("repeating_perceptionskills","Insight (own species)","20","0","1");
        incSkill("repeating_perceptionskills","Listen","25","0","1");
        incSkill("repeating_perceptionskills","Scan","25","0","1");								
        incSkill("repeating_perceptionskills","Search","25","0","1");								
        incSkill("repeating_perceptionskills","Track","5","0","1");								


        incSkill("repeating_stealthskills","Hide","10","0","1");								
        incSkill("repeating_stealthskills","Move Quietly","10","0","1");

        incSkill("repeating_meleeSkills","1H Axe","10","0","1");
        incSkill("repeating_meleeSkills","2H Axe","5","0","1");
        incSkill("repeating_meleeSkills","Broadsword","10","0","1");
        incSkill("repeating_meleeSkills","Dagger","15","0","1");								
        incSkill("repeating_meleeSkills","Kopis","10","0","1");								
        incSkill("repeating_meleeSkills","1H Mace","15","0","1");
        incSkill("repeating_meleeSkills","Pike","15","0","1");
        incSkill("repeating_meleeSkills","Rapier","10","0","1");
        incSkill("repeating_meleeSkills","Shortsword","10","0","1");
        incSkill("repeating_meleeSkills","1H Spear","5","0","1","1");
        incSkill("repeating_meleeSkills","2H Spear","15","0","1");	

        incSkill("repeating_missileSkills","Composite Bow","5","0","1");								
        incSkill("repeating_missileSkills","Javelin","10","0","1");
        incSkill("repeating_missileSkills","Self Bow","5","0","1");
        incSkill("repeating_missileSkills","Sling","5","0","1");
        incSkill("repeating_missileSkills","Throwing Dagger","5","0","1");
        incSkill("repeating_missileSkills","Thrown Axe","10","0","1");								

        incSkill("repeating_shieldSkills","Small Shield","15","0","1");								
        incSkill("repeating_shieldSkills","Medium Shield","15","0","1");
        incSkill("repeating_shieldSkills","Large Shield","15","0","1");																

        incSkill("repeating_naturalWpnSkills","Fist","25","0","1");
        incSkill("repeating_naturalWpnSkills","Grapple","25","0","1");
        incSkill("repeating_naturalWpnSkills","Kick","15","0","1");
        /*addMeleeWpn(section,wpnType,wsr,skill,damage,type,special)*/

        addMeleeWpn("repeating_melee2","Fist","Fist","3","1D3","1D3","3","H","2");
        addMeleeWpn("repeating_melee2","Grapple","Grapple","3","1D6","1d6","6","H","2");
        addMeleeWpn("repeating_melee2","Kick","Kick","3","1D6","1d6","6","H","2");


        setAttrs({toggleFullSheet:"on",toggleQSSheet:0,setupDone2:"1"});
      }		
    }
    else{
      setAttrs({toggleQSSheet:"on",toggleFullSheet:0});								
    }
  });	

});



function incSkill(section,skill,base,vbase,showExp){
  getSectionIDs(section, function(idArray) {
    var found = false;
		if (idArray.length < 1) {
			addSkill(section,skill,base,vbase,showExp);
			return
		}

		var fields = [];
		_.each(idArray, function(currentID) {
			fields.push(section+"_" + currentID + "_skill");
			fields.push(section+"_" + currentID + "_base");
		});

		getAttrs(fields, function(values) {
			_.each(idArray, function(currentID, i) {
				var curSkill = values[section+"_" + idArray[i] + "_skill"];
				if (curSkill === skill){
					found = true;
				}
			});
			if (!found) {
				console.log(skill+""+section+" add !!!!!!!!!!!");
				addSkill(section,skill,base,vbase,showExp);
			}
		});
	});
}








function addSkill(section,skill,base,vbase,showExp){
  var id=getId();
  var setObj = {};
  setObj[section+"_"+id+'_skill']=skill;
  setObj[section+"_"+id+'_base']=base;
  if (vbase==0){
    setObj[section+"_"+id+'_base2']=base;
  }
  else{
    setObj[section+"_"+id+'_base2']=base;
  }
  setAttrs(setObj);
  console.log("!!!!!!!!! skill: "+skill+" showExp: "+showExp); 

  if (showExp==1){
    setObj[section+"_"+id+'_sp_toggle1']="on";
  } else {
    setObj[section+"_"+id+'_sp_toggle1']="0";
  }
  setAttrs(setObj);
}

function addMeleeWpn(section,wpnType,skill,wsr,damage,spclDamage,critDamage,type,special){
  var id=getId();
  var setObj = {};
  setObj[section+"_"+id+'_weapon_type']=wpnType;
  setObj[section+"_"+id+'_skillName']=wpnType;					
  setObj[section+"_"+id+'_wpn_sr']=wsr;
  setObj[section+"_"+id+'_wpn_damage']=damage;
  setObj[section+"_"+id+'_spcldamage']=spclDamage;
  setObj[section+"_"+id+'_critdamage']=critDamage;
  setObj[section+"_"+id+'_wpn_type']=type;
  setObj[section+"_"+id+'_wpn_spl']=special;					

  setAttrs(setObj);	
}			

function getId(){
  const sattrs = {};
  const createdIDs = [];
  var retId = 0;
  if (createdIDs.length==0){
    retId = generateRowID();
    createdIDs.push(retId);
  } 
  var checkit = true;	
  while (checkit==true) {
    let newID = generateRowID();
    console.log("Newid "+newID);	
    if (!createdIDs.includes(newID)) {
      newrowid = newID;
      console.log("newrowid "+newID);			  
      createdIDs.push(newrowid);
      checkit=false;
    }
  }
  retId = newrowid;


  return retId;
}



function resetSkills(section,category_mod,enc){
  console.log("reset skills "+section+" "+category_mod);
  getSectionIDs(section, function(idArray) {
    if (idArray.length > 0) {

      _.each(idArray, function(currentID, i) {
        getAttrs([section+"_" + currentID + "_base",section+"_" + currentID + "_skillValue",category_mod,"dodge_mod2","swim_mod2","enc_mod2","curdex",section+"_" + currentID + "_skill"], function(values){
          console.log("!!!! reset "+section+" row");

          var base = values[section+"_" + idArray[i] + "_base"];
          var skill = values[section+"_" + idArray[i] + "_skill"];
          if (parseInt(enc)==1){
            var enc_mod = parseInt(values.enc_mod2);
          } else {
            enc_mod = 0;
          }							
          var curdex = parseInt(values.curdex);
          base=base.toUpperCase();
          if (base.includes("DEX")){

            var multiplier = base.split("*");
            console.log("!!!!!!multiplier "+multiplier);									
            var multival = parseInt(multiplier[1]);
            console.log("!!!!!!!!!!!multival "+multival);															
            console.log("zzzzz");
            base = curdex*multival;
          }else{
            base=parseInt(base);
          }


          var skillValue = parseInt(values[section+"_" + idArray[i] + "_skillValue"]);
          var mod = parseInt(values[category_mod]);

          console.log("$$$$$$$ base"+base);	
          console.log("$$$$$$$ skillValue"+skillValue);									
          console.log("$$$$$$$ mod"+mod);									

          var tot = 0;
          if ((base+skillValue)>0){
            tot=base+skillValue+mod+enc_mod;
            if (skill.toUpperCase()=="DODGE"){
              tot = tot+parseInt(values.dodge_mod2)
            }else if (skill.toUpperCase()=="SWIM"){
              tot = tot+parseInt(values.swim_mod2)
            }
          }
          setAttrs({[section+"_"+currentID+"_base2"]:base});	
          setAttrs({[section+"_"+currentID+"_skillTotal"]:tot});

        });
      });
    }
  });		
}

on("change:agility_mod", function() {
  resetSkills("repeating_agilitySkills","agility_mod","1");
});	

on("change:communication_mod", function() {
  resetSkills("repeating_communicationSkills","communication_mod","0");
});	

on("change:knowledge_mod", function() {
  resetSkills("repeating_knowledgeSkills","knowledge_mod","0");
});	

on("change:magic_mod", function() {
  resetSkills("repeating_magicSkills","magic_mod","0");
});	

on("change:perception_mod", function() {
  resetSkills("repeating_perceptionSkills","perception_mod","0");
});	

on("change:stealth_mod", function() {
  resetSkills("repeating_stealthSkills","stealth_mod","1");
});	

on("change:swim_mod", function() {
  resetSkills("repeating_agilitySkills","agility_mod","1");
});	

on("change:dodge_mod2", function() {
  resetSkills("repeating_agilitySkills","agility_mod","1");
});	

on("change:manipulation_mod", function() {
  resetSkills("repeating_manipulationSkills","manipulation_mod","1");
  resetSkills("repeating_meleeSkills","manipulation_mod","1");
  resetSkills("repeating_missileSkills","manipulation_mod","1");
  resetSkills("repeating_shieldSkills","manipulation_mod","1");
  resetSkills("repeating_naturalWpnSkills","manipulation_mod","1");								
});	

on("change:enc_mod2", function() {
  resetSkills("repeating_agilitySkills","agility_mod","1");
  resetSkills("repeating_manipulationSkills","manipulation_mod","1");
  resetSkills("repeating_meleeSkills","manipulation_mod","1");
  resetSkills("repeating_missileSkills","manipulation_mod","1");
  resetSkills("repeating_shieldSkills","manipulation_mod","1");
  resetSkills("repeating_naturalWpnSkills","manipulation_mod","1");								
});

on("change:repeating_agilitySkills:base2 change:repeating_agilitySkills:skillValue change:repeating_agilitySkills:skill", function() {
  getAttrs(["repeating_agilitySkills_base2","repeating_agilitySkills_skillValue","agility_mod","repeating_agilitySkills_skill","dodge_mod2","swim_mod2","enc_mod2"], function(pvalue) {
    var base2 = parseInt(pvalue.repeating_agilitySkills_base2);
    var enc_mod2 = parseInt(pvalue.enc_mod2);
    var skill = pvalue.repeating_agilitySkills_skill;
    var skillValue= parseInt(pvalue.repeating_agilitySkills_skillValue);
    var tot = 0;
    if (base2+skillValue > 0){

      tot=base2+skillValue+parseInt(pvalue.agility_mod)+enc_mod2;
      if (skill.toUpperCase()=="DODGE"){
        tot = tot+parseInt(pvalue.dodge_mod2)
      }else if (skill.toUpperCase()=="SWIM"){
        tot = tot+parseInt(pvalue.swim_mod2)
      }								
    }
    setAttrs({repeating_agilitySkills_skillTotal:tot});

  });
});				


on("change:repeating_agilitySkills:skillTotal", function() {
  getAttrs(["repeating_agilitySkills_skillTotal","repeating_agilitySkills_skill","curDex"], function(pvalue) {
    console.log("!!!!!!!!!!!!! Check for dodge !!!!!!!!!");
    var skill=pvalue.repeating_agilitySkills_skill;
    skill = skill.toUpperCase();

    console.log("!!!!!!!!!!!!!"+skill);

    if (skill=="DODGE"){
      console.log("!!!!!!!!found skill name");
      var skillTotal = parseInt(pvalue.repeating_agilitySkills_skillTotal);
      setAttrs({dodge:skillTotal});						
    }
  });
});



on("change:repeating_magicSkills:skillTotal", function() {
  getAttrs(["repeating_magicSkills_skillTotal","repeating_magicSkills_skill","curDex"], function(pvalue) {
    console.log("!!!!!!!!!!!!! Check for spirit !!!!!!!!!");
    var skill=pvalue.repeating_magicSkills_skill;
    skill = skill.toUpperCase();

    console.log("!!!!!!!!!!!!!"+skill);

    if (skill=="SPIRIT COMBAT"){
      console.log("!!!!!!!!found skill name");
      var skillTotal = parseInt(pvalue.repeating_magicSkills_skillTotal);
      setAttrs({spirit_combat:skillTotal});						
    }
  });
});				



////////////////////////////////////////////////////////////////////////

on("change:repeating_communicationSkills:base2 change:repeating_communicationSkills:skillValue", function() {
  getAttrs(["repeating_communicationSkills_base2","repeating_communicationSkills_skillValue","communication_mod"], function(pvalue) {		

    console.log("!!!!!!!base2 "+pvalue.repeating_communicationSkills_base2);
    console.log("!!!!!!skill value "+pvalue.repeating_communicationSkills_skillValue);
    console.log("!!!!!!!!!!communication mod "+pvalue.communication_mod);

    var base2 = parseInt(pvalue.repeating_communicationSkills_base2);
    var skillValue= parseInt(pvalue.repeating_communicationSkills_skillValue);
    var tot = 0;
    if (base2+skillValue > 0){
      tot=base2+skillValue+parseInt(pvalue.communication_mod);
    }
    setAttrs({repeating_communicationSkills_skillTotal:tot});			   
  });
});				

///////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////


on("change:repeating_knowledgeSkills:base2 change:repeating_knowledgeSkills:skillValue", function() {
  getAttrs(["repeating_knowledgeSkills_base2","repeating_knowledgeSkills_skillValue","knowledge_mod"], function(pvalue) {		

    console.log("!!!!!!!base2 "+pvalue.repeating_knowledgeSkills_base2);
    console.log("!!!!!!skill value "+pvalue.repeating_knowledgeSkills_skillValue);
    console.log("!!!!!!!!!!knowledge mod "+pvalue.knowledge_mod);


    var base2 = parseInt(pvalue.repeating_knowledgeSkills_base2);
    var skillValue= parseInt(pvalue.repeating_knowledgeSkills_skillValue);

    tot = 0;

    if ((base2+skillValue)>0){
      var tot = base2+skillValue+parseInt(pvalue.knowledge_mod);
    }


    setAttrs({repeating_knowledgeSkills_skillTotal:tot});			   
  });
});			


on("change:repeating_magicSkills:base2 change:repeating_magicSkills:skillValue", function() {
  getAttrs(["repeating_magicSkills_base2","repeating_magicSkills_skillValue","magic_mod"], function(pvalue) {		

    console.log("!!!!!!!base2 "+pvalue.repeating_magicSkills_base2);
    console.log("!!!!!!skill value "+pvalue.repeating_magicSkills_skillValue);
    console.log("!!!!!!!!!!magic mod "+pvalue.magic_mod);

    var base2 = parseInt(pvalue.repeating_magicSkills_base2);
    var skillValue = parseInt(pvalue.repeating_magicSkills_skillValue);

    var tot = base2+skillValue+parseInt(pvalue.magic_mod);

    setAttrs({repeating_magicSkills_skillTotal:tot});			   
  });
});				
///////////////////////////////////////////////////////////////////////////////////////				
////////////////////////////////////////////////////////////////////////


on("change:repeating_manipulationSkills:base2 change:repeating_manipulationSkills:skillValue", function() {
  getAttrs(["repeating_manipulationSkills_base2","repeating_manipulationSkills_skillValue","manipulation_mod","enc_mod2"], function(pvalue) {		

    console.log("!!!!!!!base2 "+pvalue.repeating_manipulationSkills_base2);
    console.log("!!!!!!skill value "+pvalue.repeating_manipulationSkills_skillValue);
    console.log("!!!!!!!!!!manipulation mod "+pvalue.manipulation_mod);

    var base2 = parseInt(pvalue.repeating_manipulationSkills_base2);
    var skillValue = parseInt(pvalue.repeating_manipulationSkills_skillValue);

    var tot = base2+skillValue+parseInt(pvalue.manipulation_mod)+parseInt(pvalue.enc_mod2);

    setAttrs({repeating_manipulationSkills_skillTotal:tot});			   
  });
});				

///////////////////////////////////////////////////////////////////////////////////////	
////////////////////////////////////////////////////////////////////////

on("change:repeating_perceptionSkills:base2 change:repeating_perceptionSkills:skillValue", function() {
  getAttrs(["repeating_perceptionSkills_base2","repeating_perceptionSkills_skillValue","perception_mod"], function(pvalue) {		

    console.log("!!!!!!!base2 "+pvalue.repeating_perceptionSkills_base2);
    console.log("!!!!!!skill value "+pvalue.repeating_perceptionSkills_skillValue);
    console.log("!!!!!!!!!!perception mod "+pvalue.perception_mod);

    var base2 = parseInt(pvalue.repeating_perceptionSkills_base2);
    var skillValue = parseInt(pvalue.repeating_perceptionSkills_skillValue);

    var tot = 0;
    if (base2+skillValue>0){
      var tot = base2+skillValue+parseInt(pvalue.perception_mod);
    }	


    setAttrs({repeating_perceptionSkills_skillTotal:tot});			   
  });
});				

///////////////////////////////////////////////////////////////////////////////////////	
////////////////////////////////////////////////////////////////////////

on("change:repeating_stealthSkills:base2 change:repeating_stealthSkills:skillValue", function() {
  getAttrs(["repeating_stealthSkills_base2","repeating_stealthSkills_skillValue","stealth_mod","enc_mod2"], function(pvalue) {		
    console.log ("stealth skills");
    console.log("!!!!!!!base2 "+pvalue.repeating_stealthSkills_base2);
    console.log("!!!!!!skill value "+pvalue.repeating_stealthSkills_skillValue);
    console.log("!!!!!!!!!!stealth mod "+pvalue.stealth_mod);

    var base2 = parseInt(pvalue.repeating_stealthSkills_base2);
    var skillValue = parseInt(pvalue.repeating_stealthSkills_skillValue);

    var tot = 0;
    if (base2+skillValue>0){
      var tot = base2+skillValue+parseInt(pvalue.stealth_mod)+parseInt(pvalue.enc_mod2);
    }

    setAttrs({repeating_stealthSkills_skillTotal:tot});			   
  });
});				

///////////////////////////////////////////////////////////////////////////////////////				
////////////////////////////////////////////////////////////////////////

on("change:repeating_meleeSkills:base2 change:repeating_meleeSkills:skillValue", function() {
  getAttrs(["repeating_meleeSkills_base2","repeating_meleeSkills_skillValue","manipulation_mod"], function(pvalue) {		

    console.log("!!!!!!!base2 "+pvalue.repeating_meleeSkills_base2);
    console.log("!!!!!!skill value "+pvalue.repeating_meleeSkills_skillValue);
    console.log("!!!!!!!!!!melee mod "+pvalue.manipulation_mod);

    var base2 = parseInt(pvalue.repeating_meleeSkills_base2);
    var skillValue = parseInt(pvalue.repeating_meleeSkills_skillValue);

    var tot = 0;
    if (base2+skillValue>0){
      var tot = base2+skillValue+parseInt(pvalue.manipulation_mod);
    }

    setAttrs({repeating_meleeSkills_skillTotal:tot});			   
  });
});				
///////////////////////////////////////////////////////////////////////////////////////				
////////////////////////////////////////////////////////////////////////

on("change:repeating_missileSkills:base2 change:repeating_missileSkills:skillValue", function() {
  getAttrs(["repeating_missileSkills_base2","repeating_missileSkills_skillValue","manipulation_mod"], function(pvalue) {		

    console.log("!!!!!!!base2 "+pvalue.repeating_missileSkills_base2);
    console.log("!!!!!!skill value "+pvalue.repeating_missileSkills_skillValue);
    console.log("!!!!!!!!!!missile mod "+pvalue.manipulation_mod);

    var base2 = parseInt(pvalue.repeating_missileSkills_base2);
    var skillValue = parseInt(pvalue.repeating_missileSkills_skillValue);

    var tot = 0;
    if (base2+skillValue>0){
      var tot = base2+skillValue+parseInt(pvalue.manipulation_mod);
    }

    setAttrs({repeating_missileSkills_skillTotal:tot});			   
  });
});				
///////////////////////////////////////////////////////////////////////////////////////	
////////////////////////////////////////////////////////////////////////

on("change:repeating_shieldSkills:base2 change:repeating_shieldSkills:skillValue", function() {
  getAttrs(["repeating_shieldSkills_base2","repeating_shieldSkills_skillValue","manipulation_mod"], function(pvalue) {		

    console.log("!!!!!!!base2 "+pvalue.repeating_shieldSkills_base2);
    console.log("!!!!!!skill value "+pvalue.repeating_shieldSkills_skillValue);
    console.log("!!!!!!!!!!shield mod "+pvalue.manipulation_mod);

    var base2 = parseInt(pvalue.repeating_shieldSkills_base2);
    var skillValue = parseInt(pvalue.repeating_shieldSkills_skillValue);

    var tot = 0;
    if (base2+skillValue>0){
      var tot = base2+skillValue+parseInt(pvalue.manipulation_mod);
    }

    setAttrs({repeating_shieldSkills_skillTotal:tot});			   
  });
});				
///////////////////////////////////////////////////////////////////////////////////////	
//			////////////////////////////////////////////////////////////////////////


on("change:repeating_naturalWpnSkills:base2 change:repeating_naturalWpnSkills:skillValue", function() {
  getAttrs(["repeating_naturalWpnSkills_base2","repeating_naturalWpnSkills_skillValue","manipulation_mod"], function(pvalue) {		

    console.log("!!!!!!!base2 "+pvalue.repeating_naturalWpnSkills_base2);
    console.log("!!!!!!skill value "+pvalue.repeating_naturalWpnSkills_skillValue);
    console.log("!!!!!!!!!!naturalWpnsSkills mod "+pvalue.manipulation_mod);

    var base2 = parseInt(pvalue.repeating_naturalWpnSkills_base2);
    var skillValue = parseInt(pvalue.repeating_naturalWpnSkills_skillValue);

    var tot = 0;
    if (base2+skillValue>0){
      var tot = base2+skillValue+parseInt(pvalue.manipulation_mod);
    }

    setAttrs({repeating_naturalWpnSkills_skillTotal:tot});			   
  });
});				
///////////////////////////////////////////////////////////////////////////////////////	



//Set heal rate
on("change:curcon", function() {
  getAttrs(["curcon"], function(pvalue) {


    var charCon = parseInt(pvalue.curcon);
    var hr = 0;

    if (charCon < 7){
      hr = 1;
    } else if (charCon < 13){
      hr = 2;				
    } else if (charCon < 18){
      hr = 3;				
    } else {
      hr += (3 + Math.ceil((charCon-18)/6));				
    }				

    setAttrs({heal_rate:hr});

    console.log("************ Siz SRM Calculation ************");
  });
});	

//spirit combat damage
on("change:curpow change:curchr change:glamourCast", function() {
  getAttrs(["curpow","curchr","glamourCast"], function(pvalue) {


    var charPow = parseInt(pvalue.curpow);
    var charChr = parseInt(pvalue.curchr);	
    var hr = 0;
    var sprtCbtDam = "";
    console.log("!!!!!!!!!!! "+(charPow+charChr));
    if (charPow+charChr < 13){
      <!-- 2-12-->
        if (pvalue.glamourCast==="on"){	
          sprtCbtDam = "1D6";
        }else{
          sprtCbtDam = "1D3";
        }

    } else if (charPow+charChr < 25){
      <!-- 13-24 -->
        if (pvalue.glamourCast==="on"){	
          sprtCbtDam = "1D6+1";
        }else{
          sprtCbtDam = "1D6";
        }

    } else if (charPow+charChr < 33){

      <!-- 25-32-->
        if (pvalue.glamourCast==="on"){	
          sprtCbtDam = "1D6+3";
        }else{
          sprtCbtDam = "1D6+1";
        }						

    } else if (charPow+charChr < 41){
      <!-- 33-40-->						
        if (pvalue.glamourCast==="on"){	
          sprtCbtDam = "2D6+3";
        }else{
          sprtCbtDam = "1D6+3";
        }						

    } else if (charPow+charChr < 57){
      <!-- 41- 56 -->	
        if (pvalue.glamourCast==="on"){	
          sprtCbtDam = "3D6+3";
        }else{
          sprtCbtDam = "2D6+3";
        }												


    } else {

      var val = (2 + Math.ceil(((charPow+charChr)-56)/16));
      if (pvalue.glamourCast==="on"){	
        val =+ 1;
      }						
      sprtCbtDam = val+"D6+"+(val+2);				
    }				

    setAttrs({sprt_cmbt_damage:sprtCbtDam});


  });
});			


on("change:thp_wnds", function() {
  getAttrs(["thp_wnds"], function(values) {
    var wnds =  parseInt(values.thp_wnds);
    //var locstre = parseInt(values.l_leg_stre);

    var damage = eval(wnds);

    setAttrs({thp_loss:damage});	

  });
});	



//reset weapon str/ def penalties if str changes

on("change:curstr change:curdex change:cursiz", function() {

  console.log("start weapon str/dex min checks ");


  /* Start melee Section */
  getSectionIDs("repeating_melee2", function(idArray) {
    if (idArray.length > 0) {
      _.each(idArray, function(currentID, i) {
        getAttrs(["repeating_melee2_" + currentID + "_wpnstr","repeating_melee2_" + currentID + "_wpndex","curstr","curdex" ], function(values) {
          console.log("melee section");
          var wStr = parseInt(values["repeating_melee2_" + idArray[i] + "_wpnstr"]);
          var wDex = parseInt(values["repeating_melee2_" + idArray[i] + "_wpndex"]);
          var cStr = parseInt(values.curstr);
          var cDex = parseInt(values.curdex);
          var mod =1;
          var attrsToSet = {};
          var strBonus = 0;



          if (wStr > 0 && wDex >0){
            if (cStr > wStr){
              strBonus = Math.floor((cStr-wStr)/2);									
            }

            if (cStr < wStr && cDex+strBonus < wDex){
              mod =0.5;
            }
          }
          else if (wStr > 0  && cStr < wStr){
            mod=0.5
          }
          else if (wDex >0){
            if (cDex < wDex){
              mod=0.5
            }																	
          }								 

          var meleeModId = "repeating_melee2_" + idArray[i] + "_minmod";
          attrsToSet[meleeModId] = mod;
          console.log("attrsToSet");
          console.log(attrsToSet);		
          setAttrs(attrsToSet);


          /*
console.log("wStr");
console.log(wStr);
console.log("wDex");
console.log(wDex);
console.log("Str");
console.log(cStr);
console.log("Dex");
console.log(cDex);
           */


        });
      });
    }
  });
  /* End melee section  */				








  /* Start missle Section */
  getSectionIDs("repeating_missle2", function(idArray) {
    if (idArray.length > 0) {
      _.each(idArray, function(currentID, i) {
        getAttrs(["repeating_missle2_" + currentID + "_mdbtoggle","repeating_missle2_" + currentID + "_wpnstr","repeating_missle2_" + currentID + "_wpndex","curstr","curdex","mdamagebonus","mmaxDb" ], function(values) {
          console.log("missle section");
          var wStr = parseInt(values["repeating_missle2_" + idArray[i] + "_wpnstr"]);
          var wDex = parseInt(values["repeating_missle2_" + idArray[i] + "_wpndex"]);
          var mdb = values["repeating_missle2_" + idArray[i] + "_mdbtoggle"]
          var cStr = parseInt(values.curstr);
          var cDex = parseInt(values.curdex);
          var mod = 1;

          var strBonus = 0;
          var mdbStr = "0";
          var mdbStr2 = "0";

          var attrsToSet = {};


          if (wStr > 0 && wDex >0){
            if (cStr > wStr){
              strBonus = Math.floor((cStr-wStr)/2);									
            }

            if (cStr < wStr && cDex+strBonus < wDex){
              mod =0.5;
            }
          }
          else if (wStr >0 && cStr < wStr){
            mod=0.5;
          }
          else if (wDex >0){
            if (cDex < wDex){
              mod=0.5;
            }																	
          }							

          var missleModId = "repeating_missle2_" + idArray[i] + "_minmod";
          attrsToSet[missleModId] = mod;
          console.log("attrsToSet");
          console.log(attrsToSet);		
          setAttrs(attrsToSet);

          //set missle damage bonus
          var missledbId = "repeating_missle2_" + idArray[i] + "_wpnmdb";
          var misslemaxdbId = "repeating_missle2_" + idArray[i] + "_maxwpnmdb";
          if (mdb=="on"){

            mdbStr = values.mdamagebonus;
            mdbStr2 = values.mmaxDb;

          }

          attrsToSet[missledbId] = mdbStr;
          attrsToSet[misslemaxdbId] = mdbStr2;
          console.log("new missle bonus");
          console.log(attrsToSet);		
          setAttrs(attrsToSet);								

          /*
console.log("wStr");
console.log(wStr);
console.log("wDex");
console.log(wDex);
console.log("Str");
console.log(cStr);
console.log("Dex");
console.log(cDex);
           */


        });
      });
    }
  });
  /* End missle section  */
});





/*attr_missle_db*/


on("change:repeating_melee2:skillDefault", function() {
  getAttrs(["repeating_melee2_skillDefault"], function(values) {
    console.log("Start skill default");


    var val = 1;
    if (values.repeating_melee2_skillDefault=="on"){

      val= 0.5;		

    }

    console.log("!!!!1 WHAT IS FUCKING VAL "+val);
    setAttrs({repeating_melee2_skillReduct:val});	




  });
});


on("change:repeating_missle2:skillDefault", function() {
  getAttrs(["repeating_missle2_skillDefault"], function(values) {
    console.log("Start skill default");


    var val = 1;
    if (values.repeating_missle2_skillDefault=="on"){

      val= 0.5;		

    }

    console.log("!!!!1 WHAT IS FUCKING VAL "+val);
    setAttrs({repeating_missle2_skillReduct:val});	
  });
});



on("change:repeating_melee2:mntDbToggle", function() {
  getAttrs(["repeating_melee2_mntDbToggle"], function(values) {
    console.log("Start set mounted damage bonus");
    var mdb =  values.repeating_melee2_mntDbToggle;
    var val = 0;
    if (mdb=="on"){
      val= 1;		
    }

    console.log("!!!!1 WHAT IS VAL "+val);
    setAttrs({repeating_melee2_mntTogVal:val});	
  });
});


on("change:repeating_missle2:mdbtoggle", function() {
  getAttrs(["repeating_missle2_mdbtoggle","mdamagebonus"], function(values) {
    console.log("Start set missle damage bonus");
    console.log(values);
    console.log(values.repeating_missle2_mdbtoggle);
    var mdb =  values.repeating_missle2_mdbtoggle;
    var mdbStr = "0";
    var maxmdbStr = "0";

    if (mdb=="on"){
      mdbStr = values.mdamagebonus;
      mdbStr = mdbStr.toUpperCase();
      var splitMdb = mdbStr.split("D");
      maxmdbStr = splitMdb[0]*splitMdb[1];
    }
    setAttrs({repeating_missle2_wpnmdb:mdbStr,repeating_missle2_maxwpnmdb:maxmdbStr});	
  });
});	

// NEW WORKERS

const calcBonus = (score, secondary, negative) => {
	// secondary/negative: 1 = true, 0 = false
	let bonus = 0;
	if(score > 12) {
		bonus = Math.ceil((score-12)/4) *5;
		if(secondary) bonus -=5;
	} else if (score < 9) {
		bonus = Math.ceil((9-score)/4) *-5;
		if(secondary) bonus +=5;
	}
	if(negative) bonus = -bonus;
	return bonus;
};

const skillCategories = {
	agility: {
		curstr: { secondary: 1, negative: 0 },
		curdex: { secondary: 0, negative: 0 },
		cursiz: { secondary: 1, negative: 1 },
		curpow: { secondary: 1, negative: 0 },
	},
	communication: {
		curchr: { secondary: 0, negative: 0 },
		curint: { secondary: 1, negative: 0 },
		curpow: { secondary: 1, negative: 0 },
	},
	knowledge: {
		curint: { secondary: 0, negative: 0 },
		curpow: { secondary: 1, negative: 0 },
	},
	magic: {
		curpow: { secondary: 0, negative: 0 },
		curchr: { secondary: 1, negative: 0 },
	},
	manipulation: {
		curstr: { secondary: 1, negative: 0 },
		curdex: { secondary: 0, negative: 0 },
		curint: { secondary: 0, negative: 0 },
		curpow: { secondary: 1, negative: 0 },
	},
	perception: {
		curint: { secondary: 0, negative: 0 },
		curpow: { secondary: 1, negative: 0 },
	},
	stealth: {
		cursiz: { secondary: 0, negative: 1 },
		curdex: { secondary: 0, negative: 0 },
		curint: { secondary: 0, negative: 0 },
		curpow: { secondary: 1, negative: 1 },
	},
};

Object.keys(skillCategories).forEach(category => {
	let stats = [];
	let change = '';
	Object.keys(skillCategories[category]).forEach(stat => { 
		stats.push(stat);
		change += `change:${stat} `;
	});
	on(`${change}sheet:opened`, function () {
		getAttrs(stats, values => {
			let bonus = 0;
			console.log('category changing: ' + category);
			Object.keys(skillCategories[category]).forEach(stat => { 
				const score = parseInt(values[stat], 10) || 0;
				const secondary = skillCategories[category][stat]['secondary'];
				const negative = skillCategories[category][stat]['negative'];
				console.log('stat changed: ' + stat);
				console.log('score: ' + score);
				console.log('secondary: ' + secondary);
				console.log('negative: ' + negative);
				bonus += calcBonus(score, secondary, negative);
				console.log('bonus: ' + bonus);
			});
			setAttrs({
				[`${category}_mod`]: bonus 
			});
		});
	});
}); 

//Set siz SRM
on("change:cursiz", function() {
  getAttrs(["cursiz","dex_srm"], function(pvalue) {
    const charSiz = parseInt(pvalue.cursiz);
    const charSsrm = parseInt(pvalue.dex_srm);			

    const ssrm = Math.max(3 - Math.ceil(charSiz/7), 0);
    const msrm = charSsrm + ssrm;

    setAttrs({ siz_srm: ssrm , melee_srm: msrm});
  });
});	


//Set Dex SRM
on("change:curdex", function() {
  getAttrs(["curdex","siz_srm"], function(pvalue) {
    const charDex = parseInt(pvalue.curdex);
    const charSsrm = parseInt(pvalue.siz_srm);			
    var dsrm = 0;

    if (charDex < 6){
      dsrm = 5;
    } else if (charDex < 9){
      dsrm = 4;
    } else if (charDex < 13){
      dsrm = 3;				
    } else if (charDex < 16){
      dsrm = 2;	
    } else if (charDex < 19){
      dsrm = 1;						
    } else {
      dsrm = 0;				
    }				

    const msrm = charSsrm + dsrm;

    setAttrs({ dex_srm: dsrm , melee_srm: msrm});
  });
});	

//Location Hit Points
on("change:hp_max", function() {
  getAttrs(["hp_max"], function(pvalue) {
    var HitPoints = parseInt(pvalue.hp_max);

		const Arms  = 1 + Math.ceil(Math.max(0, HitPoints-6)/3);
		const Chest = 3 + Math.ceil(Math.max(0, HitPoints-6)/3);
		const Other = 2 + Math.ceil(Math.max(0, HitPoints-6)/3);

		setAttrs({
			r_arm_max_hp: Arms,
			l_arm_max_hp: Arms,
			chst_max_hp: Chest,
			r_leg_max_hp: Other,
			l_leg_max_hp: Other,
			abd_max_hp: Other,
			hd_max_hp: Other
		});
  });
});		

//Set Current Hit Points
on("change:lhp_loss change:thp_loss ", function() {
  getAttrs(["hp_max","lhp_loss","thp_loss"], function(pvalue) {
    const HitPoints = parseInt(pvalue.hp_max);
    const THpLoss = parseInt(pvalue.lhp_loss);
    const LHpLoss = parseInt(pvalue.thp_loss);				
    const CurHitPoints = HitPoints-THpLoss-LHpLoss;

    setAttrs({hp_cur: CurHitPoints});
  });
});


//Set Hit Points
on("change:curcon change:curpow change:cursiz", function() {
  getAttrs(["curcon", "cursiz","curpow","hp","lhp_loss","thp_loss"], function(pvalue) {
    const THpLoss = parseInt(pvalue.lhp_loss);
    const LHpLoss = parseInt(pvalue.thp_loss);				
    const charSize = parseInt(pvalue.cursiz);
    const charCon = parseInt(pvalue.curcon);
    const charPow = parseInt(pvalue.curpow);
    var HitPoints = charCon;

    if (charSize < 5){
      HitPoints -= 2;
    }
    else if (charSize >= 5 && charSize <= 8){
      HitPoints -= 1;
    }
    else if (charSize >= 9 && charSize <= 12){
      HitPoints -= 1;
    }
    else if (charSize >= 13){
      HitPoints += Math.ceil((charSize-12)/4);
    }

    if (charPow < 5){
      HitPoints -= 1;
    }
    else if (charPow >= 17){
      HitPoints += Math.ceil((charPow-16)/4);
    }

    const CurHitPoints = HitPoints-THpLoss-LHpLoss;

    setAttrs({ hp_max: HitPoints, hp_cur: CurHitPoints});
  });
});	

const hitLocations = [
	'r_leg',
	'l_leg',
	'abd',
	'chst',
	'r_arm',
	'l_arm',
	'hd',
]
hitLocations.forEach((loc) => {
	const damageAttr = loc + "_damage";
	const maxHpAttr  = loc + "_max_hp";
	on("change:" + damageAttr + " change:" + maxHpAttr, function() {
		getAttrs([damageAttr, maxHpAttr], function(values) {
			const lochp =  parseInt(values[maxHpAttr]);
			const damage = values[damageAttr];
			const tot = lochp - eval(damage); 

			setAttrs({[loc + "_cur_hp"]:tot});	
		});
	});	
});

on("change:r_leg_damage change:l_leg_damage change:abd_damage change:abd_damage change:chst_damage change:r_arm_damage change:l_arm_damage change:hd_damage", function() {
  getAttrs(["r_leg_damage","l_leg_damage","abd_damage","abd_damage","chst_damage","r_arm_damage","l_arm_damage","hd_damage"], function(values) {
    var tot=0;
    for (const key of Object.keys(values)) {
      tot = tot + eval(values[key]);
    }
    setAttrs({lhp_loss:tot});	
  });
});			

on("change:repeating_missle:mdbtoggle", function() {
  getAttrs(["repeating_missle_mdbtoggle","mdamagebonus","attr_mmaxDb"], function(values) {
    const mdb = values.repeating_missle_mdbtoggle;
    var mdbStr = "0";
    var maxmdbStr = "0";
    if (mdb=="on"){
      mdbStr = values.mdamagebonus;
      maxmdbStr = values.mmaxDb;
    }

    setAttrs({repeating_missle_wpnmdb:mdbStr,maxwpnmdb: maxmdbStr});	
  });
});	

on("change:curstr change:curcon", function() {
  getAttrs(["curstr","curcon"], function(pvalue) {		
    const cStr = parseInt(pvalue.curstr);
    const cCon = parseInt(pvalue.curcon);
    const enc = Math.min(cStr, Math.ceil((cStr+cCon)/2));

    setAttrs({carry_max2:enc});			   
  });
});		

const skillTotals = [
	'meleeskills',
	'missileskills',
	'shieldSkills',
	'naturalWpnSkills',
];
skillTotals.forEach((skill) => {
	const section = (skill.indexOf('missile') > 0)? "repeating_missile2" : "repeating_melee2";
	on("change:repeating_" + skill + ":skillTotal", function(eventInfo) {
		getAttrs(["repeating_" + skill + "_skill","repeating_" + skill + "_skillTotal"], function(pvalue) {		
			const repeatRow = eventInfo.sourceAttribute.match(/[^_]*_[^_]*_[^_]*/g);
			const wpnSkill = pvalue["repeating_" + skill + "_skill"];
			const skillTotal = pvalue["repeating_" + skill + "_skillTotal"];
			const skillVal=getSkillValues2(wpnSkill,section,repeatRow,skillTotal);
		});
	});
});


const categories = [
	'agilitySkills',
	'communicationSkills',
	'knowledgeSkills',
	'magicSkills',
	'manipulationSkills',
	'perceptionSkills',
	'stealthSkills',
	'meleeSkills',
	'missileSkills',
	'shieldSkills',
	'naturalWpnSkills',
];
categories.forEach((category) => {
	on("change:repeating_" + category + ":skill", function() {
		getAttrs(["repeating_" + category + "_skill"], function(pvalue) {		
			const fullName = pvalue["repeating_" + category + "_skill"];
			const name = fullName.substr(1);
			const char1 = fullName.substr(0, 1); 

			if (char1=="-"){
				setAttrs({["repeating_" + category + "_sp_toggle1"]:0,["repeating_" + category + "_skill"]:name});			   	
			} else 	if (char1=="+"){
				setAttrs({["repeating_" + category + "_sp_toggle1"]:"on",["repeating_" + category + "_skill"]:name});			   	
			}					
		});
	});	
});

const opposingRunes = {
	fertility: 'death',
	death: 'fertility',
	harmony: 'disorder',
	disorder: 'harmony',
	truth: 'illusion',
	illusion: 'truth',
	stasis: 'movement',
	movement: 'stasis',
	man: 'beast',
	beast: 'man',
}
Object.keys(opposingRunes).forEach(function(rune) {
  console.log('Registering rune change handler for ' + rune);
	on("change:" + rune + "_rune", function() {
		getAttrs([rune + "_rune"], function(value) {				
			setAttrs(
				{[opposingRunes[rune] + "_rune"]:100-value[rune + "_rune"]},
				{silent:true}
			);			   
		});
	});	
});

const stats = [
	'str',
	'con',
	'siz',
	'int',
	'pow',
	'chr',
	'dex',
];
stats.forEach((stat) => {
  console.log('Registering stat change handler for ' + stat);
	on("change:base" + stat + " change:mod" + stat, function() {
		getAttrs(["base" + stat,"mod" + stat], function(pvalue) {		
			setAttrs({["cur" + stat]:parseInt(pvalue["base" + stat])+parseInt(pvalue["mod" + stat])});			   
		});
	});					
});

const weaponSections = [
  'melee2',
  'missle2',
];
weaponSections.forEach((type) => {
  on("change:repeating_" + type + ":wpn_damage change:repeating_" + type + ":wpn_spl", function() {
    getAttrs(["repeating_" + type + "_wpn_damage","repeating_" + type + "_wpn_spl"], function(values) {
      const damageType = parseInt(values["repeating_" + type + "_wpn_spl"]);
      const weaponDamage =  values["repeating_" + type + "_wpn_damage"].toUpperCase();
      const dmgSplit = weaponDamage.split(/[\D+]+/);
      const dieSize = parseInt(dmgSplit[1]);
      var dieCount = parseInt(dmgSplit[0]);
      var dieModifier = parseInt(dmgSplit[2]) || 0;

      if (damageType != 2){
        dieCount = dieCount*2;
        dieModifier = dieModifier*2;
      }
      const critDamage = dieCount*dieSize+dieModifier;
      const specDamage = dieCount+"D"+dieSize+"+"+dieModifier;

      setAttrs({["repeating_" + type + "_spcldamage"]:specDamage,["repeating_" + type + "_critdamage"]:critDamage});	
    });
  });	
});

function getSkillValues(skillName,source,dest){
  getSectionIDs(source, function(idArray) {
    if (idArray.length < 1) {
			return;
    }

		_.each(idArray, function(currentID, i) {
			getAttrs([source+"_" + currentID + "_skill",source+"_" + currentID + "_skillTotal"], function(values) {
				const currentSkill = values[source+"_" + idArray[i] + "_skill"];
				if (currentSkill != skillName){	
					return;
				}
				const skillTotal = values[source+"_" + idArray[i] + "_skillTotal"];
				setAttrs({[dest + '_skillTotal']: skillTotal});
			});
		});
  });						
}
