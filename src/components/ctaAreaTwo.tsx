import Image from "next/image";
import Link from "next/link";

const CtaAreaTwo = () => {
  return (
    <div className="cta-area bg-color">
      <div className="container-fluid px-0">
        <div className="row mx-0">
          <div className="col-lg-6 col-md-12 px-0">
            <div
              className="cta-content-two position-relative"
              data-cues="slideInUp"
              data-group="ctaContent"
            >
              <h2 className="mb-0 fw-semibold text-uppercase">
                Catalyze Your Language Learning Journey Explore Opportunities to
                Flourish and Connect
              </h2>
              <Link
                href="contact"
                className="link-btn d-inline-block text-center rounded-circle fw-medium"
              >
                <span className="d-block">Contact Us</span>
                <Image
                  width={20}
                  height={20}
                  src="/images/icons/diagonal-arrow-right-up.svg"
                  alt="diagonal-arrow-right-up"
                />
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 px-0">
            <div className="cta-image-two">
              <Image
                width={1375}
                height={710}
                sizes="100vw"
                src="/images/cta2.jpg"
                alt="cta-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaAreaTwo;
