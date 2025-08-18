"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "@/lib/firebase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Newspaper } from "lucide-react";
import Image from "next/image";

export default function NewsAndAnnouncements() {
  const [announcements, setDocs] = useState<any[]>([]);

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
  useEffect(() => {
    const fetchDocs = async () => {
      const db = getFirestore(app);
      const querySnapshot = await getDocs(collection(db, "newsAndAnnouncements"));
      setDocs(querySnapshot.docs.map((doc) => doc.data()));
    };
    fetchDocs();
  }, []);
  return (
    <section id="berita" className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionTitle
              title="Berita Terbaru"
              subtitle="Aktivitas, prestasi, dan agenda sekolah."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {announcements.map((i) => (
              <Card key={i} className="group overflow-hidden rounded-2xl">
                <div className="relative">
                  <Image
                    src={i.image || ""}
                    alt={`Berita ${i.title}`}
                    className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <Badge
                    className="absolute left-3 top-3 rounded-full"
                    variant="secondary"
                  >
                    <Newspaper className="mr-1 h-3 w-3" />
                    {i.type || "Berita"}
                  </Badge>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="line-clamp-2">
                    {i.title || "Judul Berita"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Ringkasan: {i.summary || "Ringkasan Berita"}
                </CardContent>
              </Card>
            ))}
            </div>
            <div className="mt-4 text-right">
              <Button variant="outline" className="rounded-full">
                Lihat Semua Berita
              </Button>
            </div>
          </div>

          <div>
            <SectionTitle
              title="Pengumuman"
              subtitle="Informasi penting untuk siswa & orang tua."
            />
            <div className="space-y-3">
              {/* {[1].map((i) => (
              <Card key={i} className="rounded-2xl">
                <CardContent className="flex items-start gap-3 p-4">
                  <BellRing className="mt-0.5 h-5 w-5" />
                  <div>
                    <div className="font-medium">Pengumuman #{i}</div>
                    <div className="text-xs text-muted-foreground">
                      12 Agustus 2025
                    </div>
                    <p className="mt-1 text-sm">
                      Detail singkat pengumuman terkait akademik atau kegiatan
                      sekolah.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
