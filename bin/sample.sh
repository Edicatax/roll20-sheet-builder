sample=index.html
source=(
    newpcsheet.html
    personaltab.html
    personaltabsummary.html
    personaltabstats.html
    personalrepeatingsections.html
    personalfamily.html
    personalholdings.html
    divend.html
    skillstab.html
    magictab.html
    combattab.html
    geartab.html
    divend.html
    rolltemplates.html
	workerstart.html
	tas.js
	newworkers.js
	workerend.html
)

# clear the target file
rm $sample
for file in "${source[@]}"
do
   cat "$file" >> $sample
done
