target=sheet.html
source=(
    body.html
    script.html
    rolltemplates.html
)

# clear the target file
:> $target
for file in "${source[@]}"
do
   cat "$file" >> $target
done
