import Image from "next/image";
import Link from "next/link";
import ModalVideo from "../modalVideo";

const AboutAreaOne = ({ className }: { className?: string }) => {
  return (
    <div className={`about-us-area position-relative z-1 ptb-120 ${className}`}>
      <div className="container">
        <div
          className="row align-items-center"
          data-cues="slideInUp"
          data-group="aboutUsContent"
        >
          <div className="col-lg-6 col-md-12">
            <div className="about-us-image text-center">
              <Image
                width={618}
                height={608}
                sizes="100vw"
                src="/images/about-us/about1.jpg"
                alt="about-image"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="about-us-content">
              <div className="video-box position-relative">
                <Image
                  width={616}
                  height={147}
                  sizes="100vw"
                  src="/images/about-us/about2.jpg"
                  alt="about-image"
                />
                <div className="content">
                  <div>
                    <span className="d-block fw-medium">Play Video</span>
                    <p>How We Teach Our Students</p>
                  </div>
                  <ModalVideo>
                    <a href="#" className="video-btn popup-youtube rounded-circle d-flex align-items-center justify-content-center">
                      <Image
                        width={25}
                        height={35}
                        sizes="100vw"
                        src="/images/icons/play2.svg"
                        alt="play"
                      />
                    </a>
                  </ModalVideo>
                </div>
              </div>
              <h2 className="fw-semibold text-uppercase">
                Delving into Our Linguistic Odysse
              </h2>
              <p>
                We are dedicated to fostering a vibrant community of language
                learners committed to linguistic proficiency and cultural
                appreciation. Established in 2002.
              </p>
              <p>
                Our journey began with a vision to provide an immersive and
                comprehensive language education experience guided by.
              </p>
              <Link href="courses" className="default-btn">
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-down-text text-uppercase d-flex align-items-center">
        <div>
          <Image
            width={24}
            height={24}
            src="/images/icons/bx-mouse.svg"
            alt="bx-mouse"
          />
          Scroll Down
        </div>
      </div>
    </div>
  );
};

export default AboutAreaOne;
