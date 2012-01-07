#!/bin/sh

echo "Building script..."

target="../target/megaupload_to_synology.user.js"
cat ../src/head.js > "$target" && echo >> "$target" 
filepaths=("../src/lib/*.js" "../src/img/*.js" "../src/app/main.js")
for files in $filepaths
do
  for file in `ls "$files"`
  do
	cat "$file" >> "$target" && echo >> "$target"
  done
done

echo "Done"
