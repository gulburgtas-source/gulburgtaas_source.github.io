# GitHub Pages Deployment Guide

## Step-by-Step Guide to Deploy Your Portfolio to GitHub Pages

### Prerequisites
- Node.js installed on your computer
- Git installed on your computer
- GitHub account with repository `gulburgtas_source.github.io`

---

## Step 1: Download Your Project Files

1. Download all project files from Tempo to your local computer
2. Extract them to a folder (e.g., `portfolio-project`)

---

## Step 2: Install Dependencies

Open terminal/command prompt in your project folder and run:

```bash
npm install
```

Wait for all packages to install.

---

## Step 3: Build the Production Version

Run the build command:

```bash
npm run build
```

This creates a `dist` folder with compiled files ready for deployment.

**Important:** The `dist` folder contains the production-ready files, NOT the source code.

---

## Step 4: Verify the Build

Check that the `dist` folder contains:
- `index.html` (this is DIFFERENT from the source index.html)
- `assets/` folder (with .js and .css files)
- `.nojekyll` file
- `vite.svg`

---

## Step 5: Prepare Your GitHub Repository

### Option A: Using GitHub Website

1. Go to https://github.com/gulburgtas-source/gulburgtas_source.github.io
2. Delete ALL existing files in the repository
3. Click "Add file" → "Upload files"
4. Drag and drop ALL files from INSIDE the `dist` folder (not the dist folder itself)
5. Commit the changes

### Option B: Using Git Command Line

```bash
# Navigate to your dist folder
cd dist

# Initialize git (if not already)
git init

# Add your GitHub repository as remote
git remote add origin https://github.com/gulburgtas-source/gulburgtas_source.github.io.git

# Add all files
git add .

# Commit
git commit -m "Deploy portfolio website"

# Push to GitHub (force push to replace everything)
git push -f origin main
```

---

## Step 6: Configure GitHub Pages

1. Go to your repository settings: https://github.com/gulburgtas-source/gulburgtas_source.github.io/settings/pages
2. Under "Source", select "Deploy from a branch"
3. Under "Branch", select `main` and `/ (root)`
4. Click "Save"

---

## Step 7: Wait for Deployment

- GitHub Pages takes 1-5 minutes to deploy
- Check the "Actions" tab to see deployment progress
- Once complete, your site will be live at: https://gulburgtas-source.github.io

---

## Step 8: Connect Your Custom Domain

To use your domain `https://fahraz145.dpdns.org/`:

1. In repository settings → Pages → Custom domain
2. Enter: `fahraz145.dpdns.org`
3. Click "Save"
4. In your domain provider (dpdns.org), add a CNAME record:
   - Type: `CNAME`
   - Name: `fahraz145` (or `@` for root domain)
   - Value: `gulburgtas-source.github.io`

---

## Common Issues & Solutions

### Issue: White Screen
**Cause:** Uploaded source code instead of built files  
**Solution:** Make sure you upload files from the `dist` folder, not the project root

### Issue: MIME Type Error
**Cause:** Trying to load `.tsx` files directly  
**Solution:** Upload the built files from `dist` folder which contain compiled `.js` files

### Issue: 404 Errors
**Cause:** Missing `.nojekyll` file  
**Solution:** Make sure `.nojekyll` file from `dist` folder is in your repository root

### Issue: Assets Not Loading
**Cause:** Incorrect base path in vite.config.ts  
**Solution:** For `username.github.io` repos, base should be `'/'` (already correct in your config)

---

## Quick Checklist

- [ ] Ran `npm install`
- [ ] Ran `npm run build`
- [ ] Verified `dist` folder exists with compiled files
- [ ] Deleted old files from GitHub repository
- [ ] Uploaded ONLY files from INSIDE `dist` folder
- [ ] Included `.nojekyll` file
- [ ] Configured GitHub Pages to deploy from main branch
- [ ] Waited 1-5 minutes for deployment
- [ ] Tested the site at https://gulburgtas-source.github.io

---

## What Files to Upload (from dist folder)

```
✅ index.html (the built version, not source)
✅ assets/ (entire folder with all .js and .css files)
✅ .nojekyll
✅ vite.svg
❌ DO NOT upload: src/, node_modules/, package.json, vite.config.ts, etc.
```

---

## Need Help?

If you still see errors:
1. Check browser console (F12) for specific error messages
2. Verify all files from `dist` folder are uploaded
3. Clear browser cache and try again
4. Check GitHub Actions tab for deployment errors

---

## Updating Your Site

When you make changes:
1. Make changes in your source code
2. Run `npm run build` again
3. Upload the NEW files from `dist` folder to GitHub
4. Wait for GitHub Pages to redeploy (1-5 minutes)
