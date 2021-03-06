on("change:select_hitloc", function() {
  getAttrs(["select_hitloc"], function(values) {
    console.log("check hit loc toggle");
    var hitloc = values.select_hitloc;
    setAttrs({npc1_hitloc:hitloc});	
  });
})

on("change:whisper", function() {
  getAttrs(["whisper"], function(values) {
    console.log("check whisper toggle");
    if (values.whisper=="on"){
      setAttrs({whispSet:"/w gm "});	
    } else{
      setAttrs({whispSet:""});	
    }
  });
});

on("change:toggleNPC1Sheet", function() {
  getAttrs(["toggleNPC1Sheet"], function(values) {
    console.log("check NPC1 toggle");
    if (values.toggleNPC1Sheet=="on"){
      setAttrs({toggleQSSheet:0,toggleFullSheet:0});	
    }
    else{
      /*setAttrs({toggleQSSheet:"on",version:2})*/
      setAttrs({version:2})
    }
  });
});

on("change:toggleFullSheet", function() {
  getAttrs(["toggleFullSheet"], function(values) {
    console.log("check full toggle");
    if (values.toggleFullSheet=="on"){
      setAttrs({toggleQSSheet:0,toggleNPC1Sheet:0});	
    }
    else{
      /*setAttrs({toggleQSSheet:"on",version:0})*/
      setAttrs({version:0})
    }
  });
});

on("change:toggleQSSheet", function() {
  getAttrs(["toggleQSSheet"], function(values) {
    console.log("check Quick toggle");
    if (values.toggleQSSheet=="on"){
      setAttrs({toggleFullSheet:0,toggleNPC1Sheet:0});	
    }
    else{
      /*setAttrs({toggleFullSheet:"on",version:1})*/
      setAttrs({version:1})
    }
  });
});

//QS Workers

//animal 2 hit points
on("change:animal2_con change:animal2_siz ", function() {
  getAttrs(["animal2_con","animal2_siz"], function(values) {
    var x = parseInt(values.animal2_con);
    var y = parseInt(values.animal2_siz);
    var z = Math.round((x+y)/2,0);

    setAttrs({animal2_hp_max:z});	

  });
});

//Animal 2 fatigue points
on("change:animal2_con change:animal2_str ", function() {
  getAttrs(["animal2_con","animal2_str"], function(values) {
    var x = parseInt(values.animal2_str);
    var y = parseInt(values.animal2_con);
    var z = x+y;

    setAttrs({animal2_fp_max:z});	

  });
});

on("change:enc_totalf", function() {
  getAttrs(["enc_totalf"], function(values) {
    var fx = parseFloat(values.enc_totalf);
    fx = Math.round(fx,0);
    setAttrs({enc_total:fx});	

  });
});




//animal 1 hit points
on("change:animal1_con change:animal1_siz ", function() {
  getAttrs(["animal1_con","animal1_siz"], function(values) {
    var x = parseInt(values.animal1_con);
    var y = parseInt(values.animal1_siz);
    var z = Math.round((x+y)/2,0);

    setAttrs({animal1_hp_max:z});	

  });
});

//Animal 1 fatigue points
on("change:animal1_con change:animal1_str ", function() {
  getAttrs(["animal1_con","animal1_str"], function(values) {
    var x = parseInt(values.animal1_str);
    var y = parseInt(values.animal1_con);
    var z = x+y;

    setAttrs({animal1_fp_max:z});	

  });
});

on("change:enc_totalf", function() {
  getAttrs(["enc_totalf"], function(values) {
    var fx = parseFloat(values.enc_totalf);
    fx = Math.round(fx,0);
    setAttrs({enc_total:fx});	

  });
});


//SetAnimal 1 Dex SRM and melee srm
on("change:animal1_dex change:animal1_siz", function() {
  getAttrs(["animal1_dex","animal1_siz"], function(pvalue) {
    console.log("************ Start Animal 1 DEX and  SRM Calculation ************");

    var charDex = parseInt(pvalue.animal1_dex);
    var charSiz = parseInt(pvalue.animal1_siz);			


    var dsrm = 0;
    var ssrm = 0;		

    var msrm = 0;

    if (charSiz < 7){
      ssrm = 3;
    } else if (charSiz < 15){
      ssrm = 2;				
    } else if (charSiz < 22){
      ssrm = 1;				
    } else {
      ssrm = 0;				
    }				




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

    msrm = ssrm+dsrm;
    console.log("msrm");
    console.log(msrm);

    setAttrs({ animal1_dsr: dsrm , animal1_msr: msrm});


    console.log("************ End Animal 1 DEX and melee SRM Calculation ************");
  });
});			


//SetAnimal 2 Dex SRM and melee srm
on("change:animal2_dex change:animal2_siz", function() {
  getAttrs(["animal2_dex","animal2_siz"], function(pvalue) {
    console.log("************ Start Animal 2 DEX and  SRM Calculation ************");

    var charDex = parseInt(pvalue.animal2_dex);
    var charSiz = parseInt(pvalue.animal2_siz);			


    var dsrm = 0;
    var ssrm = 0;		

    var msrm = 0;

    if (charSiz < 7){
      ssrm = 3;
    } else if (charSiz < 15){
      ssrm = 2;				
    } else if (charSiz < 22){
      ssrm = 1;				
    } else {
      ssrm = 0;				
    }				




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
    msrm = ssrm+dsrm;
    console.log("msrm");
    console.log(msrm);

    setAttrs({ animal2_dsr: dsrm , animal2_msr: msrm});


    console.log("************ End Animal 2 DEX and melee SRM Calculation ************");
  });
});					


//Set Animal 1 Damage Bonus
on("change:animal1_str change:animal1_siz", function() {
  getAttrs(["animal1_str", "animal1_siz"], function(pvalue) {
    console.log("************ Start Damage Bonus ************");
    console.log("curstr value: " + pvalue.animal1_str);
    console.log("cursiz value: " + pvalue.animal1_siz);

    var curStrength = parseInt(pvalue.animal1_str);
    var curSize = parseInt(pvalue.animal1_siz);

    var StplusSi = curStrength + curSize;
    console.log("Str+Size value: " + StplusSi);
    var DBonus = "-1d4";
    var mDBonus = "-1d2";
    var DBonusC = 0;

    //Determine Bonus
    if (StplusSi < 18) {
      console.log("-- Str+Siz is less than 18 --");
      DBonus = "-1d4";
      mDBonus = "-1d2";					
      console.log("DBonus value: " + DBonus);
      setAttrs({animal1_db: DBonus});
    }
    else if (StplusSi < 25) {
      console.log("-- Str+Siz is less than 25 --");
      DBonus = "0";
      mDBonus = "0";
      console.log("DBonus value: " + DBonus);
      setAttrs({animal1_db: DBonus});
    }
    else if (StplusSi < 33) {
      console.log("-- Str+Siz is less than 31 --");
      DBonus = "1d4";
      mDBonus = "1d2";					
      console.log("DBonus value: " + DBonus);
      setAttrs({animal1_db: DBonus});
    }
    else if (StplusSi < 41) {
      console.log("-- Str+Siz is less than 31 --");
      DBonus = "1d6";
      mDBonus = "1d3";					
      console.log("DBonus value: " + DBonus);
      setAttrs({animal1_db: DBonus});
    }			
    else { //StplusSi is greater than 
      DBonusC = 2+Math.floor(parseFloat((StplusSi - 40) / 16));
      console.log("DBonusC value: " + DBonusC);

      DBonus = DBonusC + "d6";
      mDBonus = DBonusC + "d3";					
      console.log("DBonus value: " + DBonus);
      setAttrs({animal1_db: DBonus});
    }            
    console.log("************ Animal 1 End Damage Bonus ************");
  });
});



//Set Agility Bonus
on("change:curstr change:cursiz change:curdex change:curpow", function() {
  getAttrs(["version","curstr", "cursiz", "curdex", "curpow"], function(pvalue) {
    console.log("************ Start Agility Bonus ************");
    console.log("curstr value: " + pvalue.curstr);
    console.log("cursiz value: " + pvalue.cursiz);
    console.log("curdex value: " + pvalue.curdex);
    console.log("curpow value: " + pvalue.curpow);
    console.log("agibonus value: " + pvalue.agility_mod);
    console.log("parrybonus value: " + pvalue.parrybonus);
    var curStrength = parseInt(pvalue.curstr);
    var curSize = parseInt(pvalue.cursiz);
    var curDexterity = parseInt(pvalue.curdex);
    var curPower = parseInt(pvalue.curpow);
    var BonusMod = 0;



    if (curStrength < 5) {
      BonusMod = -5;
    }else if (curStrength >16 && curStrength < 21){
      BonusMod = 5;
    }else if (curStrength >20){
      BonusMod = 5+(Math.ceil((curStrength-20)/4)*5);
    }


    if (curSize < 5) {
      BonusMod = BonusMod+5;
    } else if(curSize >16 && curStrength < 21){
      BonusMod = BonusMod-5;
    }else if (curSize >20){
      BonusMod = BonusMod - (5+(Math.ceil((curStrength-20)/4)*5));
    }



    if (curDexterity < 5) {
      BonusMod = BonusMod-10;
    }else if(curDexterity >= 5 && curDexterity <= 8){
      BonusMod = BonusMod-5;
    }else if(curDexterity >= 13 && curDexterity <= 16){
      BonusMod = BonusMod+5;
    }else if(curDexterity >= 17 && curDexterity <= 20){
      BonusMod = BonusMod+10;
    }else if (curDexterity >20){
      BonusMod = BonusMod + (10+(Math.ceil((curDexterity-20)/4)*5));
    }

    if (curPower < 5) {
      BonusMod = BonusMod-5;
    }else if (curPower >16 && curPower < 21){
      BonusMod = BonusMod+5;
    }else if (curPower >20){
      BonusMod = BonusMod + 5+(Math.ceil((curPower-20)/4)*5);
    }				


    console.log("version "+pvalue.version);
    if (parseInt(pvalue.version)===0){
      BonusMod = 0;
    }

    console.log("BonusMod value: " + BonusMod);
    setAttrs({agility_mod: BonusMod});
    console.log("************ End Agility Bonus ************");
  });
});

//Set Communication
on("change:curint change:curchr change:curpow change:glamourCast", function() {
  getAttrs(["version","curint", "curchr", "curpow","glamourCast"], function(pvalue) {
    console.log("************ Start Communication Bonus ************");
    console.log("curint value: " + pvalue.curint);
    console.log("curchr value: " + pvalue.curchr);
    console.log("curpow value: " + pvalue.curpow);
    console.log("glamourCast value: " + pvalue.glamourCast);


    var curInt = parseInt(pvalue.curint);
    var curPow = parseInt(pvalue.curpow);
    var curChr = parseInt(pvalue.curchr);

    var BonusMod = 0;


    if (curInt < 5) {
      BonusMod = BonusMod + -5;
    }else if (curInt >16 && curInt < 21){
      BonusMod = BonusMod + 5;
    }else if (curInt >20){
      BonusMod = BonusMod + (5+(Math.ceil((curInt-20)/4)*5));
    }
    console.log("BonusMod value1: " + BonusMod);

    if (curPow < 5) {
      BonusMod = BonusMod + -5;
    }else if (curPow >16 && curPow < 21){
      BonusMod = BonusMod + 5;
    }else if (curPow >20){
      BonusMod = BonusMod + (5+(Math.ceil((curPow-20)/4)*5));
    }
    console.log("BonusMod value2: " + BonusMod);


    if (curChr < 5) {
      BonusMod = BonusMod-10;
    }else if(curChr >= 5 && curChr <= 8){
      BonusMod = BonusMod-5;
    }else if(curChr >= 13 && curChr <= 16){
      BonusMod = BonusMod+5;
    }else if(curChr >= 17 && curChr <= 20){
      BonusMod = BonusMod+10;
    }else if (curChr >20){
      BonusMod = BonusMod + (10+(Math.ceil((curChr-20)/4)*5));
    }
    console.log("BonusMod value3: " + BonusMod);				


    if (pvalue.glamourCast==="on"){
      BonusMod += 10;
    }

    console.log("BonusMod value4: " + BonusMod);

    console.log("version "+pvalue.version);

    if (parseInt(pvalue.version)===0){
      BonusMod = 0;
    }

    console.log("BonusMod value: " + BonusMod);
    setAttrs({communication_mod: BonusMod});
    console.log("************ End Agility Bonus ************");
  });
});



