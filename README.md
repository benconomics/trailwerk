# Trailwerk Setup

## 1. Google Sheet
- Open Google Sheets and go to Extensions → Apps Script
- Paste `apps_script.gs` into the script editor
- Deploy as a Web App: set access to "Anyone", and copy the Web App URL
- Replace `YOUR_GOOGLE_APPS_SCRIPT_URL` in `script.js` with that URL

## 2. Netlify
- Create a Netlify account and drag/drop this folder into your new site
- Set a custom domain like `trailwerk.org` under Site Settings → Domain

Done! Submissions now write to your Sheet.
