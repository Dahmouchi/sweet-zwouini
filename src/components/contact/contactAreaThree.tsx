 


"use client";
import { useState, FormEvent } from "react";
import Image from "next/image";

interface FormDataType {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactAreaThree = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault(); 
    setStatus("submitting");

    try {
      // Simulated API call (replace with real endpoint)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus("success");
      alert("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch{
      setStatus("error");
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="contact-area pb-120">
      <div className="container">
        <div
          className="row align-items-center"
          data-cues="slideInUp"
          data-group="contactContent"
        >
          <div className="col-lg-6 col-md-12">
            <div className="contact-form-content">
              <h2 className="fw-semibold text-uppercase">
                Multilingual Learning Begins Here
              </h2>
              <div className="box d-md-flex align-items-center">
                <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                  <Image
                    width={38}
                    height={38}
                    src="/images/icons/white-phone.svg"
                    alt="phone"
                  />
                </div>
                <div>
                  <h3 className="fw-medium">Get Free Consultant</h3>
                  <a href="tel:+12345678912" className="fw-semibold phone-number">
                    +123 456 78912
                  </a>
                </div>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <form onSubmit={handleSubmit} className="contact-form-box">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control shadow-none"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control shadow-none"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="phone"
                  className="form-control shadow-none"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  className="form-control shadow-none"
                  placeholder="Write Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control shadow-none"
                  placeholder="Your Message..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="default-btn d-block w-100"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending..." : "Send Now"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAreaThree;
