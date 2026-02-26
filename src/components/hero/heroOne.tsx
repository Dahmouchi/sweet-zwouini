import Image from "next/image";
import Link from "next/link";
import ModalVideo from "../modalVideo";

const HeroOne = () => {
  return (
    <div className="banner-area position-relative z-1">
      <div className="container">
        <div className="banner-text">
          <h1
            className="text-uppercase"
            data-cues="slideInUp"
            data-group="bannerContent"
          >
            <span className="d-block">Your Gateway </span>
            <span className="d-block">To Multilingual </span>
            <span className="d-block">Proficiency</span>
          </h1>
        </div>
        <div className="banner-image text-center" data-cue="slideInUp">
          <Image
            width={1296}
            height={392}
            sizes="100vw"
            src="/images/banners/banner1.jpg"
            alt="banner-image"
          />
        </div>
        <div className="banner-content">
          <div
            className="row align-items-center"
            data-cues="slideInUp"
            data-group="bannerText"
          >
            <div className="col-lg-6 col-md-8">
              <p>
                Unlock the world by mastering languages. We offers an immersive,
                interactive, and personalized language learning.
              </p>
              <div className="btn-box d-flex align-items-center">
                <Link href="contact" className="default-btn">
                  Get In Touch
                </Link>
                <ModalVideo>
                  <a
                    href="#"
                    className="video-btn popup-youtube fw-medium d-flex align-items-center"
                  >
                    <span className="d-block text-center rounded-circle">
                      <Image
                        width={14}
                        height={20}
                        src="/images/icons/play.svg"
                        alt="play"
                      />
                    </span>
                    Watch Video
                  </a>
                </ModalVideo>
              </div>
            </div>
            <div className="col-lg-6 col-md-4">
              <div className="text-md-end">
                <Link
                  href="courses"
                  className="link-btn d-inline-block text-center rounded-circle fw-medium"
                >
                  <span className="d-block">Explore All Courses</span>
                  <Image
                    width={20}
                    height={20}
                    src="/images/icons/diagonal-arrow-right-up.svg"
                    alt="diagonal-arrow-right-up"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape1">
        <Image
          width={150}
          height={148}
          src="/images/shapes/shape1.svg"
          alt="shape1"
        />
      </div>
      <div className="shape2">
        <Image
          width={135}
          height={135}
          src="/images/shapes/shape2.svg"
          alt="shape2"
        />
      </div>
    </div>
  );
};

export default HeroOne;
