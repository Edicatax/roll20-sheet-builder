target=sheet.html
source=(
    pcsheet.html
    quickstartsheet.html
    npcsheet.html
    workerstart.html
    workers.js
    workerend.html
    rolltemplates.html
)

# clear the target file
:> $target
for file in "${source[@]}"
do
   cat "$file" >> $target
done
