"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { LOGOS, AIRPORT_INFO, NAV_MENU } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* Top Bar - Contact Info */}
      <div className="hidden lg:block bg-[#0A192F] text-white py-2 border-b border-[#1E293B]">
        <Container>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a
                href={`tel:${AIRPORT_INFO.PHONE}`}
                className="flex items-center gap-2 hover:text-[#F59E0B] transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>{AIRPORT_INFO.PHONE}</span>
              </a>
              <a
                href={`mailto:${AIRPORT_INFO.EMAIL}`}
                className="flex items-center gap-2 hover:text-[#F59E0B] transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>{AIRPORT_INFO.EMAIL}</span>
              </a>
            </div>
            <div className="text-[#94A3B8]">
              Gerbang Udara Kota Semarang
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-[#E2E8F0]"
            : "bg-white border-b border-[#E2E8F0]"
        )}
      >
        <Container>
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="relative h-14 w-14">
                <Image
                  src={LOGOS.MAIN}
                  alt="Ahmad Yani Airport Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-[#0A192F] font-display font-bold text-lg leading-tight">
                  Bandara Ahmad Yani
                </h1>
                <p className="text-[#64748B] text-xs">
                  Semarang International Airport
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_MENU.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-4 py-2 rounded-lg font-semibold text-sm transition-all",
                      isActive
                        ? "bg-[#0284C7] text-white shadow-md"
                        : "text-[#64748B] hover:text-[#0284C7] hover:bg-[#F8FAFC]"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button asChild variant="accent" size="default">
                <Link href="/pemesanan">
                  Pesan Tiket
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#0A192F] hover:bg-[#F8FAFC] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute top-[73px] left-0 right-0 bottom-0 bg-white shadow-2xl animate-slide-in overflow-y-auto">
            <div className="p-6 space-y-4">
              {/* Mobile Navigation Links */}
              {NAV_MENU.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all",
                      isActive
                        ? "bg-[#0284C7] text-white shadow-md"
                        : "text-[#1E293B] hover:bg-[#F8FAFC]"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-[#E2E8F0]">
                <Button asChild variant="accent" size="lg" className="w-full">
                  <Link
                    href="/pemesanan"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Pesan Tiket
                  </Link>
                </Button>
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-6 space-y-3">
                <h3 className="text-sm font-bold text-[#0A192F] uppercase tracking-wide">
                  Hubungi Kami
                </h3>
                <a
                  href={`tel:${AIRPORT_INFO.PHONE}`}
                  className="flex items-center gap-3 text-[#64748B] hover:text-[#0284C7] transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span className="text-sm">{AIRPORT_INFO.PHONE}</span>
                </a>
                <a
                  href={`mailto:${AIRPORT_INFO.EMAIL}`}
                  className="flex items-center gap-3 text-[#64748B] hover:text-[#0284C7] transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="text-sm">{AIRPORT_INFO.EMAIL}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
