'''
Author: Aashish Aryal

This script connects disconnects the Wi-Fi from the PC 
and connects to a specified Wi-Fi network (in this case, "Aashish").
This is repeated every hour.
'''

import subprocess
import time

def disconnect_wifi():
    # Disconnect from the current Wi-Fi network
    print("Disconnecting from current Wi-Fi...")
    subprocess.run(["netsh", "wlan", "disconnect"])
    time.sleep(2)

def connect_to_wifi(ssid):
    # Connect to the specified Wi-Fi network
    print(f"Connecting to Wi-Fi '{ssid}'...")
    subprocess.run(["netsh", "wlan", "connect", ssid])
    time.sleep(2)

if __name__ == "__main__":
    while True:
        disconnect_wifi()
        connect_to_wifi("Aashish")
        time.sleep(3600)

