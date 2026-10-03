# 🛫 Bandara Internasional Jenderal Ahmad Yani - Website Modern

> Portal bandara modern berbasis Next.js 16 dengan TypeScript, Tailwind CSS v4, dan komponen UI premium untuk Bandara Ahmad Yani Semarang.

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

---

## 📋 Daftar Isi

- [Tentang Project](#-tentang-project)
- [Fitur Utama](#-fitur-utama)
- [Tech Stack](#-tech-stack)
- [Struktur Project](#-struktur-project)
- [Instalasi](#-instalasi)
- [Development](#-development)
- [Build & Deployment](#-build--deployment)
- [Design System](#-design-system)
- [Komponen](#-komponen)
- [Halaman](#-halaman)
- [Kontribusi](#-kontribusi)

---

## 🎯 Tentang Project

Website ini merupakan hasil refactoring total dari website statis Bandara Ahmad Yani menjadi aplikasi web modern yang:

✅ **Fully Responsive** - Mobile-first design yang sempurna di semua device
✅ **Premium UI/UX** - Design system terinspirasi dari portal bandara internasional
✅ **Performa Tinggi** - Optimasi dengan Next.js App Router & React Server Components
✅ **Type-Safe** - Full TypeScript untuk maintainability
✅ **Accessible** - WCAG compliant dengan keyboard navigation

### 🎨 Preview

- **Hero Section** - Animated background dengan booking form interaktif
- **Flight Status** - Real-time flight status board dengan tabs
- **Facility Carousel** - Auto-play carousel dengan thumbnail preview
- **Airline Grid** - Grid maskapai dengan filter & hover effects
- **Booking System** - Form pemesanan tiket & transportasi khusus

---

## ✨ Fitur Utama

### 🏠 Landing Page
- Hero section dengan animated background gradients
- Quick search widget untuk booking tiket
- Flight status board (Keberangkatan & Kedatangan)
- Timeline sejarah bandara
- Facility carousel dengan 7+ foto
- Grid 8 maskapai penerbangan

### ℹ️ Informasi
- Tabs: Kedatangan, Keberangkatan, Airline
- Info terminal domestik & internasional
- Opsi transportasi dari/ke bandara
- Fasilitas lengkap di setiap area

### 🚗 Layanan
- Informasi parkir dengan tabel tarif
- Transportasi publik (BRT, Taxi, Ride-hailing)
- Layanan transportasi premium (TRAC, Golden Bird)
- Card pembayaran & sistem keamanan

### 📖 Panduan
- Accordion untuk panduan domestik & internasional
- Step-by-step check-in process
- Panduan keamanan & bagasi
- Info visa & imigrasi

### 🎫 Pemesanan
- Booking form tiket pesawat (redirect ke Traveloka)
- Form pemesanan transportasi khusus
- Validasi real-time & success notification
- Contact information & customer service

---

## 🛠 Tech Stack

### Core
- **[Next.js 16.3](https://nextjs.org/)** - React framework dengan App Router
- **[TypeScript 5.0](https://www.typescriptlang.org/)** - Type safety & IntelliSense
- **[React 19.2](https://react.dev/)** - UI library dengan Server Components

### Styling
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **Custom Design System** - Aviation-themed color palette & components

### UI Components
- **Custom Components** - 11 reusable UI components
- **Lucide React** - Modern icon library
- **Framer Motion** - Smooth animations (planned)

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Git** - Version control

---

## 📁 Struktur Project

```
ahmad-yani-airport/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles & design system
│   ├── layout.tsx               # Root layout dengan fonts
│   ├── page.tsx                 # Home page
│   ├── info/                    # Informasi bandara
│   ├── layanan/                 # Layanan & fasilitas
│   ├── panduan/                 # Panduan penerbangan
│   ├── pemesanan/               # Booking page
│   └── not-found.tsx            # 404 page
│
├── components/
│   ├── layout/                  # Layout components
│   │   ├── navbar.tsx          # Sticky navbar dengan blur
│   │   ├── footer.tsx          # Footer 4 kolom
│   │   ├── page-header.tsx     # Hero headers
│   │   ├── back-to-top.tsx     # Scroll to top button
│   │   └── layout-wrapper.tsx  # Main layout wrapper
│   │
│   ├── ui/                      # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── label.tsx
│   │   ├── badge.tsx
│   │   ├── tabs.tsx
│   │   ├── accordion.tsx
│   │   ├── dialog.tsx
│   │   ├── select.tsx
│   │   ├── container.tsx
│   │   └── section.tsx
│   │
│   └── features/                # Feature components
│       ├── airline-grid.tsx
│       ├── facility-carousel.tsx
│       ├── flight-status-board.tsx
│       └── booking-form.tsx
│
├── lib/
│   ├── utils.ts                 # Utility functions
│   └── constants.ts             # App constants & data
│
├── public/                      # Static assets
│   ├── logos/                   # Logo bandara & Angkasa Pura
│   ├── assets/                  # Foto fasilitas & banner
│   └── airlines/                # Logo maskapai (8 airlines)
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

---

## 🚀 Instalasi

### Prerequisites

- **Node.js 18+** - [Download](https://nodejs.org/)
- **npm/yarn/pnpm** - Package manager

### Clone Repository

```bash
git clone <repository-url>
cd ahmad-yani-airport
```

### Install Dependencies

```bash
npm install
# atau
yarn install
# atau
pnpm install
```

---

## 💻 Development

### Start Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build production bundle
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 🏗 Build & Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables

Tidak ada environment variables yang diperlukan untuk versi current.

---

## 🎨 Design System

### Color Palette

#### Primary Colors
- **Deep Airport Navy**
  - `#0A192F` - Primary dark
  - `#0F172A` - Primary
  - `#1E293B` - Primary light

#### Secondary Colors
- **Aviation Blue**
  - `#0066CC` - Secondary dark
  - `#0284C7` - Secondary
  - `#38BDF8` - Secondary light

#### Accent Colors
- **Warm Amber/Gold**
  - `#D97706` - Accent
  - `#F59E0B` - Accent gold
  - `#FBBF24` - Accent amber

#### Neutral Colors
- **Clean Slate**
  - `#F8FAFC` - Background
  - `#FFFFFF` - White
  - `#F1F5F9` - Background gray

#### Status Colors
- Success: `#10B981`
- Warning: `#F59E0B`
- Error: `#EF4444`
- Info: `#3B82F6`

### Typography

- **Display Font**: Montserrat (Bold 600-700)
- **Body Font**: Poppins (Regular 300-700)
- **Mono Font**: System monospace

### Spacing Scale

```
xs:  0.25rem (4px)
sm:  0.5rem  (8px)
md:  1rem    (16px)
lg:  1.5rem  (24px)
xl:  2rem    (32px)
2xl: 3rem    (48px)
3xl: 4rem    (64px)
```

### Border Radius

```
sm:   0.375rem (6px)
md:   0.5rem   (8px)
lg:   0.75rem  (12px)
xl:   1rem     (16px)
2xl:  1.5rem   (24px)
full: 9999px
```

---

## 🧩 Komponen

### Layout Components

#### Navbar
- Sticky positioning dengan blur backdrop
- Top bar dengan contact info
- Mobile responsive hamburger menu
- Active route highlighting

#### Footer
- 4 kolom layout (About, Navigation, Contact, Social)
- Social media links
- InJourney Airports credit

#### PageHeader
- Animated background dengan gradients
- Icon support
- Wave SVG divider

### UI Components

#### Button
- 8 variants (default, primary, secondary, accent, outline, ghost, link, destructive)
- 4 sizes (sm, default, lg, xl, icon)
- Loading state

#### Card
- Header, Title, Description, Content, Footer
- Hover effects & shadows

#### Tabs
- Controlled & uncontrolled mode
- Keyboard navigation
- Smooth transitions

#### Accordion
- Single & multiple mode
- Animated expand/collapse
- Icon rotation

### Feature Components

#### AirlineGrid
- Filter by domestic/international
- Hover effects & borders
- Responsive grid (2/3/4 columns)

#### FacilityCarousel
- Auto-play dengan pause on hover
- Navigation arrows & dot indicators
- Thumbnail preview (desktop only)

#### FlightStatusBoard
- Tabs untuk Keberangkatan/Kedatangan
- Status badges (On-time, Delayed, Boarding, dll)
- Mock flight data

#### BookingForm
- Trip type toggle (One-way/Round-trip)
- Date validation
- Redirect ke Traveloka

---

## 📄 Halaman

### 🏠 Home (`/`)
- Hero section dengan booking widget
- Flight status board
- About section dengan stats
- Timeline sejarah
- Facility carousel
- Airline grid
- CTA section

### ℹ️ Info (`/info`)
- Tabs: Kedatangan, Keberangkatan, Airline
- Info terminal & fasilitas
- Transportasi options
- Grid maskapai dengan filter

### 🚗 Layanan (`/layanan`)
- Layanan parkir dengan tabel tarif
- Transportasi publik (BRT, Taxi, Ride-hailing)
- Transportasi khusus (TRAC, Golden Bird)
- Feature badges

### 📖 Panduan (`/panduan`)
- Tabs: Domestik vs Internasional
- Accordion untuk setiap section
- Step-by-step guides
- Important notices

### 🎫 Pemesanan (`/pemesanan`)
- Booking form tiket pesawat
- Form transportasi khusus
- Success notification
- Contact cards

### 🚫 Not Found (`/404`)
- Custom 404 page
- Helpful links
- Action buttons

---

## 🤝 Kontribusi

Contributions, issues, dan feature requests sangat diterima!

### Development Workflow

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

### Coding Standards

- **TypeScript** - Gunakan strict mode
- **ESLint** - Follow configured rules
- **Naming** - camelCase untuk variables, PascalCase untuk components
- **Comments** - JSDoc untuk functions
- **Commits** - Conventional commits format

---

## 📝 License

Copyright © 2026 Bandara Internasional Jenderal Ahmad Yani. All Rights Reserved.

Managed by **InJourney Airports**.

---

## 📞 Kontak

**Bandara Ahmad Yani Semarang**

- 🌐 Website: [semarangairport.co.id](https://semarangairport.co.id)
- 📧 Email: contact@injourneyairports.id
- ☎️ Phone: +62 24 86000600
- 📍 Address: Jl. Bandara Ahmad Yani, Semarang

**Social Media**

- Facebook: [@BandaraAhmadYani](https://facebook.com/BandaraAhmadYani)
- Instagram: [@semarangairport](https://instagram.com/semarangairport)
- Twitter: [@SemarangAP1](https://twitter.com/SemarangAP1)
- YouTube: [#bandaraahmadyani](https://youtube.com/hashtag/bandaraahmadyani)

---

<div align="center">

**✈️ Gerbang Udara Kota Semarang ✈️**

Made with ❤️ by InJourney Airports

</div>
