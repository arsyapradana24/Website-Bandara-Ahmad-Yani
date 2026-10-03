import * as React from "react"
import { BookOpen, PlaneArrival, PlaneTakeoff, Shield, Passport, AlertTriangle, Users, Info } from "lucide-react"
import { LayoutWrapper, PageHeader } from "@/components/layout"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PanduanPage() {
  return (
    <LayoutWrapper>
      <PageHeader
        title="Panduan Penerbangan"
        description="Panduan lengkap untuk perjalanan Anda di Bandara Ahmad Yani Semarang"
        icon={BookOpen}
        gradient="secondary"
      />

      {/* Important Notice */}
      <Section spacing="sm" className="bg-gradient-to-r from-amber-50 to-orange-50 border-y-2 border-amber-200">
        <Container>
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-amber-900 mb-2">
                Informasi Penting
              </h3>
              <p className="text-amber-800 leading-relaxed">
                Untuk kelancaran perjalanan Anda, pastikan datang setidaknya{" "}
                <strong>2 jam sebelum</strong> waktu keberangkatan untuk penerbangan domestik dan{" "}
                <strong>3 jam</strong> untuk penerbangan internasional.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="default">
        <Container>
          <Tabs defaultValue="domestik" className="w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-[#0A192F]">
                Pilih Jenis Penerbangan
              </h2>
              <TabsList className="w-full md:w-auto">
                <TabsTrigger value="domestik" className="flex-1 md:flex-none gap-2">
                  <PlaneTakeoff className="h-4 w-4" />
                  Domestik
                </TabsTrigger>
                <TabsTrigger value="internasional" className="flex-1 md:flex-none gap-2">
                  <Passport className="h-4 w-4" />
                  Internasional
                </TabsTrigger>
              </TabsList>
            </div>

            {/* DOMESTIK TAB */}
            <TabsContent value="domestik" className="space-y-6">
              <Accordion type="multiple" defaultValue={["kedatangan-domestik"]}>
                {/* Kedatangan Domestik */}
                <AccordionItem value="kedatangan-domestik">
                  <AccordionTrigger value="kedatangan-domestik">
                    <div className="flex items-center gap-3">
                      <PlaneArrival className="h-5 w-5 text-[#0284C7]" />
                      <span>Panduan Kedatangan</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="kedatangan-domestik">
                    <div className="space-y-4 pt-2">
                      <ol className="space-y-4 list-decimal list-inside">
                        <li className="text-[#1E293B]">
                          <strong>Menuju Area Kedatangan</strong>
                          <p className="ml-6 mt-2 text-[#64748B]">
                            Setibanya di terminal kedatangan, ikuti petunjuk "Kedatangan" ke area pengambilan bagasi.
                          </p>
                        </li>
                        <li className="text-[#1E293B]">
                          <strong>Pengambilan Bagasi</strong>
                          <p className="ml-6 mt-2 text-[#64748B]">
                            Periksa layar informasi di conveyor belt sesuai nomor penerbangan Anda. 
                            Staf maskapai akan melakukan pemeriksaan sesuai dengan baggage claim tag.
                          </p>
                        </li>
                        <li className="text-[#1E293B]">
                          <strong>Kehilangan Bagasi</strong>
                          <p className="ml-6 mt-2 text-[#64748B]">
                            Apabila kehilangan bagasi, segera hubungi staf maskapai di konter Lost and Found.
                          </p>
                        </li>
                        <li className="text-[#1E293B]">
                          <strong>Fasilitas Tambahan</strong>
                          <p className="ml-6 mt-2 text-[#64748B]">
                            Tersedia trolley gratis di area pengambilan bagasi. 
                            Anda dapat menggunakan jasa porter untuk membantu membawa barang bawaan.
                          </p>
                        </li>
                      </ol>

                      <Card className="bg-blue-50 border-blue-200">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div className="text-sm text-blue-900">
                              <strong>Tips:</strong> Ingat nomor petugas porter Anda dan segera laporkan 
                              apabila terjadi hal-hal yang tidak diinginkan.
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Keberangkatan Domestik */}
                <AccordionItem value="keberangkatan-domestik">
                  <AccordionTrigger value="keberangkatan-domestik">
                    <div className="flex items-center gap-3">
                      <PlaneTakeoff className="h-5 w-5 text-[#0284C7]" />
                      <span>Panduan Keberangkatan</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="keberangkatan-domestik">
                    <div className="space-y-6 pt-2">
                      {/* Check-in */}
                      <div>
                        <h4 className="font-display font-bold text-lg text-[#0A192F] mb-3 flex items-center gap-2">
                          <Badge variant="default">1</Badge>
                          Check-in (Pelaporan)
                        </h4>
                        <div className="ml-10 space-y-3">
                          <div>
                            <p className="font-semibold text-[#1E293B] mb-2">Siapkan dokumen perjalanan:</p>
                            <ul className="list-disc list-inside space-y-1 text-[#64748B]">
                              <li>Tiket sesuai tanggal keberangkatan</li>
                              <li>Kartu Identitas (KTP/SIM)</li>
                            </ul>
                          </div>
                          <p className="text-[#64748B]">
                            Antrilah pada meja pelaporan (check-in counter) yang sesuai dengan maskapai penerbangan Anda. 
                            Meja pelaporan dibuka 2 jam sebelum waktu keberangkatan.
                          </p>
                        </div>
                      </div>

                      {/* Bagasi */}
                      <div>
                        <h4 className="font-display font-bold text-lg text-[#0A192F] mb-3 flex items-center gap-2">
                          <Badge variant="default">2</Badge>
                          Bagasi
                        </h4>
                        <div className="ml-10 space-y-2 text-[#64748B]">
                          <p>• Laporkan bagasi Anda yang beratnya lebih dari 7 Kg</p>
                          <p>• Hanya diperkenankan membawa 1 bagasi kabin dengan berat kurang dari 7 Kg</p>
                        </div>
                      </div>

                      {/* Security */}
                      <div>
                        <h4 className="font-display font-bold text-lg text-[#0A192F] mb-3 flex items-center gap-2">
                          <Badge variant="default">3</Badge>
                          Pemeriksaan Keamanan
                        </h4>
                        <div className="ml-10 space-y-3">
                          <ol className="list-decimal list-inside space-y-2 text-[#64748B]">
                            <li>Siapkan dokumen perjalanan Anda</li>
                            <li>Seluruh barang bawaan wajib diperiksa melalui mesin X-ray</li>
                            <li>Masukkan seluruh benda logam (telepon genggam, kunci, dll) ke dalam tas</li>
                            <li>Seluruh penumpang wajib melalui Walk Through Metal Detector (WTMD)</li>
                            <li>Apabila diperlukan, penumpang dan barang bawaan dapat diperiksa secara manual</li>
                          </ol>

                          <Card className="bg-red-50 border-red-200 mt-4">
                            <CardContent className="p-4">
                              <div className="flex items-start gap-3">
                                <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <div className="text-sm text-red-900">
                                  <strong>Tidak diperkenankan membawa:</strong> Benda tajam (pisau, gunting, cutter), 
                                  korek api, korek gas, dan barang berbahaya lainnya.
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      {/* Ruang Keberangkatan */}
                      <div>
                        <h4 className="font-display font-bold text-lg text-[#0A192F] mb-3 flex items-center gap-2">
                          <Badge variant="default">4</Badge>
                          Ruang Keberangkatan
                        </h4>
                        <div className="ml-10 text-[#64748B]">
                          <p>
                            Setelah check-in, tunggu waktu keberangkatan di Ruang Keberangkatan sesuai lokasi 
                            yang tertera pada Boarding Pass.
                          </p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Transit */}
                <AccordionItem value="transit-domestik">
                  <AccordionTrigger value="transit-domestik">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-[#0284C7]" />
                      <span>Panduan Transit</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="transit-domestik">
                    <div className="space-y-4 pt-2">
                      <ol className="space-y-3 list-decimal list-inside text-[#64748B]">
                        <li>Setibanya di terminal kedatangan, ikuti petunjuk "Kedatangan" menuju konter transit dan transfer</li>
                        <li>Lakukan pelaporan diri dan pemeriksaan dokumen penerbangan sesuai maskapai penerbangan Anda</li>
                        <li>Penumpang transit dan transfer tidak perlu keluar untuk melakukan pemeriksaan Security (kecuali jika diperlukan)</li>
                        <li>Setelah pemeriksaan, Anda dapat langsung menuju ruang tunggu keberangkatan untuk menunggu waktu boarding</li>
                      </ol>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Keamanan */}
                <AccordionItem value="keamanan-domestik">
                  <AccordionTrigger value="keamanan-domestik">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-[#0284C7]" />
                      <span>Panduan Keamanan</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="keamanan-domestik">
                    <div className="space-y-6 pt-2">
                      <div>
                        <h4 className="font-semibold text-[#0A192F] mb-3">Security Screening</h4>
                        <ol className="space-y-2 list-decimal list-inside text-[#64748B]">
                          <li>Persiapkan dokumen perjalanan Anda (kartu identitas, tiket pesawat)</li>
                          <li>Letakkan barang-barang yang mengandung Cairan, Aerosol, dan Gel (LAG) ke dalam tray</li>
                          <li>Letakkan barang-barang elektronik (laptop, mobile phones, tablets) dan metal ke dalam tray terpisah</li>
                          <li>Lepas jaket, sweater, topi, dan sepatu kemudian letakkan ke dalam tray</li>
                          <li>Masukkan barang bawaan Anda ke dalam X-Ray conveyor belt</li>
                          <li>Pemeriksaan fisik akan dilakukan dengan menggunakan walkthrough metal detectors</li>
                        </ol>
                      </div>

                      <Card className="bg-amber-50 border-amber-200">
                        <CardContent className="p-4">
                          <h5 className="font-semibold text-amber-900 mb-2">Bagasi Terlarang</h5>
                          <p className="text-sm text-amber-800">
                            Indonesia memiliki peraturan ketat bagi penumpang yang membawa barang terlarang dalam penerbangan. 
                            Sangat disarankan untuk bertanya pada staf maskapai sebelum check-in jika tidak yakin dengan barang 
                            dalam tas tangan Anda.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            {/* INTERNASIONAL TAB */}
            <TabsContent value="internasional" className="space-y-6">
              <Accordion type="multiple" defaultValue={["kedatangan-intl"]}>
                {/* Kedatangan Internasional */}
                <AccordionItem value="kedatangan-intl">
                  <AccordionTrigger value="kedatangan-intl">
                    <div className="flex items-center gap-3">
                      <PlaneArrival className="h-5 w-5 text-[#0284C7]" />
                      <span>Panduan Kedatangan</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="kedatangan-intl">
                    <div className="space-y-6 pt-2">
                      <div>
                        <h4 className="font-display font-bold text-lg text-[#0A192F] mb-3">
                          Visa On Arrival (VOA)
                        </h4>
                        <div className="space-y-3 text-[#64748B]">
                          <p>Visa Kunjungan Saat Kedatangan diberikan kepada Warga Negara Asing yang bermaksud mengunjungi Indonesia dalam rangka:</p>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>Wisata</li>
                            <li>Kunjungan sosial budaya</li>
                            <li>Kunjungan usaha</li>
                            <li>Tugas pemerintahan</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-semibold text-[#0A192F] mb-2">Persyaratan VOA:</h5>
                        <ol className="list-decimal list-inside space-y-1 text-[#64748B]">
                          <li>Surat perjalanan atau paspor dengan masa berlaku minimal 6 (enam) bulan</li>
                          <li>Tidak terdaftar dalam daftar penangkalan</li>
                          <li>Membayar biaya sesuai ketentuan yang berlaku</li>
                        </ol>
                      </div>

                      <div>
                        <h5 className="font-semibold text-[#0A192F] mb-2">Ketentuan VOA:</h5>
                        <ul className="list-disc list-inside space-y-1 text-[#64748B]">
                          <li>Diberikan untuk jangka waktu 30 (tiga puluh) hari</li>
                          <li>Dapat diperpanjang paling lama 30 (tiga puluh) hari</li>
                          <li>Tidak dapat dialihstatuskan menjadi Izin Keimigrasian lainnya</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Keberangkatan Internasional */}
                <AccordionItem value="keberangkatan-intl">
                  <AccordionTrigger value="keberangkatan-intl">
                    <div className="flex items-center gap-3">
                      <PlaneTakeoff className="h-5 w-5 text-[#0284C7]" />
                      <span>Panduan Keberangkatan</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="keberangkatan-intl">
                    <div className="space-y-4 pt-2">
                      <ol className="space-y-4 list-decimal list-inside text-[#64748B]">
                        <li>
                          <strong className="text-[#1E293B]">Packing dan Persiapan</strong>
                          <p className="ml-6 mt-1">
                            Packing semua barang Anda, termasuk tas tangan, sesuai dengan pedoman keamanan.
                          </p>
                        </li>
                        <li>
                          <strong className="text-[#1E293B]">Datang ke Bandara</strong>
                          <p className="ml-6 mt-1">
                            Ketika tiba di bandara, periksa info penerbangan di layar informasi untuk mengetahui 
                            konter check-in dan waktu keberangkatan.
                          </p>
                        </li>
                        <li>
                          <strong className="text-[#1E293B]">Check-in</strong>
                          <p className="ml-6 mt-1">Antrilah pada meja pelaporan dengan dokumen:</p>
                          <ul className="list-disc list-inside ml-12 mt-1 space-y-1">
                            <li>Paspor yang masih berlaku</li>
                            <li>Tiket pesawat atau konfirmasi pemesanan</li>
                            <li>Visa (jika diperlukan)</li>
                          </ul>
                        </li>
                        <li>
                          <strong className="text-[#1E293B]">Immigration</strong>
                          <p className="ml-6 mt-1">
                            Menuju ke konter imigrasi dengan dokumen perjalanan Anda.
                          </p>
                        </li>
                        <li>
                          <strong className="text-[#1E293B]">Ruang Tunggu</strong>
                          <p className="ml-6 mt-1">
                            Masuk ke ruang tunggu keberangkatan sesuai yang tertera di boarding pass.
                          </p>
                        </li>
                      </ol>

                      <Card className="bg-blue-50 border-blue-200 mt-4">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-blue-900">
                              Meja pelaporan dibuka <strong>3 jam sebelum</strong> waktu keberangkatan 
                              untuk penerbangan internasional.
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Transit Internasional */}
                <AccordionItem value="transit-intl">
                  <AccordionTrigger value="transit-intl">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-[#0284C7]" />
                      <span>Panduan Transit</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="transit-intl">
                    <div className="space-y-3 pt-2 text-[#64748B]">
                      <ol className="list-decimal list-inside space-y-2">
                        <li>Setibanya di terminal kedatangan, ikuti petunjuk "Kedatangan" menuju konter transit dan transfer</li>
                        <li>Lakukan pelaporan diri dan pemeriksaan dokumen penerbangan sesuai maskapai penerbangan Anda</li>
                        <li>Penumpang transit dan transfer tidak perlu keluar untuk mengurus kepabeanan (Custom, Immigration & Quarantine)</li>
                        <li>Setelah pemeriksaan keamanan, Anda dapat langsung menuju ruang tunggu keberangkatan di lantai 3 dengan menggunakan elevator</li>
                      </ol>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Imigrasi */}
                <AccordionItem value="imigrasi">
                  <AccordionTrigger value="imigrasi">
                    <div className="flex items-center gap-3">
                      <Passport className="h-5 w-5 text-[#0284C7]" />
                      <span>Panduan Imigrasi</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="imigrasi">
                    <div className="space-y-4 pt-2">
                      <ol className="space-y-3 list-decimal list-inside text-[#64748B]">
                        <li>Meja imigrasi dibagi menjadi beberapa bagian untuk Warga Negara Indonesia dan pengunjung asing</li>
                        <li>Pengunjung yang masuk Indonesia diwajibkan untuk menyerahkan form declare</li>
                        <li>Pemegang paspor Indonesia tidak diharuskan mengisi form declare</li>
                        <li>Jika Anda berasal dari negara tanpa bebas VISA, Anda harus membayar biaya sesuai ketentuan yang berlaku</li>
                        <li>Penumpang disarankan untuk antri di meja imigrasi dan menyiapkan dokumen perjalanan</li>
                        <li>Petugas Imigrasi akan memverifikasi ID foto Anda dan mungkin mengajukan beberapa pertanyaan sesuai prosedur screening</li>
                      </ol>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Karantina */}
                <AccordionItem value="karantina">
                  <AccordionTrigger value="karantina">
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-[#0284C7]" />
                      <span>Karantina & Pendampingan Khusus</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="karantina">
                    <div className="space-y-4 pt-2">
                      <p className="text-[#64748B]">
                        Karantina dan sertifikasi untuk penumpang, hewan, dan tumbuhan akan diperiksa di tempat ini. 
                        Silahkan memverifikasi persyaratan yang relevan sebelum bepergian.
                      </p>
                      <p className="text-[#64748B]">
                        Jika Anda memiliki permintaan khusus atau memerlukan bantuan, hubungi petugas bandara atau 
                        customer service kami.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section spacing="default" className="bg-gradient-to-br from-[#0284C7] to-[#0066CC] text-white">
        <Container>
          <div className="text-center space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Butuh Bantuan Lebih Lanjut?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Tim customer service kami siap membantu Anda 24/7
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+622486000600"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0284C7] rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                Hubungi Kami
              </a>
              <a
                href="mailto:contact@injourneyairports.id"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#0284C7] transition-colors"
              >
                Email Support
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </LayoutWrapper>
  )
}