//Set Knowledge
on("change:curint change:curpow", function() {
  getAttrs(["version","curint", "curpow"], function(pvalue) {
    console.log("************ Start Knowledge Bonus ************");
    console.log("curint value: " + pvalue.curint);
    console.log("curpow value: " + pvalue.curpow);

    var curInt = parseInt(pvalue.curint);
    var curPow = parseInt(pvalue.curpow);

    var BonusMod = 0;


    if (curPow < 5) {
      BonusMod = BonusMod + -5;
    }else if (curPow >16 && curPow < 21){
      BonusMod = BonusMod + 5;
    }else if (curPow >20){
      BonusMod = BonusMod + (5+(Math.ceil((curPow-20)/4)*5));
    }
    console.log("BonusMod value1: " + BonusMod);



    if (curInt < 5) {
      BonusMod = BonusMod-10;
    }else if(curInt >= 5 && curInt <= 8){
      BonusMod = BonusMod-5;
    }else if(curInt >= 13 && curInt <= 16){
      BonusMod = BonusMod+5;
    }else if(curInt >= 17 && curInt <= 20){
      BonusMod = BonusMod+10;
    }else if (curInt >20){
      BonusMod = BonusMod + (10+(Math.ceil((curInt-20)/4)*5));
    }
    console.log("BonusMod value3: " + BonusMod);				


    console.log("version "+pvalue.version);
    if (parseInt(pvalue.version)===0){
      BonusMod = 0;
    }

    console.log("BonusMod value: " + BonusMod);
    setAttrs({knowledge_mod: BonusMod});
    console.log("************ End Knowledge Bonus ************");
  });
});			
/////////////////////////////////////////////////
//Set Magic
on("change:curchr change:curpow change:glamourCast", function() {
  getAttrs(["version","curchr", "curpow","glamourCast"], function(pvalue) {
    console.log("************ Start Magic Bonus ************");
    console.log("curpow value: " + pvalue.curpow);
    console.log("curchr value: " + pvalue.curchr);

    var curChr = parseInt(pvalue.curchr);
    var curPow = parseInt(pvalue.curpow);

    var BonusMod = 0;


    if (curChr < 5) {
      BonusMod = BonusMod + -5;
    }else if (curChr >16 && curChr < 21){
      BonusMod = BonusMod + 5;
    }else if (curPow >20){
      BonusMod = BonusMod + (5+(Math.ceil((curChr-20)/4)*5));
    }
    console.log("BonusMod value1: " + BonusMod);



    if (curPow < 5) {
      BonusMod = BonusMod-10;
    }else if(curPow >= 5 && curPow <= 8){
      BonusMod = BonusMod-5;
    }else if(curPow >= 13 && curPow <= 16){
      BonusMod = BonusMod+5;
    }else if(curPow >= 17 && curPow <= 20){
      BonusMod = BonusMod+10;
    }else if (curPow >20){
      BonusMod = BonusMod + (10+(Math.ceil((curPow-20)/4)*5));
    }
    console.log("BonusMod value3: " + BonusMod);				


    if (pvalue.glamourCast==="on"){

      if (curChr < 5) {
        BonusMod = BonusMod+5;
      }else if(curChr >= 9 && curChr <= 12){
        BonusMod = BonusMod+5;
      }else if(curChr >= 13){
        BonusMod = BonusMod+10;
      }					
    }
    console.log("BonusMod value4: " + BonusMod);				


    console.log("version "+pvalue.version);
    if (parseInt(pvalue.version)===0){
      BonusMod = 0;
    }

    console.log("BonusMod value: " + BonusMod);
    setAttrs({magic_mod: BonusMod});
    console.log("************ End Magic Bonus ************");
  });
});					

//Set Manipulation Bonus
on("change:curstr change:curint change:curdex change:curpow change:strengthCast", function() {
  getAttrs(["version","curint", "curstr", "curdex","strengthCast", "curpow"], function(pvalue) {
    console.log("************ Start Manipulation Bonus ************");
    console.log("curstr value: " + pvalue.curstr);
    console.log("curint value: " + pvalue.curint);
    console.log("curdex value: " + pvalue.curdex);
    console.log("curpow value: " + pvalue.curpow);
    var curStrength = parseInt(pvalue.curstr);
    var curInt = parseInt(pvalue.curint);
    var curDexterity = parseInt(pvalue.curdex);
    var curPower = parseInt(pvalue.curpow);
    var BonusMod = 0;



    if (curStrength < 5) {
      BonusMod = -5;
      console.log("Str B -5");
    }else if (curStrength >16 && curStrength < 21){
      BonusMod = 5;
      console.log("Str B +5");
    }else if (curStrength >20){
      BonusMod = 5+(Math.ceil((curStrength-20)/4)*5);
      console.log("Str B "+BonusMod);
    }


    if (curInt < 5) {
      console.log("INT B -10");
      BonusMod = BonusMod-10;
    }else if(curInt >= 5 && curInt <= 8){
      BonusMod = BonusMod-5;
      console.log("INT B -5");					
    }else if(curInt >= 13 && curInt <= 16){
      BonusMod = BonusMod+5;
      console.log("INT B 5");						
    }else if(curInt >= 17 && curInt <= 20){
      BonusMod = BonusMod+10;
      console.log("INT B 10");

    }else if (curInt >20){
      BonusMod = BonusMod + (10+(Math.ceil((curInt-20)/4)*5));
    }


    if (curDexterity < 5) {
      BonusMod = BonusMod-10;
      console.log("DEX B -10");

    }else if(curDexterity >= 5 && curDexterity <= 8){
      BonusMod = BonusMod-5;
      console.log("DEX B -5");						
    }else if(curDexterity >= 13 && curDexterity <= 16){
      BonusMod = BonusMod+5;
      console.log("DEX B +5");						
    }else if(curDexterity >= 17 && curDexterity <= 20){
      BonusMod = BonusMod+10;
      console.log("DEX B +10");						
    }else if (curDexterity >20){
      BonusMod = BonusMod + (10+(Math.ceil((curDexterity-20)/4)*5));
    }

    if (curPower < 5) {
      BonusMod = BonusMod-5;
      console.log("pow B -5");						
    }else if (curPower >16 && curPower < 21){
      BonusMod = BonusMod+5;
      console.log("Pow B +5");						
    }else if (curPower >20){
      BonusMod = BonusMod + 5+(Math.ceil((curPower-20)/4)*5);
    }				
    console.log("before buff BonusMod value: " + BonusMod);


    if (pvalue.strengthCast==="on"){

      if (curStrength < 5) {
        BonusMod = BonusMod+5;
      }else if(curStrength >= 9 && curStrength <= 12){
        BonusMod = BonusMod+5;
      }else if(curStrength >= 13){
        BonusMod = BonusMod+10;
      }					
    }				   

    console.log("after buff BonusMod value: " + BonusMod);

    console.log("version "+pvalue.version);
    if (parseInt(pvalue.version)===0){
      BonusMod = 0;
    }

    console.log("BonusMod value: " + BonusMod);
    setAttrs({manipulation_mod: BonusMod});
    console.log("************ End Manipulation Bonus ************");
  });
});
//Set Perception
on("change:curint change:curpow", function() {
  getAttrs(["version","curint", "curpow"], function(pvalue) {
    console.log("************ Start Perception Bonus ************");
    console.log("curint value: " + pvalue.curint);
    console.log("curpow value: " + pvalue.curpow);

    var curInt = parseInt(pvalue.curint);
    var curPow = parseInt(pvalue.curpow);

    var BonusMod = 0;


    if (curPow < 5) {
      BonusMod = BonusMod + -5;
    }else if (curPow >16 && curPow < 20){
      BonusMod = BonusMod + 5;
    }else if (curPow >20){
      BonusMod = BonusMod + (5+(Math.ceil((curPow-20)/4)*5));
    }
    console.log("BonusMod value1: " + BonusMod);



    if (curInt < 5) {
      BonusMod = BonusMod-10;
    }else if(curInt >= 5 && curInt <= 8){
      BonusMod = BonusMod-5;
    }else if(curInt >= 13 && curInt <= 16){
      BonusMod = BonusMod+5;
    }else if(curInt >= 17 && curInt <= 20){
      BonusMod = BonusMod+10;
    }else if (curInt >20){
      BonusMod = BonusMod + (10+(Math.ceil((curInt-20)/4)*5));
    }
    console.log("BonusMod value3: " + BonusMod);				


    console.log("version "+pvalue.version);
    if (parseInt(pvalue.version)===0){
      BonusMod = 0;
    }

    console.log("BonusMod value: " + BonusMod);
    setAttrs({perception_mod: BonusMod});
    console.log("************ End Perception  Bonus ************");
  });
});			
/////////////////////////////////////////////////

//Set Stealth Bonus
on("change:curint change:cursiz change:curdex change:curpow", function() {
  getAttrs(["version","curint", "cursiz", "curdex", "curpow"], function(pvalue) {
    console.log("************ Start Stealth Bonus ************");
    console.log("curint value: " + pvalue.curint);
    console.log("cursiz value: " + pvalue.cursiz);
    console.log("curdex value: " + pvalue.curdex);
    console.log("curpow value: " + pvalue.curpow);
    var curInt = parseInt(pvalue.curint);
    var curSize = parseInt(pvalue.cursiz);
    var curDexterity = parseInt(pvalue.curdex);
    var curPower = parseInt(pvalue.curpow);
    var BonusMod = 0;



    if (curInt < 5) {
      BonusMod = BonusMod-10;
    }else if(curInt >= 5 && curInt <= 8){
      BonusMod = BonusMod-5;
    }else if(curInt >= 13 && curInt <= 16){
      BonusMod = BonusMod+5;
    }else if(curInt >= 17 && curInt <= 20){
      BonusMod = BonusMod+10;
    }else if (curInt >20){
      BonusMod = BonusMod + (10+(Math.ceil((curInt-20)/4)*5));
    }


    if (curSize < 5) {
      BonusMod = BonusMod+10;
    }else if(curSize >= 5 && curSize <= 8){
      BonusMod = BonusMod+5;
    }else if(curSize >= 13 && curSize <= 16){
      BonusMod = BonusMod-5;
    }else if(curSize >= 17 && curSize <= 20){
      BonusMod = BonusMod-10;
    }else if (curSize >20){
      BonusMod = BonusMod - (10+(Math.ceil((curSize-20)/4)*5));
    }


    if (curDexterity < 5) {
      BonusMod = BonusMod-10;
    }else if(curDexterity >= 5 && curDexterity <= 8){
      BonusMod = BonusMod-5;
    }else if(curDexterity >= 13 && curDexterity <= 16){
      BonusMod = BonusMod+5;
    }else if(curDexterity >= 17 && curDexterity <= 20){
      BonusMod = BonusMod+10;
    }else if (curDexterity >20){
      BonusMod = BonusMod + (10+(Math.ceil((curDexterity-20)/4)*5));
    }

    if (curPower < 5) {
      BonusMod = BonusMod+5;
    }else if (curPower >16 && curPower < 21){
      BonusMod = BonusMod-5;
    }else if (curPower >20){
      BonusMod = BonusMod - (5+(Math.ceil((curPower-20)/4)*5));
    }				


    console.log("version "+pvalue.version);
    if (parseInt(pvalue.version)===0){
      BonusMod = 0;
    }

    console.log("BonusMod value: " + BonusMod);
    setAttrs({stealth_mod: BonusMod});
    console.log("************ End Agility Bonus ************");
  });
});



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


