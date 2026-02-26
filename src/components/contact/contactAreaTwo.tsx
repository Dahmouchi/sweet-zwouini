import Image from "next/image";

const ContactAreaTwo = () => {
  return (
    <div className="contact-area ptb-120" id="contact">
      <div className="container">
        <div
          className="contact-content text-center mx-auto"
          data-cues="slideInUp"
          data-group="contactContent"
        >
          <h2 className="fw-semibold text-uppercase">
            Votre Avenir dans la Pâtisserie Commence Ici
          </h2>
          <div className="info position-relative d-flex align-items-center justify-content-between mx-auto">
            <h3 className="mb-0 fw-semibold">0697083442</h3>
            <div className="icon d-flex align-items-center justify-content-center rounded-circle">
              <Image
                width={38}
                height={38}
                src="/images/icons/phone.svg"
                alt="phone"
              />
            </div>
            <a
              href="tel:+212661234567"
              className="link-btn position-absolute top-0 end-0 start-0 bottom-0"
            />
          </div>
          <div className="info position-relative d-flex align-items-center justify-content-between mx-auto">
            <h3 className="mb-0 fw-semibold">0674309881</h3>
            <div className="icon d-flex align-items-center justify-content-center rounded-circle">
              <Image
                width={38}
                height={38}
                src="/images/icons/phone.svg"
                alt="phone"
              />
            </div>
            <a
              href="tel:+212661234567"
              className="link-btn position-absolute top-0 end-0 start-0 bottom-0"
            />
          </div>
          <p className="mx-auto">
            Rejoignez notre centre de formation d'excellence pour maîtriser les
            secrets de la pâtisserie française et internationale. Apprenez aux
            côtés de chefs passionnés et transformez votre passion en une
            carrière réussie.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactAreaTwo;
