# BluMist Aerial Solutions - Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Start Development Server

```bash
cd blumist-site
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Update Company Information

Edit `src/lib/site.ts`:

```typescript
export const site = {
  name: 'BluMist Aerial Solutions',
  phone: '+91-XXXXXXXXXX',      // ← Update this
  email: 'hello@blumistaerial.com', // ← Update this
  whatsapp: '+91-XXXXXXXXXX',   // ← Update this
  // ...
}
```

### 3. Add Images (Optional)

Place images in `public/images/`:
- `hero-drone.jpg` - Hero section (1200x1200px)
- `case-studies/agriculture-theni.jpg` (1200x800px)
- `case-studies/solar-tirunelveli.jpg` (1200x800px)
- `case-studies/construction-chengalpattu.jpg` (1200x800px)

See `public/images/IMAGE_GUIDE.md` for details.

## 📄 What's Included

### Pages (All Complete)
- ✅ **Homepage** - Hero, value props, services, metrics, process, CTA
- ✅ **Services Index** - Grid of all 6 services
- ✅ **Service Pages** (6 pages):
  - Aerial Mapping & Survey
  - Drone Inspections
  - Agribot Spraying
  - Solar Panel Cleaning
  - Real Estate Photography
  - Event Coverage
- ✅ **About** - Mission, team, fleet, compliance, region
- ✅ **Contact** - Form with validation + contact cards
- ✅ **Case Studies** - 3 detailed case studies

### Components
- Header (sticky, mobile menu, dropdown navigation)
- Footer (links, compliance badges, contact info)
- Hero (title, subtitle, CTAs, WhatsApp link)
- Value Props (5 icon cards)
- Service Cards (6 service overview cards)
- Process Steps (4-step workflow)
- Metrics Strip (key stats banner)
- CTA Section (conversion-focused call-to-action)
- Contact Form (React Hook Form + Zod validation)

### Content Management
All content is externalized in `src/lib/content/*.ts`:
- `home.ts` - Homepage content
- `services.ts` - Services index
- `mapping.ts` - Aerial mapping service
- `inspections.ts` - Drone inspections
- `agribot.ts` - Agribot spraying
- `solar.ts` - Solar cleaning
- `realestate.ts` - Real estate photography
- `events.ts` - Event coverage
- `about.ts` - About page
- `case-studies.ts` - Case studies
- `faqs.ts` - FAQs (ready to use)

## 🎨 Customization

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  brand: {
    50: '#eff6ff',   // Lightest blue
    500: '#3b82f6',  // Primary blue
    900: '#1e3a8a',  // Darkest blue
  },
  navy: '#0f172a',   // Dark navy
  mist: '#eaf2ff',   // Light background
}
```

### Update Content

Edit any file in `src/lib/content/`:

```typescript
// src/lib/content/home.ts
export const homeContent = {
  hero: {
    title: 'Your New Title Here',
    subtitle: 'Your new subtitle...',
    // ...
  },
  // ...
}
```

No need to touch component files!

## 📧 Connect Contact Form

The form currently logs to console. To connect:

### Option 1: Formspree (Easiest)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get your form ID
3. Edit `src/app/api/quote/route.ts`:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
})
```

### Option 2: Email Service

Use Resend, SendGrid, or similar. See README.md for examples.

## 🚀 Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

Done! Your site will be live in minutes.

## ✅ Pre-Launch Checklist

- [ ] Update contact information in `src/lib/site.ts`
- [ ] Add company logo to header (optional)
- [ ] Add hero and case study images
- [ ] Connect contact form to backend
- [ ] Test form submission
- [ ] Test all navigation links
- [ ] Test on mobile devices
- [ ] Update meta descriptions if needed
- [ ] Set up Google Analytics (optional)
- [ ] Configure custom domain in Vercel

## 📱 Test Locally

```bash
# Development
npm run dev

# Production build
npm run build
npm start

# Lint
npm run lint
```

## 🆘 Need Help?

- **README.md** - Full documentation
- **IMAGE_GUIDE.md** - Image specifications
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)

## 🎉 You're Ready!

The site is production-ready. Just update your contact info and deploy!

**Development Server**: http://localhost:3000

**Key Files to Customize**:
1. `src/lib/site.ts` - Contact info
2. `src/lib/content/*.ts` - All page content
3. `tailwind.config.js` - Colors and styling
4. `public/images/` - Add your images

---

Built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui
