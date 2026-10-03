/**
 * Asset paths and constants for Ahmad Yani Airport website
 */

// ===== Logo Paths =====
export const LOGOS = {
  MAIN: '/logos/Ahmadyaniairportlogo.png',
  ANGKASA: '/logos/Angkasa.png',
  FAVICON: '/ikon.png',
} as const;

// ===== Asset Images =====
export const ASSETS = {
  // Facility Images
  FACILITY_1: '/assets/fasilitas1.jpeg',
  FACILITY_3: '/assets/fasilitas3.jpg',
  FACILITY_4: '/assets/fasilitas4.jpeg',
  
  // Home/Banner Images
  HOME: '/assets/home.jpeg',
  HOME_1: '/assets/home1.jpg',
  HOME_2: '/assets/home2.jpg',
  HOME_3: '/assets/home3.jpg',
  HOME_4: '/assets/home4.jpg',
  
  // Profile & Contact Images
  PROFILE: '/assets/profil.jpg',
  CONTACT: '/assets/kontak.jpg',
  
  // Testimonial Images
  TESTIMONIAL_1: '/assets/tes1.jpg',
  TESTIMONIAL_2: '/assets/tes2.jpeg',
  TESTIMONIAL_3: '/assets/tes3.jpeg',
} as const;

// ===== Airline Logos =====
export const AIRLINES = {
  GARUDA: {
    name: 'Garuda Indonesia',
    logo: '/airlines/garuda.png',
    code: 'GA',
    type: 'domestic',
  },
  BATIK: {
    name: 'Batik Air',
    logo: '/airlines/batik.png',
    code: 'ID',
    type: 'domestic',
  },
  LION: {
    name: 'Lion Air',
    logo: '/airlines/Lion.png',
    code: 'JT',
    type: 'domestic',
  },
  AIRASIA: {
    name: 'AirAsia',
    logo: '/airlines/airasia.png',
    code: 'AK',
    type: 'domestic',
  },
  SRIWIJAYA: {
    name: 'Sriwijaya Air',
    logo: '/airlines/sriwijaya.png',
    code: 'SJ',
    type: 'domestic',
  },
  SUPER: {
    name: 'Super Air Jet',
    logo: '/airlines/super.png',
    code: 'IU',
    type: 'domestic',
  },
  SCOOT: {
    name: 'Scoot',
    logo: '/airlines/Scoot.png',
    code: 'TR',
    type: 'international',
  },
  MALINDO: {
    name: 'Malindo Air',
    logo: '/airlines/Malindo.png',
    code: 'OD',
    type: 'international',
  },
} as const;

// ===== Airport Information =====
export const AIRPORT_INFO = {
  NAME: 'Bandara Internasional Jenderal Ahmad Yani',
  CITY: 'Semarang',
  IATA_CODE: 'SRG',
  ICAO_CODE: 'WARS',
  
  // Contact Information
  PHONE: '+62 24 86000600',
  EMAIL: 'contact@injourneyairports.id',
  ADDRESS: 'Jl. Bandara Ahmad Yani, Semarang',
  
  // Coordinates
  COORDINATES: {
    LAT: -6.966126,
    LNG: 110.375008,
  },
  
  // Runway Information
  RUNWAY: {
    LENGTH: '2,680 m',
    WIDTH: '45 m',
    ELEVATION: '3 m MDPL (10 kaki)',
  },
  
  // Terminal Information
  TERMINAL: {
    AREA: '58,652 m²',
    APRON_AREA: '72,522.25 m²',
    AIRCRAFT_CAPACITY: 13,
    BRIDGES: 3,
    CHECK_IN_COUNTERS: 48,
    SELF_CHECK_IN_KIOSKS: 16,
  },
  
  // Social Media
  SOCIAL: {
    FACEBOOK: 'https://web.facebook.com/BandaraAhmadYani/',
    INSTAGRAM: 'https://www.instagram.com/semarangairport/',
    TWITTER: 'https://x.com/SemarangAP1',
    YOUTUBE: 'https://www.youtube.com/hashtag/bandaraahmadyani',
  },
  
  // Operating Hours
  OPERATING_HOURS: '24 Jam',
} as const;

// ===== Navigation Menu =====
export const NAV_MENU = [
  { href: '/', label: 'Home', icon: 'Home' },
  { href: '/info', label: 'Informasi', icon: 'Info' },
  { href: '/layanan', label: 'Layanan', icon: 'Briefcase' },
  { href: '/panduan', label: 'Panduan', icon: 'BookOpen' },
  { href: '/pemesanan', label: 'Pemesanan', icon: 'Ticket' },
] as const;

// ===== Flight Status Types =====
export const FLIGHT_STATUS = {
  ON_TIME: {
    label: 'Tepat Waktu',
    value: 'on-time',
    color: 'success',
  },
  DELAYED: {
    label: 'Tertunda',
    value: 'delayed',
    color: 'warning',
  },
  CANCELLED: {
    label: 'Dibatalkan',
    value: 'cancelled',
    color: 'error',
  },
  BOARDING: {
    label: 'Boarding',
    value: 'boarding',
    color: 'info',
  },
  DEPARTED: {
    label: 'Berangkat',
    value: 'departed',
    color: 'default',
  },
  ARRIVED: {
    label: 'Tiba',
    value: 'arrived',
    color: 'success',
  },
} as const;