//Set siz SRM
on("change:cursiz", function() {
  getAttrs(["cursiz","dex_srm"], function(pvalue) {


    var charSiz = parseInt(pvalue.cursiz);
    var charSsrm = parseInt(pvalue.dex_srm);			


    var ssrm = 0;
    var msrm = charSsrm;

    if (charSiz < 7){
      ssrm = 3;
    } else if (charSiz < 15){
      ssrm = 2;				
    } else if (charSiz < 22){
      ssrm = 1;				
    } else {
      ssrm = 0;				
    }				
    msrm = msrm+ssrm;

    setAttrs({ siz_srm: ssrm , melee_srm: msrm});

    console.log("************ Siz SRM Calculation ************");
  });
});	


//Set Dex SRM
on("change:curdex", function() {
  getAttrs(["curdex","siz_srm"], function(pvalue) {


    var charDex = parseInt(pvalue.curdex);
    var charSsrm = parseInt(pvalue.siz_srm);			


    var dsrm = 0;
    var msrm = charSsrm;

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
    msrm = msrm+dsrm;

    setAttrs({ dex_srm: dsrm , melee_srm: msrm});

    console.log("************ End DEx SRM Calculation ************");
  });
});	


on("change:glamourCast change:strengthCast change:vigorCast", function() {
  getAttrs(["glamourCast","strengthCast","vigorCast"], function(pvalue) {


    var buffStr = "";	

    if (pvalue.strengthCast==="on"){
      buffStr= buffStr+"+8 STR "
      setAttrs({strBuff:8});
    }else if(pvalue.strengthCast==="0"){
      setAttrs({strBuff:0});
    } 					
    if (pvalue.glamourCast==="on"){
      if (buffStr.length>0){
        buffStr = buffStr+","
      }
      buffStr= buffStr+ " +8 CHR "
      setAttrs({chrBuff:8});
    } else if (pvalue.glamourCast==="0"){
      setAttrs({chrBuff:0});						
    }						

    if (pvalue.vigorCast==="on"){
      if (buffStr.length>0){
        buffStr = buffStr+","
      }					
      buffStr= buffStr+" +3 CON "
      setAttrs({conBuff:3});
    } else if (pvalue.vigourCast==="0"){
      setAttrs({conBuff:0});						
    }	
    if (buffStr.length>0){
      buffStr = buffStr+" to resistance rolls only"
    }					
    console.log("*********** Updating Buff String");
    console.log("buff "+buffStr);	
    setAttrs({buffMsg:buffStr });
  });
});	



//Location Hit Points
//Set Hit Points

on("change:hp_max chnage:vigorCast", function() {
  getAttrs(["hp_max","vigorCast"], function(pvalue) {
    var HitPoints = parseInt(pvalue.hp_max);
    console.log("************ Start Location Hit Point Calculation ************");
    console.log("!!!!!!!!!! vigorCast "+pvalue.vigorCast);



    var hpfudge =0;
    if (pvalue.vigorCast==="on"){

      HitPoints = HitPoints-3;
      hpfudge=1;

    }
    console.log("hit points");
    console.log(HitPoints);

    /*
var charstre= parseInt(pvalue.hpstre);
var tothP = HitPoints + charstre;

    //fix to match hit point tables
var x = Math.ceil(tothP/3);
console.log("fixing");
console.log(x);
var fixedHP =  x*3;
console.log("fixed hit points");
console.log(fixedHP);



var LocPoints1 = 0; //.33
var LocPoints2 = 0; //.25
var LocPoints3 = 0; //.4

LocPoints1 = Math.ceil((fixedHP*0.33),0);
LocPoints2 = Math.ceil((fixedHP*0.25),0);
LocPoints3 = Math.ceil((fixedHP*0.4),0);
     */

    var LocPoints1 = 0; // Other
    var LocPoints2 = 0; // Arms
    var LocPoints3 = 0; // Chest

    if (HitPoints < 7){
      LocPoints1 = 2+hpfudge;
      LocPoints2 = 1+hpfudge;
      LocPoints3 = 3+hpfudge;					
    }
    else if (HitPoints >= 7 && HitPoints <= 9){
      LocPoints1 = 3+hpfudge;
      LocPoints2 = 2+hpfudge;
      LocPoints3 = 4+hpfudge;					
    }
    else if (HitPoints >= 10 && HitPoints <= 12){
      LocPoints1 = 4+hpfudge;
      LocPoints2 = 3+hpfudge;
      LocPoints3 = 5+hpfudge;					
    }
    else if (HitPoints >= 13 && HitPoints <= 15){
      LocPoints1 = 5+hpfudge;
      LocPoints2 = 4+hpfudge;
      LocPoints3 = 6+hpfudge;					
    }
    else if (HitPoints >= 16 && HitPoints <= 18){
      LocPoints1 = 6+hpfudge;
      LocPoints2 = 5+hpfudge;
      LocPoints3 = 7+hpfudge;					
    }
    else if (HitPoints >= 19 && HitPoints <= 21){
      LocPoints1 = 7+hpfudge;
      LocPoints2 = 6+hpfudge;
      LocPoints3 = 8+hpfudge;					
    }
    else if (HitPoints > 21){
      LocPoints1 = (7 + Math.ceil((HitPoints-21)/3))+hpfudge;
      LocPoints2 = (6 + Math.ceil((HitPoints-21)/3))+hpfudge;
      LocPoints3 = (8 + Math.ceil((HitPoints-21)/3))+hpfudge;
    }

    setAttrs({r_leg_max_hp: LocPoints1,l_leg_max_hp: LocPoints1,abd_max_hp: LocPoints1,chst_max_hp: LocPoints3,
      r_arm_max_hp: LocPoints2,l_arm_max_hp: LocPoints2,hd_max_hp: LocPoints1});

    console.log("************ End Location Hit Point Calculation ************");
  });
});		

//Set Current Hit Points
on("change:lhp_loss change:thp_loss ", function() {
  getAttrs(["hp_max","lhp_loss","thp_loss"], function(pvalue) {
    console.log("************ Start Current Hit Point Calculation ************");
    var HitPoints = parseInt(pvalue.hp_max);

    var CurHitPoints = 0;
    var THpLoss = parseInt(pvalue.lhp_loss);
    var LHpLoss = parseInt(pvalue.thp_loss);				


    CurHitPoints = HitPoints-THpLoss-LHpLoss;

    setAttrs({hp_cur: CurHitPoints});

    console.log("************ End Current Hit Point Calculation ************");
  });
});


//Set Hit Points
on("change:curcon change:curpow change:cursiz  change:vigorCast", function() {
  getAttrs(["curcon", "cursiz","curpow","hp","lhp_loss","thp_loss","vigorCast"], function(pvalue) {
    console.log("************ Start Hit Point Calculation ************");
    console.log("curcon value: " + pvalue.curcon);
    console.log("cursiz value: " + pvalue.cursiz);
    console.log("curpow value: " + pvalue.curpow);

    var HitPoints = 0;
    var CurHitPoints = 0;
    var THpLoss = parseInt(pvalue.lhp_loss);
    var LHpLoss = parseInt(pvalue.thp_loss);				
    var charSize = parseInt(pvalue.cursiz);
    var charCon = parseInt(pvalue.curcon);
    var charPow = parseInt(pvalue.curpow);

    HitPoints = charCon;

    if (charSize < 5){
      HitPoints -= 2;
    }
    else if (charSize >= 5 && charSize <= 8){
      HitPoints -= 1;
    }
    else if (charSize >= 13 && charSize <= 16){
      HitPoints += 1;
    }
    else if (charSize >= 17 && charSize <= 20){
      HitPoints += 2;
    }
    else if (charSize >= 21 && charSize <= 24){
      HitPoints += 3;
    }					
    else if (charSize >= 25 && charSize <= 28){
      HitPoints += 4;
    }										
    else if (charSize > 28){
      HitPoints += (4 + Math.ceil((charSize-20)/4))
    }


    if (charPow < 5){
      HitPoints -= 1;
    }
    else if (charPow >= 17 && charPow <= 20){
      HitPoints += 1;
    }

    else if (charPow >= 21 && charPow <= 24){
      HitPoints += 2;
    }
    else if (charPow >= 25 && charPow <= 28){
      HitPoints += 3;
    }													
    else if (charPow > 28){
      HitPoints += (3 + Math.ceil((charPow-20)/4));
    }


    if (pvalue.vigorCast==="on"){
      HitPoints +=3;
    }

    CurHitPoints = HitPoints-THpLoss-LHpLoss;

    setAttrs({ hp_max: HitPoints, hp_cur: CurHitPoints});

    console.log("************ End Hit Point Calculation ************");
  });
});	


on("change:r_leg_damage change:r_leg_max_hp ", function() {
  getAttrs(["r_leg_damage","r_leg_max_hp"], function(values) {
    console.log("Start add right leg location damage");
    console.log(values);		
    var lochp =  parseInt(values.r_leg_max_hp);
    //var locstre = parseInt(values.r_leg_stre);
    var damage = values.r_leg_damage;
    var tot=0;
    tot =  lochp-eval(damage); 

    setAttrs({r_leg_cur_hp:tot});	




  });
});	


on("change:l_leg_damage change:r_leg_max_hp ", function() {
  getAttrs(["l_leg_damage","l_leg_max_hp"], function(values) {
    console.log("Start add left leg location damage");
    console.log(values);		
    var lochp =  parseInt(values.l_leg_max_hp);
    //var locstre = parseInt(values.l_leg_stre);
    var damage = values.l_leg_damage;
    var tot=0;
    tot =  lochp-eval(damage);

    setAttrs({l_leg_cur_hp:tot});	




  });
});	

on("change:abd_damage change:abd_max_hp ", function() {
  getAttrs(["abd_damage","abd_max_hp"], function(values) {
    console.log("Start add abd location damage");
    console.log(values);		
    var lochp =  parseInt(values.abd_max_hp);
    //var locstre = parseInt(values.abd_stre);
    var damage = values.abd_damage;
    var tot=0;
    tot =  lochp-eval(damage);

    setAttrs({abd_cur_hp:tot});	




  });
});	

on("change:chst_damage change:chst_max_hp ", function() {
  getAttrs(["chst_damage","chst_max_hp"], function(values) {
    console.log("Start add chst location damage");
    console.log(values);		
    var lochp =  parseInt(values.chst_max_hp);
    //var locstre = parseInt(values.chst_stre);				
    var damage = values.chst_damage;
    var tot=0;
    tot =  lochp-eval(damage);
    console.log("!!!!!!!!!!!!!! lochp"+lochp);

    setAttrs({chst_cur_hp:tot});	




  });
});		


on("change:r_arm_damage change:r_arm_max_hp ", function() {
  getAttrs(["r_arm_damage","r_arm_max_hp"], function(values) {
    console.log("Start add right arm location damage");
    console.log(values);		
    var lochp =  parseInt(values.r_arm_max_hp);
    //var locstre = parseInt(values.r_arm_stre);								
    var damage = values.r_arm_damage;
    var tot=0;
    tot =  lochp-eval(damage);

    setAttrs({r_arm_cur_hp:tot});	




  });
});	


on("change:l_arm_damage change:l_arm_max_hp ", function() {
  getAttrs(["l_arm_damage","l_arm_max_hp"], function(values) {
    console.log("Start add left arm location damage");
    console.log(values);		
    var lochp =  parseInt(values.l_arm_max_hp);
    //var locstre = parseInt(values.l_arm_stre);												
    var damage = values.l_arm_damage;
    var tot=0;
    tot =  lochp-eval(damage);

    setAttrs({l_arm_cur_hp:tot});	




  });
});	


on("change:hd_damage change:hd_max_hp ", function() {
  getAttrs(["hd_damage","hd_max_hp"], function(values) {
    console.log("Start add head location damage");
    console.log(values);		
    var lochp =  parseInt(values.hd_max_hp);
    var damage = values.hd_damage;
    var tot = lochp-eval(damage);
    setAttrs({hd_cur_hp:tot});	
  });
});		



