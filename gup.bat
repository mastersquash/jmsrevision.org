@echo off
REM ==============================
REM Git Add, Commit, Pull Rebase, Push to origin main
REM Usage: gup Your commit message here
REM ==============================

REM Check if a message was provided
if "%~1"=="" (
    echo Please provide a commit message.
    exit /b 1
)

REM Combine all arguments into one message
setlocal enabledelayedexpansion
set msg=
:loop
if "%~1"=="" goto done
set msg=!msg! %~1
shift
goto loop
:done
set msg=%msg:~1%

REM Run Git commands
git add .
git commit -m "!msg!"
git pull origin main --rebase
git push origin main

endlocal
