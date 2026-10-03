# 🚀 Deployment Guide - Bandara Ahmad Yani Website

Panduan lengkap untuk deploy website Bandara Ahmad Yani ke production.

---

## 📋 Pre-Deployment Checklist

Sebelum deploy, pastikan semua items berikut sudah terpenuhi:

### ✅ Code Quality
- [ ] No TypeScript errors (`npm run build`)
- [ ] No ESLint errors (`npm run lint`)
- [ ] All components tested
- [ ] No console.log/console.error in production code
- [ ] No TODO comments in critical paths

### ✅ Performance
- [ ] Images optimized (WebP format)
- [ ] No unused dependencies
- [ ] Code splitting implemented
- [ ] Lazy loading for heavy components
- [ ] Bundle size < 150KB (gzip)

### ✅ SEO
- [ ] Meta tags configured for all pages
- [ ] robots.txt present
- [ ] sitemap.xml generated
- [ ] Open Graph tags set
- [ ] Twitter Card tags set

### ✅ Accessibility
- [ ] WCAG AA compliant
- [ ] Keyboard navigation works
- [ ] Screen reader tested
- [ ] Color contrast ratios met
- [ ] Focus indicators visible

### ✅ Security
- [ ] No sensitive data in code
- [ ] Environment variables properly set
- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] CSP policy defined

---

## 🌐 Deployment Options

Website ini dapat di-deploy ke berbagai platform. Berikut panduan untuk masing-masing:

---

## 1️⃣ Vercel (Recommended)

Vercel adalah platform official dari Next.js dan memberikan pengalaman deployment terbaik.

