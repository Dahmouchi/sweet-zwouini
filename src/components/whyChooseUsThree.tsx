import Image from "next/image";
import ModalVideo from "./modalVideo";

const features = [
  {
    icon: "/images/icons/expert3.svg",
    title: "Expert Faculty",
    desc: "Lorem Ipsum is simply dummy text of the.",
  },
  {
    icon: "/images/icons/small3.svg",
    title: "Small Class Sizes",
    desc: "Lorem Ipsum is simply dummy text of the.",
  },
  {
    icon: "/images/icons/learning3.svg",
    title: "Immersive Learning",
    desc: "Lorem Ipsum is simply dummy text of the.",
  },
  {
    icon: "/images/icons/cultural.svg",
    title: "Cultural Immersion",
    desc: "Lorem Ipsum is simply dummy text of the.",
  },
];

const WhyChooseUsThree = () => {
  return (
    <div className="why-lanklub-area overflow-hidden ptb-120">
      <div className="container-fluid px-0">
        <div
          className="row align-items-center mx-0"
          data-cues="slideInUp"
          data-group="whyLanklubContent"
        >
          <div className="col-lg-4 col-md-12 px-0">
            <div className="why-lanklub-image position-relative">
              <div className="content">
                <div className="text lh-1 text-uppercase fw-bold">
                  multilingual
                </div>
              </div>
              <ModalVideo>
                <div className="image position-relative">
                  <Image
                    width={476}
                    height={773}
                    sizes="100vw"
                    src="/images/why-lanklub.jpg"
                    alt="why-lanklub-image"
                  />
                  <a
                    href="#"
                    className="video-btn popup-youtube rounded-circle d-flex align-items-center justify-content-center"
                  >
                    <i className="fa-solid fa-play" />
                  </a>
                </div>
              </ModalVideo>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 px-0">
            <div className="why-lanklub-content">
              <h2 className="fw-semibold text-uppercase">
                Why lanklub? Exceptional Language Education, Every Time
              </h2>
              <p>
                Lorem Ipsum&nbsp;is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry&apos;s
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries.
              </p>
              <div className="features-list">
                <div className="row">
                  {features.map((feature) => (
                    <div className="col-lg-5 col-md-6" key={feature.title}>
                      <div className="box d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <Image
                            width={28}
                            height={28}
                            src={feature.icon}
                            alt={"icon"}
                          />
                        </div>
                        <div>
                          <h3 className="fw-medium">{feature.title}</h3>
                          <p>{feature.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p>
                Lorem Ipsum&nbsp;is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry&apos;s
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsThree;
