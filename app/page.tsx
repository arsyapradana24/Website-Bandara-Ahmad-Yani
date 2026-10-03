import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Plane, MapPin, Users, Building2, Clock, ArrowRight } from "lucide-react"
import { LayoutWrapper } from "@/components/layout"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  FlightStatusBoard, 
  AirlineGrid, 
  FacilityCarousel,
  BookingForm 
} from "@/components/features"
import { LOGOS, ASSETS, AIRPORT_INFO, AIRPORT_HISTORY } from "@/lib/constants"

export default function HomePage() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center bg-gradient-to-br from-[#0A192F] via-[#0F172A] to-[#1E293B] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src={ASSETS.HOME}
            alt="Bandara Ahmad Yani"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/90 via-[#0A192F]/70 to-transparent" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#0284C7]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F59E0B]/20 rounded-full blur-3xl animate-pulse animation-delay-1000" />
        </div>

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-white space-y-6 py-12">
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                <Plane className="h-3 w-3 mr-1" />
                Bandara Internasional
              </Badge>
              
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Jenderal
                <br />
                Ahmad Yani
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Gerbang Udara Kota Semarang
              </p>

              <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                Bandara terapung pertama di Indonesia, melayani penerbangan domestik dan internasional dengan fasilitas modern dan pelayanan terbaik.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" variant="accent">
                  <Link href="/pemesanan">
                    <Plane className="h-5 w-5 mr-2" />
                    Pesan Tiket Sekarang
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0A192F]">
                  <Link href="/info">
                    Informasi Penerbangan
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl font-bold text-[#F59E0B]">24/7</div>
                  <div className="text-sm text-white/70">Operasional</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#F59E0B]">13</div>
                  <div className="text-sm text-white/70">Kapasitas Pesawat</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#F59E0B]">8+</div>
                  <div className="text-sm text-white/70">Maskapai</div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="hidden lg:block">
              <BookingForm />
            </div>
          </div>
        </Container>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-12 md:h-16 text-[#F8FAFC]"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              fill="currentColor"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              fill="currentColor"
            />
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      {/* Mobile Booking Form */}
      <Section className="lg:hidden" spacing="default">
        <Container>
          <BookingForm />
        </Container>
      </Section>

      {/* Flight Status Section */}
      <Section spacing="default">
        <Container>
          <FlightStatusBoard />
        </Container>
      </Section>

      {/* About Section */}
      <Section spacing="default" className="bg-gradient-to-b from-white to-[#F8FAFC]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="default">
                <Building2 className="h-3 w-3 mr-1" />
                Tentang Kami
              </Badge>
              
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0A192F]">
                Bandara Terapung Pertama di Indonesia
              </h2>
              
              <p className="text-lg text-[#64748B] leading-relaxed">
                Bandara Internasional Jenderal Ahmad Yani merupakan bandara utama di Kota Semarang, Jawa Tengah, dengan kode IATA <span className="font-semibold text-[#0284C7]">SRG</span> dan dikelola oleh InJourney Airports.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[#0284C7]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-[#0284C7]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A192F] mb-1">Lokasi Strategis</h3>
                    <p className="text-[#64748B]">Terletak di Semarang, pintu gerbang transportasi udara Jawa Tengah</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[#0284C7]/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-5 w-5 text-[#0284C7]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A192F] mb-1">Fasilitas Modern</h3>
                    <p className="text-[#64748B]">Terminal seluas 58.652 m² dengan konsep eco-green dan teknologi terkini</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[#0284C7]/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-[#0284C7]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A192F] mb-1">Pelayanan Terbaik</h3>
                    <p className="text-[#64748B]">Dedicated untuk memberikan pengalaman perjalanan yang nyaman dan aman</p>
                  </div>
                </div>
              </div>

              <Button asChild variant="default" size="lg">
                <Link href="/info">
                  Pelajari Lebih Lanjut
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={ASSETS.PROFILE}
                  alt="Bandara Ahmad Yani"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#0284C7] flex items-center justify-center">
                    <Plane className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#0A192F]">SRG</div>
                    <div className="text-sm text-[#64748B]">IATA Code</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* History Timeline */}
      <Section spacing="default">
        <Container>
          <div className="text-center mb-12">
            <Badge variant="default" className="mb-4">
              <Clock className="h-3 w-3 mr-1" />
              Sejarah
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0A192F] mb-4">
              Perjalanan Ahmad Yani Airport
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              Dari pangkalan militer hingga menjadi bandara internasional modern
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AIRPORT_HISTORY.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#0284C7] to-[#0066CC] flex items-center justify-center text-white font-bold mb-4">
                    {index + 1}
                  </div>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {item.year}
                  </Badge>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#64748B]">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Facility Carousel */}
      <Section spacing="default" className="bg-gradient-to-b from-[#F8FAFC] to-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0A192F] mb-4">
              Fasilitas Bandara
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              Fasilitas lengkap dan modern untuk kenyamanan perjalanan Anda
            </p>
          </div>

          <FacilityCarousel />

          <div className="text-center mt-8">
            <Button asChild variant="default" size="lg">
              <Link href="/layanan">
                Lihat Semua Fasilitas
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Airlines Section */}
      <Section spacing="default">
        <Container>
          <div className="text-center mb-12">
            <Badge variant="default" className="mb-4">
              <Plane className="h-3 w-3 mr-1" />
              Maskapai Penerbangan
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0A192F] mb-4">
              Partner Airlines Kami
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              Melayani penerbangan domestik dan internasional
            </p>
          </div>

          <AirlineGrid columns={4} />

          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="/info">
                Informasi Lengkap Maskapai
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section spacing="lg" className="bg-gradient-to-br from-[#0284C7] to-[#0066CC] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Siap Terbang Bersama Kami?
            </h2>
            <p className="text-xl text-white/90">
              Pesan tiket pesawat Anda sekarang dan nikmati perjalanan yang nyaman dari Bandara Ahmad Yani Semarang
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="accent">
                <Link href="/pemesanan">
                  <Plane className="h-5 w-5 mr-2" />
                  Pesan Tiket Sekarang
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0284C7]">
                <Link href="/panduan">
                  Panduan Penerbangan
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </LayoutWrapper>
  )
}
