@echo off
cd /d "%~dp0"

echo Adding files...
git add .

set /p msg="Enter commit message: "
git commit -m "%msg%"

echo Pushing to GitHub...
git push

echo.
echo ✅ Done! Your site is updated on GitHub Pages.
pause
