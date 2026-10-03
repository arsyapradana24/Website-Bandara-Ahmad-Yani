import * as React from "react"
import Link from "next/link"
import { Briefcase, Car, Bus, Star, Shield, Clock, Wifi, CreditCard, MapPin, ExternalLink } from "lucide-react"
import { LayoutWrapper, PageHeader } from "@/components/layout"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PARKING_RATES, TRANSPORT_OPTIONS, SPECIAL_TRANSPORT, formatCurrency } from "@/lib/constants"

export default function LayananPage() {
  return (
    <LayoutWrapper>
      <PageHeader
        title="Layanan Bandara"
        description="Berbagai layanan berkualitas untuk kenyamanan perjalanan Anda"
        icon={Briefcase}
        gradient="secondary"
      />

      {/* LAYANAN PARKIR */}
      <Section spacing="default">
        <Container>
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[#0284C7] to-[#0066CC] text-white">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Car className="h-7 w-7" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-white">Layanan Parkir Bandara</CardTitle>
                  <CardDescription className="text-white/90">
                    Fasilitas parking lengkap dengan sistem modern dan aman
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-xl text-[#0A192F]">Area Parkir</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                      <Badge variant="default">1</Badge>
                      <div>
                        <h4 className="font-semibold text-[#0A192F]">Short Term Parking</h4>
                        <p className="text-sm text-[#64748B]">Parkir harian untuk penunggu kedatangan</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                      <Badge variant="default">2</Badge>
                      <div>
                        <h4 className="font-semibold text-[#0A192F]">Long Term Parking</h4>
                        <p className="text-sm text-[#64748B]">Parkir mingguan/bulanan dengan tarif ekonomis</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                      <Badge variant="default">3</Badge>
                      <div>
                        <h4 className="font-semibold text-[#0A192F]">Area Khusus</h4>
                        <p className="text-sm text-[#64748B]">Parkir mobil & sepeda motor terpisah</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-display font-bold text-xl text-[#0A192F]">Sistem Pembayaran</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                      <CreditCard className="h-5 w-5 text-[#0284C7]" />
                      <span className="text-sm font-medium">EDC Payment</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                      <CreditCard className="h-5 w-5 text-[#0284C7]" />
                      <span className="text-sm font-medium">Mobile Banking</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                      <CreditCard className="h-5 w-5 text-[#0284C7]" />
                      <span className="text-sm font-medium">QR Code</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                      <CreditCard className="h-5 w-5 text-[#0284C7]" />
                      <span className="text-sm font-medium">Kartu Prabayar</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tarif Parkir Table */}
              <div>
                <h3 className="font-display font-bold text-xl text-[#0A192F] mb-4">Tarif Parkir</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[#F8FAFC]">
                        <th className="px-4 py-3 text-left text-sm font-semibold text-[#0A192F] rounded-tl-lg">Jenis Kendaraan</th>
                        <th className="px-4 py-3 text-right text-sm font-semibold text-[#0A192F]">Tarif Masuk</th>
                        <th className="px-4 py-3 text-right text-sm font-semibold text-[#0A192F] rounded-tr-lg">Tarif Progresif</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E2E8F0]">
                      {PARKING_RATES.map((rate, index) => (
                        <tr key={index} className="hover:bg-[#F8FAFC] transition-colors">
                          <td className="px-4 py-3 text-sm text-[#1E293B]">{rate.type}</td>
                          <td className="px-4 py-3 text-sm text-right font-semibold text-[#0284C7]">
                            {formatCurrency(rate.entry)}
                          </td>
                          <td className="px-4 py-3 text-sm text-right font-semibold text-[#0284C7]">
                            {formatCurrency(rate.progressive)} / {rate.unit}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Keunggulan Parkir */}
              <div className="grid md:grid-cols-4 gap-4 pt-4">
                <div className="flex items-center gap-2 p-3 rounded-lg bg-green-50 border border-green-200">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-green-900">CCTV 24 Jam</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-green-50 border border-green-200">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-green-900">Petugas Keamanan</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-green-50 border border-green-200">
                  <Car className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-green-900">Jump Start Service</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-green-50 border border-green-200">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-green-900">Aksesibilitas</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>

      {/* TRANSPORTASI PUBLIK */}
      <Section spacing="default" className="bg-gradient-to-b from-[#F8FAFC] to-white">
        <Container>
          <div className="text-center mb-8">
            <Badge variant="default" className="mb-4">
              <Bus className="h-3 w-3 mr-1" />
              Transportasi Publik
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A192F] mb-3">
              Opsi Transportasi Umum
            </h2>
            <p className="text-lg text-[#64748B]">Transportasi terjangkau dan mudah diakses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(TRANSPORT_OPTIONS).map(([key, transport]) => (
              <Card key={key} className="hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#0284C7] to-[#0066CC] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {key === "BRT" && <Bus className="h-7 w-7 text-white" />}
                    {key === "TAXI" && <Car className="h-7 w-7 text-white" />}
                    {key === "RIDE_HAILING" && <MapPin className="h-7 w-7 text-white" />}
                  </div>
                  <CardTitle className="group-hover:text-[#0284C7] transition-colors">
                    {transport.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    {transport.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-[#0284C7]" />
                    <span className="font-medium text-[#1E293B]">{transport.hours}</span>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href={transport.url} target="_blank" rel="noopener noreferrer">
                      Info Lengkap
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Keunggulan Transportasi */}
          <div className="grid md:grid-cols-4 gap-4 mt-8">
            <div className="flex items-center gap-2 p-3 rounded-lg bg-blue-50 border border-blue-200">
              <MapPin className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">Halte Terintegrasi</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-blue-50 border border-blue-200">
              <CreditCard className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">Pembelian Online</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-blue-50 border border-blue-200">
              <Wifi className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">WiFi Gratis</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-blue-50 border border-blue-200">
              <Shield className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">Akses Kursi Roda</span>
            </div>
          </div>
        </Container>
      </Section>

      {/* TRANSPORTASI KHUSUS */}
      <Section spacing="default">
        <Container>
          <div className="text-center mb-8">
            <Badge variant="accent" className="mb-4">
              <Star className="h-3 w-3 mr-1" />
              Layanan Premium
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A192F] mb-3">
              Transportasi Khusus
            </h2>
            <p className="text-lg text-[#64748B]">Layanan eksklusif untuk kenyamanan maksimal</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(SPECIAL_TRANSPORT).map(([key, service]) => (
              <Card key={key} className="border-2 border-[#F59E0B]/20 hover:border-[#F59E0B] transition-all duration-300">
                <CardHeader className="bg-gradient-to-br from-amber-50 to-orange-50">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#D97706] to-[#F59E0B] flex items-center justify-center">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                      <Badge variant="warning" className="mt-1">Premium Service</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div>
                    <div className="text-sm text-[#64748B] mb-1">Rentang Harga</div>
                    <div className="text-2xl font-bold text-[#D97706]">{service.priceRange}</div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-[#0A192F] mb-2">Pilihan Kendaraan:</div>
                    <div className="flex flex-wrap gap-2">
                      {service.vehicles.map((vehicle, index) => (
                        <Badge key={index} variant="secondary">
                          {vehicle}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-[#0A192F] mb-2">Keunggulan:</div>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-[#64748B]">
                          <Shield className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg" variant="accent">
              <Link href="/pemesanan">
                <Star className="h-5 w-5 mr-2" />
                Pesan Layanan Khusus
              </Link>
            </Button>
          </div>
        </Container>
      </Section>
    </LayoutWrapper>
  )
}
