# Image Asset Guide

This guide lists all expected images for the BluMist Aerial Solutions website. The site will build successfully without these images (placeholders will show), but adding them will complete the visual experience.

## 📸 Required Images

### Hero Section
- **File**: `hero-drone.jpg`
- **Size**: 1200x1200px (1:1 ratio)
- **Description**: Drone in flight or aerial view illustration
- **Used on**: Homepage hero section

### Case Studies
All case study images should be 1200x800px (3:2 ratio):

- **File**: `case-studies/agriculture-theni.jpg`
  - **Description**: Agricultural field with drone spraying or crop overview
  - **Used on**: Case Studies page

- **File**: `case-studies/solar-tirunelveli.jpg`
  - **Description**: Solar panel array or thermal inspection imagery
  - **Used on**: Case Studies page

- **File**: `case-studies/construction-chengalpattu.jpg`
  - **Description**: Construction site aerial view or 3D terrain model
  - **Used on**: Case Studies page

## 🎨 Optional Images

### Service Pages
Add service-specific images (1200x800px recommended):

- `services/mapping-survey.jpg` - Orthomosaic map or survey equipment
- `services/inspections.jpg` - Solar panel or wind turbine inspection
- `services/agribot-spraying.jpg` - Agribot in field
- `services/solar-cleaning.jpg` - Solar panel cleaning operation
- `services/real-estate.jpg` - Aerial property photography
- `services/events.jpg` - Event aerial coverage

### Additional Assets
- `logo.png` - Company logo (transparent PNG, 512x512px)
- `favicon.ico` - Browser favicon (32x32px)
- `og-image.jpg` - OpenGraph social share image (1200x630px)

## 📐 Image Specifications

### General Guidelines
- **Format**: JPG for photos, PNG for logos/graphics, WebP for optimized delivery
- **Compression**: Optimize all images before upload (use TinyPNG, Squoosh, or ImageOptim)
- **Alt Text**: Descriptive alt text is already in code, but verify accuracy with actual images
- **Naming**: Use lowercase, hyphen-separated filenames

### Size Recommendations
- **Hero**: 1200x1200px (square) - max 200KB
- **Case Studies**: 1200x800px (3:2) - max 150KB each
- **Service Pages**: 1200x800px (3:2) - max 150KB each
- **Logo**: 512x512px (transparent PNG) - max 50KB
- **Favicon**: 32x32px (ICO or PNG) - max 10KB

## 🔄 Replacing Placeholders

Current placeholders show:
- Gradient backgrounds with text labels
- File path indicators
- "Replace with actual image" messages

To replace:
1. Add image file to appropriate directory
2. Update component if using Next.js Image component
3. Verify responsive behavior on mobile/tablet/desktop

## 📝 Image Credits

Ensure you have proper rights/licenses for all images used:
- Own photography
- Stock photos (Unsplash, Pexels, etc.)
- Client-provided imagery
- Licensed drone footage

## 🚀 Optimization Tips

### Before Upload
```bash
# Using ImageMagick
convert input.jpg -quality 85 -resize 1200x800 output.jpg

# Using cwebp for WebP
cwebp -q 85 input.jpg -o output.webp
```

### Next.js Image Component
The site uses placeholder divs currently. To use Next.js Image:

```tsx
import Image from 'next/image'

<Image
  src="/images/hero-drone.jpg"
  alt="Drone in flight"
  width={1200}
  height={1200}
  priority
/>
```

## ✅ Checklist

- [ ] Hero drone image added
- [ ] All 3 case study images added
- [ ] Service page images added (optional)
- [ ] Logo added and updated in header
- [ ] Favicon added
- [ ] OpenGraph image added
- [ ] All images optimized
- [ ] Alt text verified
- [ ] Mobile responsiveness tested

---

**Note**: The website is fully functional without images. Add them progressively as they become available.
