import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import Modal from "@/components/Modal";
import { Experience } from "@/data/experiences";

interface ExperienceModalProps {
  experience: Experience | null;
  onClose: () => void;
}

export default function ExperienceModal({ experience, onClose }: ExperienceModalProps) {
  if (!experience) return null;

  return (
    <Modal isOpen={!!experience} onClose={onClose}>
      <div className="p-6">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              {experience.title}
            </h2>
            <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-zinc-500 dark:text-zinc-400">
              <span>{experience.organization}</span>
              <span>•</span>
              <span>{experience.period}</span>
            </div>
          </div>
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
              experience.color === "blue"
                ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                : experience.color === "green"
                ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                : experience.color === "purple"
                ? "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                : experience.color === "yellow"
                ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400"
                : "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400"
            }`}
          >
            {experience.icon}
          </div>
        </div>

        {experience.images && experience.images.length > 0 && (
          <div className="mb-6 h-80 overflow-hidden rounded-xl">
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              pagination={{
                clickable: true,
                el: '.swiper-pagination',
                type: 'bullets',
              }}
              navigation={true}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="!h-80 w-full"
            >
              {experience.images.map((image, i) => (
                <SwiperSlide key={i} className="!h-80">
                  <div className="relative h-full w-full">
                    <Image
                      src={image}
                      alt={`${experience.title} 이미지 ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 768px"
                    />
                  </div>
                </SwiperSlide>
              ))}
              <div className="absolute bottom-4 z-10 w-full">
                <div className="swiper-pagination !relative" />
              </div>
            </Swiper>
          </div>
        )}

        <p className="mb-6 text-zinc-600 dark:text-zinc-300">
          {experience.description}
        </p>

        <div className="space-y-2 rounded-xl bg-zinc-50 p-4 dark:bg-zinc-900/50">
          <h4 className="font-medium text-zinc-900 dark:text-zinc-100">주요 성과</h4>
          <ul className="ml-4 list-disc space-y-1 text-zinc-600 dark:text-zinc-300">
            {experience.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
}