on("change:r_leg_damage change:l_leg_damage change:abd_damage change:abd_damage change:chst_damage change:r_arm_damage change:l_arm_damage change:hd_damage", function() {
  getAttrs(["r_leg_damage","l_leg_damage","abd_damage","abd_damage","chst_damage","r_arm_damage","l_arm_damage","hd_damage"], function(values) {
    console.log("Start add up location damage");
    console.log(values);				
    var tot=0;
    var evalStr = "";
    for (const key of Object.keys(values)) {
      tot = tot + eval(values[key]);
      console.log(tot);
    }
    setAttrs({lhp_loss:tot});	
    /*var test = eval(values.total_blood_loss_tt);*/



  });
});			

on("change:repeating_missle:mdbtoggle", function() {
  getAttrs(["repeating_missle_mdbtoggle","mdamagebonus","attr_mmaxDb"], function(values) {
    console.log("Start set missle damage bonus");
    console.log(values);
    console.log(values.repeating_missle_mdbtoggle);				
    var mdb =  values.repeating_missle_mdbtoggle;
    var mdbStr = "0";
    var maxmdbStr = "0";
    if (mdb=="on"){

      mdbStr = values.mdamagebonus;
      maxmdbStr = values.mmaxDb;
    }


    setAttrs({repeating_missle_wpnmdb:mdbStr,maxwpnmdb: maxmdbStr});	




  });
});	



//reset weapon str/ def penalties if str changes

