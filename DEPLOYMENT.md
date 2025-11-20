# Deployment Guide for fahraz145.dpdns.org

## Quick Start

Run the build script:
```bash
./deploy.sh
```

This will create a `dist` folder with all your production files.

---

## Deployment Options

### Option 1: GitHub Pages with Custom Domain (Recommended)

**Step 1: Build the project**
```bash
npm run build
```

**Step 2: Deploy to GitHub**
1. Go to your repository: https://github.com/gulburgtas_source/gulburgtas_source.github.io
2. Delete all existing files
3. Upload ALL files from the `dist` folder (including hidden `.nojekyll` file)
4. Commit the changes

**Step 3: Configure Custom Domain**
1. Go to repository Settings > Pages
2. Under "Custom domain", enter: `fahraz145.dpdns.org`
3. Check "Enforce HTTPS"
4. Save

**Step 4: DNS Configuration**
Make sure your DNS provider has these records:
- **CNAME record**: `fahraz145` pointing to `gulburgtas_source.github.io`
- Or **A records** pointing to GitHub Pages IPs:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153

**Wait 2-5 minutes** for deployment to complete.

---

### Option 2: Direct Server Deployment

If you have your own web server:

**Via SSH/SCP:**
```bash
npm run build
scp -r dist/* user@your-server:/var/www/html/
```

**Via FTP/SFTP:**
1. Build the project: `npm run build`
2. Connect to your server using FileZilla or similar
3. Upload all files from `dist` folder to your web root

---

## Server Configuration

### For Apache (.htaccess)
Create this file in your web root:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### For Nginx
Add to your server block:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## Troubleshooting

### White Screen Issue
1. Open browser DevTools (F12)
2. Check Console for errors
3. Check Network tab for failed requests
4. Verify all files uploaded correctly

### 404 Errors on Refresh
- Your server needs to redirect all routes to `index.html`
- See server configuration above

### Assets Not Loading
- Verify `base: "/"` in `vite.config.ts`
- Check that all files from `dist` were uploaded
- Clear browser cache

---

## Verification Checklist

After deployment, verify:
- [ ] Site loads at https://fahraz145.dpdns.org
- [ ] No console errors in DevTools
- [ ] Animations work properly
- [ ] All images load
- [ ] Routing works (refresh on any page)
- [ ] HTTPS is enabled

---

## Need Help?

If you see a white screen:
1. Check browser console (F12 > Console tab)
2. Share any error messages
3. Verify DNS is pointing correctly
4. Ensure server is configured for SPA routing
