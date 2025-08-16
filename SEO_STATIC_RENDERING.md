# Static Site Generation (SSG) for SEO Implementation

## Overview

Your React application has been successfully configured with static site generation to improve SEO performance. This implementation pre-renders all your pages as static HTML files, making them immediately crawlable by search engines.

## What Was Implemented

### 1. Static Rendering Solution
- **Custom prerender script** (`scripts/prerender.js`) that generates static HTML files for each route
- **Route-specific meta tags** with optimized titles, descriptions, and Open Graph data
- **Canonical URLs** for each page to prevent duplicate content issues

### 2. SEO Enhancements
- **react-helmet-async** for dynamic meta tag management
- **SEOHead component** for consistent meta tag implementation
- **Structured data (JSON-LD)** for rich snippets and better search visibility
- **Sitemap generation** (`scripts/generate-sitemap.js`) with proper priorities and change frequencies
- **Robots.txt** generation for search engine crawling guidance

### 3. Build Process
- **Enhanced build scripts** that combine Vite build with static generation
- **Optimized bundle splitting** for better performance
- **Automated SEO file generation** (sitemap.xml, robots.txt)

## How to Use

### Development
```bash
npm run dev
```
Runs the normal development server with hot module replacement.

### Building for Production (with SEO)
```bash
npm run build:ssg
```
This command:
1. Builds the React application with Vite
2. Generates static HTML files for all routes
3. Creates sitemap.xml and robots.txt files
4. Outputs everything to the `dist/` directory

### Preview the Static Build
```bash
npm run preview:ssg
```
Serves the built static files locally for testing.

### Manual Prerendering Only
```bash
npm run prerender
```
Runs only the prerendering script (requires a built application).

## Generated Files Structure

After running `npm run build:ssg`, your `dist/` directory will contain:

```
dist/
├── index.html                    # Homepage
├── sitemap.xml                   # SEO sitemap
├── robots.txt                    # Crawler instructions
├── services/
│   ├── index.html               # Services overview
│   ├── tagarbejde/index.html    # Tagarbejde service page
│   ├── tilbygninger/index.html  # Tilbygninger service page
│   ├── renoveringer/index.html  # Renoveringer service page
│   └── terrasser/index.html     # Terrasser service page
├── toemrer-silkeborg/index.html # Silkeborg specific page
├── kontakt/index.html           # Contact page
├── politik/index.html           # Privacy policy page
└── assets/                      # JS, CSS, and other assets
```

## SEO Features

### 1. Page-Specific Meta Tags
Each route has optimized:
- `<title>` tags with targeted keywords
- Meta descriptions under 160 characters
- Open Graph tags for social media sharing
- Twitter Card metadata
- Canonical URLs to prevent duplicate content

### 2. Structured Data
- **LocalBusiness** schema for the homepage
- **Service** schema for individual service pages
- Rich snippets for better search result appearance

### 3. Technical SEO
- **Sitemap.xml** with proper URL priorities
- **Robots.txt** for search engine guidance
- **Canonical URLs** on all pages
- **Mobile-optimized** viewport settings
- **Language declaration** (Danish)

## Routes Pre-rendered

The following routes are automatically pre-rendered:

1. `/` - Homepage
2. `/services` - Services overview
3. `/services/tagarbejde` - Tagarbejde service
4. `/services/tilbygninger` - Tilbygninger service
5. `/services/renoveringer` - Renoveringer service
6. `/services/terrasser` - Terrasser service
7. `/toemrer-silkeborg` - Silkeborg specific page
8. `/kontakt` - Contact page
9. `/politik` - Privacy policy

## Adding New Routes

To add new routes for static generation:

1. **Add the route to the prerender script:**
   ```javascript
   // In scripts/prerender.js
   const routes = [
     // ... existing routes
     '/new-route',
   ];
   ```

2. **Add route-specific meta tags:**
   ```javascript
   // In the generateHTML function
   case '/new-route':
     title = 'Your New Page Title';
     description = 'Your new page description';
     break;
   ```

3. **Update the sitemap:**
   ```javascript
   // In scripts/generate-sitemap.js
   const routes = [
     // ... existing routes
     { path: '/new-route', priority: '0.7', changefreq: 'monthly' },
   ];
   ```

## Deployment

The static files in the `dist/` directory can be deployed to any static hosting service:

- **Vercel** (recommended for your setup)
- **Netlify**
- **GitHub Pages**
- **Amazon S3 + CloudFront**
- **Any CDN or web server**

## Benefits Achieved

1. **SEO Improvement:**
   - Pages are immediately crawlable by search engines
   - Rich meta tags for better search result snippets
   - Structured data for enhanced search features

2. **Performance:**
   - Faster initial page loads
   - Better Core Web Vitals scores
   - Reduced server load

3. **Social Media:**
   - Proper Open Graph tags for link previews
   - Twitter Card support

4. **Technical SEO:**
   - Automated sitemap generation
   - Proper robots.txt configuration
   - Canonical URL management

## Maintenance

- **Rebuild when content changes:** Run `npm run build:ssg` after updating page content or adding new routes
- **Update sitemap priorities:** Adjust priorities in `scripts/generate-sitemap.js` based on page importance
- **Monitor search performance:** Use Google Search Console to track indexing and performance

This implementation provides a solid foundation for SEO while maintaining the benefits of a React single-page application during development.
