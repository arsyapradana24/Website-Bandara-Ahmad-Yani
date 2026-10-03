import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react"
import { LOGOS, AIRPORT_INFO, NAV_MENU } from "@/lib/constants"
import { Container } from "@/components/ui/container"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-[#0A192F] to-[#0F172A] text-white">
      {/* Main Footer Content */}
      <div className="border-b border-[#1E293B]">
        <Container>
          <div className="py-12 lg:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* About Column */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative h-12 w-12">
                    <Image
                      src={LOGOS.MAIN}
                      alt="Ahmad Yani Airport"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg">
                      Ahmad Yani Airport
                    </h3>
                  </div>
                </div>
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  Bandara Ahmad Yani merupakan pintu gerbang penerbangan di Jawa Tengah. 
                  Memberikan pelayanan terbaik bagi kenyamanan perjalanan Anda.
                </p>
                <div className="pt-4">
                  <Image
                    src={LOGOS.ANGKASA}
                    alt="InJourney Airports"
                    width={120}
                    height={40}
                    className="opacity-80"
                  />
                </div>
              </div>

              {/* Navigation Column */}
              <div>
                <h4 className="font-display font-bold text-white mb-6">
                  Navigasi
                </h4>
                <ul className="space-y-3">
                  {NAV_MENU.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-[#94A3B8] hover:text-white transition-colors text-sm inline-flex items-center gap-2 group"
                      >
                        <span className="w-0 group-hover:w-2 h-0.5 bg-[#F59E0B] transition-all duration-300" />
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Column */}
              <div>
                <h4 className="font-display font-bold text-white mb-6">
                  Hubungi Kami
                </h4>
                <ul className="space-y-4">
                  <li>
                    <a
                      href={`https://maps.google.com/?q=${AIRPORT_INFO.COORDINATES.LAT},${AIRPORT_INFO.COORDINATES.LNG}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-[#94A3B8] hover:text-white transition-colors text-sm group"
                    >
                      <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 group-hover:text-[#F59E0B]" />
                      <span>{AIRPORT_INFO.ADDRESS}</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${AIRPORT_INFO.PHONE}`}
                      className="flex items-center gap-3 text-[#94A3B8] hover:text-white transition-colors text-sm group"
                    >
                      <Phone className="h-5 w-5 flex-shrink-0 group-hover:text-[#F59E0B]" />
                      <span>{AIRPORT_INFO.PHONE}</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${AIRPORT_INFO.EMAIL}`}
                      className="flex items-center gap-3 text-[#94A3B8] hover:text-white transition-colors text-sm group"
                    >
                      <Mail className="h-5 w-5 flex-shrink-0 group-hover:text-[#F59E0B]" />
                      <span>{AIRPORT_INFO.EMAIL}</span>
                    </a>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-[#1E293B]">
                  <p className="text-[#94A3B8] text-sm">
                    <span className="font-semibold text-white">
                      Jam Operasional:
                    </span>
                    <br />
                    {AIRPORT_INFO.OPERATING_HOURS}
                  </p>
                </div>
              </div>

              {/* Social Media Column */}
              <div>
                <h4 className="font-display font-bold text-white mb-6">
                  Ikuti Kami
                </h4>
                <p className="text-[#94A3B8] text-sm mb-6">
                  Dapatkan update terbaru tentang penerbangan dan layanan bandara
                </p>
                <div className="flex gap-3">
                  <a
                    href={AIRPORT_INFO.SOCIAL.FACEBOOK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 hover:bg-[#0284C7] text-white transition-all hover:scale-110"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href={AIRPORT_INFO.SOCIAL.INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 hover:bg-gradient-to-br hover:from-[#F59E0B] hover:to-[#D97706] text-white transition-all hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href={AIRPORT_INFO.SOCIAL.TWITTER}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 hover:bg-[#0284C7] text-white transition-all hover:scale-110"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href={AIRPORT_INFO.SOCIAL.YOUTUBE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 hover:bg-red-600 text-white transition-all hover:scale-110"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>

                <div className="mt-8 p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-xs text-[#94A3B8]">
                    <span className="font-semibold text-white block mb-1">
                      Kode Bandara
                    </span>
                    IATA: <span className="text-white font-mono">{AIRPORT_INFO.IATA_CODE}</span>
                    {" • "}
                    ICAO: <span className="text-white font-mono">{AIRPORT_INFO.ICAO_CODE}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="py-6">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-[#94A3B8]">
              &copy; {currentYear} Bandara Internasional Jenderal Ahmad Yani. 
              All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-[#94A3B8] hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[#94A3B8] hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* InJourney Airports Credit */}
      <div className="border-t border-[#1E293B] py-3 bg-black/20">
        <Container>
          <p className="text-center text-xs text-[#64748B]">
            Managed by{" "}
            <span className="text-white font-semibold">InJourney Airports</span>
          </p>
        </Container>
      </div>
    </footer>
  )
}
