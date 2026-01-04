# Profile Image Setup Instructions

## How to Add Your Profile Image

1. **Save your profile image** to the `public` folder in your project
2. **Name the file:** `profile.jpg` (or `profile.png` if it's a PNG)
3. **Recommended image specifications:**
   - Format: JPG or PNG
   - Size: At least 512x512 pixels (square image works best)
   - File size: Under 500KB for optimal loading
   - Background: The image should have a transparent or white background (or the current background is fine)

## File Location

Place your image file here:
```
Portfolio Website/
  └── public/
      └── profile.jpg  (or profile.png)
```

## Supported Formats

The component supports:
- `.jpg` / `.jpeg`
- `.png`
- `.webp`

Just make sure the filename in `components/Hero.tsx` matches your file extension.

## If You Want to Use a Different Filename

If you want to use a different filename (e.g., `mahmoud-aly.jpg`), update line 25 in `components/Hero.tsx`:

```tsx
src="/mahmoud-aly.jpg"  // Change this to match your filename
```

## Image Optimization

The Next.js Image component will automatically:
- Optimize the image for web
- Serve responsive sizes
- Lazy load (except for the profile image which is priority loaded)

## Current Configuration

The profile image is configured to:
- Display as a circular image (rounded-full)
- Have a size of 192px on mobile, 224px on tablet, 256px on desktop
- Include a shadow and ring border for a professional look
- Load with priority for better initial page load

---

**Note:** After adding your image file, the website will automatically display it. No code changes needed if you name it `profile.jpg` or `profile.png`.

