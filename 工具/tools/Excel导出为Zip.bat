@echo off
path = %PATH%
set /p input=������ExcelĿ¼:
node .\ConfigTools\out\main.js %input%
node .\ZipTools\out\main.js %input%\outFile\client
@pause