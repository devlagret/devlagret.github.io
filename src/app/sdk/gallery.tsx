"use client";
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { useState } from "react";
import Image from "next/image";
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

export default function Gallery() {
  return (
    <section id="galeri" className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          title="Galeri"
          subtitle="Suasana belajar dan karya siswa."
        />
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl"
              onClick={() => {
                const lightbox = new PhotoSwipeLightbox({
                  dataSource: [
                    {
                      src: `/img/gallery/${i}.jpg`,
                      w: 1200,
                      h: 900,
                    },
                  ],
                  pswpModule: () => import("photoswipe"),
                });
                lightbox.init();
                lightbox.loadAndOpen(0);
              }}
            >
             <Image
               src={`/img/gallery/${i}.jpg`}
               alt={`Galeri ${i}`}
               height={100}
               width={300}
               className="h-56 w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
             />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
