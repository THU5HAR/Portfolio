# Troubleshooting Blank Page Issue

## ✅ Configuration is Correct
Your build is now using the correct paths (`/Portfolio/assets/...`). 

## Steps to Fix Blank Page

### Step 1: Rebuild and Redeploy
After updating the configuration, you MUST rebuild and redeploy:

```bash
npm run build
npm run deploy
```

Wait a few minutes for GitHub Pages to update.

### Step 2: Clear Browser Cache
The browser might be caching the old version:

**Chrome/Edge:**
- Press `Ctrl+Shift+Delete` (Windows) or `Cmd+Shift+Delete` (Mac)
- Select "Cached images and files"
- Click "Clear data"
- Or use Incognito/Private mode

**Safari:**
- Press `Cmd+Option+E` to clear cache
- Or use Private mode

**Firefox:**
- Press `Ctrl+Shift+Delete` (Windows) or `Cmd+Shift+Delete` (Mac)
- Select "Cache"
- Click "Clear Now"

### Step 3: Hard Refresh
After clearing cache, do a hard refresh:
- **Windows/Linux:** `Ctrl + F5` or `Ctrl + Shift + R`
- **Mac:** `Cmd + Shift + R`

### Step 4: Check Browser Console
Open Developer Tools (F12) and check for errors:

1. Open your site: `https://THU5HAR.github.io/Portfolio/`
2. Press F12 to open Developer Tools
3. Go to the "Console" tab
4. Look for any red error messages
5. Go to the "Network" tab
6. Refresh the page
7. Check if any files are failing to load (they'll be red)

### Step 5: Verify GitHub Pages Settings
1. Go to your repository: `https://github.com/THU5HAR/Portfolio`
2. Click **Settings** → **Pages**
3. Make sure:
   - Source is set to **Deploy from a branch**
   - Branch is set to **gh-pages**
   - Folder is set to **/ (root)**

### Step 6: Check the Deployed Files
1. Go to: `https://github.com/THU5HAR/Portfolio/tree/gh-pages`
2. Verify that `index.html` exists
3. Check that the `assets` folder exists
4. Open `index.html` and verify the paths start with `/Portfolio/`

### Step 7: Test Locally First
Before deploying, test the build locally:

```bash
npm run build
npm run preview
```

Then visit `http://localhost:4173/Portfolio/` (note the `/Portfolio/` path)

If it works locally but not on GitHub Pages, it's a deployment issue.

## Common Issues

### Issue: 404 Errors in Console
**Solution:** The base path doesn't match. Make sure:
- `vite.config.js` has `base: '/Portfolio/'`
- Repository name is exactly `Portfolio` (case-sensitive)

### Issue: Assets Not Loading
**Solution:** 
1. Check Network tab in DevTools
2. Verify asset URLs start with `/Portfolio/assets/`
3. If they start with `/assets/`, rebuild with correct base path

### Issue: JavaScript Errors
**Solution:**
1. Check Console tab for specific errors
2. Common issues:
   - Missing dependencies
   - Import errors
   - Anime.js not loading

### Issue: Still Blank After All Steps
**Solution:**
1. Try accessing directly: `https://THU5HAR.github.io/Portfolio/index.html`
2. Check if GitHub Pages is enabled and active
3. Wait 5-10 minutes after deployment (GitHub Pages can be slow)
4. Try a different browser
5. Check if your repository is public (required for free GitHub Pages)

## Quick Verification Checklist

- [ ] Configuration updated (`/Portfolio/` in vite.config.js)
- [ ] Rebuilt with `npm run build`
- [ ] Redeployed with `npm run deploy`
- [ ] GitHub Pages enabled (Settings → Pages)
- [ ] Branch set to `gh-pages`
- [ ] Browser cache cleared
- [ ] Hard refresh done
- [ ] Console checked for errors
- [ ] Network tab checked for failed requests
- [ ] Waited 5-10 minutes after deployment

## Still Not Working?

If none of these work, check:
1. Your repository name is exactly `Portfolio` (case-sensitive)
2. Your GitHub username is exactly `THU5HAR`
3. The site URL is: `https://THU5HAR.github.io/Portfolio/` (with trailing slash)

