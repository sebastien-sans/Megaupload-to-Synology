@echo off
set target="%1"
echo Building script %target%
echo. >NUL 2> %target%
set FILE_LIST=(src\head.js src\lib\*.js src\img\*.js src\css\*.js src\app\main.js)
for %%p in %FILE_LIST% do for %%f in (%%p) do echo ... %%f && type %%f >> %target% && echo. >> %target%
echo Done
