import * as React from "react"
import { Info, PlaneArrival, PlaneTakeoff, Plane, Bus, Taxi, Car, Wifi, Coffee, ShoppingBag, Heart, Accessibility, Building2 } from "lucide-react"
import { LayoutWrapper, PageHeader } from "@/components/layout"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AirlineGrid } from "@/components/features"

export default function InfoPage() {
  return (
    <LayoutWrapper>
      <PageHeader
        title="Informasi Bandara"
        description="Panduan lengkap tentang kedatangan, keberangkatan, dan layanan bandara"
        icon={Info}
        gradient="secondary"
      />

      <Section spacing="default">
        <Container>
          <Tabs defaultValue="kedatangan" className="w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-[#0A192F]">
                Informasi Penerbangan
              </h2>
              <TabsList className="w-full md:w-auto">
                <TabsTrigger value="kedatangan" className="flex-1 md:flex-none gap-2">
                  <PlaneArrival className="h-4 w-4" />
                  Kedatangan
                </TabsTrigger>
                <TabsTrigger value="keberangkatan" className="flex-1 md:flex-none gap-2">
                  <PlaneTakeoff className="h-4 w-4" />
                  Keberangkatan
                </TabsTrigger>
                <TabsTrigger value="airline" className="flex-1 md:flex-none gap-2">
                  <Plane className="h-4 w-4" />
                  Airline
                </TabsTrigger>
              </TabsList>
            </div>

            {/* KEDATANGAN TAB */}
            <TabsContent value="kedatangan" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-[#0284C7]/10 flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-[#0284C7]" />
                    </div>
                    <div>
                      <CardTitle>Terminal Kedatangan</CardTitle>
                      <CardDescription>Fasilitas lengkap untuk kedatangan penumpang</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-[#64748B] leading-relaxed">
                    Terminal Kedatangan Bandara Ahmad Yani memiliki fasilitas lengkap untuk kenyamanan penumpang yang baru tiba. 
                    Terminal ini dirancang dengan konsep modern dan efisien untuk memberikan pengalaman terbaik bagi wisatawan domestik maupun internasional.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 pt-4">
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#F8FAFC]">
                      <Badge variant="default" className="mt-1">1</Badge>
                      <div>
                        <h4 className="font-semibold text-[#0A192F] mb-1">Terminal Domestik</h4>
                        <p className="text-sm text-[#64748B]">Lokasi: Gedung Terminal Utama Lantai 1</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#F8FAFC]">
                      <Badge variant="default" className="mt-1">2</Badge>
                      <div>
                        <h4 className="font-semibold text-[#0A192F] mb-1">Terminal Internasional</h4>
                        <p className="text-sm text-[#64748B]">Lokasi: Gedung Terminal Utama Lantai 1 (Area Khusus)</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#F8FAFC]">
                      <Badge variant="default" className="mt-1">3</Badge>
                      <div>
                        <h4 className="font-semibold text-[#0A192F] mb-1">Area Immigration</h4>
                        <p className="text-sm text-[#64748B]">Tersedia 8 counters untuk proses imigrasi internasional</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#F8FAFC]">
                      <Badge variant="default" className="mt-1">4</Badge>
                      <div>
                        <h4 className="font-semibold text-[#0A192F] mb-1">Area Baggage Claim</h4>
                        <p className="text-sm text-[#64748B]">4 carousel bagasi dengan sistem informasi real-time</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-[#0284C7]/10 flex items-center justify-center">
                      <Bus className="h-6 w-6 text-[#0284C7]" />
                    </div>
                    <div>
                      <CardTitle>Transportasi dari Bandara</CardTitle>
                      <CardDescription>Berbagai opsi transportasi untuk melanjutkan perjalanan</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 border-2 border-[#E2E8F0] rounded-lg hover:border-[#0284C7] transition-colors">
                      <Taxi className="h-6 w-6 text-[#0284C7] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-[#0A192F] mb-1">Taxi</h4>
                        <p className="text-sm text-[#64748B]">Tersedia layanan taksi resmi dan aplikasi ride-sharing</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 border-2 border-[#E2E8F0] rounded-lg hover:border-[#0284C7] transition-colors">
                      <Bus className="h-6 w-6 text-[#0284C7] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-[#0A192F] mb-1">Bus Trans Semarang</h4>
                        <p className="text-sm text-[#64748B]">Koridor menuju pusat kota dan berbagai tujuan</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 border-2 border-[#E2E8F0] rounded-lg hover:border-[#0284C7] transition-colors">
                      <Car className="h-6 w-6 text-[#0284C7] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-[#0A192F] mb-1">Rental Mobil</h4>
                        <p className="text-sm text-[#64748B]">Layanan penyewaan mobil tersedia di area arrivals</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 border-2 border-[#E2E8F0] rounded-lg hover:border-[#0284C7] transition-colors">
                      <Plane className="h-6 w-6 text-[#0284C7] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-[#0A192F] mb-1">Ojek Online</h4>
                        <p className="text-sm text-[#64748B]">Layanan ojek online dapat diakses di area penjemputan</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Fasilitas di Area Kedatangan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <FacilityBadge icon={Coffee} label="Restoran & Cafe" />
                    <FacilityBadge icon={ShoppingBag} label="Toko Duty Free" />
                    <FacilityBadge icon={Wifi} label="Free WiFi" />
                    <FacilityBadge icon={Accessibility} label="Fasilitas Disabilitas" />
                    <FacilityBadge icon={Heart} label="Pos Kesehatan" />
                    <FacilityBadge icon={Building2} label="Money Changer" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* KEBERANGKATAN TAB */}
            <TabsContent value="keberangkatan" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-[#0284C7]/10 flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-[#0284C7]" />
                    </div>
                    <div>
                      <CardTitle>Terminal Keberangkatan</CardTitle>
                      <CardDescription>Proses check-in dan keamanan dengan teknologi modern</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-[#64748B] leading-relaxed">
                    Terminal Keberangkatan Bandara Ahmad Yani menyediakan fasilitas modern untuk memastikan kenyamanan sebelum terbang. 
                    Proses check-in dan keamanan telah dipermudah dengan teknologi terkini.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 pt-4">
                    <div className="p-4 rounded-lg bg-gradient-to-br from-[#0284C7]/10 to-[#0284C7]/5 border-2 border-[#0284C7]/20">
                      <div className="text-3xl font-bold text-[#0284C7] mb-2">48</div>
                      <div className="text-sm font-semibold text-[#0A192F]">Check-in Counters</div>
                      <div className="text-xs text-[#64748B] mt-1">Untuk semua maskapai</div>
                    </div>

                    <div className="p-4 rounded-lg bg-gradient-to-br from-[#0284C7]/10 to-[#0284C7]/5 border-2 border-[#0284C7]/20">
                      <div className="text-3xl font-bold text-[#0284C7] mb-2">16</div>
                      <div className="text-sm font-semibold text-[#0A192F]">Self Check-in Kiosk</div>
                      <div className="text-xs text-[#64748B] mt-1">Check-in mandiri</div>
                    </div>

                    <div className="p-4 rounded-lg bg-gradient-to-br from-[#0284C7]/10 to-[#0284C7]/5 border-2 border-[#0284C7]/20">
                      <div className="text-3xl font-bold text-[#0284C7] mb-2">10</div>
                      <div className="text-sm font-semibold text-[#0A192F]">Immigration Counters</div>
                      <div className="text-xs text-[#64748B] mt-1">Keberangkatan internasional</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900">⏰ Informasi Penting</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-amber-900">
                  <p className="font-semibold">Waktu Kedatangan yang Disarankan:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Penerbangan Domestik: <strong>2 jam</strong> sebelum keberangkatan</li>
                    <li>Penerbangan Internasional: <strong>3 jam</strong> sebelum keberangkatan</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Fasilitas di Area Keberangkatan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <FacilityBadge icon={Coffee} label="Restoran & Cafe" />
                    <FacilityBadge icon={ShoppingBag} label="Toko Duty Free" />
                    <FacilityBadge icon={Wifi} label="Free WiFi" />
                    <FacilityBadge icon={Building2} label="VIP Lounge" />
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button asChild size="lg" variant="accent">
                  <a
                    href="https://www.traveloka.com/id-id/flight/airport/srg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Plane className="h-5 w-5 mr-2" />
                    Pesan Tiket Pesawat
                  </a>
                </Button>
              </div>
            </TabsContent>

            {/* AIRLINE TAB */}
            <TabsContent value="airline" className="space-y-6">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-display font-bold text-[#0A192F] mb-4">
                    Maskapai Domestik
                  </h3>
                  <AirlineGrid type="domestic" columns={4} />
                </div>

                <div>
                  <h3 className="text-2xl font-display font-bold text-[#0A192F] mb-4">
                    Maskapai Internasional
                  </h3>
                  <AirlineGrid type="international" columns={4} />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Container>
      </Section>
    </LayoutWrapper>
  )
}

function FacilityBadge({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex items-center gap-2 p-3 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#0284C7] transition-colors">
      <Icon className="h-5 w-5 text-[#0284C7] flex-shrink-0" />
      <span className="text-sm font-medium text-[#1E293B]">{label}</span>
    </div>
  )
}
