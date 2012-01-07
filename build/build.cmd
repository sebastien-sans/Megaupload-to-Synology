@echo Building script...
@type ..\src\head.js > ..\target\megaupload_to_synology.user.js
@echo. >> ..\target\megaupload_to_synology.user.js
@set FILE_LIST=(..\src\lib\*.js ..\src\img\*.js ..\src\app\main.js)
@for %%p in %FILE_LIST% do @for %%f in (%%p) do @type %%f >> ..\target\megaupload_to_synology.user.js && @echo. >> ..\target\megaupload_to_synology.user.js
@echo Done
@pause