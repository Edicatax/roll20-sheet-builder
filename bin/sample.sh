sample=index.html
source=(
    head.html
    newpcsheet.html
    personaltab.html
    personaltabsummary.html
    personaltabstats.html
    personalrepeatingsections.html
    divend.html
    skillstab.html
    magictab.html
    combattab.html
    geartab.html
    divend.html
    rolltemplates.html
    foot.html
)

# clear the target file
rm $sample
for file in "${source[@]}"
do
   cat "$file" >> $sample
done
