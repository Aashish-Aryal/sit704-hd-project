'''
Author: Aashish Aryal

This Python script uses the Dropbox API to upload a file to screenshots folder in the Dropbox account.
It takes the file path as a command-line argument.
'''

import dropbox
import sys
from download_dropbox import ACCESS_TOKEN

file_path = sys.argv[1]
destination_file_path = file_path.split('\\')[-1]
dbx = dropbox.Dropbox(ACCESS_TOKEN)

with open(file_path, 'rb') as f:
    dbx.files_upload(f.read(), f"/screenshots/{destination_file_path}")