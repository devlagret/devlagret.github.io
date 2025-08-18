import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  ChevronRight,
  Menu,
  Calendar,
  Play,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Newspaper,
  BellRing,
  Users2,
  GraduationCap,
  Church,
  LibraryBig,
  Star,
  Leaf,
} from "lucide-react";
import * as motion from "motion/react-client";
import type { Metadata } from "next";
import Image from "next/image";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import Gallery from "./gallery";
import NewsAndAnnouncements from "./newsAndAnnouncements";
// NOTE: This is a clean, modern replica starter inspired by kanisius.sch.id's typical structure
// without copying any proprietary content. Swap placeholder texts/images with real assets.
// Tailwind is assumed available. All components live in one file for easy preview.

const NavBar: React.FC = () => (
  <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
      <div className="flex items-center gap-3">
        <Image src="/img/logo.png" alt="School Logo" width={40} height={40} />
        <div className="leading-tight">
          <div className="font-extrabold tracking-tight">
            SD Kanisius Kedawung
          </div>
          <div className="text-xs text-muted-foreground">
            Faith • Excellence • Service
          </div>
        </div>
      </div>

      <nav className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList className="gap-2">
            {[
              "Beranda",
              "Profil",
              "Akademik",
              "Kesiswaan",
              "Berita",
              "PPDB",
              "Kontak",
            ].map((item) => (
              <NavigationMenuItem key={item}>
                <a
                  className="rounded-full px-4 py-2 text-sm font-medium hover:bg-muted"
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </a>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      <div className="flex items-center gap-2">
        <Button className="hidden md:inline-flex rounded-full" size="sm">
          PPDB Online
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden rounded-full"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </div>
  </header>
);

const Hero: React.FC = () => (
  <section id="beranda" className="relative">
    <div className="absolute inset-0 -z-10">
      <Image
        src="/hero.png"
        fill
        alt="School hero"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/50 to-transparent" />
    </div>

    <div className="mx-auto grid max-w-7xl gap-6 px-4 py-20 md:grid-cols-2 md:py-28 lg:py-36">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* <div> */}
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Mendidik dengan Hati,{" "}
          <span className="text-slate-200">Membentuk Masa Depan</span>
        </h1>
        <p className="mt-4 max-w-xl text-white/90">
          Lingkungan belajar yang menumbuhkan iman, karakter, dan prestasi
          akademik. Bergabunglah dengan komunitas pembelajar yang peduli dan
          berdaya saing global.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button size="lg" className="rounded-full">
            Daftar PPDB <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="rounded-full"
            asChild
          >
            <a href="#profil">
              <Play className="mr-2 h-4 w-4" /> Jelajahi Profil
            </a>
          </Button>
        </div>
        <div className="mt-6 flex gap-3">
          <Badge variant="secondary" className="rounded-full">
            Sekolah Katolik
          </Badge>
          <Badge variant="outline" className="text-white rounded-full">
            Terakreditasi A
          </Badge>
        </div>
        {/* </div> */}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Prestasi Siswa",
              icon: <Star className="h-5 w-5" />,
              value: "120+",
              desc: "Penghargaan akademik & non-akademik",
            },
            {
              title: "Guru Berpengalaman",
              icon: <Users2 className="h-5 w-5" />,
              value: "80+",
              desc: "Pendidik berkompeten & peduli",
            },
            {
              title: "Lulusan Unggul",
              icon: <GraduationCap className="h-5 w-5" />,
              value: "98%",
              desc: "Lulus ke jenjang favorit",
            },
            {
              title: "Unit Pendidikan",
              icon: <LibraryBig className="h-5 w-5" />,
              value: "TK sampai SD",
              desc: "Rangkaian pendidikan berkelanjutan",
            },
          ].map((k, i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{k.title}</CardTitle>
                {k.icon}
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-extrabold tracking-tight">
                  {k.value}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{k.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const SectionTitle: React.FC<{ title: string; subtitle?: string }> = ({
  title,
  subtitle,
}) => (
  <div className="mx-auto mb-8 max-w-3xl text-center">
    <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
      {title}
    </h2>
    {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
  </div>
);

const Profile: React.FC = () => (
  <section id="profil" className="bg-muted/30 py-14 md:py-20">
    <div className="mx-auto max-w-7xl px-4">
      <SectionTitle
        title="Profil Singkat"
        subtitle="Sekilas tentang identitas, visi, dan misi sekolah."
      />
      <div className="grid items-start gap-6 md:grid-cols-2">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Identitas & Visi</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm leading-relaxed">
            <p>
              Sekolah Dasar Kanisius Kedawung berkomitmen pada pendidikan
              holistik yang menumbuhkan kecerdasan intelektual, emosional, dan
              spiritual.
            </p>
            <ul className="list-inside list-disc text-muted-foreground">
              <li>Menjadi komunitas belajar yang humanis dan inklusif.</li>
              <li>
                Mengembangkan kepemimpinan yang berlandaskan nilai Kristiani.
              </li>
              <li>Melayani sesama dan merawat ciptaan.</li>
            </ul>
            <div className="flex flex-wrap gap-2 pt-1">
              <Badge className="rounded-full" variant="secondary">
                <Church className="mr-1 h-3 w-3" />
                Iman
              </Badge>
              <Badge className="rounded-full" variant="secondary">
                <LibraryBig className="mr-1 h-3 w-3" />
                Intelektual
              </Badge>
              <Badge className="rounded-full" variant="secondary">
                <Leaf className="mr-1 h-3 w-3" />
                Pelayanan
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden h-80 p-0 rounded-2xl">
          {/* <img
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop"
            alt="School building"
            className="h-64 w-full object-cover md:h-full"
          /> */}
          <Image 
            src="/visimisi.jpg"
            width={700}
            height={500}
            alt="School building"
            className="object-covermd:h-full"
          />
        </Card>
      </div>
    </div>
  </section>
);

const ProgramsTabs: React.FC = () => (
  <section id="akademik" className="bg-muted/30 py-14 md:py-20">
    <div className="mx-auto max-w-7xl px-4">
      <SectionTitle
        title="Program Pendidikan"
        subtitle="Unit dan program unggulan."
      />
      <Tabs defaultValue="sd" className="mx-auto max-w-5xl">
        <TabsList className="grid grid-cols-2 rounded-full">
          <TabsTrigger value="tk">TK</TabsTrigger>
          <TabsTrigger value="sd">SD</TabsTrigger>
        </TabsList>
        {(["tk", "sd"] as const).map((k) => (
          <TabsContent key={k} value={k} className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle>Kurukulum & Fasilitas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    Penguatan literasi, numerasi, karakter, dan pembelajaran
                    berbasis proyek.
                  </p>
                  <ul className="list-inside list-disc">
                    <li>Laboratorium dan perpustakaan modern</li>
                    <li>Bimbingan konseling & pengembangan karakter</li>
                    <li>Kegiatan ko/ekstrakurikuler beragam</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="rounded-2xl p-0">
                <Image
                  src={`/img/program/${k}.jpg`}
                  alt={`Fasilitas ${k}`}
                  height={300}
                  width={400}
                  className="w-full rounded-2xl object-contain"
                />
              </Card>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  </section>
);

const EventsCalendar: React.FC = () => (
  <section id="agenda" className="py-14 md:py-20">
    <div className="mx-auto max-w-7xl px-4">
      <SectionTitle
        title="Agenda & Kegiatan"
        subtitle="Jangan lewatkan kegiatan penting kami."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {/* {[1].map((i) => (
          <Card key={i} className="rounded-2xl">
            <CardContent className="flex gap-3 p-4">
              <div className="flex h-14 w-14 flex-col items-center justify-center rounded-xl bg-muted">
                <div className="text-xs font-semibold">AUG</div>
                <div className="text-xl font-extrabold">{10 + i}</div>
              </div>
              <div>
                <div className="font-medium">Kegiatan Sekolah #{i}</div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center">
                    <Calendar className="mr-1 h-3 w-3" />
                    08:00–12:00
                  </span>
                  <span className="inline-flex items-center">
                    <MapPin className="mr-1 h-3 w-3" />
                    Aula
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                  Deskripsi singkat agenda atau kegiatan siswa/guru.
                </p>
              </div>
            </CardContent>
          </Card>
        ))} */}
      </div>
    </div>
  </section>
);

const FAQ: React.FC = () => (
  <section className="bg-muted/30 py-14 md:py-20">
    <div className="mx-auto max-w-5xl px-4">
      <SectionTitle
        title="Tanya Jawab"
        subtitle="Informasi umum yang sering dicari."
      />
      <Accordion
        type="single"
        collapsible
        className="rounded-2xl p-2"
      >
        {[
          {
            q: "Bagaimana cara mendaftar PPDB?",
            a: "Klik tombol PPDB Online, siapkan dokumen, isi formulir, dan unggah berkas sesuai petunjuk.",
          },
          {
            q: "Apakah ada beasiswa?",
            a: "Ada. Sekolah menyediakan keringanan biaya dan beasiswa prestasi sesuai kuota dan ketentuan.",
          },
          {
            q: "Apa saja ekstrakurikuler yang tersedia?",
            a: "Mulai dari paduan suara, pramuka, karawitan, osn, hingga seni rupa.",
          },
        ].map((item, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

const Contact: React.FC = () => (
  <section id="kontak" className="bg-muted/30 py-14 md:py-20">
    <div className="mx-auto max-w-7xl px-4">
      <SectionTitle
        title="Kontak"
        subtitle="Hubungi kami untuk informasi lebih lanjut."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Kirim Pesan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Input placeholder="Nama" />
            <Input placeholder="Email" type="email" />
            <Textarea placeholder="Pesan Anda" rows={50} />
            <Button className="rounded-full">Kirim</Button>
          </CardContent>
        </Card>
        <Card className="rounded-2xl">
          <CardContent className="space-y-3 p-6">
            <div className="flex items-center gap-2 text-sm">
              <a
                href="https://maps.app.goo.gl/vz8bdysmayDEo4v68"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="h-4 w-4" />
                Mojorejo, RT.11/RW.05, Mojorejo, Mojoroto, Kedawung, Kec.
                Jumapolo, Kabupaten Karanganyar, Jawa Tengah 57783
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4" />
            </div>
            <div className="mt-2 flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <a href="https://www.instagram.com/tk_sd_kanisius_kedawung" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <a href="https://www.youtube.com/@sdkkedawung9872" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="mt-4 overflow-hidden rounded-2xl">
              {/* Map placeholder */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123304.379476924!2d111.03895515255573!3d-7.740484115216147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a26c44a573247%3A0x8343f9a5728758d!2sSD%20Kanisius%20Kedawung!5e0!3m2!1sen!2sid!4v1755370792551!5m2!1sen!2sid"
                width="600"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="border-t bg-background">
    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-4">
      <div>
        <div className="flex items-center gap-3">
          <Image src="/img/logo.png" alt="School Logo" width={40} height={40} />
          <div className="font-extrabold">Sekolah Dasar Kanisius Kedawung</div>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Mendidik insan beriman, cerdas, dan peduli sesama.
        </p>
      </div>
      <div>
        <div className="font-semibold">Tautan</div>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li>
            <a href="#profil" className="hover:text-foreground">
              Profil
            </a>
          </li>
          <li>
            <a href="#akademik" className="hover:text-foreground">
              Akademik
            </a>
          </li>
          <li>
            <a href="#berita" className="hover:text-foreground">
              Berita
            </a>
          </li>
          <li>
            <a href="#kontak" className="hover:text-foreground">
              Kontak
            </a>
          </li>
        </ul>
      </div>
      <div>
        <div className="font-semibold">Unit</div>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li>TK</li>
          <li>SD</li>
        </ul>
      </div>
      <div>
        {/* <div className="font-semibold">Berlangganan</div>
        <div className="mt-3 flex gap-2">
          <Input placeholder="Email" />
          <Button className="rounded-full">Kirim</Button>
        </div> */}
        <p className="text-xs text-muted-foreground">
          Disclaimer: Website ini sedang dalam pengembangan. Data yang
          ditampilkan mungkin tidak akurat. Silakan hubungi kami jika menemukan
          kesalahan.
        </p>
      </div>
    </div>
    <div className="border-t py-4 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} SDK Kedawung. All rights reserved.
    </div>
  </footer>
);
export const metadata: Metadata = {
  metadataBase: new URL('https://devlagret.github.io'),
  title: "SDK Kedawung",
  verification: { google: "sZWPSBDrpwGLBNR6Yw1xUWN_YqGl8sKajjE-rFgDh5g" },
  icons: "/img/logo.png",
  description:
    "Mengembangkan kepemimpinan yang berlandaskan nilai Kristiani | Profil SDK Kedawung",
  keywords: [
    "gallery sdk kedawung",
    "sdk kedawung",
    "SDK Kedawung",
    "school",
    "sdk",
    "SD Kanisius",
    "sd kanisius kedawung",
  ],
  openGraph: {
    url: "https://devlagret.github.io/sdk",
    images: [
      {
        url: "/img/logo.png",
        width: 800,
        height: 600,
        alt: "SDK Kedawung Gallery Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SDK Kedawung",
    description:
      "Mengembangkan kepemimpinan yang berlandaskan nilai Kristiani | Profil SDK Kedawung",
    images: ["/img/logo.png"],
  },
};
export default function KanisiusReplica() {
  return (
    <main
      className="min-h-screen text-foreground"
      itemScope
      itemType="http://schema.org/WebPage"
    >
      <NavBar />
      <motion.div animate={{ opacity: 1 }} />

      <Hero />
      <Profile />
      <ProgramsTabs />
      <NewsAndAnnouncements />
      <EventsCalendar />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
