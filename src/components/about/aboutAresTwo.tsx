import Image from "next/image";

const AboutAreaTwo = () => {
  return (
    <div className="who-we-are-area ptb-120" id="about">
      <div className="container">
        <div
          className="row align-items-center"
          data-cues="slideInUp"
          data-group="whoWeAreContent"
        >
          <div className="col-lg-6 col-md-12">
            <div className="who-we-are-content">
              <h2 className="fs-38 fw-semibold text-[#f57799] lg:text-start text-center">
                Leaders de la Formation en Pâtisserie
              </h2>
              <p className="lg:text-start text-center">
                Nous croyons au pouvoir de la passion culinaire. Fondé avec la
                vision de transmettre le savoir-faire français, notre institut
                est dédié à fournir des expériences d'apprentissage
                d'excellence. Avec une équipe de chefs pâtissiers passionnés,
                nous vous accompagnons vers la maîtrise de votre art.
              </p>
              <div className="funfacts lg:text-start text-center">
                <h3 className="fw-semibold">
                  62<span>+</span>
                </h3>
                <p className="fw-medium">Collaboratrices formées</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="who-we-are-image">
              <Image
                height={247}
                width={603}
                sizes="100vw"
                className="rounded-[24px]"
                src="/images/about-us/about1.png"
                alt="who-we-are-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAreaTwo;
