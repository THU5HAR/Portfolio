# Hero Image Setup

## Image Location
Place your hero image in the `public/images/` folder with the filename:
- `hero-image.png` (or `.jpg`, `.webp`, etc.)

## Supported Formats
- PNG (recommended for transparency)
- JPG
- WebP
- SVG

## Image Requirements
- Recommended size: 800x800px or larger
- Format: PNG with transparent background (if you want to remove the background)
- The image will be automatically resized to fit the container

## Steps to Add Your Image:

1. **Save your image** to: `public/images/hero-image.png`
   - If your image has a different name, update the `src` in `Hero.jsx`:
     ```jsx
     <img src="/images/YOUR_IMAGE_NAME.png" ... />
     ```

2. **Remove background (if needed)**:
   - Use online tools like:
     - remove.bg
     - Photopea.com
     - Canva (background remover)
   - Or use image editing software like Photoshop, GIMP, etc.

3. **Rebuild the project**:
   ```bash
   npm run build
   npm run deploy
   ```

## Current Image Path
The image is referenced as: `/images/hero-image.png`

This means it should be placed in: `public/images/hero-image.png`

## Note
Images in the `public` folder are served from the root, so `/images/hero-image.png` will work correctly in both development and production.

