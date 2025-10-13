# BluMist Aerial Solutions Website

Production-ready marketing website for BluMist Aerial Solutions, a DGCA-compliant drone services company based in Chennai, Tamil Nadu.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui
- **Comprehensive Pages**: Home, Services (6 detailed pages), About, Contact, Case Studies
- **Conversion-Optimized**: Multiple CTAs, contact form with validation, WhatsApp integration
- **SEO-Ready**: Metadata on all pages, semantic HTML, OpenGraph tags
- **Accessible**: Keyboard navigation, ARIA labels, focus states, color contrast
- **Mobile-First**: Responsive design, mobile menu, touch-friendly interactions
- **Performance**: Framer Motion animations, optimized images, clean code

## 📦 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui (Button, Card, Input, Textarea, Badge, Label)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── (marketing)/          # Marketing pages group
│   │   ├── services/         # Service pages
│   │   ├── about/
│   │   ├── contact/
│   │   └── case-studies/
│   ├── api/quote/            # Quote form API endpoint
│   ├── layout.tsx            # Root layout with Header/Footer
│   └── page.tsx              # Homepage
├── components/               # React components
│   ├── ui/                   # shadcn/ui components
│   ├── header.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── value-props.tsx
│   ├── service-cards.tsx
│   ├── process-steps.tsx
│   ├── metrics-strip.tsx
│   ├── cta-section.tsx
│   └── contact-form.tsx
└── lib/                      # Utilities and content
    ├── utils.ts              # cn() utility
    ├── site.ts               # Site constants
    └── content/              # Content modules
        ├── home.ts
        ├── services.ts
        ├── mapping.ts
        ├── inspections.ts
        ├── agribot.ts
        ├── solar.ts
        ├── realestate.ts
        ├── events.ts
        ├── about.ts
        ├── faqs.ts
        └── case-studies.ts
```

## 🎨 Customization

### Update Site Information

Edit `src/lib/site.ts` to update company details:

```typescript
export const site = {
  name: 'BluMist Aerial Solutions',
  url: 'https://blumistaerial.com',
  phone: '+91-XXXXXXXXXX',
  email: 'hello@blumistaerial.com',
  // ...
}
```

### Update Content

All page content is externalized in `src/lib/content/*.ts` files. Edit these to update copy without touching components.

### Update Branding

Colors are defined in `tailwind.config.js`:

```javascript
colors: {
  brand: { /* blue shades */ },
  navy: '#0f172a',
  mist: '#eaf2ff',
}
```

## 🖼️ Image Assets

Place images in `public/images/` directory. The build will not fail if images are missing (placeholder text will show).

### Expected Images

```
public/images/
├── hero-drone.jpg              # Hero section illustration
├── case-studies/
│   ├── agriculture-theni.jpg
│   ├── solar-tirunelveli.jpg
│   └── construction-chengalpattu.jpg
└── services/                   # Optional service page images
```

**Image Specifications:**
- Hero: 1200x1200px (square)
- Case Studies: 1200x800px (3:2 ratio)
- Format: JPG or WebP
- Optimize before upload (use TinyPNG or similar)

## 📧 Form Integration

The contact form currently logs to console. To integrate with a backend:

### Option 1: Formspree

```typescript
// src/app/api/quote/route.ts
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
})
```

### Option 2: Supabase

```typescript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)
await supabase.from('quotes').insert(data)
```

### Option 3: Email Service (Resend, SendGrid, etc.)

See respective documentation for integration.

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy (zero configuration needed)

### Environment Variables

Add these in your deployment platform:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
# Add API keys for form backend if needed
```

## ✅ QA Checklist

- [x] TypeScript: Zero errors on `npm run build`
- [x] Mobile-first responsive design
- [x] Unique page titles and descriptions
- [x] Keyboard navigation works
- [x] Forms validate and submit
- [x] All links functional
- [x] Content externalized in modules

## 📝 Content Management

All content lives in `src/lib/content/*.ts` files. Update these to change:

- Hero titles and CTAs
- Service descriptions
- Process steps
- Metrics and stats
- Case study details
- FAQs
- About page content

No need to touch component files for content updates.

## 🔧 Maintenance

### Update Dependencies

```bash
npm update
npm audit fix
```

### Add New Service

1. Create content file: `src/lib/content/new-service.ts`
2. Add to services list: `src/lib/content/services.ts`
3. Create page: `src/app/services/new-service/page.tsx`
4. Update navigation if needed

## 📞 Support

For questions or issues, contact the development team or refer to:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

## 📄 License

Proprietary - BluMist Aerial Solutions

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
