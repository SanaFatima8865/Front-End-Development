@echo off
echo Building Sana's Portfolio for deployment...
echo.

npm run build

if %errorlevel% neq 0 (
    echo Build failed! Please check for errors.
    pause
    exit /b 1
)

echo.
echo ✅ Build successful!
echo.
echo Your portfolio is ready for deployment!
echo.
echo Next steps:
echo 1. Go to https://app.netlify.com/drop
echo 2. Drag and drop the 'build' folder to deploy
echo 3. Get your live URL and share with clients!
echo.
echo The build folder is located at: %cd%\build
echo.
pause
