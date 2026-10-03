"use client"

import * as React from "react"
import { Search, Users, Calendar as CalendarIcon, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface BookingFormProps {
  onSubmit?: (data: BookingFormData) => void
  className?: string
}

export interface BookingFormData {
  from: string
  to: string
  departDate: string
  returnDate?: string
  passengers: string
  tripType: "one-way" | "round-trip"
}

const popularDestinations = [
  "Jakarta (CGK)",
  "Surabaya (SUB)",
  "Denpasar (DPS)",
  "Medan (KNO)",
  "Makassar (UPG)",
  "Yogyakarta (JOG)",
  "Balikpapan (BPN)",
  "Palembang (PLM)",
]

export function BookingForm({ onSubmit, className }: BookingFormProps) {
  const [tripType, setTripType] = React.useState<"one-way" | "round-trip">("round-trip")
  const [formData, setFormData] = React.useState<BookingFormData>({
    from: "",
    to: "",
    departDate: "",
    returnDate: "",
    passengers: "1",
    tripType: "round-trip",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const data = { ...formData, tripType }
    onSubmit?.(data)
    
    // Redirect to Traveloka (example)
    window.open(
      "https://www.traveloka.com/id-id/flight/airport/srg",
      "_blank",
      "noopener,noreferrer"
    )
  }

  const updateFormData = (field: keyof BookingFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Search className="h-5 w-5 text-[#0284C7]" />
          Cari & Pesan Tiket Pesawat
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Trip Type Toggle */}
          <div className="flex gap-2">
            <Button
              type="button"
              variant={tripType === "one-way" ? "default" : "secondary"}
              size="sm"
              onClick={() => setTripType("one-way")}
            >
              Sekali Jalan
            </Button>
            <Button
              type="button"
              variant={tripType === "round-trip" ? "default" : "secondary"}
              size="sm"
              onClick={() => setTripType("round-trip")}
            >
              Pulang Pergi
            </Button>
          </div>

          {/* From & To */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="from" required>
                <MapPin className="h-4 w-4 inline mr-1" />
                Dari
              </Label>
              <Select
                value={formData.from}
                onValueChange={(value) => updateFormData("from", value)}
              >
                <SelectTrigger id="from">
                  <SelectValue placeholder="Pilih kota keberangkatan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Semarang (SRG)">Semarang (SRG)</SelectItem>
                  {popularDestinations.map((dest) => (
                    <SelectItem key={dest} value={dest}>
                      {dest}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="to" required>
                <MapPin className="h-4 w-4 inline mr-1" />
                Ke
              </Label>
              <Select
                value={formData.to}
                onValueChange={(value) => updateFormData("to", value)}
              >
                <SelectTrigger id="to">
                  <SelectValue placeholder="Pilih kota tujuan" />
                </SelectTrigger>
                <SelectContent>
                  {popularDestinations.map((dest) => (
                    <SelectItem key={dest} value={dest}>
                      {dest}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="departDate" required>
                <CalendarIcon className="h-4 w-4 inline mr-1" />
                Tanggal Berangkat
              </Label>
              <Input
                id="departDate"
                type="date"
                value={formData.departDate}
                onChange={(e) => updateFormData("departDate", e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                required
              />
            </div>

            {tripType === "round-trip" && (
              <div className="space-y-2">
                <Label htmlFor="returnDate" required={tripType === "round-trip"}>
                  <CalendarIcon className="h-4 w-4 inline mr-1" />
                  Tanggal Pulang
                </Label>
                <Input
                  id="returnDate"
                  type="date"
                  value={formData.returnDate}
                  onChange={(e) => updateFormData("returnDate", e.target.value)}
                  min={formData.departDate || new Date().toISOString().split("T")[0]}
                  required={tripType === "round-trip"}
                />
              </div>
            )}
          </div>

          {/* Passengers */}
          <div className="space-y-2">
            <Label htmlFor="passengers" required>
              <Users className="h-4 w-4 inline mr-1" />
              Jumlah Penumpang
            </Label>
            <Select
              value={formData.passengers}
              onValueChange={(value) => updateFormData("passengers", value)}
            >
              <SelectTrigger id="passengers">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <SelectItem key={num} value={String(num)}>
                    {num} {num === 1 ? "Penumpang" : "Penumpang"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Submit Button */}
          <Button type="submit" variant="accent" size="lg" className="w-full">
            <Search className="h-5 w-5 mr-2" />
            Cari Penerbangan
          </Button>

          {/* Info Text */}
          <p className="text-xs text-center text-[#64748B]">
            Anda akan diarahkan ke partner kami untuk melanjutkan pemesanan
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
