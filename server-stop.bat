@echo off
echo Stopping all Node.js servers (node.exe)...
taskkill /F /IM node.exe > nul 2>&1
echo All Node.js processes have been stopped.
pause
