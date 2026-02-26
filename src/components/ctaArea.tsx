import Image from "next/image";
import Link from "next/link";

const CtaArea = () => {
  return (
    <div className="cta-area border-bottom border-top">
      <div className="container-fluid px-0">
        <div className="row mx-0">
          <div className="col-lg-6 col-md-12 px-0">
            <div className="cta-content">
              <div
                className="content"
                data-cues="slideInUp"
                data-group="ctaContent"
              >
                <h2 className="text-uppercase fw-semibold">
                  Unlock Your Language Potential
                </h2>
                <p>
                  Embark on an exhilarating journey to discover the joy of
                  mastering multiple languages through our immersive.
                </p>
                <div className="btn-box">
                  <Link href="courses" className="default-btn">
                    Enroll Now
                  </Link>
                  <Link href="contact" className="default-btn">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 px-0">
            <div className="cta-image">
              <Image
                width={1285}
                height={760}
                sizes="100vw"
                src="/images/cta.jpg"
                alt="cta-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaArea;
