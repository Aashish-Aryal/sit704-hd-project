'''
Author: Aashish Aryal

This script uses the Dropbox API to download all files from a specified folder in the Dropbox account.
'''

# Import required modules
import dropbox
import os
from dotenv import load_dotenv

# Load environment variables from a .env file
load_dotenv()
ACCESS_TOKEN = os.getenv('ACCESS_TOKEN') 

# Initialize Dropbox client
dbx = dropbox.Dropbox(ACCESS_TOKEN)

def download_folder(dropbox_folder_path, local_folder_path):
    try:
        # Create the local folder if it doesn't exist
        os.makedirs(local_folder_path, exist_ok=True)

        # List files in the Dropbox folder
        result = dbx.files_list_folder(dropbox_folder_path)

        for entry in result.entries:
            if isinstance(entry, dropbox.files.FileMetadata):
                local_file_path = os.path.join(local_folder_path, entry.name)
                print(f"Downloading {entry.name}...")
                
                # Download the file
                with open(local_file_path, 'wb') as f:
                    metadata, res = dbx.files_download(path=entry.path_lower)
                    f.write(res.content)

        # Handle pagination in case there are more files
        while result.has_more:
            result = dbx.files_list_folder_continue(result.cursor)
            for entry in result.entries:
                if isinstance(entry, dropbox.files.FileMetadata):
                    local_file_path = os.path.join(local_folder_path, entry.name)
                    print(f"Downloading {entry.name}...")
                    
                    # Download the file
                    with open(local_file_path, 'wb') as f:
                        metadata, res = dbx.files_download(path=entry.path_lower)
                        f.write(res.content)

        print("Download completed.")
    except Exception as e:
        print(f"Error downloading folder: {e}")

# Define the Dropbox folder and local folder paths
dropbox_folder_path = '/payload'  # Path to the source folder in Dropbox from where the file are to be downloaded
local_folder_path = "."      # Local folder to save files

download_folder(dropbox_folder_path, local_folder_path)