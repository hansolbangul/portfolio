"use client";

import type { ValidatedProject } from "@/data/projects";
import Image from "next/image";
import ScrollReveal from "@/shared/components/animations/motion/ScrollReveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

interface ProjectGalleryProps {
  project: ValidatedProject;
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  if (!project.images || project.images.length === 0) {
    return null;
  }

  return (
    <ScrollReveal>
      <div className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          Project Gallery
        </h2>
        <div className="relative -mx-8">
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView={1.2}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="w-full"
          >
            {project.images.map((image, index) => (
              <SwiperSlide
                key={index}
                className="w-[80%] md:w-[60%] relative aspect-video rounded-lg overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </ScrollReveal>
  );
}
