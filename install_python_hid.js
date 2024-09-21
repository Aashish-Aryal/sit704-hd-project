layout("US")
delay(500)
press("GUI r") // Open Run dialog
delay(500)
type("powershell") // Run PowerShell
press("ENTER")
delay(2500)
type('wget "https://www.python.org/ftp/python/3.12.6/python-3.12.6-amd64.exe" -O python-installer.exe') // Download Python 3.12.6
press("ENTER")
delay(40000)
type("Start-Process powershell -Verb runAs") // Run PowerShell as administrator
press("ENTER")
delay(2500)
press("LEFT")
delay(500)
press("ENTER")
delay(2500)
type("cd C:\\Users\\aryal")
press("ENTER")
delay(500)
type(".\\python-installer.exe /quiet InstallAllUsers=0 InstallLauncherAllUsers=0 PrependPath=1 Include_test=0")  // Install Python 3.12.6
press("ENTER")
delay(35000)
type("Remove-Item .\\python-installer.exe")  // Cleamup downloaded file
press("ENTER")
delay(500)
type("exit")
delay(500)
press("ENTER")
delay(1000)
type("exit")
delay(500)
press("ENTER")

// Test Python installation
press("GUI r") // Open Run dialog
delay(500)
type("powershell") // Run PowerShell
press("ENTER")
delay(1500)
type("python --version") // Check Python version
press("ENTER")
delay(1500)
type("exit")
delay(500)
press("ENTER")