'''
Author: Aashish Aryal

This script captures a screenshot of the desktop.
Then runs another code to upload it to Dropbox.
Then repeats the process every 15 seconds.
'''

import pyautogui
import time
from datetime import datetime
import subprocess

while True:
    timestamp = datetime.now().strftime('%Y-%m-%d_%H-%M-%S')
    file_name = f'screenshot_{timestamp}.png'

    screenshot = pyautogui.screenshot()
    screenshot.save(file_name)

    subprocess.run(['python', 'upload_dropbox.py', file_name], check=True)

    time.sleep(15)