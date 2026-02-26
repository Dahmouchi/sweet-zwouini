import Image from "next/image";
import Link from "next/link";
import { Edu_AU_VIC_WA_NT_Hand } from "next/font/google";

const geistSans = Edu_AU_VIC_WA_NT_Hand({
  variable: "--fontFamily",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["sans-serif"],
  weight: ["400", "500", "600", "700"],
  style: "normal",
});

const HeroTwo = () => {
  return (
    <div
      className="main-banner-area position-relative z-1"
      style={{
        backgroundImage: "url(/images/bg2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div
          className="main-banner-content text-center"
          data-cues="slideInUp"
          data-group="bannerContent"
        >
          <h1 className={`${geistSans.className} text-black`}>
            Atelier Professionnel
          </h1>
          <h1 className={`${geistSans.className} text-black`}>
            En Patisserie & Cuisine
          </h1>
          <h1 className={`${geistSans.className} text-black`}>100% Femmes</h1>

          <div className="btn-box">
            <Link href="contact" className="default-btn">
              Contactez-nous
            </Link>
          </div>
        </div>
        <div className="main-banner-image text-center" data-cue="slideInUp">
          <Image
            width={1296}
            height={387}
            sizes="100vw"
            src="/images/banners/banner2.jpg"
            style={{
              borderRadius: "24px 24px 0 0 ",
            }}
            alt="banner-image"
          />
        </div>
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
  );
};

export default HeroTwo;
