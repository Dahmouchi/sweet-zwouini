import Image from "next/image";

const WhyChooseUsTwo = () => {
  return (
    <div className="why-us-area ptb-120 bg-f6ffeb">
      <div className="container">
        <div className="row" data-cues="slideInUp" data-group="whyUsContent">
          <div className="col-lg-4 col-md-12">
            <div className="why-us-img position-relative">
              <Image
                width={405}
                height={297}
                sizes="100vw"
                src="/images/why-us/why-us2.jpg"
                alt="why-us-img"
              />
              <div className="box">
                <h3 className="lh-1 text-uppercase">SINCE 2002</h3>
                <p>
                  Lorem ipsum&nbsp;is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="why-us-text">
              <h2 className="text-uppercase fw-semibold">
                Why lanklub? Exceptional Language Education, Every Time
              </h2>
              <div className="features-list">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="box position-relative">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <Image
                          width={28}
                          height={28}
                          src="/images/icons/expert2.svg"
                          alt="expert"
                        />
                      </div>
                      <h3 className="fw-medium">Expert Faculty</h3>
                      <p>Lorem Ipsum&nbsp;is simply dummy text of the.</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="box position-relative">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <Image
                          width={28}
                          height={28}
                          src="/images/icons/small2.svg"
                          alt="small"
                        />
                      </div>
                      <h3 className="fw-medium">Small Class Sizes</h3>
                      <p>Lorem Ipsum&nbsp;is simply dummy text of the.</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="box position-relative">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <Image
                          width={28}
                          height={28}
                          src="/images/icons/learning2.svg"
                          alt="learning"
                        />
                      </div>
                      <h3 className="fw-medium">Immersive Learning</h3>
                      <p>Lorem Ipsum&nbsp;is simply dummy text of the.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="image">
                <Image
                  width={866}
                  height={413}
                  sizes="100vw"
                  src="/images/why-us/why-us3.jpg"
                  alt="why-us-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsTwo;
