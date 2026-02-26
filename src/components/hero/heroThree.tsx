import Image from "next/image";
import Link from "next/link";

const HeroThree = () => {
  return (
    <div className="banner-wrapper-area">
      <div className="container">
        <div
          className="banner-wrapper-content mx-auto position-relative"
          data-cue="slideInUp"
        >
          <h1 className="mb-0 fw-semibold text-uppercase">
            Elevate Your Global Experience Through{" "}
            <span className="fw-bold">Language</span>
          </h1>
        </div>
        <div className="banner-wrapper-images position-relative">
          <div
            className="row align-items-end"
            data-cues="slideInUp"
            data-group="bannerImage"
          >
            <div className="col-sm-6">
              <div className="image">
                <Image
                  width={630}
                  height={640}
                  sizes="100vw"
                  src="/images/banners/banner3.png"
                  alt="banner-image"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="image">
                <Image
                  width={621}
                  height={548}
                  sizes="100vw"
                  src="/images/banners/banner4.jpg"
                  alt="banner-image"
                />
              </div>
            </div>
          </div>
          <Link
            href="courses"
            className="link-btn d-inline-block text-center rounded-circle fw-medium"
            data-cue="slideInUp"
          >
            <span className="d-block">Explore All Courses</span>
            <Image
              width={20}
              height={20}
              src="/images/icons/white-diagonal-arrow-right-up.svg"
              alt="diagonal-arrow-right-up"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroThree;
