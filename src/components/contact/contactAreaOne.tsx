import ContactForm from "../form/ContactForm";

interface ContactAreaOneProps {
  className?: string;
}

const ContactAreaOne = ({ className }: ContactAreaOneProps) => {
  return (
    <div
      className={`contact-area bg-f3f3f3 border-top border-bottom ptb-120 ${className || ""}`}
    >
      <div
        className="container"
        data-cues="slideInUp"
        data-group="contactContent"
      >
        <div className="section-title text-center">
          <h2 className="fw-semibold mx-auto mb-0">
            Vous avez des questions ?
          </h2>
          <p>
            Votre adresse e-mail ne sera pas publiée. Les champs obligatoires
            sont indiqués par *
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default ContactAreaOne;