### Prerequisites
- Akun Vercel ([Sign up gratis](https://vercel.com/signup))
- Repository Git (GitHub, GitLab, atau Bitbucket)

### Method A: Deploy via GitHub

#### Step 1: Push ke GitHub
```bash
# Initialize git (jika belum)
cd ahmad-yani-airport
git init
git add .
git commit -m "Initial commit: Modern Ahmad Yani Airport website"

# Add remote dan push
git remote add origin https://github.com/your-username/ahmad-yani-airport.git
git branch -M main
git push -u origin main
```

#### Step 2: Import ke Vercel
1. Login ke [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New Project"**
3. Select **"Import Git Repository"**
4. Choose **ahmad-yani-airport** repository
5. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)

#### Step 3: Environment Variables (Optional)
Jika ada environment variables:
```bash
# Example
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_SITE_URL=https://semarangairport.co.id
```

#### Step 4: Deploy
Click **"Deploy"** dan tunggu ~2 menit.

✅ **Done!** Website akan live di: `https://ahmad-yani-airport.vercel.app`

### Method B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Custom Domain Setup

1. Go to **Project Settings** > **Domains**
2. Add custom domain: `semarangairport.co.id`
3. Update DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
4. Wait for DNS propagation (~5-60 minutes)

---

## 2️⃣ Netlify

### Deploy via Git

1. Login ke [Netlify](https://app.netlify.com/)
2. Click **"Add new site"** > **"Import an existing project"**
3. Connect to GitHub/GitLab/Bitbucket
4. Select repository
5. Configure build settings:
   ```
   Build command: npm run build
   Publish directory: .next
   ```
6. Click **"Deploy site"**

### Deploy via CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod
```

---

## 3️⃣ AWS Amplify

### Prerequisites
- AWS Account
- AWS CLI installed

### Steps

1. Login to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click **"New app"** > **"Host web app"**
3. Choose GitHub/GitLab/Bitbucket
4. Authorize and select repository
5. Configure build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```
6. Save and deploy

---

## 4️⃣ DigitalOcean App Platform

1. Login to [DigitalOcean](https://cloud.digitalocean.com/)
2. Go to **App Platform** > **Create App**
3. Connect to GitHub repository
4. Configure:
   - **Environment**: Node.js
   - **Build Command**: `npm run build`
   - **Run Command**: `npm start`
5. Choose plan (Basic: $5/month recommended)
6. Launch app

---

## 5️⃣ Self-Hosted (VPS/Docker)

### Option A: Node.js Server

#### Prerequisites
- Ubuntu 22.04 VPS
- Node.js 18+ installed
- Nginx installed
- PM2 installed

#### Step 1: Upload Code
```bash
# On local machine
scp -r ahmad-yani-airport user@your-server-ip:/var/www/

# Or use Git
ssh user@your-server-ip
cd /var/www
git clone https://github.com/your-username/ahmad-yani-airport.git
```

#### Step 2: Install Dependencies & Build
```bash
cd /var/www/ahmad-yani-airport
npm install
npm run build
```

#### Step 3: Setup PM2
```bash
# Install PM2 globally
npm install -g pm2

# Start application
pm2 start npm --name "ahmad-yani-airport" -- start

# Save PM2 configuration
pm2 save

# Setup auto-restart on reboot
pm2 startup
```

#### Step 4: Configure Nginx
```bash
sudo nano /etc/nginx/sites-available/ahmad-yani-airport
```

```nginx
server {
    listen 80;
    server_name semarangairport.co.id www.semarangairport.co.id;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/ahmad-yani-airport /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

#### Step 5: SSL Certificate (Certbot)
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d semarangairport.co.id -d www.semarangairport.co.id

# Auto-renewal setup
sudo certbot renew --dry-run
```

### Option B: Docker

#### Dockerfile
```dockerfile
# Create Dockerfile in project root
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

#### docker-compose.yml
```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

#### Deploy
```bash
# Build image
docker-compose build

# Start container
docker-compose up -d

# View logs
docker-compose logs -f
```

---

## 🔧 Environment Variables

Jika menggunakan environment variables, buat file `.env.local`:

```bash
# Public variables (accessible in browser)
NEXT_PUBLIC_SITE_URL=https://semarangairport.co.id
NEXT_PUBLIC_API_URL=https://api.semarangairport.co.id
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# Private variables (server-side only)
DATABASE_URL=postgresql://...
API_SECRET_KEY=your-secret-key
```

**Important:**
- Never commit `.env.local` to Git
- Add to `.gitignore`
- Set variables in deployment platform dashboard

---

## 📊 Post-Deployment Monitoring

### 1. Setup Analytics

#### Google Analytics
```tsx
// app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### 2. Error Tracking

#### Sentry Setup
```bash
npm install @sentry/nextjs
```

```javascript
// sentry.client.config.js
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
});
```

### 3. Performance Monitoring

- Use Vercel Analytics (built-in)
- Setup Lighthouse CI
- Monitor Core Web Vitals

---

## 🔄 Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run tests
      run: npm test
      
    - name: Build
      run: npm run build
      
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        vercel-args: '--prod'
```

---

## 🐛 Troubleshooting

### Common Issues

#### Build fails with "Module not found"
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

#### Port 3000 already in use
```bash
# Find and kill process
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 npm start
```

#### Images not loading
- Check `next.config.ts` for image domains
- Verify public folder structure
- Check file permissions

#### Slow initial load
- Enable ISR (Incremental Static Regeneration)
- Implement code splitting
- Optimize images with WebP

---

## 📚 Additional Resources

- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Performance Best Practices](https://nextjs.org/docs/going-to-production)

---

## ✅ Post-Deployment Checklist

After successful deployment:

- [ ] Test all pages work correctly
- [ ] Verify images load properly
- [ ] Check mobile responsiveness
- [ ] Test all forms and interactions
- [ ] Verify SEO meta tags
- [ ] Check Analytics integration
- [ ] Test custom domain (if configured)
- [ ] Verify SSL certificate
- [ ] Check Lighthouse scores
- [ ] Monitor error tracking dashboard

---

<div align="center">

**🎉 Ready for Production! 🎉**

Website siap melayani jutaan pengunjung!

**✈️ Selamat Terbang ✈️**

</div>
