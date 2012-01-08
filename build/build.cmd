@echo off
echo Building script...
set target="%1"
echo Target : %target%
type src\head.js > %target%
echo. >> %target%
set FILE_LIST=(src\lib\*.js src\img\*.js src\app\main.js)
for %%p in %FILE_LIST% do for %%f in (%%p) do type %%f >> %target% && echo. >> %target%
echo Done
