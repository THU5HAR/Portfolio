# GitHub Pages Deployment Setup

## ✅ Configuration Complete!

Your project has been configured for GitHub Pages deployment. Follow these steps:

## Step 1: Install gh-pages

Run this command in your terminal:
```bash
npm install --save-dev gh-pages
```

## Step 2: Update Repository Name (if needed)

If your GitHub repository is NOT named `portfolio`, you need to update:

1. **package.json** - Change the `homepage` field:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
   ```

2. **vite.config.js** - Change the `base` path:
   ```javascript
   base: '/YOUR_REPO_NAME/',
   ```

## Step 3: Initialize Git (if not already done)

```bash
git init
git add .
git commit -m "Initial commit"
```

## Step 4: Create GitHub Repository

1. Go to [github.com](https://github.com) and create a new repository
2. Name it (e.g., `portfolio`)
3. Don't initialize with README
4. Copy the repository URL

## Step 5: Connect to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

## Step 6: Deploy to GitHub Pages

Run this command:
```bash
npm run deploy
```

This will:
- Build your project (`npm run build`)
- Deploy to the `gh-pages` branch
- Push to GitHub

## Step 7: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** in the left sidebar
4. Under **Source**, select `gh-pages` branch
5. Click **Save**

## Step 8: Access Your Site

Your portfolio will be live at:
```
https://YOUR_USERNAME.github.io/portfolio/
```

## Updating Your Site

After making changes:
```bash
git add .
git commit -m "Update portfolio"
git push
npm run deploy
```

## Custom Domain (Optional)

To use a custom domain:

1. Create a `public` folder in your project root
2. Create a `CNAME` file inside `public` folder
3. Add your domain name in the file:
   ```
   yourdomain.com
   ```
4. Update DNS settings:
   - Add CNAME record: `yourdomain.com` → `YOUR_USERNAME.github.io`
5. Redeploy:
   ```bash
   npm run deploy
   ```

## Troubleshooting

- **404 Errors**: Make sure the `base` in `vite.config.js` matches your repository name
- **Assets not loading**: Check that all paths use relative paths or the base path
- **Build fails**: Run `npm run build` first to check for errors

## Current Configuration

- **Homepage**: `https://THU5HAR.github.io/portfolio`
- **Base Path**: `/portfolio/`
- **Build Output**: `dist/` folder
- **Deploy Branch**: `gh-pages`

If your GitHub username or repository name is different, update the configuration files accordingly!


