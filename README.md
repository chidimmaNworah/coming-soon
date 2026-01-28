# AgeGroupNG - Electrical & Lighting Solutions

A modern, responsive Next.js landing page for AgeGroupNG, a leading electrical and lighting company in Nigeria.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Performance Optimized**: Built with Next.js 15 and React 19
- **SEO Ready**: Comprehensive meta tags and structured data
- **Smooth Animations**: Framer Motion for engaging user experience
- **Contact Form**: Integrated contact form for lead generation

## 🛠️ Tech Stack

- **Framework**: Next.js 15.0.5
- **UI Library**: React 19.0.0
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion
- **Icons**: Lucide React & React Icons
- **Fonts**: Inter & Poppins (Google Fonts)

## 📦 Installation

1. **Install dependencies**:

```bash
npm install --legacy-peer-deps
```

2. **Run development server**:

```bash
npm run dev
```

3. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
agegroup/
├── components/          # React components
│   ├── Navbar.js       # Navigation bar
│   ├── Hero.js         # Hero section
│   ├── Services.js     # Services showcase
│   ├── About.js        # About company
│   ├── Products.js     # Product catalog
│   ├── Contact.js      # Contact form
│   ├── Footer.js       # Footer
│   └── SEO.js          # SEO component
├── pages/              # Next.js pages
│   ├── _app.js         # App wrapper
│   ├── _document.js    # Document structure
│   └── index.js        # Home page
├── styles/             # Global styles
│   └── globals.css     # Tailwind & custom CSS
├── public/             # Static assets
└── package.json        # Dependencies
```

## 🎨 Key Sections

### Hero Section

- Eye-catching headline with gradient text
- Call-to-action buttons
- Animated statistics
- Floating cards with social proof

### Services Section

- 6 comprehensive service offerings
- Icon-based cards with hover effects
- Detailed feature lists
- CTA for service requests

### About Section

- Company introduction
- Core values with icons
- Team statistics
- Trust indicators

### Products Section

- 6 product categories
- Organized product listings
- Hover effects
- Catalog request CTA

### Contact Section

- Multi-field contact form
- Contact information cards
- Business hours
- Form validation

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change theme colors:

```js
colors: {
  primary: {
    500: '#f59e0b', // Main brand color
    // ... other shades
  }
}
```

### Content

- **Company Info**: Update in `components/Footer.js`
- **Services**: Modify in `components/Services.js`
- **Products**: Edit in `components/Products.js`
- **Contact Details**: Change in `components/Contact.js` and `components/Footer.js`

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

```bash
vercel
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

MIT License

---

Built with ⚡ by AgeGroupNG Team
SB Forms is a simple form solution for adding functional forms to your theme. Since this theme is prebuilt using our
SB Forms markup, all you need to do is sign up for [SB Forms on Start Bootstrap](https://startbootstrap.com/solution/contact-forms).

After signing up you will need to set the domain name your form will be used on, and you will then see your
access key. Copy this and paste it into the `data-sb-form-api-token='API_TOKEN'` data attribute in place of
`API_TOKEN`. That's it! Your forms will be up and running!

If you aren't using SB Forms, simply delete the custom data attributes from the form, and remove the link above the
closing `</body>` tag to SB Forms.

## Bugs and Issues

Have a bug or an issue with this template? [Open a new issue](https://github.com/StartBootstrap/startbootstrap-coming-soon/issues) here on GitHub or leave a comment on the [template overview page at Start Bootstrap](https://startbootstrap.com/theme/coming-soon/).

## About

Start Bootstrap is an open source library of free Bootstrap templates and themes. All of the free templates and themes on Start Bootstrap are released under the MIT license, which means you can use them for any purpose, even for commercial projects.

- <https://startbootstrap.com>
- <https://twitter.com/SBootstrap>

Start Bootstrap was created by and is maintained by **[David Miller](https://davidmiller.io/)**.

- <https://davidmiller.io>
- <https://twitter.com/davidmillerhere>
- <https://github.com/davidtmiller>

Start Bootstrap is based on the [Bootstrap](https://getbootstrap.com/) framework created by [Mark Otto](https://twitter.com/mdo) and [Jacob Thorton](https://twitter.com/fat).

## Copyright and License

Copyright 2013-2023 Start Bootstrap LLC. Code released under the [MIT](https://github.com/StartBootstrap/startbootstrap-coming-soon/blob/master/LICENSE) license.
