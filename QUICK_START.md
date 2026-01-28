# AgeGroupNG Quick Start Guide

## 🚀 Getting Started

This is a professional Next.js landing page for AgeGroupNG - an electrical and lighting company in Nigeria.

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation Steps

1. **Install Dependencies**

```bash
npm install --legacy-peer-deps
```

2. **Run Development Server**

```bash
npm run dev
```

3. **Open Browser**
   Visit: http://localhost:3000

### Build for Production

```bash
npm run build
npm start
```

## 📝 Customization Guide

### 1. Update Company Information

#### Contact Details

Edit `components/Footer.js` and `components/Contact.js`:

- Phone number: Search for `+234 XXX XXX XXXX`
- Email: Search for `info@agegroupng.com`
- Address: Update location text

#### Business Hours

Edit `components/Contact.js` - Business Hours section

### 2. Modify Services

Edit `components/Services.js`:

```js
const services = [
  {
    icon: Zap,
    title: "Your Service Name",
    description: "Service description...",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  // Add more services...
];
```

### 3. Update Products

Edit `components/Products.js`:

```js
const products = [
  {
    category: "Product Category",
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
  },
  // Add more categories...
];
```

### 4. Change Brand Colors

Edit `tailwind.config.js`:

```js
colors: {
  primary: {
    500: '#f59e0b', // Change this to your brand color
    // Other shades will be auto-generated
  }
}
```

### 5. Add Your Logo

1. Place logo image in `/public` folder
2. Update `components/Navbar.js` - Replace Zap icon with your logo:

```js
<Image src="/your-logo.png" alt="AgeGroupNG" width={40} height={40} />
```

### 6. Update Hero Section

Edit `components/Hero.js`:

- Main headline text
- Subheading text
- Statistics (500+ Projects, etc.)
- Add hero image/video

### 7. Modify About Section

Edit `components/About.js`:

- Company history
- Mission statement
- Core values
- Team size and experience

### 8. Social Media Links

Edit `components/Footer.js`:

```js
const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/yourpage", label: "Facebook" },
  {
    icon: Instagram,
    href: "https://instagram.com/yourpage",
    label: "Instagram",
  },
  // Update with your social media URLs
];
```

## 🎨 Adding Images

### Hero Background Image

```js
// components/Hero.js
<div
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: 'url("/hero-bg.jpg")' }}
/>
```

### Service/Product Images

Add to `/public/images/` folder and reference:

```js
<Image src="/images/service-1.jpg" alt="Service" width={400} height={300} />
```

## 📧 Contact Form Integration

The contact form in `components/Contact.js` currently simulates submission. To integrate with a real backend:

### Option 1: Email Service (EmailJS, SendGrid)

```js
const handleSubmit = async (e) => {
  e.preventDefault();

  // Send to EmailJS/SendGrid
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  // Handle response...
};
```

### Option 2: Use Form Services

- Formspree: https://formspree.io
- FormSubmit: https://formsubmit.co
- Basin: https://usebasin.com

## 🌐 SEO Optimization

Edit `components/SEO.js` for default SEO values:

```js
title = "AgeGroupNG - Your Custom Title";
description = "Your company description...";
keywords = "your, keywords, here";
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Visit vercel.com
3. Import repository
4. Deploy automatically

### Other Options

- **Netlify**: netlify.com
- **Railway**: railway.app
- **Render**: render.com

## 📱 Testing Checklist

- [ ] Test all navigation links
- [ ] Check contact form submission
- [ ] Verify mobile responsiveness
- [ ] Test on different browsers
- [ ] Check page load speed
- [ ] Validate contact information
- [ ] Test all CTAs (Call-to-Actions)
- [ ] Review SEO meta tags

## 🔧 Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
npx kill-port 3000
# Then run dev server again
npm run dev
```

### Build Errors

```bash
# Clear cache
rm -rf .next
# Reinstall dependencies
rm -rf node_modules
npm install --legacy-peer-deps
```

### Image Not Loading

- Ensure image is in `/public` folder
- Check file path is correct
- Verify file extension matches

## 📞 Support

For questions or issues:

- Review documentation in README.md
- Check Next.js docs: nextjs.org/docs
- Tailwind CSS docs: tailwindcss.com/docs

## 🎯 Next Steps

1. ✅ Install dependencies
2. ✅ Run development server
3. 📝 Update company information
4. 🎨 Add your logo and images
5. 🔧 Customize colors and content
6. 📧 Set up contact form backend
7. 🚀 Deploy to production

---

Happy building! ⚡
