@echo off
cmd /c "%CD%\build\build.cmd %CD%\target\megaupload_to_synology.user.js 2>NUL"
if exist "%1\" copy "%cd%\target\*.js" "%1\" >NUL
echo Running script...
start http://www.megaupload.com/?d=7ZCYG9IV