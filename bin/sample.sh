sample=index.html
source=(
    head.html
    newpcsheet.html
    foot.html
)

# clear the target file
rm $sample
for file in "${source[@]}"
do
   cat "$file" >> $sample
done
