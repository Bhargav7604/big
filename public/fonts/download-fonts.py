#!/usr/bin/env python3
"""
Script to download Poppins font files from Google Fonts CDN
Run this script to automatically download all required Poppins font files
"""

import os
import urllib.request
from pathlib import Path

# Font directory
FONT_DIR = Path(__file__).parent
BASE_URL = "https://fonts.gstatic.com/s/poppins/v21"

# Font files to download (weight: [woff2_url, woff_url])
FONTS = {
    "poppins-regular": {
        "woff2": f"{BASE_URL}/pxiEyp8kv8JHgFVrJJfecg.woff2",
        "woff": f"{BASE_URL}/pxiEyp8kv8JHgFVrJJfecg.woff"
    },
    "poppins-medium": {
        "woff2": f"{BASE_URL}/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2",
        "woff": f"{BASE_URL}/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff"
    },
    "poppins-semibold": {
        "woff2": f"{BASE_URL}/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2",
        "woff": f"{BASE_URL}/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff"
    },
    "poppins-bold": {
        "woff2": f"{BASE_URL}/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2",
        "woff": f"{BASE_URL}/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff"
    }
}

def download_file(url, filepath):
    """Download a file from URL to filepath"""
    try:
        print(f"Downloading {filepath.name}...")
        urllib.request.urlretrieve(url, filepath)
        print(f"✅ Downloaded {filepath.name}")
        return True
    except Exception as e:
        print(f"❌ Error downloading {filepath.name}: {e}")
        return False

def main():
    print("=" * 50)
    print("Poppins Font Downloader")
    print("=" * 50)
    print(f"Download directory: {FONT_DIR}")
    print()
    
    # Create directory if it doesn't exist
    FONT_DIR.mkdir(parents=True, exist_ok=True)
    
    success_count = 0
    total_count = len(FONTS) * 2  # Each font has woff2 and woff
    
    for font_name, urls in FONTS.items():
        # Download woff2
        woff2_path = FONT_DIR / f"{font_name}.woff2"
        if download_file(urls["woff2"], woff2_path):
            success_count += 1
        
        # Download woff
        woff_path = FONT_DIR / f"{font_name}.woff"
        if download_file(urls["woff"], woff_path):
            success_count += 1
        
        print()
    
    print("=" * 50)
    print(f"Download complete: {success_count}/{total_count} files")
    print("=" * 50)
    
    if success_count == total_count:
        print("✅ All font files downloaded successfully!")
        print(f"Font files are located in: {FONT_DIR}")
    else:
        print("⚠️  Some files failed to download. Please check the errors above.")

if __name__ == "__main__":
    main()
