sample=index.html
source=(
    head.html
    newpcsheet.html
    personaltab.html
    skillstab.html
    magictab.html
    combattab.html
    geartab.html
    divend.html
    foot.html
)

# clear the target file
rm $sample
for file in "${source[@]}"
do
   cat "$file" >> $sample
done
