"use client"

import * as React from "react"
import { Plane, Clock, Calendar } from "lucide-react"
import { cn, formatTime } from "@/lib/utils"
import { FLIGHT_STATUS } from "@/lib/constants"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"

interface Flight {
  flightNumber: string
  airline: string
  destination?: string
  origin?: string
  scheduledTime: Date
  estimatedTime?: Date
  status: keyof typeof FLIGHT_STATUS
  gate?: string
  terminal?: string
}

// Mock flight data
const departureFlights: Flight[] = [
  {
    flightNumber: "GA 234",
    airline: "Garuda Indonesia",
    destination: "Jakarta (CGK)",
    scheduledTime: new Date(2026, 9, 3, 10, 30),
    estimatedTime: new Date(2026, 9, 3, 10, 30),
    status: "ON_TIME",
    gate: "A3",
    terminal: "Domestik",
  },
  {
    flightNumber: "ID 7205",
    airline: "Batik Air",
    destination: "Denpasar (DPS)",
    scheduledTime: new Date(2026, 9, 3, 11, 15),
    estimatedTime: new Date(2026, 9, 3, 11, 45),
    status: "DELAYED",
    gate: "B2",
    terminal: "Domestik",
  },
  {
    flightNumber: "JT 358",
    airline: "Lion Air",
    destination: "Surabaya (SUB)",
    scheduledTime: new Date(2026, 9, 3, 12, 0),
    status: "BOARDING",
    gate: "A1",
    terminal: "Domestik",
  },
  {
    flightNumber: "AK 371",
    airline: "AirAsia",
    destination: "Kuala Lumpur (KUL)",
    scheduledTime: new Date(2026, 9, 3, 13, 30),
    estimatedTime: new Date(2026, 9, 3, 13, 30),
    status: "ON_TIME",
    gate: "C1",
    terminal: "Internasional",
  },
]

const arrivalFlights: Flight[] = [
  {
    flightNumber: "GA 235",
    airline: "Garuda Indonesia",
    origin: "Jakarta (CGK)",
    scheduledTime: new Date(2026, 9, 3, 9, 45),
    estimatedTime: new Date(2026, 9, 3, 9, 45),
    status: "ARRIVED",
    terminal: "Domestik",
  },
  {
    flightNumber: "SJ 251",
    airline: "Sriwijaya Air",
    origin: "Medan (KNO)",
    scheduledTime: new Date(2026, 9, 3, 10, 20),
    estimatedTime: new Date(2026, 9, 3, 10, 20),
    status: "ON_TIME",
    terminal: "Domestik",
  },
  {
    flightNumber: "TR 291",
    airline: "Scoot",
    origin: "Singapore (SIN)",
    scheduledTime: new Date(2026, 9, 3, 11, 30),
    estimatedTime: new Date(2026, 9, 3, 11, 50),
    status: "DELAYED",
    terminal: "Internasional",
  },
]

function FlightCard({ flight, type }: { flight: Flight; type: "departure" | "arrival" }) {
  const status = FLIGHT_STATUS[flight.status]
  const isDelayed = flight.status === "DELAYED"

  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <div className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Left Section - Flight Info */}
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#0284C7]/10 flex items-center justify-center flex-shrink-0">
                <Plane
                  className={cn(
                    "h-5 w-5 text-[#0284C7]",
                    type === "arrival" && "rotate-180"
                  )}
                />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-[#0A192F]">
                  {flight.flightNumber}
                </h3>
                <p className="text-sm text-[#64748B]">{flight.airline}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[#1E293B]">
              <span className="font-semibold">
                {type === "departure" ? "Tujuan:" : "Asal:"}
              </span>
              <span className="font-display font-bold text-[#0284C7]">
                {type === "departure" ? flight.destination : flight.origin}
              </span>
            </div>
          </div>

          {/* Center Section - Time Info */}
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#64748B]" />
              <span className="text-sm text-[#64748B]">Terjadwal:</span>
              <span className="font-semibold text-[#1E293B]">
                {formatTime(flight.scheduledTime)}
              </span>
            </div>
            {flight.estimatedTime && isDelayed && (
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-amber-600" />
                <span className="text-sm text-amber-600">Estimasi:</span>
                <span className="font-semibold text-amber-600">
                  {formatTime(flight.estimatedTime)}
                </span>
              </div>
            )}
            {flight.gate && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-[#64748B]">Gate:</span>
                <span className="font-bold text-[#0284C7]">{flight.gate}</span>
              </div>
            )}
          </div>

          {/* Right Section - Status & Terminal */}
          <div className="flex md:flex-col items-start md:items-end gap-2">
            <Badge
              variant={
                status.color === "success"
                  ? "success"
                  : status.color === "warning"
                  ? "warning"
                  : status.color === "error"
                  ? "error"
                  : status.color === "info"
                  ? "info"
                  : "default"
              }
              className="text-sm font-semibold px-3 py-1"
            >
              {status.label}
            </Badge>
            {flight.terminal && (
              <Badge variant="secondary" className="text-xs">
                {flight.terminal}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}

interface FlightStatusBoardProps {
  className?: string
}

export function FlightStatusBoard({ className }: FlightStatusBoardProps) {
  return (
    <div className={cn("w-full", className)}>
      <Tabs defaultValue="departure" className="w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-[#0A192F]">
            Status Penerbangan
          </h2>
          <TabsList>
            <TabsTrigger value="departure" className="gap-2">
              <Plane className="h-4 w-4" />
              Keberangkatan
            </TabsTrigger>
            <TabsTrigger value="arrival" className="gap-2">
              <Plane className="h-4 w-4 rotate-180" />
              Kedatangan
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="departure" className="space-y-4">
          {departureFlights.map((flight) => (
            <FlightCard
              key={flight.flightNumber}
              flight={flight}
              type="departure"
            />
          ))}
        </TabsContent>

        <TabsContent value="arrival" className="space-y-4">
          {arrivalFlights.map((flight) => (
            <FlightCard
              key={flight.flightNumber}
              flight={flight}
              type="arrival"
            />
          ))}
        </TabsContent>
      </Tabs>

      {/* Last Updated */}
      <div className="mt-6 text-center text-sm text-[#94A3B8]">
        Terakhir diperbarui: {formatTime(new Date())} • 
        Data bersifat ilustrasi
      </div>
    </div>
  )
}
