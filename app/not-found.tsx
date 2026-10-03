import Link from "next/link"
import { Home, Search, ArrowLeft } from "lucide-react"
import { LayoutWrapper } from "@/components/layout"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <LayoutWrapper>
      <div className="min-h-[600px] flex items-center justify-center bg-gradient-to-b from-[#F8FAFC] to-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-8">
            {/* 404 Illustration */}
            <div className="relative">
              <div className="text-[180px] md:text-[240px] font-display font-bold text-[#0284C7]/10 leading-none">
                404
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-32 w-32 rounded-full bg-gradient-to-br from-[#0284C7] to-[#0066CC] flex items-center justify-center animate-pulse">
                  <Search className="h-16 w-16 text-white" />
                </div>
              </div>
            </div>

            {/* Error Message */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-[#0A192F]">
                Halaman Tidak Ditemukan
              </h1>
              <p className="text-xl text-[#64748B]">
                Maaf, halaman yang Anda cari tidak dapat ditemukan atau telah dipindahkan.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button asChild size="lg" variant="default">
                <Link href="/">
                  <Home className="h-5 w-5 mr-2" />
                  Kembali ke Beranda
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/info">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Informasi Bandara
                </Link>
              </Button>
            </div>

            {/* Helpful Links */}
            <div className="pt-8 border-t border-[#E2E8F0]">
              <p className="text-sm text-[#64748B] mb-4">Mungkin Anda mencari:</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/info"
                  className="text-sm text-[#0284C7] hover:underline"
                >
                  Informasi Penerbangan
                </Link>
                <span className="text-[#CBD5E1]">•</span>
                <Link
                  href="/layanan"
                  className="text-sm text-[#0284C7] hover:underline"
                >
                  Layanan Bandara
                </Link>
                <span className="text-[#CBD5E1]">•</span>
                <Link
                  href="/panduan"
                  className="text-sm text-[#0284C7] hover:underline"
                >
                  Panduan Penerbangan
                </Link>
                <span className="text-[#CBD5E1]">•</span>
                <Link
                  href="/pemesanan"
                  className="text-sm text-[#0284C7] hover:underline"
                >
                  Pemesanan Tiket
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </LayoutWrapper>
  )
}
