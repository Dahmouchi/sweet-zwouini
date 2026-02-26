import Image from "next/image";

const offices = [
  {
    name: "New York Office",
    address: "387 Rhode Island AvenueBeltsville, DC 20705",
    emails: ["newyorkoff@email.com", "newyorkoff1@email.com"],
    phones: ["+123 456 7890", "+123 456 78910"],
  },
  {
    name: "Hungary Office",
    address: "3653 SajópüspökiSzent Gellért tér 44.",
    emails: ["newyorkoff@email.com", "newyorkoff1@email.com"],
    phones: ["+123 456 7890", "+123 456 78910"],
  },
  {
    name: "Netherlands Office",
    address: "Ruigeweg 11752 HC Sint Maartensbrug",
    emails: ["newyorkoff@email.com", "newyorkoff1@email.com"],
    phones: ["+123 456 7890", "+123 456 78910"],
  },
  {
    name: "Belgium Office",
    address: "Rue Jean Lorette 3245651 Thy-le-Château",
    emails: ["newyorkoff@email.com", "newyorkoff1@email.com"],
    phones: ["+123 456 7890", "+123 456 78910"],
  },
];

const ContactInfoArea = () => {
  return (
    <div className="contact-info-area bg-f3f3f3 ptb-120">
      <div className="container-fluid px-0">
        <div className="row mx-0">
          <div className="col-lg-8 col-md-12 px-0">
            <div className="contact-info-content">
              <div className="content">
                <div
                  className="row"
                  data-cues="slideInUp"
                  data-group="contactInfoContent"
                >
                  {offices.map((office) => (
                    <div className="col-lg-6 col-sm-6" key={office.name}>
                      <div className="box">
                        <h3 className="fw-semibold">{office.name}</h3>
                        <ul className="p-0 m-0 list-unstyled">
                          <li className="position-relative">
                            <Image
                              width={20}
                              height={20}
                              src="/images/icons/office.svg"
                              alt="office"
                            />
                            {office.address}
                          </li>
                          <li className="position-relative">
                            <Image
                              width={20}
                              height={14}
                              src="/images/icons/email2.svg"
                              alt="office"
                            />
                            {office.emails.map((email, i) => (
                              <span key={email}>
                                <a href={`mailto:${email}`}>{email}</a>
                                {i < office.emails.length - 1 && <br />}
                              </span>
                            ))}
                          </li>
                          <li className="position-relative">
                            <Image
                              width={20}
                              height={20}
                              src="/images/icons/bv.svg"
                              alt="office"
                            />
                            {office.phones.map((phone, i) => (
                              <span key={phone}>
                                <a href={`tel:${phone}`}>{phone}</a>
                                {i < office.phones.length - 1 && <br />}
                              </span>
                            ))}
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 px-0">
            <div className="contact-info-image">
              <Image
                width={1380}
                height={1356}
                sizes="100vw"
                src="/images/contact.jpg"
                alt="contact-info-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoArea;
