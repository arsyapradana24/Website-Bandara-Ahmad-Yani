import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bandara Internasional Jenderal Ahmad Yani Semarang",
  description: "Gerbang Udara Kota Semarang - Bandara Ahmad Yani merupakan pintu gerbang penerbangan di Jawa Tengah. Memberikan pelayanan terbaik bagi kenyamanan perjalanan Anda.",
  keywords: ["Bandara Ahmad Yani", "Airport Semarang", "Jenderal Ahmad Yani", "Penerbangan Semarang", "Ahmad Yani International Airport"],
  authors: [{ name: "InJourney Airports" }],
  creator: "InJourney Airports",
  publisher: "InJourney Airports",
  icons: {
    icon: "/ikon.png",
    shortcut: "/ikon.png",
    apple: "/ikon.png",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://semarangairport.co.id",
    title: "Bandara Internasional Jenderal Ahmad Yani Semarang",
    description: "Gerbang Udara Kota Semarang - Memberikan pelayanan terbaik bagi kenyamanan perjalanan Anda.",
    siteName: "Bandara Ahmad Yani",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bandara Internasional Jenderal Ahmad Yani Semarang",
    description: "Gerbang Udara Kota Semarang - Memberikan pelayanan terbaik bagi kenyamanan perjalanan Anda.",
    creator: "@SemarangAP1",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
