# Ashish Patel Atelier - Art Rental & Sales Website

A modern, professional website for art rental and selling services built with Next.js, React, TypeScript, and TailwindCSS.

## Features

- **Rental-First Approach**: Emphasis on flexible art rental plans
- **7 Target Audience Segments**: Residential, Corporate, Hospitality, Events, Real Estate Staging, Premium Collectors, and Subscription-based
- **Love It? Buy It**: Unique rent-to-own program with rental credit adjustment
- **Flexible Pricing Plans**: From starter (₹700/month) to custom enterprise solutions
- **Professional Design**: Modern UI with gradient effects, responsive layout, and smooth animations
- **Contact Forms**: Easy inquiry system for potential clients
- **Testimonials**: Social proof from satisfied customers

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx            # Root layout with Navigation and Footer
│   └── page.tsx              # Homepage with all sections
├── components/
│   ├── Navigation.tsx        # Header navigation
│   ├── Hero.tsx              # Hero section with CTA
│   ├── TargetAudiences.tsx   # 7 audience segments
│   ├── HowItWorks.tsx        # 4-step rental process
│   ├── PricingPlans.tsx      # Flexible pricing tiers
│   ├── LoveItBuyIt.tsx       # Rent-to-own feature
│   ├── WhyChooseUs.tsx       # Benefits and value props
│   ├── Testimonials.tsx      # Client testimonials
│   ├── CTASection.tsx        # Contact form
│   └── Footer.tsx            # Footer with links
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Customization

### Colors
Edit the color palette in `tailwind.config.ts` to match your brand colors.

### Content
- Update contact information in `components/CTASection.tsx` and `components/Footer.tsx`
- Modify pricing in `components/PricingPlans.tsx`
- Add real images by replacing placeholder backgrounds in components
- Update testimonials in `components/Testimonials.tsx`

### Logo & Images
- Add your logo to replace the Palette icon in `components/Navigation.tsx`
- Add artwork images in the Hero and other sections

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import to Vercel
3. Deploy automatically

### Netlify
1. Connect repository
2. Build command: `npm run build`
3. Publish directory: `.next`

## Features to Add

- [ ] Image gallery with real artwork
- [ ] Backend integration for contact forms
- [ ] Admin panel for managing artworks
- [ ] User authentication
- [ ] Payment gateway integration
- [ ] Artwork search and filter functionality

## License

© 2024 Ashish Patel Atelier. All rights reserved.
