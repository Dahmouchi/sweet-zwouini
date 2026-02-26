import Image from "next/image";
import Link from "next/link";
import { Lobster } from "next/font/google";

const geistSans = Lobster({
  variable: "--fontFamily",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["sans-serif"],
  weight: ["400"],
  style: "normal",
});

const HeroTwo = () => {
  return (
    <>
      <style>{`
        @media (max-width: 767px) {
          .main-banner-area {
            min-height: 520px;
          }
          .main-banner-image-bottom {
            position: absolute !important;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1;
          }
          .main-banner-image-bottom img {
            width: 100% !important;
            height: auto !important;
            
            display: block;
          }
        }
      `}</style>
      <div
        className="main-banner-area position-relative z-1"
        style={{
          backgroundImage: "url(/images/bg4.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.30)",
            zIndex: 0,
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div
            className="main-banner-content text-center"
            data-cues="slideInUp"
            data-group="bannerContent"
          >
            <h1 className={`${geistSans.className} text-white`}>
              Atelier Professionnel En Patisserie & Cuisine
            </h1>

            <h1 className={`${geistSans.className} text-white`}>100% Femmes</h1>

            <div className="btn-box">
              <Link href="#contact" className="default-btn">
                Contactez-nous
              </Link>
            </div>
          </div>
        </div>
        <div
          className="main-banner-image main-banner-image-bottom text-center"
          data-cue="slideInUp"
          style={{ position: "relative", zIndex: 1 }}
        >
          <Image
            width={1296}
            height={387}
            sizes="100vw"
            src="/images/banners/banner2.jpg"
            style={{
              borderRadius: "24px 24px 0 0",
              width: "90%",
              height: "auto",
            }}
            alt="banner-image"
          />
        </div>
        <div className="shape4">
          <Image
            width={100}
            height={87}
            sizes="100vw"
            src="/images/shapes/shape4.svg"
            alt="shape4"
          />
        </div>
        <div className="shape5">
          <Image
            width={121}
            height={164}
            sizes="100vw"
            src="/images/shapes/shape5.svg"
            alt="shape5"
          />
        </div>
      </div>
    </>
  );
};

export default HeroTwo;
