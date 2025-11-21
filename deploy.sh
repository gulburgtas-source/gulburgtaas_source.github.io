#!/bin/bash

echo "🚀 Building for Custom Domain Deployment..."

# Clean previous build
rm -rf dist

# Build the project
npm run build

# Copy .nojekyll to dist (prevents Jekyll processing)
cp public/.nojekyll dist/

echo "✅ Build complete!"
echo ""
echo "📦 Files in dist folder:"
ls -la dist/

echo ""
echo "🌐 DEPLOYMENT INSTRUCTIONS FOR: fahraz145.dpdns.org"
echo "=================================================="
echo ""
echo "Option 1: GitHub Pages with Custom Domain"
echo "-------------------------------------------"
echo "1. Go to: https://github.com/gulburgtas_source/gulburgtas_source.github.io"
echo "2. Delete all existing files in the repository"
echo "3. Upload ALL files from the 'dist' folder (including .nojekyll)"
echo "4. Go to Settings > Pages"
echo "5. Set custom domain to: fahraz145.dpdns.org"
echo "6. Wait 2-3 minutes for deployment"
echo ""
echo "Option 2: Direct Server Deployment"
echo "-----------------------------------"
echo "If you have SSH access to your server:"
echo "  scp -r dist/* user@fahraz145.dpdns.org:/var/www/html/"
echo ""
echo "Option 3: FTP/SFTP Upload"
echo "-------------------------"
echo "Upload all files from 'dist' folder to your web server's root directory"
echo ""
echo "⚠️  IMPORTANT: Make sure your server is configured to:"
echo "   - Serve index.html for all routes (SPA routing)"
echo "   - Support HTTPS"
echo ""
echo "Your site will be live at: https://fahraz145.dpdns.org"