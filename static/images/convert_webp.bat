@echo off
setlocal

REM Convert all .jpg and .png files in the current directory and subdirectories
for /r %%i in (*.jpg *.png) do (
    cwebp -q 80 "%%i" -o "%%~dpni.webp"
)

echo Conversion complete.
endlocal
pause
