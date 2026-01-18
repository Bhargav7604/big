# Poppins Font Files - Local Hosting Setup

This directory should contain the Poppins font files for local hosting.

## ✅ Code Setup Complete

The code has been updated to use local fonts. You just need to add the font files.

## Required Font Files

Please download and place the following font files in this directory (`public/fonts/`):

### Required Files:
- `poppins-regular.woff2` (weight: 400)
- `poppins-regular.woff` (weight: 400, fallback)
- `poppins-medium.woff2` (weight: 500)
- `poppins-medium.woff` (weight: 500, fallback)
- `poppins-semibold.woff2` (weight: 600)
- `poppins-semibold.woff` (weight: 600, fallback)
- `poppins-bold.woff2` (weight: 700)
- `poppins-bold.woff` (weight: 700, fallback)

## How to Download Poppins Fonts

### Option 1: Google Fonts Helper (Easiest - Recommended) ⭐
1. Visit: **https://google-webfonts-helper.herokuapp.com/fonts/poppins**
2. Select the weights: **400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)**
3. Select formats: **woff2** and **woff**
4. Click "Download @font-face kit"
5. Extract the ZIP file
6. Copy all `.woff2` and `.woff` files to this directory (`public/fonts/`)
7. Rename files to match the naming convention below

### Option 2: Direct from Google Fonts
1. Visit: **https://fonts.google.com/specimen/Poppins**
2. Click **"Download family"** button
3. Extract the ZIP file
4. Navigate to the extracted folder → `static` folder
5. Copy and rename the files:
   - `Poppins-Regular.woff2` → `poppins-regular.woff2`
   - `Poppins-Regular.woff` → `poppins-regular.woff`
   - `Poppins-Medium.woff2` → `poppins-medium.woff2`
   - `Poppins-Medium.woff` → `poppins-medium.woff`
   - `Poppins-SemiBold.woff2` → `poppins-semibold.woff2`
   - `Poppins-SemiBold.woff` → `poppins-semibold.woff`
   - `Poppins-Bold.woff2` → `poppins-bold.woff2`
   - `Poppins-Bold.woff` → `poppins-bold.woff`

### Option 3: Using Download Scripts
You can also use the provided scripts:
- **Python**: Run `python3 public/fonts/download-fonts.py`
- **Bash**: Run `bash public/fonts/download-fonts.sh`

Note: Scripts may require network access and proper SSL certificates.

## File Naming Convention

The font files **MUST** be named exactly as listed above for the CSS to work correctly:
- All lowercase
- Hyphens between words
- Format: `poppins-{weight}.woff2` and `poppins-{weight}.woff`

## After Adding Font Files

Once you've added the font files:
1. **Restart your development server** (`npm run dev` or `yarn dev`)
2. **Clear browser cache** (or use hard refresh: Cmd+Shift+R / Ctrl+Shift+R)
3. The fonts should now load locally instead of from Google Fonts CDN

## Verification

To verify fonts are loading locally:
1. Open browser **DevTools** (F12)
2. Go to **Network** tab
3. Filter by **"Font"** or search for "woff"
4. Reload the page
5. You should see requests to `/fonts/poppins-*.woff2` instead of `fonts.googleapis.com`
6. Check the **Console** tab - there should be no font loading errors

## Current Setup

- ✅ Font-face declarations: `src/fonts/poppins.css`
- ✅ CSS imports updated: `src/index.css` and `app/globals.css`
- ✅ Google Fonts links removed: `index.html`
- ⏳ Font files: **Need to be added** (download using one of the options above)

## Troubleshooting

If fonts don't load:
1. Check file names match exactly (case-sensitive)
2. Verify files are in `public/fonts/` directory
3. Check browser console for 404 errors
4. Ensure development server is restarted
5. Clear browser cache completely
