"use client"

import * as React from "react"
import { Ticket, Plane, Star, Phone, Mail, User, Calendar, MapPin, Users, MessageSquare, Send } from "lucide-react"
import { LayoutWrapper, PageHeader } from "@/components/layout"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { BookingForm } from "@/components/features"
import { SPECIAL_TRANSPORT } from "@/lib/constants"

export default function PemesananPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    passengers: "1",
    pickupLocation: "",
    destination: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitSuccess, setSubmitSuccess] = React.useState(false)

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        passengers: "1",
        pickupLocation: "",
        destination: "",
        message: "",
      })
    }, 3000)
  }

  return (
    <LayoutWrapper>
      <PageHeader
        title="Pemesanan"
        description="Pesan tiket pesawat dan layanan transportasi khusus"
        icon={Ticket}
        gradient="accent"
      />

      {/* Booking Options */}
      <Section spacing="default">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Flight Booking */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#0284C7] to-[#0066CC] flex items-center justify-center">
                  <Plane className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-[#0A192F]">
                    Pemesanan Tiket Pesawat
                  </h2>
                  <p className="text-[#64748B]">Cari dan pesan penerbangan Anda</p>
                </div>
              </div>

              <BookingForm />

              {/* Partner Info */}
              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Plane className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div className="text-sm text-blue-900">
                      <strong>Partner Pemesanan:</strong> Anda akan diarahkan ke partner kami 
                      (Traveloka, Tiket.com, atau website maskapai) untuk melanjutkan pemesanan 
                      dan pembayaran tiket pesawat.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Special Transport */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#D97706] to-[#F59E0B] flex items-center justify-center">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-[#0A192F]">
                    Transportasi Khusus
                  </h2>
                  <p className="text-[#64748B]">Layanan premium dan eksklusif</p>
                </div>
              </div>

              {/* Service Options */}
              <div className="space-y-4">
                {Object.entries(SPECIAL_TRANSPORT).map(([key, service]) => (
                  <Card key={key} className="border-2 border-[#F59E0B]/20 hover:border-[#F59E0B] transition-all">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{service.name}</CardTitle>
                          <CardDescription className="mt-1">
                            Rentang harga: <span className="font-semibold text-[#D97706]">{service.priceRange}</span>
                          </CardDescription>
                        </div>
                        <Badge variant="warning">Premium</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-sm text-[#64748B]">Pilihan kendaraan:</p>
                        <div className="flex flex-wrap gap-2">
                          {service.vehicles.slice(0, 3).map((vehicle, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {vehicle}
                            </Badge>
                          ))}
                          {service.vehicles.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{service.vehicles.length - 3} lainnya
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Booking Form for Special Transport */}
              <Card className="border-2 border-[#0284C7]">
                <CardHeader className="bg-gradient-to-r from-[#0284C7]/5 to-[#0066CC]/5">
                  <CardTitle>Form Pemesanan Layanan Khusus</CardTitle>
                  <CardDescription>
                    Isi formulir di bawah ini untuk memesan layanan transportasi khusus
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" required>
                          <User className="h-4 w-4 inline mr-1" />
                          Nama Lengkap
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="John Doe"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" required>
                          <Mail className="h-4 w-4 inline mr-1" />
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" required>
                          <Phone className="h-4 w-4 inline mr-1" />
                          Nomor Telepon
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="+62 812 3456 7890"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service" required>
                          <Star className="h-4 w-4 inline mr-1" />
                          Layanan
                        </Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => handleChange("service", value)}
                        >
                          <SelectTrigger id="service">
                            <SelectValue placeholder="Pilih layanan" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="trac">TRAC</SelectItem>
                            <SelectItem value="golden-bird">Golden Bird</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date" required>
                          <Calendar className="h-4 w-4 inline mr-1" />
                          Tanggal & Waktu
                        </Label>
                        <Input
                          id="date"
                          type="datetime-local"
                          value={formData.date}
                          onChange={(e) => handleChange("date", e.target.value)}
                          min={new Date().toISOString().slice(0, 16)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="passengers-special" required>
                          <Users className="h-4 w-4 inline mr-1" />
                          Jumlah Penumpang
                        </Label>
                        <Select
                          value={formData.passengers}
                          onValueChange={(value) => handleChange("passengers", value)}
                        >
                          <SelectTrigger id="passengers-special">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                              <SelectItem key={num} value={String(num)}>
                                {num} {num === 1 ? "Penumpang" : "Penumpang"}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="pickupLocation" required>
                          <MapPin className="h-4 w-4 inline mr-1" />
                          Lokasi Penjemputan
                        </Label>
                        <Input
                          id="pickupLocation"
                          value={formData.pickupLocation}
                          onChange={(e) => handleChange("pickupLocation", e.target.value)}
                          placeholder="Bandara Ahmad Yani"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="destination" required>
                          <MapPin className="h-4 w-4 inline mr-1" />
                          Tujuan
                        </Label>
                        <Input
                          id="destination"
                          value={formData.destination}
                          onChange={(e) => handleChange("destination", e.target.value)}
                          placeholder="Hotel/Alamat Tujuan"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        <MessageSquare className="h-4 w-4 inline mr-1" />
                        Pesan Tambahan (Opsional)
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Tambahkan catatan atau permintaan khusus..."
                        rows={3}
                      />
                    </div>

                    {submitSuccess && (
                      <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-900 flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                          <Send className="h-5 w-5 text-white" />
                        </div>
                        <p className="text-sm font-medium">
                          Pemesanan berhasil dikirim! Tim kami akan menghubungi Anda segera.
                        </p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      className="w-full"
                      loading={isSubmitting}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Mengirim Pemesanan..."
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Kirim Pemesanan
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact Info */}
      <Section spacing="default" className="bg-gradient-to-b from-[#F8FAFC] to-white">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-display font-bold text-[#0A192F] mb-3">
              Butuh Bantuan?
            </h2>
            <p className="text-lg text-[#64748B]">
              Tim customer service kami siap membantu Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="pt-6 space-y-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#0284C7] to-[#0066CC] flex items-center justify-center mx-auto">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0A192F] mb-2">Telepon</h3>
                  <a
                    href="tel:+622486000600"
                    className="text-[#0284C7] hover:underline font-medium"
                  >
                    +62 24 86000600
                  </a>
                  <p className="text-sm text-[#64748B] mt-1">24/7 Customer Service</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="pt-6 space-y-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#0284C7] to-[#0066CC] flex items-center justify-center mx-auto">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0A192F] mb-2">Email</h3>
                  <a
                    href="mailto:contact@injourneyairports.id"
                    className="text-[#0284C7] hover:underline font-medium break-all"
                  >
                    contact@injourneyairports.id
                  </a>
                  <p className="text-sm text-[#64748B] mt-1">Respon dalam 24 jam</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="pt-6 space-y-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#0284C7] to-[#0066CC] flex items-center justify-center mx-auto">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0A192F] mb-2">Lokasi</h3>
                  <p className="text-[#64748B]">
                    Jl. Bandara Ahmad Yani
                    <br />
                    Semarang, Jawa Tengah
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    </LayoutWrapper>
  )
}
