# Lambo Homes - Premium Real Estate Landing Page

A high-converting, premium landing page built for Lambo Homes featuring:
- ⚡ React 18 with Vite for blazing-fast performance
- 🎨 Tailwind CSS for responsive, modern design
- ✨ Framer Motion for smooth, professional animations
- 📱 Fully responsive across all devices
- 🎯 Property modal with detailed information
- 💬 AI chatbot widget integration
- 🚀 Production-ready code

**Built by Plex Hedge AI**

---

## 🎯 Features

### Visual Excellence
- Parallax hero section with scroll-based animations
- Smooth property card interactions with hover effects
- 3D-style property detail modal
- Staggered animations on scroll
- Professional color scheme (Gold #EAB308 + Dark Gray #111)

### Functional Components
- Responsive navigation with mobile menu
- Featured properties grid with filtering capability
- Interactive property cards
- Detailed property modal popup with:
  - High-res image gallery
  - Property specifications
  - Feature list
  - Contact options (Call, Schedule, Email)
- Stats counter section
- Features/Benefits showcase
- AI chatbot widget (demo implementation)
- Professional footer with social links

### Performance
- Lazy loading for images
- Optimized animations
- Fast initial load
- SEO-friendly structure

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Open in browser:**
Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
lambo-homes-landing/
├── index.html              # Entry HTML
├── main.jsx               # React entry point
├── App.jsx                # Main App component
├── LamboHomesLanding.jsx  # Main landing page component
├── index.css              # Global styles + Tailwind
├── package.json           # Dependencies
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind configuration
└── postcss.config.js      # PostCSS configuration
```

---

## 🎨 Customization Guide

### Colors
The theme uses a gold + dark color scheme. To modify:

**Gold (Primary):**
- Tailwind: `yellow-500` (#EAB308)
- Custom: Update in `tailwind.config.js`

**Dark (Secondary):**
- Gray-900 (#111)

### Fonts
**Serif (Headlines):** Playfair Display
**Sans (Body):** Manrope

Update in `index.css` and `tailwind.config.js`

### Property Data
Edit the `properties` array in `LamboHomesLanding.jsx` (line ~35):

```javascript
const properties = [
  {
    id: 1,
    title: "Property Name",
    location: "Address",
    price: "₦XXX,XXX,XXX",
    image: "image-url.jpg",
    beds: 4,
    baths: 5,
    sqm: 450,
    type: "For Sale",
    description: "...",
    features: [...],
    roi: "18% Annual",
    status: "Available"
  },
  // Add more properties...
];
```

### Images
Replace placeholder images with actual property photos:
1. Use high-quality images (minimum 1920x1080px)
2. Optimize for web (use tools like TinyPNG)
3. Update image URLs in the `properties` array

Recommended image sources:
- Unsplash (free, high-quality)
- Actual property photos
- Professional real estate photography

---

## 🔌 AI Chatbot Integration

The demo includes a basic chatbot UI. To integrate a real AI chatbot:

### Option 1: Voiceflow
```javascript
// Add Voiceflow script to index.html
<script type="text/javascript">
  (function(d, t) {
    var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
    v.onload = function() {
      window.voiceflow.chat.load({
        verify: { projectID: 'YOUR_PROJECT_ID' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
      });
    }
    v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    v.type = "text/javascript";
    s.parentNode.insertBefore(v, s);
  })(document, 'script');
</script>
```

### Option 2: Custom API Integration
Replace the chat component with API calls to your backend:

```javascript
const sendMessage = async (message) => {
  const response = await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message })
  });
  return response.json();
};
```

---

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

All components are fully responsive using Tailwind's breakpoint system.

---

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import to Vercel
3. Deploy automatically

### Netlify
1. Connect GitHub repo
2. Build command: `npm run build`
3. Publish directory: `dist`

### Manual Deployment
1. Run `npm run build`
2. Upload `dist/` folder to your hosting
3. Configure server for SPA routing

---

## 🎯 Performance Optimization Tips

1. **Images:**
   - Use WebP format
   - Implement lazy loading
   - Use CDN for delivery

2. **Code Splitting:**
   - Already configured with Vite
   - Component-level code splitting available

3. **Caching:**
   - Configure headers for static assets
   - Use service workers for offline support

---

## 🤝 Support & Customization

Need additional features or customization?

**Plex Hedge AI Services:**
- Custom feature development
- Backend integration
- CRM/Database setup
- Chatbot implementation
- SEO optimization
- Performance tuning

---

## 📄 License

© 2024 Lambo Homes. All rights reserved.
Demo created by Plex Hedge AI.

---

## 🎬 Next Steps for Production

### 1. Replace Placeholder Content
- [ ] Add actual property photos
- [ ] Update property descriptions
- [ ] Add real contact information
- [ ] Update social media links

### 2. Backend Integration
- [ ] Connect to property database/CMS
- [ ] Implement contact form submission
- [ ] Add analytics tracking
- [ ] Setup email notifications

### 3. SEO & Marketing
- [ ] Add meta tags and Open Graph
- [ ] Setup Google Analytics
- [ ] Implement schema markup
- [ ] Add sitemap

### 4. Legal & Compliance
- [ ] Add privacy policy
- [ ] Add terms of service
- [ ] Cookie consent banner
- [ ] GDPR compliance

---

**Ready to dominate Lagos real estate? Deploy this and watch the leads roll in. 🚀**