"use client";
import Image from "next/image";
import { useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

// All 38 images from /public/images/gallery/
const galleryImages = [
  {
    src: "/images/gallery/FB_IMG_1772064742900.jpg",
    alt: "Création pâtissière 1",
  },
  {
    src: "/images/gallery/FB_IMG_1772064745550.jpg",
    alt: "Création pâtissière 2",
  },
  {
    src: "/images/gallery/FB_IMG_1772064748276.jpg",
    alt: "Création pâtissière 3",
  },
  {
    src: "/images/gallery/FB_IMG_1772064750745.jpg",
    alt: "Création pâtissière 4",
  },
  {
    src: "/images/gallery/FB_IMG_1772064756248.jpg",
    alt: "Création pâtissière 5",
  },
  {
    src: "/images/gallery/FB_IMG_1772064770493.jpg",
    alt: "Création pâtissière 6",
  },
  {
    src: "/images/gallery/FB_IMG_1772064772916.jpg",
    alt: "Création pâtissière 7",
  },
  {
    src: "/images/gallery/FB_IMG_1772064775352.jpg",
    alt: "Création pâtissière 8",
  },
  {
    src: "/images/gallery/FB_IMG_1772064779350.jpg",
    alt: "Création pâtissière 9",
  },
  {
    src: "/images/gallery/FB_IMG_1772064784755.jpg",
    alt: "Création pâtissière 10",
  },
  {
    src: "/images/gallery/FB_IMG_1772064787044.jpg",
    alt: "Création pâtissière 11",
  },
  {
    src: "/images/gallery/FB_IMG_1772064789511.jpg",
    alt: "Création pâtissière 12",
  },
  {
    src: "/images/gallery/FB_IMG_1772064791325.jpg",
    alt: "Création pâtissière 13",
  },
  {
    src: "/images/gallery/FB_IMG_1772064793564.jpg",
    alt: "Création pâtissière 14",
  },
  {
    src: "/images/gallery/FB_IMG_1772064795637.jpg",
    alt: "Création pâtissière 15",
  },
  {
    src: "/images/gallery/FB_IMG_1772064799807.jpg",
    alt: "Création pâtissière 16",
  },
  {
    src: "/images/gallery/FB_IMG_1772064801943.jpg",
    alt: "Création pâtissière 17",
  },
  {
    src: "/images/gallery/FB_IMG_1772064809556.jpg",
    alt: "Création pâtissière 18",
  },
  {
    src: "/images/gallery/FB_IMG_1772064817382.jpg",
    alt: "Création pâtissière 19",
  },
  {
    src: "/images/gallery/FB_IMG_1772064820693.jpg",
    alt: "Création pâtissière 20",
  },
  {
    src: "/images/gallery/FB_IMG_1772064824838.jpg",
    alt: "Création pâtissière 21",
  },
  {
    src: "/images/gallery/FB_IMG_1772064828484.jpg",
    alt: "Création pâtissière 22",
  },
  {
    src: "/images/gallery/FB_IMG_1772064830265.jpg",
    alt: "Création pâtissière 23",
  },
  {
    src: "/images/gallery/FB_IMG_1772064832774.jpg",
    alt: "Création pâtissière 24",
  },
  {
    src: "/images/gallery/FB_IMG_1772064835522.jpg",
    alt: "Création pâtissière 25",
  },
  {
    src: "/images/gallery/FB_IMG_1772064837480.jpg",
    alt: "Création pâtissière 26",
  },
  {
    src: "/images/gallery/FB_IMG_1772064850365.jpg",
    alt: "Création pâtissière 27",
  },
  {
    src: "/images/gallery/FB_IMG_1772064855218.jpg",
    alt: "Création pâtissière 28",
  },
  {
    src: "/images/gallery/FB_IMG_1772064857272.jpg",
    alt: "Création pâtissière 29",
  },
  {
    src: "/images/gallery/FB_IMG_1772064859430.jpg",
    alt: "Création pâtissière 30",
  },
  {
    src: "/images/gallery/FB_IMG_1772064861681.jpg",
    alt: "Création pâtissière 31",
  },
  {
    src: "/images/gallery/FB_IMG_1772064869111.jpg",
    alt: "Création pâtissière 32",
  },
  {
    src: "/images/gallery/FB_IMG_1772064874326.jpg",
    alt: "Création pâtissière 33",
  },
  {
    src: "/images/gallery/FB_IMG_1772064877110.jpg",
    alt: "Création pâtissière 34",
  },
  {
    src: "/images/gallery/FB_IMG_1772064879611.jpg",
    alt: "Création pâtissière 35",
  },
  {
    src: "/images/gallery/FB_IMG_1772064889198.jpg",
    alt: "Création pâtissière 36",
  },
  {
    src: "/images/gallery/FB_IMG_1772064894422.jpg",
    alt: "Création pâtissière 37",
  },
  {
    src: "/images/gallery/FB_IMG_1772064899085.jpg",
    alt: "Création pâtissière 38",
  },
];

// Group into slides of 5 images each (mosaic: tall-left, top-center, bottom-left, bottom-right, tall-right)
const chunkSize = 5;
const gallerySlides = Array.from(
  { length: Math.ceil(galleryImages.length / chunkSize) },
  (_, i) => ({
    images: galleryImages.slice(i * chunkSize, i * chunkSize + chunkSize),
  }),
).filter((slide) => slide.images.length === 5); // only full slides of 5

const GalleryAreaClient = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="gallery-section">
      {/* Header — title only */}
      <div className="gallery-header">
        <h2 className="gallery-title">Galerie</h2>
      </div>

      {/* Swiper Slider */}
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop
        speed={700}
        pagination={{
          clickable: true,
          el: ".gallery-pagination",
        }}
        modules={[Navigation, Pagination]}
        className="gallery-swiper"
      >
        {gallerySlides.map((slide, slideIdx) => {
          const [img0, img1, img2, img3, img4] = slide.images;
          if (!img0 || !img1 || !img2 || !img3 || !img4) return null;

          return (
            <SwiperSlide key={slideIdx}>
              <div className="gallery-mosaic">
                {/* Left tall image */}
                <div className="gallery-cell gallery-cell--tall">
                  <div className="gallery-img-wrap">
                    <Image
                      src={img0.src}
                      alt={img0.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="gallery-img"
                    />
                  </div>
                </div>

                {/* Center column: 1 large top + 2 small bottom */}
                <div className="gallery-cell gallery-cell--center">
                  <div className="gallery-img-wrap gallery-img-wrap--top">
                    <Image
                      src={img1.src}
                      alt={img1.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="gallery-img"
                    />
                  </div>
                  <div className="gallery-center-bottom">
                    <div className="gallery-img-wrap gallery-img-wrap--small">
                      <Image
                        src={img2.src}
                        alt={img2.alt}
                        fill
                        sizes="(max-width: 768px) 50vw, 20vw"
                        className="gallery-img"
                      />
                    </div>
                    <div className="gallery-img-wrap gallery-img-wrap--small">
                      <Image
                        src={img3.src}
                        alt={img3.alt}
                        fill
                        sizes="(max-width: 768px) 50vw, 20vw"
                        className="gallery-img"
                      />
                    </div>
                  </div>
                </div>

                {/* Right tall image */}
                <div className="gallery-cell gallery-cell--tall">
                  <div className="gallery-img-wrap">
                    <Image
                      src={img4.src}
                      alt={img4.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="gallery-img"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Footer: pagination + nav arrows */}
      <div className="gallery-footer">
        <div className="gallery-pagination"></div>
        <div className="gallery-nav">
          <button
            className="gallery-nav-btn"
            aria-label="Précédent"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
          </button>
          <button
            className="gallery-nav-btn"
            aria-label="Suivant"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryAreaClient;
