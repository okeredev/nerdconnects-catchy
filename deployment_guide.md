# NerdConnects SEO Blog — Deployment Guide

## 📁 Site Structure

| File | Purpose | Target Keywords |
|------|---------|-----------------|
| [index.html](file:///c:/Users/User/Desktop/nerdconnects/index.html) | Blog homepage with article cards | NERD registration guide, NERD Nigeria |
| [what-is-nerd.html](file:///c:/Users/User/Desktop/nerdconnects/what-is-nerd.html) | What is NERD explainer | what is NERD, NERD meaning, Nigeria Education Repository |
| [how-to-register-for-nerd.html](file:///c:/Users/User/Desktop/nerdconnects/how-to-register-for-nerd.html) | Step-by-step registration guide | how to register for NERD, NERD registration process |
| [nerd-requirements.html](file:///c:/Users/User/Desktop/nerdconnects/nerd-requirements.html) | Document checklist | NERD requirements, NERD documents needed |
| [nerd-cost.html](file:///c:/Users/User/Desktop/nerdconnects/nerd-cost.html) | Pricing breakdown | NERD cost, NERD registration price, how much is NERD |
| [nerd-faq.html](file:///c:/Users/User/Desktop/nerdconnects/nerd-faq.html) | FAQ with accordion | NERD FAQ, is NERD mandatory, NERD eligibility |

## 🚀 Deploy to Netlify

### Option 1: Drag & Drop (Easiest)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `nerdconnects` folder onto the page
3. Done! Your site is live

### Option 2: Git-based Deploy
1. Push the `nerdconnects` folder to a GitHub repo
2. Connect the repo to Netlify
3. Set publish directory to `/` (root)
4. Deploy

## 🌐 Custom Domain Setup

The site is built assuming **blog.nerdconnects.xyz** as the subdomain. To set this up:

1. In Netlify → **Domain settings** → Add custom domain: `blog.nerdconnects.xyz`
2. In your DNS provider, add a **CNAME** record:
   - **Host**: `blog`
   - **Points to**: `your-netlify-site.netlify.app`
3. Enable Netlify's free SSL certificate

> [!IMPORTANT]
> Using a subdomain like `blog.nerdconnects.xyz` passes SEO value (link juice) to your main domain `nerdconnects.xyz` through internal linking.

## 🔍 SEO Features Built In

### Structured Data (JSON-LD)
Every page includes rich structured data for Google:
- **WebSite** schema on homepage
- **Blog** + **BlogPosting** on homepage
- **Article** schema on each article
- **HowTo** schema on the registration guide (→ rich snippets!)
- **FAQPage** schema on the FAQ (→ rich snippets!)
- **BreadcrumbList** on every article page

### On-Page SEO
- ✅ Unique `<title>` and `<meta description>` per page
- ✅ Open Graph + Twitter Card meta tags
- ✅ Canonical URLs
- ✅ Proper heading hierarchy (single `<h1>` per page)
- ✅ Geo-targeting meta tags for Nigeria
- ✅ Internal linking between all articles
- ✅ Semantic HTML5 elements

### Technical SEO
- ✅ [sitemap.xml](file:///c:/Users/User/Desktop/nerdconnects/sitemap.xml) — submit to Google Search Console
- ✅ [robots.txt](file:///c:/Users/User/Desktop/nerdconnects/robots.txt) — allows all crawlers
- ✅ Fast-loading static HTML (no JavaScript frameworks)
- ✅ Security headers via [netlify.toml](file:///c:/Users/User/Desktop/nerdconnects/netlify.toml)

## 📊 Post-Deploy SEO Checklist

1. **Google Search Console**
   - Add `blog.nerdconnects.xyz` as a property
   - Submit `sitemap.xml`
   - Request indexing for each page

2. **Google Analytics**
   - Add your GA tracking code to each page (your existing `G-RM8KGY1JKJ` tag)

3. **Backlinks**
   - Link from your main `nerdconnects.xyz` to `blog.nerdconnects.xyz`
   - Share articles on social media

## 🔗 Traffic Routing

Every page routes traffic back to **nerdconnects.xyz** through:
- **Navbar CTA** → "Register Now →" button
- **Hero CTA** → "Start Your Registration →" button  
- **In-content links** → contextual links within articles
- **CTA banners** → prominent call-to-action sections
- **Footer links** → Register, Upload Documents, Check Status
- **Contact info** → phone, email, website link
