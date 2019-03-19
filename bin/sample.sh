sample=index.html
source=(
    head.html
    pcsheet.html
    foot.html
)

# clear the target file
:> $sample
for file in "${source[@]}"
do
   cat "$file" >> $sample
done
