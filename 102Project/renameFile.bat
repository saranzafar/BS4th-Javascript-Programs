@echo off
setlocal enabledelayedexpansion

:: Configuration
set "replaceThis=harry"
set "replaceWith=john"
set "preview=false"

:: Loop through files in the 'data' directory
for %%F in (data\*) do (
    set "item=%%~nxF"
    set "newFile=data\!item:%replaceThis%=%replaceWith%!"
    
    if "%preview%"=="true" (
        if not "!item!"=="!newFile!" (
            echo !item! will be renamed to !newFile!
        )
    ) else (
        if not "!item!"=="!newFile!" (
            rename "data\!item!" "!newFile!"
            echo Rename Success
        )
    )
)

endlocal
