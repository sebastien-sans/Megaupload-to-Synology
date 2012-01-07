#!/bin/sh

echo "Building script..."

target="../target/megaupload_to_synology.user.js"
cat ../src/head.js > "$target" && echo >> "$target" 
files="../src/lib/*.js ../src/img/*.js ../src/app/main.js"
for file in `ls -f $files`
do
	cat "$file" >> "$target" && echo >> "$target"
done

echo "Done"
