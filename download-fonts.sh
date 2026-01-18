#!/bin/bash

# Script to download Poppins fonts from Google Fonts
# This script downloads the required Poppins font files

FONT_DIR="./public/fonts"
BASE_URL="https://fonts.gstatic.com/s/poppins/v21"

# Create fonts directory if it doesn't exist
mkdir -p "$FONT_DIR"

echo "Downloading Poppins font files..."

# Download Regular (400)
echo "Downloading Regular (400)..."
curl -L "${BASE_URL}/pxiEyp8kv8JHgFVrJJfecg.woff2" -o "${FONT_DIR}/poppins-regular.woff2"
curl -L "${BASE_URL}/pxiEyp8kv8JHgFVrJJfecg.woff" -o "${FONT_DIR}/poppins-regular.woff"

# Download Medium (500)
echo "Downloading Medium (500)..."
curl -L "${BASE_URL}/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2" -o "${FONT_DIR}/poppins-medium.woff2"
curl -L "${BASE_URL}/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff" -o "${FONT_DIR}/poppins-medium.woff"

# Download SemiBold (600)
echo "Downloading SemiBold (600)..."
curl -L "${BASE_URL}/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2" -o "${FONT_DIR}/poppins-semibold.woff2"
curl -L "${BASE_URL}/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff" -o "${FONT_DIR}/poppins-semibold.woff"

# Download Bold (700)
echo "Downloading Bold (700)..."
curl -L "${BASE_URL}/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2" -o "${FONT_DIR}/poppins-bold.woff2"
curl -L "${BASE_URL}/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff" -o "${FONT_DIR}/poppins-bold.woff"

echo "✅ Font files downloaded successfully!"
echo "Files are located in: ${FONT_DIR}"
