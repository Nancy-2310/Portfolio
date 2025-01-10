import Image from "next/image";

// Import required modules
import { Pagination } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { BsArrowRight } from "react-icons/bs"; // Corrected import

// Data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Virtual-Piano",
          path: "/thumb1.jpg",
          link: "https://virtual-piano-black.vercel.app/",
        },
        {
          title: "Beats",
          path: "/thumb2.jpg",
          link: "https://specs-rouge.vercel.app/",
        },
        {
          title: "Resume-Builder",
          path: "/thumb3.jpg",
          link: "https://resume-roan-eight-50.vercel.app/",
        },
        {
          title: "To-do-list",
          path: "/thumb4.jpg",
          link: "https://to-do-list-lake-six-31.vercel.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "Plan-with-love",
          path: "/thumb1.jpg",
          link: "https://plan-with-love-starter.vercel.app/",
        },
        {
          title: "Tic-tac-toe",
          path: "/thumb2.jpg",
          link: "https://tic-tac-toe-chi-opal.vercel.app/",
        },
        {
          title: "Counter",
          path: "/thumb3.jpg",
          link: "https://counter-app-rho-two.vercel.app/",
        },
        {
          title: "Hotel-front-page",
          path: "/thumb4.jpg",
          link: "https://restaurant-webpage-chi.vercel.app/",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, imgIndex) => {
                return (
                  <div
                    key={imgIndex}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <a
                      href={image.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-full"
                    >
                      <div className="flex items-center justify-center relative overflow-hidden">
                        {/* Image */}
                        <Image
                          src={image.path}
                          width={500}
                          height={300}
                          alt={image.title}
                          className="object-cover w-full h-full"
                        />

                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

                        {/* Title */}
                        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300">
                          {image.title}
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