// ===== Facility Categories =====
export const FACILITIES = {
  TERMINAL: [
    'Terminal Penumpang Modern',
    'Lift dan Eskalator',
    '8 Eskalator',
    '8 Elevator',
    '2 Travelator',
  ],
  GENERAL: [
    'Area Parkir Luas',
    'Free WiFi',
    'Charging Station',
    'Mushola',
    'Nursery Room',
    'Playground',
  ],
  COMMERCIAL: [
    'Food Hall (X-side Eat)',
    'UMKM Lokal',
    'Toko Duty Free',
    'Toko Buku & Majalah',
  ],
  SERVICES: [
    'Pos Kesehatan',
    'VIP Lounge',
    'Fasilitas Disabilitas',
    'Lost and Found',
    'Porter Service',
  ],
} as const;

// ===== Parking Rates =====
export const PARKING_RATES = [
  {
    type: 'R2',
    entry: 4000,
    progressive: 2000,
    unit: 'jam',
  },
  {
    type: 'R4 (Sedan, Jeep, Pick up)',
    entry: 8000,
    progressive: 6000,
    unit: 'jam',
  },
  {
    type: 'R4 (Minibus & sejenisnya > 2 Ton)',
    entry: 8000,
    progressive: 6000,
    unit: 'jam',
  },
  {
    type: 'R6',
    entry: 12000,
    progressive: 6000,
    unit: 'jam',
  },
] as const;

// ===== Transport Options =====
export const TRANSPORT_OPTIONS = {
  BRT: {
    name: 'Bus Rapid Trans (BRT)',
    description: 'Layanan BRT ke berbagai tujuan seperti pusat kota, bandara, dan terminal bus',
    url: 'https://transsemarang.semarangkota.go.id/',
    hours: '06.00 - 24.00 WIB',
  },
  TAXI: {
    name: 'Taxi',
    description: 'Taxi dengan tarif berdasarkan argo yang tersedia di luar area terminal',
    url: 'https://www.bluebirdgroup.com/',
    hours: '05.30 - 24.00 WIB',
  },
  RIDE_HAILING: {
    name: 'Ride Hailing',
    description: 'Layanan ride-hailing seperti GoCar dengan titik jemput khusus',
    url: 'https://www.gojek.com/gocar/',
    hours: '24 Jam',
  },
} as const;

// ===== Special Transport Services =====
export const SPECIAL_TRANSPORT = {
  TRAC: {
    name: 'TRAC',
    priceRange: 'Rp 470.000 - Rp 4.100.000',
    vehicles: ['Toyota Avanza', 'Innova', 'Camry', 'Fortuner', 'Hi Ace', 'Alphard'],
    features: ['Sopir profesional berpengalaman'],
  },
  GOLDEN_BIRD: {
    name: 'Golden Bird',
    priceRange: 'Rp 100.000 - Rp 5.445.000',
    vehicles: ['Toyota Avanza', 'Kijang Innova', 'Alphard'],
    features: ['Armada nyaman'],
  },
} as const;

// ===== Timeline History =====
export const AIRPORT_HISTORY = [
  {
    year: '1965',
    title: 'Pangkalan TNI AD',
    description: 'Pada awalnya Bandara Ahmad Yani adalah pangkalan udara TNI Angkatan Darat',
  },
  {
    year: '31 Agustus 1966',
    title: 'Pelabuhan Udara Bersama',
    description: 'Berubah status menjadi Pelabuhan Udara Bersama Kalibanteng Semarang',
  },
  {
    year: '1 Oktober 1995',
    title: 'PT Angkasa Pura I',
    description: 'Diserahkan kepada PT Angkasa Pura I (Sekarang InJourney Airports)',
  },
  {
    year: '31 Agustus 2004',
    title: 'Bandara Internasional',
    description: 'Peresmian pelayanan Angkatan Udara ke atau dari Luar Negeri',
  },
  {
    year: '7 Juni 2018',
    title: 'Terminal Baru',
    description: 'Terminal baru bandara Ahmad Yani diresmikan Presiden Joko Widodo',
  },
  {
    year: 'April 2025',
    title: 'Kembali Internasional',
    description: 'Kembali ditetapkan sebagai bandara internasional',
  },
] as const;

// ===== Meta Information =====
export const META = {
  TITLE: 'Bandara Internasional Jenderal Ahmad Yani Semarang',
  DESCRIPTION: 'Gerbang Udara Kota Semarang - Bandara Ahmad Yani merupakan pintu gerbang penerbangan di Jawa Tengah. Memberikan pelayanan terbaik bagi kenyamanan perjalanan Anda.',
  KEYWORDS: [
    'Bandara Ahmad Yani',
    'Airport Semarang',
    'Jenderal Ahmad Yani',
    'Penerbangan Semarang',
    'Ahmad Yani International Airport',
    'Bandara Semarang',
    'InJourney Airports',
  ],
} as const;
