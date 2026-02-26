import Image from "next/image";

const aboutData = [
  {
    icon: "/images/icons/point.svg",
    alt: "point",
    number: "12k +",
    label: "Courses Completed",
    title: "Enhance The Online Learning",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
  },
  {
    icon: "/images/icons/point2.svg",
    alt: "point2",
    number: "15Y +",
    label: "Years Experience",
    title: "Enhance The Online Learning",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
  },
  {
    icon: "/images/icons/point3.svg",
    alt: "point3",
    number: "90 +",
    label: "Winning Award",
    title: "Enhance The Online Learning",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
  },
  {
    icon: "/images/icons/point4.svg",
    alt: "point4",
    number: "30k +",
    label: "Happy Students",
    title: "Enhance The Online Learning",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
  },
];

const AboutAreaThree = () => {
  return (
    <div className="mission-area pb-120">
      <div className="container-fluid px-0">
        <div className="row mx-0">
          <div className="col-xl-8 col-md-12 px-0">
            <div className="mission-content">
              <div className="content">
                <h2 className="fw-semibold text-uppercase" data-cue="slideInUp">
                  Discover Our Mission Connecting Through
                </h2>
                <div
                  className="row"
                  data-cues="slideInUp"
                  data-group="missionContent"
                >
                  {aboutData.map((item, idx) => (
                    <div className="col-lg-6 col-md-6" key={idx}>
                      <div className="box mb-25">
                        <div className="text d-flex align-items-center">
                          <div className="icon">
                            <Image
                              width={60}
                              height={60}
                              sizes="100vw"
                              src={item.icon}
                              alt={item.alt}
                            />
                          </div>
                          <div>
                            <span className="number d-block fw-semibold">
                              {item.number}
                            </span>
                            <span className="d-block">{item.label}</span>
                          </div>
                        </div>
                        <div className="content">
                          <h3 className="fw-semibold">{item.title}</h3>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-12 px-0">
            <div className="mission-image">
              <Image
                width={1080}
                height={1080}
                sizes="100vw"
                src="/images/mission.jpg"
                alt="mission-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAreaThree;
