import Image from "next/image";

const list = [
  {
    icon: "/images/icons/expert.svg",
    alt: "expert",
    title: "Expert Faculty",
    description:
      "Emphasize the qualifications and expertise of your instructors. Highlight their experience.",
  },
  {
    icon: "/images/icons/small.svg",
    alt: "small",
    title: "Small Class Sizes",
    description:
      "Emphasize the qualifications and expertise of your instructors. Highlight their experience.",
  },
  {
    icon: "/images/icons/learning.svg",
    alt: "learning",
    title: "Immersive Learning",
    description:
      "Emphasize the qualifications and expertise of your instructors. Highlight their experience.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="why-us-area">
      <div className="container-fluid px-0">
        <div className="row mx-0">
          <div className="col-lg-6 col-md-12 px-0">
            <div className="why-us-image">
              <Image
                width={1395}
                height={1100}
                sizes="100vw"
                src="/images/why-us/why-us1.jpg"
                alt="why-us-image"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 px-0">
            <div className="why-us-content">
              <div className="content">
                <h2 className="fw-semibold text-uppercase" data-cue="slideInUp">
                  Unraveling the Unique WHY US
                </h2>
                {list.map((item, idx) => (
                  <ul
                    key={idx}
                    className="features-list ps-0 mb-0 list-unstyled"
                    data-cues="slideInUp"
                    data-group="whyUsContent"
                  >
                    <li className="d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center position-relative">
                        <Image width={61} height={60} src={item.icon} alt={item.alt} />
                      </div>
                      <div>
                        <h3 className="fw-semibold">{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