on("change:curstr change:curdex change:cursiz", function() {

  console.log("start weapon str/dex min checks ");


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

on("change:repeating_missle:mdbtoggle", function() {
  getAttrs(["repeating_missle_mdbtoggle","mdamagebonus"], function(values) {
    console.log("Start set missle damage bonus");
    console.log(values);
    console.log(values.repeating_missle_mdbtoggle);				
    var mdb =  values.repeating_missle_mdbtoggle;
    var mdbStr = "0";
    if (mdb=="on"){

      mdbStr = values.mdamagebonus;
    }
    setAttrs({repeating_missle_wpnmdb:mdbStr});	




  });
});
/* ---- BEGIN: TheAaronSheet.js ---- */
// Github:   https://github.com/shdwjk/TheAaronSheet/blob/master/TheAaronSheet.js
// By:       The Aaron, Arcane Scriptomancer
// Contact:  https://app.roll20.net/users/104025/the-aaron

var TAS = TAS || (function(){
'use strict';

  var version = '0.2.4',
    lastUpdate = 1457098091,

    loggingSettings = {
      debug: {
        key:     'debug',
        title:   'DEBUG',
        color: {
          bgLabel: '#7732A2',
          label:   '#F2EF40',
          bgText:  '#FFFEB7',
          text:    '#7732A2'
        }
      },
      error: {
        key:     'error',
        title:   'Error',
        color: {
          bgLabel: '#C11713',
          label:   'white',
          bgText:  '#C11713',
          text:    'white'
        }
      },
      warn: {
        key:     'warn',
        title:   'Warning',
        color: {
          bgLabel: '#F29140',
          label:   'white',
          bgText:  '#FFD8B7',
          text:    'black'
        }
      },
      info: {
        key:     'info',
        title:   'Info',
        color: {
          bgLabel: '#413FA9',
          label:   'white',
          bgText:  '#B3B2EB',
          text:    'black'
        }
      },
      notice: {
        key:     'notice',
        title:   'Notice',
        color: {
          bgLabel: '#33C133',
          label:   'white',
          bgText:  '#ADF1AD',
          text:    'black'
        }
      },
      log: {
        key:     'log',
        title:   'Log',
        color: {
          bgLabel: '#f2f240',
          label:   'black',
          bgText:  '#ffff90',
          text:    'black'
        }
      },
      callstack: {
        key:     'TAS',
        title:   'function',
        color: {
          bgLabel: '#413FA9',
          label:   'white',
          bgText:  '#B3B2EB',
          text:    'black'
        }
      },
      callstack_async: {
        key:     'TAS',
        title:   'ASYNC CALL',
        color: {
          bgLabel: '#413FA9',
          label:   'white',
          bgText:  '#413FA9',
          text:    'white'
        }
      },
      TAS: {
        key:     'TAS',
        title:   'TAS',
        color: {
          bgLabel: 'grey',
          label:   'black;background:linear-gradient(#304352,#d7d2cc,#d7d2cc,#d7d2cc,#304352)',
          bgText:  'grey',
          text:    'black;background:linear-gradient(#304352,#d7d2cc,#d7d2cc,#d7d2cc,#304352)'
        }
      }
    },


    config = {
      debugMode: false,
      logging: {
        log: true,
        notice: true,
        info: true,
        warn: true,
        error: true,
        debug: false
      }
    },

    callstackRegistry = [],
    queuedUpdates = {}, //< Used for delaying saves till the last momment.

    complexType = function(o){
      switch(typeof o){
        case 'string':
          return 'string';
        case 'boolean':
          return 'boolean';
        case 'number':
          return (_.isNaN(o) ? 'NaN' : (o.toString().match(/\./) ? 'decimal' : 'integer'));
        case 'function':
          return 'function: '+(o.name ? o.name+'()' : '(anonymous)');
        case 'object':
          return (_.isArray(o) ? 'array' : (_.isArguments(o) ? 'arguments' : ( _.isNull(o) ? 'null' : 'object')));
        default:
          return typeof o;
      }
    },

    dataLogger = function(primaryLogger,secondaryLogger,data){
      _.each(data,function(m){
        var type = complexType(m);
        switch(type){
          case 'string':
            primaryLogger(m);
            break;
          case 'undefined':
          case 'null':
          case 'NaN':
            primaryLogger('['+type+']');
            break;
          case 'number':
          case 'not a number':
          case 'integer':
          case 'decimal':
          case 'boolean':
            primaryLogger('['+type+']: '+m);
            break;
          default:
            primaryLogger('['+type+']:=========================================');
            secondaryLogger(m);
            primaryLogger('=========================================================');
            break;
        }
      });
    },


    colorLog = function(options){
      var coloredLoggerFunction,
        key = options.key,
        label = options.title || 'TAS',
        lBGColor = (options.color && options.color.bgLabel) || 'blue',
        lTxtColor = (options.color && options.color.label) || 'white',
        mBGColor = (options.color && options.color.bgText) || 'blue',
        mTxtColor = (options.color && options.color.text) || 'white';

      coloredLoggerFunction = function(message){
        console.log(
'%c '+label+': %c '+message + ' ',
'background-color: '+lBGColor+';color: '+lTxtColor+'; font-weight:bold;',
'background-color: '+mBGColor+';color: '+mTxtColor+';'
        ); 
      };
      return function(){
        if('TAS'===key || config.logging[key]){
          dataLogger(coloredLoggerFunction,function(m){console.log(m);},_.toArray(arguments)); 
        }
      };
    },

    logDebug  = colorLog(loggingSettings.debug),
    logError  = colorLog(loggingSettings.error),
    logWarn   = colorLog(loggingSettings.warn),
    logInfo   = colorLog(loggingSettings.info),
    logNotice = colorLog(loggingSettings.notice),
    logLog    = colorLog(loggingSettings.log),
    log       = colorLog(loggingSettings.TAS),
    logCS     = colorLog(loggingSettings.callstack),
    logCSA    = colorLog(loggingSettings.callstack_async),

    registerCallstack = function(callstack,label){
      var idx=_.findIndex(callstackRegistry,function(o){
        return (_.difference(o.stack,callstack).length === _.difference(callstack,o.stack).length) &&
          _.difference(o.stack,callstack).length === 0 &&
          o.label === label;
      });
      if(-1 === idx){
        idx=callstackRegistry.length;
        callstackRegistry.push({
          stack: callstack,
          label: label
        });
      }
      return idx;
    },

    setConfigOption = function(options){
      var newconf =_.defaults(options,config);
      newconf.logging=_.defaults(
        (options && options.logging)||{},
        config.logging
      );
      config=newconf;
    },

    debugMode = function(){
      config.logging.debug=true;
      config.debugMode = true;
    },

    getCallstack = function(){
      var e = new Error('dummy'),
        stack = _.map(_.rest(e.stack.replace(/^[^\(]+?[\n$]/gm, '')
          .replace(/^\s+at\s+/gm, '')
          .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@')
          .split('\n')),function(l){
            return l.replace(/\s+.*$/,'');
          });
      return stack;
    },
    logCallstackSub = function(cs){
      var matches, csa;
      _.find(cs,function(line){
        matches = line.match(/TAS_CALLSTACK_(\d+)/);
        if(matches){
          csa=callstackRegistry[matches[1]];
          logCSA( '===================='+(csa.label ? '> '+csa.label+' <' : '')+'====================');
          logCallstackSub(csa.stack);
          return true;
        } 
        logCS(line);
        return false;
      });
    },
    logCallstack = function(){
      var cs;
      if(config.debugMode){
        cs = getCallstack();
        cs.shift();
        log('==============================> CALLSTACK <==============================');
        logCallstackSub(cs);
        log('=========================================================================');
      }
    },


    wrapCallback = function (label, callback, context){
      var callstack;
      if('function' === typeof label){
        context=callback;
        callback=label;
        label=undefined;
      }
      if(!config.debugMode){
        return (function(cb,ctx){
          return function(){
            cb.apply(ctx||{},arguments);
          };
        }(callback,context));
      }

      callstack = getCallstack();
      callstack.shift();

      return (function(cb,ctx,cs,lbl){
        var ctxref=registerCallstack(cs,lbl);

        /*jshint -W054 */
        return new Function('cb','ctx','TASlog',
"return function TAS_CALLSTACK_"+ctxref+"(){"+
"TASlog('Entering: '+(cb.name||'(anonymous function)'));"+
"cb.apply(ctx||{},arguments);"+
"TASlog('Exiting: '+(cb.name||'(anonymous function)'));"+
"};")(cb,ctx,log);
        /*jshint +W054 */
      }(callback,context,callstack,label));
    },


    prepareUpdate = function( attribute, value ){
      queuedUpdates[attribute]=value;
    },

    applyQueuedUpdates = function() {
      setAttrs(queuedUpdates);
      queuedUpdates = {};
    },

    namesFromArgs = function(args,base){
      return _.chain(args)
        .reduce(function(memo,attr){
          if('string' === typeof attr) {
            memo.push(attr);
          } else if(_.isArray(args) || _.isArguments(args)){
            memo = namesFromArgs(attr,memo);
          }
          return memo;
        },(_.isArray(base) && base) || [])
        .uniq()
        .value();
    },

    addId = function(obj,value){
      Object.defineProperty(obj,'id',{
        value: value,
        writeable: false,
        enumerable: false
      });
    },

    addProp = function(obj,prop,value,fullname){
      (function(){
        var pname=(_.contains(['S','F','I','D'],prop) ? '_'+prop : prop),
          full_pname = fullname || prop,
          pvalue=value;

        _.each(['S','I','F'],function(p){
          if( !_.has(obj,p)){
            Object.defineProperty(obj, p, {
              value: {},
              enumerable: false,
              readonly: true
            });
          }
        });
        if( !_.has(obj,'D')){
          Object.defineProperty(obj, 'D', {
            value: _.reduce(_.range(10),function(m,d){
              Object.defineProperty(m, d, {
                value: {},
                enumerable: true,
                readonly: true
              });
              return m;
            },{}),
            enumerable: false,
            readonly: true
          });
        }


        // Raw value
        Object.defineProperty(obj, pname, {
          enumerable: true,
          set: function(v){
            if(v!==pvalue) {
              pvalue=v;
              prepareUpdate(full_pname,v);
            }
          },
          get: function(){
            return pvalue;
          }
        });

        // string value
        Object.defineProperty(obj.S, pname, {
          enumerable: true,
          set: function(v){
            var val=v.toString();
            if(val !== pvalue) {
              pvalue=val;
              prepareUpdate(full_pname,val);
            }
          },
          get: function(){
            return pvalue.toString();
          }
        });

        // int value
        Object.defineProperty(obj.I, pname, {
          enumerable: true,
          set: function(v){
            var val=parseInt(v,10) || 0;
            if(val !== pvalue){
              pvalue=val;
              prepareUpdate(full_pname,val);
            }
          },
          get: function(){
            return parseInt(pvalue,10) || 0;
          }
        });

        // float value
        Object.defineProperty(obj.F, pname, {
          enumerable: true,
          set: function(v){
            var val=parseFloat(v) || 0;
            if(val !== pvalue) {
              pvalue=val;
              prepareUpdate(full_pname,val);
            }
          },
          get: function(){
            return parseFloat(pvalue) || 0;
          }
        });
        _.each(_.range(10),function(d){
          Object.defineProperty(obj.D[d], pname, {
            enumerable: true,
            set: function(v){
              var val=(parseFloat(v) || 0).toFixed(d);
              if(val !== pvalue){
                pvalue=val;
                prepareUpdate(full_pname,val);
              }
            },
            get: function(){
              return (parseFloat(pvalue) || 0).toFixed(d);
            }
          });
        });

      }());
    },

    repeating = function( section ) {
      return (function(s){
        var sectionName = s,
          attrNames = [],
          fieldNames = [],
          operations = [],
          after = [],

          repAttrs = function TAS_Repeating_Attrs(){
            attrNames = namesFromArgs(arguments,attrNames);
            return this;
          },
          repFields = function TAS_Repeating_Fields(){
            fieldNames = namesFromArgs(arguments,fieldNames);
            return this;
          },
          repReduce = function TAS_Repeating_Reduce(func, initial, final, context) { 
            operations.push({
              type: 'reduce',
              func: (func && _.isFunction(func) && func) || _.noop,
              memo: (_.isUndefined(initial) && 0) || initial,
              final: (final && _.isFunction(final) && final) || _.noop,
              context: context || {}
            });
            return this;
          },
          repMap = function TAS_Repeating_Map(func, final, context) {
            operations.push({
              type: 'map',
              func: (func && _.isFunction(func) && func) || _.noop,
              final: (final && _.isFunction(final) && final) || _.noop,
              context: context || {}
            });
            return this;
          },
          repEach = function TAS_Repeating_Each(func, final, context) {
            operations.push({
              type: 'each',
              func: (func && _.isFunction(func) && func) || _.noop,
              final: (final && _.isFunction(final) && final) || _.noop,
              context: context || {}
            });
            return this;
          },
          repTap = function TAS_Repeating_Tap(final, context) {
            operations.push({
              type: 'tap',
              final: (final && _.isFunction(final) && final) || _.noop,
              context: context || {}
            });
            return this;
          },
          repAfter = function TAS_Repeating_After(callback,context) {
            after.push({
              callback: (callback && _.isFunction(callback) && callback) || _.noop,
              context: context || {}
            });
            return this;
          },
          repExecute = function TAS_Repeating_Execute(callback,context){
            var rowSet = {},
              attrSet = {},
              fieldIds = [],
              fullFieldNames = [];

            repAfter(callback,context);

            // call each operation per row.
            // call each operation's final
            getSectionIDs("repeating_"+sectionName,function(ids){
              fieldIds = ids;
              fullFieldNames = _.reduce(fieldIds,function(memo,id){
                return memo.concat(_.map(fieldNames,function(name){
                  return 'repeating_'+sectionName+'_'+id+'_'+name;  
                }));
              },[]);
              getAttrs( _.uniq(attrNames.concat(fullFieldNames)), function(values){
                _.each(attrNames,function(aname){
                  if(values.hasOwnProperty(aname)){
                    addProp(attrSet,aname,values[aname]);
                  }
                });

                rowSet = _.reduce(fieldIds,function(memo,id){
                  var r={};
                  addId(r,id);
                  _.each(fieldNames,function(name){
                    var fn = 'repeating_'+sectionName+'_'+id+'_'+name;  
                    addProp(r,name,values[fn],fn);
                  });

                  memo[id]=r;

                  return memo;
                },{});

                _.each(operations,function(op){
                  var res;
                  switch(op.type){
                    case 'tap':
                      _.bind(op.final,op.context,rowSet,attrSet)();
                      break;

                    case 'each':
                      _.each(rowSet,function(r){
                        _.bind(op.func,op.context,r,attrSet,r.id,rowSet)();
                      });
                      _.bind(op.final,op.context,rowSet,attrSet)();
                      break;

                    case 'map':
                      res = _.map(rowSet,function(r){
                        return _.bind(op.func,op.context,r,attrSet,r.id,rowSet)();
                      });
                      _.bind(op.final,op.context,res,rowSet,attrSet)();
                      break;

                    case 'reduce':
                      res = op.memo;
                      _.each(rowSet,function(r){
                        res = _.bind(op.func,op.context,res,r,attrSet,r.id,rowSet)();
                      });
                      _.bind(op.final,op.context,res,rowSet,attrSet)();
                      break;
                  }
                });

                // finalize attrs
                applyQueuedUpdates();
                _.each(after,function(op){
                  _.bind(op.callback,op.context)();
                });
              });
            });
          };

        return {
          attrs: repAttrs,
          attr: repAttrs,

          column: repFields,
          columns: repFields,
          field: repFields,
          fields: repFields,

          reduce: repReduce,
          inject: repReduce,
          foldl: repReduce,

          map: repMap,
          collect: repMap,

          each: repEach,
          forEach: repEach,

          tap: repTap,
'do': repTap,

          after: repAfter,
          last: repAfter,
          done: repAfter,

          execute: repExecute,
          go: repExecute,
          run: repExecute
        };
      }(section));
    },


    repeatingSimpleSum = function(section, field, destination){
      repeating(section)
        .attr(destination)
        .field(field)
        .reduce(function(m,r){
          return m + (r.F[field]);
        },0,function(t,r,a){
          a.S[destination]=t;
        })
        .execute();
    };



  return {
    /* Repeating Sections */
    repeatingSimpleSum: repeatingSimpleSum,
    repeating: repeating,

    /* Configuration */
    config: setConfigOption,

    /* Debugging */
    callback: wrapCallback,
    callstack: logCallstack,
    debugMode: debugMode,
    _fn: wrapCallback,

    /* Logging */
    debug: logDebug,
    error: logError,
    warn: logWarn,
    info: logInfo,
    notice: logNotice,
    log: logLog
  };
}());

on('change:repeating_equipment remove:repeating_equipment',function(){
  TAS.repeatingSimpleSum('equipment','equipment_weight','enc_totalf');
});

on('change:repeating_spiritspells remove:repeating_spiritspells',function(){
  TAS.repeatingSimpleSum('spiritspells','mpcost','spiritint');
});

/* ---- END: TheAaronSheet.js ---- */	
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
/// end of qs workers
/// qs workers end ////
/// new workers ////



//Set Current enc mod
on("change:carry_total2 change:carry_max2", function() {
  getAttrs(["carry_total2","carry_max2"], function(pvalue) {
    console.log("************ Start Current enc mod************");

    var new_mod = 0;
    var carry_total = Math.floor(parseInt(pvalue.carry_total2));

    var carry_max  = Math.ceil(parseInt(pvalue.carry_max2));

    var swim_mod = 0;

    console.log("111111111 swim_mod "+swim_mod);
    if (carry_total >  Math.ceil(carry_max/2)){
      swim_mod = ((Math.ceil(carry_max/2) - carry_total))*5;
    }


    var dodge_mod = 0-carry_total;
    if (carry_total > carry_max){
      dodge_mod = 0-carry_max;
    }

    if (carry_total > carry_max){
      new_mod = (carry_max-carry_total)*5;
      swim_mod = swim_mod - new_mod;
      console.log("new_mod" + new_mod);
    }
    console.log("111111111 swim_mod2 "+swim_mod);							
    setAttrs({enc_mod2:new_mod,dodge_mod2:dodge_mod,swim_mod2:swim_mod});

    console.log("************ End Current enc mod Calculation ************");
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




//Set Animal 2 Damage Bonus
on("change:animal2_str change:animal2_siz", function() {
  getAttrs(["animal2_str", "animal2_siz"], function(pvalue) {
    console.log("************ Start Damage Bonus ************");
    console.log("curstr value: " + pvalue.animal2_str);
    console.log("cursiz value: " + pvalue.animal2_siz);

    var curStrength = parseInt(pvalue.animal2_str);
    var curSize = parseInt(pvalue.animal2_siz);

    var StplusSi = curStrength + curSize;
    console.log("Str+Size value: " + StplusSi);
    var DBonus = "-1d4";
    var mDBonus = "-1d2";
    var DBonusC = 0;

    //Determine Bonus
    if (StplusSi < 18) {
      console.log("-- Str+Siz is less than 18 --");
      DBonus = "-1d4";
      mDBonus = "-1d2";					
      console.log("DBonus value: " + DBonus);
      setAttrs({animal2_db: DBonus});
    }
    else if (StplusSi < 25) {
      console.log("-- Str+Siz is less than 25 --");
      DBonus = "0";
      mDBonus = "0";
      console.log("DBonus value: " + DBonus);
      setAttrs({animal2_db: DBonus});
    }
    else if (StplusSi < 33) {
      console.log("-- Str+Siz is less than 31 --");
      DBonus = "1d4";
      mDBonus = "1d2";					
      console.log("DBonus value: " + DBonus);
      setAttrs({animal2_db: DBonus});
    }
    else if (StplusSi < 41) {
      console.log("-- Str+Siz is less than 31 --");
      DBonus = "1d6";
      mDBonus = "1d3";					
      console.log("DBonus value: " + DBonus);
      setAttrs({animal2_db: DBonus});
    }			
    else { //StplusSi is greater than 
      DBonusC = 2+Math.floor(parseFloat((StplusSi - 40) / 16));
      console.log("DBonusC value: " + DBonusC);

      DBonus = DBonusC + "d6";
      mDBonus = DBonusC + "d3";					
      console.log("DBonus value: " + DBonus);
      setAttrs({animal2_db: DBonus});
    }            
    console.log("************ Animal 2 End Damage Bonus ************");
  });
})		

on("change:curstr change:curcon change:strBuff change:conBuff", function() {
  getAttrs(["curstr","curcon","conBuff","strBuff"], function(pvalue) {		

    var cStr = parseInt(pvalue.curstr)+parseInt(pvalue.strBuff);
    var cCon = parseInt(pvalue.curcon)+parseInt(pvalue.conBuff);

    var enc = Math.ceil((cStr+cCon)/2);
    if (enc > cStr){
      enc = cStr;
    }


    setAttrs({carry_max2:enc});			   
  });
});		



on("change:repeating_melee2:skillName", function(eventInfo) {
  getAttrs(["repeating_melee2_skillName"], function(pvalue) {		
    console.log("!!!!!! stuff  "+JSON.stringify(eventInfo.sourceAttribute));
    let sourceA = eventInfo.sourceAttribute
    let  repeatRow = sourceA.match(/[^_]*_[^_]*_[^_]*/g);
    var wpnSkill = pvalue.repeating_melee2_skillName;
    console.log("changed weapon skill to "+wpnSkill);
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

on("change:repeating_meleeskills:skillTotal", function(eventInfo) {
  getAttrs(["repeating_meleeskills_skill","repeating_meleeskills_skillTotal"], function(pvalue) {		
    console.log("!!!!!! stuff  "+JSON.stringify(eventInfo.sourceAttribute));
    let sourceA = eventInfo.sourceAttribute
    let  repeatRow = sourceA.match(/[^_]*_[^_]*_[^_]*/g);
    var wpnSkill = pvalue.repeating_meleeskills_skill;
    var skillTotal = pvalue.repeating_meleeskills_skillTotal;
    console.log("changed weapon skill to "+wpnSkill);
    var skillVal=getSkillValues2(wpnSkill,"repeating_melee2",repeatRow,skillTotal);
  });
});				


on("change:repeating_missileskills:skillTotal", function(eventInfo) {
  getAttrs(["repeating_missileskills_skill","repeating_missileskills_skillTotal"], function(pvalue) {		
    console.log("!!!!!! changed  missle skill total  "+JSON.stringify(eventInfo.sourceAttribute));
    let sourceA = eventInfo.sourceAttribute
    let  repeatRow = sourceA.match(/[^_]*_[^_]*_[^_]*/g);
    var wpnSkill = pvalue.repeating_missileskills_skill;
    var skillTotal = pvalue.repeating_missileskills_skillTotal;
    console.log("changed weapon skill to "+wpnSkill);
    var skillVal=getSkillValues2(wpnSkill,"repeating_missle2",repeatRow,skillTotal);
  });
});			

on("change:repeating_shieldSkills:skillTotal", function(eventInfo) {
  getAttrs(["repeating_shieldSkills_skill","repeating_shieldSkills_skillTotal"], function(pvalue) {		
    console.log("!!!!!! stuff  "+JSON.stringify(eventInfo.sourceAttribute));
    let sourceA = eventInfo.sourceAttribute
    let  repeatRow = sourceA.match(/[^_]*_[^_]*_[^_]*/g);
    var wpnSkill = pvalue.repeating_shieldSkills_skill;
    var skillTotal = pvalue.repeating_shieldSkills_skillTotal;
    console.log("changed weapon skill to "+wpnSkill);
    var skillVal=getSkillValues2(wpnSkill,"repeating_melee2",repeatRow,skillTotal);
  });
})



on("change:repeating_naturalWpnSkills:skillTotal", function(eventInfo) {
  getAttrs(["repeating_naturalWpnSkills_skill","repeating_naturalWpnSkills_skillTotal"], function(pvalue) {		
    console.log("!!!!!! stuff  "+JSON.stringify(eventInfo.sourceAttribute));
    let sourceA = eventInfo.sourceAttribute
    let  repeatRow = sourceA.match(/[^_]*_[^_]*_[^_]*/g);
    var wpnSkill = pvalue.repeating_naturalWpnSkills_skill;
    var skillTotal = pvalue.repeating_naturalWpnSkills_skillTotal;
    console.log("changed weapon skill to "+wpnSkill);
    var skillVal=getSkillValues2(wpnSkill,"repeating_melee2",repeatRow,skillTotal);
  });
})			

function getSkillValues2(wpnSkill,section,section2,skillTotal){
  getSectionIDs(section, function(idArray) {
    if (idArray.length > 0) {

      _.each(idArray, function(currentID, i) {
        getAttrs([section+"_" + currentID + "_skillName",section+"_" + currentID + "_skillTotal"], function(values) {

          console.log("!!!!!! stuff3  "+JSON.stringify(values));

          let skillname = values[section+"_" + idArray[i] + "_skillName"];
          console.log("!!!!!! wpnSkill "+wpnSkill+" skillname "+skillname);

          if (skillname == wpnSkill){	
            console.log("!!!!!!!!!!!! found2 "+wpnSkill);
            let attrsToSet = {[section+"_" + idArray[i] +'_skillTotal']: skillTotal};								
            console.log("attrs to set "+JSON.stringify(attrsToSet));

            setAttrs(attrsToSet);
          }								


        });
      });
    }

  });	
}	



function getSkillValues(wpnSkill,section,section2){
  getSectionIDs(section, function(idArray) {
    if (idArray.length > 0) {

      _.each(idArray, function(currentID, i) {
        getAttrs([section+"_" + currentID + "_skill",section+"_" + currentID + "_skillTotal"], function(values) {

          console.log("!!!!!! stuff2  "+JSON.stringify(values));

          /*let wStr = values[section+"_" + idArray[i] + "_skill"];*/
          /*console.log("!!!!!! Look for skill "+wStr);*/
          let skillname = values[section+"_" + idArray[i] + "_skill"];
          var skillTotal =0 ;

          if (skillname == wpnSkill){	
            console.log("!!!!!!!!!!!! found "+wpnSkill);
            skillTotal = values[section+"_" + idArray[i] + "_skillTotal"];
            console.log("!!!!!! Skilltotal "+skillTotal);
            let attrsToSet = {[section2 + '_skillTotal']: skillTotal};								
            setAttrs(attrsToSet);
          }								


        });
      });
    }

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
    if (idArray.length > 0) {
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
    }
    else{
      addSkill(section,skill,base,vbase,showExp);
    }


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

on("change:repeating_agilitySkills:base", function() {
  getAttrs(["repeating_agilitySkills_base","curstr","curcon","cursiz","curint","curpow","curdex","curchr"], function(pvalue) {		
    var baseStr = pvalue.repeating_agilitySkills_base;
    baseStr = baseStr.toUpperCase();
    var tot = 0;
    if (baseStr.includes("*")){
      //get multiplier
      var multiplier = baseStr.split("*");
      console.log("!!!!!!multiplier "+multiplier);

      var multival = parseInt(multiplier[1]);
      console.log("!!!!!!!!!!!multival "+multival);

      if (baseStr.includes("STR")){
        tot = parseInt(pvalue.curstr)*multival;
      } else if (baseStr.includes("CON")){
        tot = parseInt(pvalue.curcon)*multival;						
      } else if (baseStr.includes("SIZ")){
        tot = parseInt(pvalue.cursiz)*multival;											
      } else if (baseStr.includes("INT")){
        tot = parseInt(pvalue.curint)*multival;											
      } else if (baseStr.includes("POW")){
        tot = parseInt(pvalue.curpow)*multival;											
      } else if (baseStr.includes("DEX")){
        tot = parseInt(pvalue.curdex)*multival;											
      } else if (baseStr.includes("CHR")){
        tot = parseInt(pvalue.curchr)*multival;											
      }
      console.log("tot "+tot);
    } 
    else{
      tot=parseInt(baseStr);
    }

    setAttrs({repeating_agilitySkills_base2:tot});			   
  });
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


on("change:agility_mod", function() {
  resetSkills("repeating_agilitySkills","agility_mod","1");
});	




////////////////////////////////////////////////////////////////////////
on("change:repeating_communicationSkills:base", function() {
  getAttrs(["repeating_communicationSkills_base","curstr","curcon","cursiz","curint","curpow","curdex","curchr"], function(pvalue) {		
    var baseStr = pvalue.repeating_communicationSkills_base;
    baseStr = baseStr.toUpperCase();
    var tot = 0;
    if (baseStr.includes("*")){
      //get multiplier
      var multiplier = baseStr.split("*");
      console.log("!!!!!!multiplier "+multiplier);

      var multival = parseInt(multiplier[1]);
      console.log("!!!!!!!!!!!multival "+multival);

      if (baseStr.includes("STR")){
        tot = parseInt(pvalue.curstr)*multival;
      } else if (baseStr.includes("CON")){
        tot = parseInt(pvalue.curcon)*multival;						
      } else if (baseStr.includes("SIZ")){
        tot = parseInt(pvalue.cursiz)*multival;											
      } else if (baseStr.includes("INT")){
        tot = parseInt(pvalue.curint)*multival;											
      } else if (baseStr.includes("POW")){
        tot = parseInt(pvalue.curpow)*multival;											
      } else if (baseStr.includes("DEX")){
        tot = parseInt(pvalue.curdex)*multival;											
      } else if (baseStr.includes("CHR")){
        tot = parseInt(pvalue.curchr)*multival;											
      }
      console.log("tot "+tot);
    } 
    else{
      tot=parseInt(baseStr);
    }
    setAttrs({repeating_communicationSkills_base2:tot});			   
  });
});		

/*
on("change:repeating_communicationSkills:base2 change:repeating_communicationSkills:skillValue", function() {
getAttrs(["repeating_communicationSkills_base2","repeating_communicationSkills_skillValue","communication_mod"], function(pvalue) {		

console.log("!!!!!!!base2 "+pvalue.repeating_communicationSkills_base2);
console.log("!!!!!!skill value "+pvalue.repeating_communicationSkills_skillValue);
console.log("!!!!!!!!!!communication mod "+pvalue.communication_mod);


var tot = parseInt(pvalue.repeating_communicationSkills_base2)+parseInt(pvalue.repeating_communicationSkills_skillValue)+parseInt(pvalue.communication_mod)

setAttrs({repeating_communicationSkills_skillTotal:tot});			   
});
});				
 */
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




on("change:communication_mod", function() {
  resetSkills("repeating_communicationSkills","communication_mod","0");
});	
///////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
on("change:repeating_knowledgeSkills:base", function() {
  getAttrs(["repeating_knowledgeSkills_base","curstr","curcon","cursiz","curint","curpow","curdex","curchr"], function(pvalue) {		
    var baseStr = pvalue.repeating_knowledgeSkills_base;
    baseStr = baseStr.toUpperCase();
    var tot = 0;
    if (baseStr.includes("*")){
      //get multiplier
      var multiplier = baseStr.split("*");
      console.log("!!!!!!multiplier "+multiplier);

      var multival = parseInt(multiplier[1]);
      console.log("!!!!!!!!!!!multival "+multival);

      if (baseStr.includes("STR")){
        tot = parseInt(pvalue.curstr)*multival;
      } else if (baseStr.includes("CON")){
        tot = parseInt(pvalue.curcon)*multival;						
      } else if (baseStr.includes("SIZ")){
        tot = parseInt(pvalue.cursiz)*multival;											
      } else if (baseStr.includes("INT")){
        tot = parseInt(pvalue.curint)*multival;											
      } else if (baseStr.includes("POW")){
        tot = parseInt(pvalue.curpow)*multival;											
      } else if (baseStr.includes("DEX")){
        tot = parseInt(pvalue.curdex)*multival;											
      } else if (baseStr.includes("CHR")){
        tot = parseInt(pvalue.curchr)*multival;											
      }
      console.log("tot "+tot);
    } 
    else{
      tot=parseInt(baseStr);
    }
    setAttrs({repeating_knowledgeSkills_base2:tot});			   
  });
});		


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

on("change:knowledge_mod", function() {
  resetSkills("repeating_knowledgeSkills","knowledge_mod","0");
});	




///////////////////////////////////////////////////////////////////////////////////////			
////////////////////////////////////////////////////////////////////////
on("change:repeating_magicSkills:base", function() {
  getAttrs(["repeating_magicSkills_base","curstr","curcon","cursiz","curint","curpow","curdex","curchr"], function(pvalue) {		
    var baseStr = pvalue.repeating_magicSkills_base;
    baseStr = baseStr.toUpperCase();
    var tot = 0;
    if (baseStr.includes("*")){
      //get multiplier
      var multiplier = baseStr.split("*");
      console.log("!!!!!!multiplier "+multiplier);

      var multival = parseInt(multiplier[1]);
      console.log("!!!!!!!!!!!multival "+multival);

      if (baseStr.includes("STR")){
        tot = parseInt(pvalue.curstr)*multival;
      } else if (baseStr.includes("CON")){
        tot = parseInt(pvalue.curcon)*multival;						
      } else if (baseStr.includes("SIZ")){
        tot = parseInt(pvalue.cursiz)*multival;											
      } else if (baseStr.includes("INT")){
        tot = parseInt(pvalue.curint)*multival;											
      } else if (baseStr.includes("POW")){
        tot = parseInt(pvalue.curpow)*multival;											
      } else if (baseStr.includes("DEX")){
        tot = parseInt(pvalue.curdex)*multival;											
      } else if (baseStr.includes("CHR")){
        tot = parseInt(pvalue.curchr)*multival;											
      }
      console.log("tot "+tot);
    } 
    else{
      tot=parseInt(baseStr);
    }
    setAttrs({repeating_magicSkills_base2:tot});			   
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

on("change:magic_mod", function() {
  resetSkills("repeating_magicSkills","magic_mod","0");
});	
///////////////////////////////////////////////////////////////////////////////////////				
////////////////////////////////////////////////////////////////////////
on("change:repeating_manipulationSkills:base", function() {
  getAttrs(["repeating_manipulationSkills_base","curstr","curcon","cursiz","curint","curpow","curdex","curchr"], function(pvalue) {		
    var baseStr = pvalue.repeating_manipulationSkills_base;
    baseStr = baseStr.toUpperCase();
    var tot = 0;
    if (baseStr.includes("*")){
      //get multiplier
      var multiplier = baseStr.split("*");
      console.log("!!!!!!multiplier "+multiplier);

      var multival = parseInt(multiplier[1]);
      console.log("!!!!!!!!!!!multival "+multival);

      if (baseStr.includes("STR")){
        tot = parseInt(pvalue.curstr)*multival;
      } else if (baseStr.includes("CON")){
        tot = parseInt(pvalue.curcon)*multival;						
      } else if (baseStr.includes("SIZ")){
        tot = parseInt(pvalue.cursiz)*multival;											
      } else if (baseStr.includes("INT")){
        tot = parseInt(pvalue.curint)*multival;											
      } else if (baseStr.includes("POW")){
        tot = parseInt(pvalue.curpow)*multival;											
      } else if (baseStr.includes("DEX")){
        tot = parseInt(pvalue.curdex)*multival;											
      } else if (baseStr.includes("CHR")){
        tot = parseInt(pvalue.curchr)*multival;											
      }
      console.log("tot "+tot);
    } 
    else{
      tot=parseInt(baseStr);
    }
    setAttrs({repeating_manipulationSkills_base2:tot});			   
  });
});		


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

///////////////////////////////////////////////////////////////////////////////////////	
////////////////////////////////////////////////////////////////////////
on("change:repeating_perceptionSkills:base", function() {
  getAttrs(["repeating_perceptionSkills_base","curstr","curcon","cursiz","curint","curpow","curdex","curchr"], function(pvalue) {		
    var baseStr = pvalue.repeating_perceptionSkills_base;
    baseStr = baseStr.toUpperCase();
    var tot = 0;
    if (baseStr.includes("*")){
      //get multiplier
      var multiplier = baseStr.split("*");
      console.log("!!!!!!multiplier "+multiplier);

      var multival = parseInt(multiplier[1]);
      console.log("!!!!!!!!!!!multival "+multival);

      if (baseStr.includes("STR")){
        tot = parseInt(pvalue.curstr)*multival;
      } else if (baseStr.includes("CON")){
        tot = parseInt(pvalue.curcon)*multival;						
      } else if (baseStr.includes("SIZ")){
        tot = parseInt(pvalue.cursiz)*multival;											
      } else if (baseStr.includes("INT")){
        tot = parseInt(pvalue.curint)*multival;											
      } else if (baseStr.includes("POW")){
        tot = parseInt(pvalue.curpow)*multival;											
      } else if (baseStr.includes("DEX")){
        tot = parseInt(pvalue.curdex)*multival;											
      } else if (baseStr.includes("CHR")){
        tot = parseInt(pvalue.curchr)*multival;											
      }
      console.log("tot "+tot);
    } 
    else{
      tot=parseInt(baseStr);
    }
    setAttrs({repeating_perceptionSkills_base2:tot});			   
  });
});		


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

on("change:perception_mod", function() {
  resetSkills("repeating_perceptionSkills","perception_mod","0");
});	
///////////////////////////////////////////////////////////////////////////////////////	
////////////////////////////////////////////////////////////////////////
on("change:repeating_stealthSkills:base", function() {
  getAttrs(["repeating_stealthSkills_base","curstr","curcon","cursiz","curint","curpow","curdex","curchr"], function(pvalue) {		
    var baseStr = pvalue.repeating_stealthSkills_base;
    baseStr = baseStr.toUpperCase();
    var tot = 0;
    if (baseStr.includes("*")){
      //get multiplier
      var multiplier = baseStr.split("*");
      console.log("!!!!!!multiplier "+multiplier);

      var multival = parseInt(multiplier[1]);
      console.log("!!!!!!!!!!!multival "+multival);

      if (baseStr.includes("STR")){
        tot = parseInt(pvalue.curstr)*multival;
      } else if (baseStr.includes("CON")){
        tot = parseInt(pvalue.curcon)*multival;						
      } else if (baseStr.includes("SIZ")){
        tot = parseInt(pvalue.cursiz)*multival;											
      } else if (baseStr.includes("INT")){
        tot = parseInt(pvalue.curint)*multival;											
      } else if (baseStr.includes("POW")){
        tot = parseInt(pvalue.curpow)*multival;											
      } else if (baseStr.includes("DEX")){
        tot = parseInt(pvalue.curdex)*multival;											
      } else if (baseStr.includes("CHR")){
        tot = parseInt(pvalue.curchr)*multival;											
      }
      console.log("tot "+tot);
    } 
    else{
      tot=parseInt(baseStr);
    }
    setAttrs({repeating_stealthSkills_base2:tot});			   
  });
});		


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

on("change:swim_mod", function() {
  resetSkills("repeating_agilitySkills","agility_mod","1");
});	

on("change:dodge_mod2", function() {
  resetSkills("repeating_agilitySkills","agility_mod","1");
});	



on("change:stealth_mod", function() {
  resetSkills("repeating_stealthSkills","stealth_mod","1");
});	
///////////////////////////////////////////////////////////////////////////////////////				
////////////////////////////////////////////////////////////////////////
on("change:repeating_meleeSkills:base", function() {
  getAttrs(["repeating_meleeSkills_base","curstr","curcon","cursiz","curint","curpow","curdex","curchr"], function(pvalue) {		
    var baseStr = pvalue.repeating_meleeSkills_base;
    baseStr = baseStr.toUpperCase();
    var tot = 0;
    if (baseStr.includes("*")){
      //get multiplier
      var multiplier = baseStr.split("*");
      console.log("!!!!!!multiplier "+multiplier);

      var multival = parseInt(multiplier[1]);
      console.log("!!!!!!!!!!!multival "+multival);

      if (baseStr.includes("STR")){
        tot = parseInt(pvalue.curstr)*multival;
      } else if (baseStr.includes("CON")){
        tot = parseInt(pvalue.curcon)*multival;						
      } else if (baseStr.includes("SIZ")){
        tot = parseInt(pvalue.cursiz)*multival;											
      } else if (baseStr.includes("INT")){
        tot = parseInt(pvalue.curint)*multival;											
      } else if (baseStr.includes("POW")){
        tot = parseInt(pvalue.curpow)*multival;											
      } else if (baseStr.includes("DEX")){
        tot = parseInt(pvalue.curdex)*multival;											
      } else if (baseStr.includes("CHR")){
        tot = parseInt(pvalue.curchr)*multival;											
      }
      console.log("tot "+tot);
    } 
    else{
      tot=parseInt(baseStr);
    }
    setAttrs({repeating_meleeSkills_base2:tot});			   
  });
});		


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
on("change:repeating_missileSkills:base", function() {
  getAttrs(["repeating_missileSkills_base","curstr","curcon","cursiz","curint","curpow","curdex","curchr"], function(pvalue) {		
    var baseStr = pvalue.repeating_missileSkills_base;
    baseStr = baseStr.toUpperCase();
    var tot = 0;
    if (baseStr.includes("*")){
      //get multiplier
      var multiplier = baseStr.split("*");
      console.log("!!!!!!multiplier "+multiplier);

      var multival = parseInt(multiplier[1]);
      console.log("!!!!!!!!!!!multival "+multival);

      if (baseStr.includes("STR")){
        tot = parseInt(pvalue.curstr)*multival;
      } else if (baseStr.includes("CON")){
        tot = parseInt(pvalue.curcon)*multival;						
      } else if (baseStr.includes("SIZ")){
        tot = parseInt(pvalue.cursiz)*multival;											
      } else if (baseStr.includes("INT")){
        tot = parseInt(pvalue.curint)*multival;											
      } else if (baseStr.includes("POW")){
        tot = parseInt(pvalue.curpow)*multival;											
      } else if (baseStr.includes("DEX")){
        tot = parseInt(pvalue.curdex)*multival;											
      } else if (baseStr.includes("CHR")){
        tot = parseInt(pvalue.curchr)*multival;											
      }
      console.log("tot "+tot);
    } 
    else{
      tot=parseInt(baseStr);
    }
    setAttrs({repeating_missileSkills_base2:tot});			   
  });
});		


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
on("change:repeating_shieldSkills:base", function() {
  getAttrs(["repeating_shieldSkills_base","curstr","curcon","cursiz","curint","curpow","curdex","curchr"], function(pvalue) {		
    var baseStr = pvalue.repeating_shieldSkills_base;
    baseStr = baseStr.toUpperCase();
    var tot = 0;
    if (baseStr.includes("*")){
      //get multiplier
      var multiplier = baseStr.split("*");
      console.log("!!!!!!multiplier "+multiplier);

      var multival = parseInt(multiplier[1]);
      console.log("!!!!!!!!!!!multival "+multival);

      if (baseStr.includes("STR")){
        tot = parseInt(pvalue.curstr)*multival;
      } else if (baseStr.includes("CON")){
        tot = parseInt(pvalue.curcon)*multival;						
      } else if (baseStr.includes("SIZ")){
        tot = parseInt(pvalue.cursiz)*multival;											
      } else if (baseStr.includes("INT")){
        tot = parseInt(pvalue.curint)*multival;											
      } else if (baseStr.includes("POW")){
        tot = parseInt(pvalue.curpow)*multival;											
      } else if (baseStr.includes("DEX")){
        tot = parseInt(pvalue.curdex)*multival;											
      } else if (baseStr.includes("CHR")){
        tot = parseInt(pvalue.curchr)*multival;											
      }
      console.log("tot "+tot);
    } 
    else{
      tot=parseInt(baseStr);
    }
    setAttrs({repeating_shieldSkills_base2:tot});			   
  });
});		


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

on("change:repeating_naturalWpnSkills:base", function() {
  getAttrs(["repeating_naturalWpnSkills_base","curstr","curcon","cursiz","curint","curpow","curdex","curchr"], function(pvalue) {		
    var baseStr = pvalue.repeating_naturalWpnSkills_base;
    baseStr = baseStr.toUpperCase();
    var tot = 0;
    if (baseStr.includes("*")){
      //get multiplier
      var multiplier = baseStr.split("*");
      console.log("!!!!!!multiplier "+multiplier);

      var multival = parseInt(multiplier[1]);
      console.log("!!!!!!!!!!!multival "+multival);

      if (baseStr.includes("STR")){
        tot = parseInt(pvalue.curstr)*multival;
      } else if (baseStr.includes("CON")){
        tot = parseInt(pvalue.curcon)*multival;						
      } else if (baseStr.includes("SIZ")){
        tot = parseInt(pvalue.cursiz)*multival;											
      } else if (baseStr.includes("INT")){
        tot = parseInt(pvalue.curint)*multival;											
      } else if (baseStr.includes("POW")){
        tot = parseInt(pvalue.curpow)*multival;											
      } else if (baseStr.includes("DEX")){
        tot = parseInt(pvalue.curdex)*multival;											
      } else if (baseStr.includes("CHR")){
        tot = parseInt(pvalue.curchr)*multival;											
      }
      console.log("tot "+tot);
    } 
    else{
      tot=parseInt(baseStr);
    }

    setAttrs({repeating_naturalWpnSkills_base2:tot});			   
  });
});		


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



on("change:repeating_knowledgeSkills:skill", function() {
  getAttrs(["repeating_knowledgeSkills_skill"], function(pvalue) {		


    var name= pvalue.repeating_knowledgeSkills_skill;

    var char1  = name.substr(0, 1); 

    if (char1=="-"){
      name = name.substr(1);
      setAttrs({repeating_knowledgeSkills_sp_toggle1:0,repeating_knowledgeSkills_skill:name});			   	
    } else 	if (char1=="+"){
      name = name.substr(1);
      setAttrs({repeating_knowledgeSkills_sp_toggle1:"on",repeating_knowledgeSkills_skill:name});			   	
      console.log("marker 4b");
    }					
  });
});		

on("change:repeating_agilitySkills:skill", function() {
  getAttrs(["repeating_agilitySkills_skill"], function(pvalue) {		


    var name= pvalue.repeating_agilitySkills_skill;

    var char1  = name.substr(0, 1); 

    if (char1=="-"){
      name = name.substr(1);
      setAttrs({repeating_agilitySkills_sp_toggle1:0,repeating_agilitySkills_skill:name});			   	
    } else 	if (char1=="+"){
      name = name.substr(1);
      setAttrs({repeating_agilitySkills_sp_toggle1:"on",repeating_agilitySkills_skill:name});			   	
      console.log("marker 4b");
    }					
  });
});				

on("change:repeating_communicationskills:skill", function() {
  getAttrs(["repeating_communicationskills_skill"], function(pvalue) {		


    var name= pvalue.repeating_communicationskills_skill;

    var char1  = name.substr(0, 1); 

    if (char1=="-"){
      name = name.substr(1);
      setAttrs({repeating_communicationskills_sp_toggle1:0,repeating_communicationskills_skill:name});			   	
    } else 	if (char1=="+"){
      name = name.substr(1);
      setAttrs({repeating_communicationskills_sp_toggle1:"on",repeating_communicationskills_skill:name});			   	
      console.log("marker 4b");
    }					
  });
});				

on("change:repeating_magicSkills:skill", function() {
  getAttrs(["repeating_magicSkills_skill"], function(pvalue) {		


    var name= pvalue.repeating_magicSkills_skill;

    var char1  = name.substr(0, 1); 

    if (char1=="-"){
      name = name.substr(1);
      setAttrs({repeating_magicSkills_sp_toggle1:0,repeating_magicSkills_skill:name});			   	
    } else 	if (char1=="+"){
      name = name.substr(1);
      setAttrs({repeating_magicSkills_sp_toggle1:"on",repeating_magicSkills_skill:name});			   	
      console.log("marker 4b");
    }					
  });
});				


on("change:repeating_manipulationSkills:skill", function() {
  getAttrs(["repeating_manipulationSkills_skill"], function(pvalue) {		


    var name= pvalue.repeating_manipulationSkills_skill;

    var char1  = name.substr(0, 1); 

    if (char1=="-"){
      name = name.substr(1);
      setAttrs({repeating_manipulationSkills_sp_toggle1:0,repeating_manipulationSkills_skill:name});			   	
    } else 	if (char1=="+"){
      name = name.substr(1);
      setAttrs({repeating_manipulationSkills_sp_toggle1:"on",repeating_manipulationSkills_skill:name});			   	
      console.log("marker 4b");
    }					
  });
});				


on("change:repeating_perceptionskills:skill", function() {
  getAttrs(["repeating_perceptionskills_skill"], function(pvalue) {		


    var name= pvalue.repeating_perceptionskills_skill;

    var char1  = name.substr(0, 1); 

    if (char1=="-"){
      name = name.substr(1);
      setAttrs({repeating_perceptionskills_sp_toggle1:0,repeating_perceptionskills_skill:name});			   	
    } else 	if (char1=="+"){
      name = name.substr(1);
      setAttrs({repeating_perceptionskills_sp_toggle1:"on",repeating_perceptionskills_skill:name});			   	
      console.log("marker 4b");
    }					
  });
});	

on("change:repeating_stealthskills:skill", function() {
  getAttrs(["repeating_stealthskills_skill"], function(pvalue) {		


    var name= pvalue.repeating_stealthskills_skill;

    var char1  = name.substr(0, 1); 

    if (char1=="-"){
      name = name.substr(1);
      setAttrs({repeating_stealthskills_sp_toggle1:0,repeating_stealthskills_skill:name});			   	
    } else 	if (char1=="+"){
      name = name.substr(1);
      setAttrs({repeating_stealthskills_sp_toggle1:"on",repeating_stealthskills_skill:name});			   	
      console.log("marker 4b");
    }					
  });
});	





on("change:fertility_rune", function() {
  getAttrs(["fertility_rune"], function(pvalue) {				
    setAttrs({death_rune:100-pvalue.fertility_rune});			   
  });
});	


on("change:death_rune", function() {
  getAttrs(["death_rune"], function(pvalue) {		
    setAttrs({fertility_rune:100-pvalue.death_rune});			   
  });
});	

on("change:harmony_rune", function() {
  getAttrs(["harmony_rune"], function(pvalue) {		
    setAttrs({disorder_rune:100-pvalue.harmony_rune});			   
  });
});	

on("change:disorder_rune", function() {
  getAttrs(["disorder_rune"], function(pvalue) {		
    setAttrs({harmony_rune:100-pvalue.disorder_rune});			   
  });
});	

on("change:truth_rune", function() {
  getAttrs(["truth_rune"], function(pvalue) {		
    setAttrs({illusion_rune:100-pvalue.truth_rune});			   
  });
});			

on("change:illusion_rune", function() {
  getAttrs(["illusion_rune"], function(pvalue) {		
    setAttrs({truth_rune:100-pvalue.illusion_rune});			   
  });
});			

on("change:stasis_rune", function() {
  getAttrs(["stasis_rune"], function(pvalue) {		
    setAttrs({movement_rune:100-pvalue.stasis_rune});			   
  });
});			

on("change:movement_rune", function() {
  getAttrs(["movement_rune"], function(pvalue) {		
    setAttrs({stasis_rune:100-pvalue.movement_rune});			   
  });
});				


on("change:man_rune", function() {
  getAttrs(["man_rune"], function(pvalue) {		
    setAttrs({beast_rune:100-pvalue.man_rune});			   
  });
});			

on("change:beast_rune", function() {
  getAttrs(["beast_rune"], function(pvalue) {		
    setAttrs({man_rune:100-pvalue.beast_rune});			   
  });
});					

on("change:basestr change:modstr", function() {
  getAttrs(["basestr","modstr"], function(pvalue) {		
    setAttrs({curstr:parseInt(pvalue.basestr)+parseInt(pvalue.modstr)});			   
  });
});					

on("change:basecon change:modcon", function() {
  getAttrs(["basecon","modcon"], function(pvalue) {		
    setAttrs({curcon:parseInt(pvalue.basecon)+parseInt(pvalue.modcon)});			   
  });
});			

on("change:basesiz change:modsiz", function() {
  getAttrs(["basesiz","modsiz"], function(pvalue) {		
    setAttrs({cursiz:parseInt(pvalue.basesiz)+parseInt(pvalue.modsiz)});			   
  });
});

on("change:baseint change:modint", function() {
  getAttrs(["baseint","modint"], function(pvalue) {		
    setAttrs({curint:parseInt(pvalue.baseint)+parseInt(pvalue.modint)});			   
  });
});					

on("change:basepow change:modpow", function() {
  getAttrs(["basepow","modpow"], function(pvalue) {		
    setAttrs({curpow:parseInt(pvalue.basepow)+parseInt(pvalue.modpow)});			   
  });
});					

on("change:basechr change:modchr", function() {
  getAttrs(["basechr","modchr"], function(pvalue) {		
    setAttrs({curchr:parseInt(pvalue.basechr)+parseInt(pvalue.modchr)});			   
  });
});			

on("change:basedex change:moddex", function() {
  getAttrs(["basedex","moddex"], function(pvalue) {		
    setAttrs({curdex:parseInt(pvalue.basedex)+parseInt(pvalue.moddex)});			   
  });
});					

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

on("change:repeating_missle2:wpndex change:repeating_missle2:wpnstr", function() {
  getAttrs(["repeating_missle2_wpnstr","repeating_missle2_wpndex","curdex","curstr"], function(values) {

    var wStr =  parseInt(values.repeating_missle2_wpnstr);
    var wDex =  parseInt(values.repeating_missle2_wpndex);
    var cStr = parseInt(values.curstr);
    var cDex = parseInt(values.curdex);
    var mod = 1;

    var strBonus = 0;

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

    setAttrs({repeating_missle2_minmod:mod});	



  });
});	


on("change:repeating_melee2:wpndex change:repeating_melee2:wpnstr", function() {
  getAttrs(["repeating_melee2_wpnstr","repeating_melee2_wpndex","curdex","curstr"], function(values) {

    var wStr =  parseInt(values.repeating_melee2_wpnstr);
    var wDex =  parseInt(values.repeating_melee2_wpndex);
    var cStr = parseInt(values.curstr);
    var cDex = parseInt(values.curdex);
    var mod = 1;

    var strBonus = 0;

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

    setAttrs({repeating_melee2_minmod:mod});	



  });
});

//wpn_damage
//calculate melee spcecial and critical damage
on("change:repeating_melee2:wpn_damage change:repeating_melee2:wpn_spl", function() {
  getAttrs(["repeating_melee2_wpn_damage","repeating_melee2_wpn_spl"], function(values) {

    var spcl = parseInt(values.repeating_melee2_wpn_spl);
    var wDmg =  values.repeating_melee2_wpn_damage;


    console.log("spcl "+spcl);
    wDmg = wDmg.toUpperCase();
    console.log("dmg "+wDmg);	
    var dmgSplit = wDmg.split(/[\D+]+/);
    var newStr = "";
    var newAdd = 0;

    var cDamage = (parseInt(dmgSplit[0])*parseInt(dmgSplit[1]))+parseInt(dmgSplit[2]);
    console.log("dmgSplit" +dmgSplit);
    var newDice = parseInt(dmgSplit[0])*2;


    if (spcl !==2){
      if (dmgSplit.length===3){
        cDamage = (newDice*parseInt(dmgSplit[1]))+parseInt(dmgSplit[2]*2);
      }else{
        cDamage = newDice*parseInt(dmgSplit[1]);
      }				
    }
    else{

      if (dmgSplit.length===3){
        cDamage =  parseInt(dmgSplit[0])*parseInt(dmgSplit[1]);
        cDamage = cDamage+parseInt(dmgSplit[2]);

      }else{
        cDamage =  (parseInt((dmgSplit[0])*parseInt(dmgSplit[1])));
      }					
    }
    console.log("cDamage "+cDamage);
    console.log("newDice "+newDice);



    if (spcl !==2){			
      if (dmgSplit.length===3){
        newAdd =  parseInt(dmgSplit[2])*2
        newStr = newDice+"D"+dmgSplit[1]+"+"+newAdd;
      }
      else{

        newStr = newDice+"D"+dmgSplit[1];
      }			
    }
    else{
      newStr = wDmg;
    }



    console.log("newStr "+newStr)

    setAttrs({repeating_melee2_spcldamage:newStr,repeating_melee2_critdamage:cDamage});	



  });
});	



//wpn_damage
//calculate missle spcecial and critical damage
on("change:repeating_missle2:wpn_damage change:repeating_missle2:wpn_spl", function() {
  getAttrs(["repeating_missle2_wpn_damage","repeating_missle2_wpn_spl"], function(values) {

    var spcl = parseInt(values.repeating_missle2_wpn_spl);
    var wDmg =  values.repeating_missle2_wpn_damage;


    console.log("spcl "+spcl);
    wDmg = wDmg.toUpperCase();
    console.log("dmg "+wDmg);	
    var dmgSplit = wDmg.split(/[\D+]+/);
    var newStr = "";
    var newAdd = 0;

    var cDamage = (parseInt(dmgSplit[0])*parseInt(dmgSplit[1]))+parseInt(dmgSplit[2]);
    console.log("dmgSplit" +dmgSplit);
    var newDice = parseInt(dmgSplit[0])*2;


    if (spcl !==2){
      if (dmgSplit.length===3){
        cDamage = (newDice*parseInt(dmgSplit[1]))+parseInt(dmgSplit[2]*2);
      }else{
        cDamage = newDice*parseInt(dmgSplit[1]);
      }				
    }
    else{

      if (dmgSplit.length===3){
        cDamage =  parseInt(dmgSplit[0])*parseInt(dmgSplit[1]);
        cDamage = cDamage+parseInt(dmgSplit[2]);

      }else{
        cDamage =  (parseInt((dmgSplit[0])*parseInt(dmgSplit[1])));
      }					
    }
    console.log("cDamage "+cDamage);
    console.log("newDice "+newDice);



    if (spcl !==2){			
      if (dmgSplit.length===3){
        newAdd =  parseInt(dmgSplit[2])*2
        newStr = newDice+"D"+dmgSplit[1]+"+"+newAdd;
      }
      else{
        newStr = newDice+"D"+dmgSplit[1];
      }			
    }
    else{
      newStr = wDmg;
    }



    console.log("newStr "+newStr)

    setAttrs({repeating_missle_spcldamage:newStr,repeating_missle2_critdamage:cDamage});	



  });
})	
