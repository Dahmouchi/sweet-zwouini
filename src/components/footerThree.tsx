import Image from "next/image";
import Link from "next/link";

const FooterThree = () => {
  return (
    <footer className="footer-area bg-282828">
      <div className="container">
        <div className="row" data-cues="fadeIn" data-group="footerContent">
          <div className="col-lg-4 col-md-12">
            <h2 className="mb-0 footer-title text-uppercase fw-semibold">
              Let’s Learn Together
            </h2>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer-socials text-center">
              <Link
                href="#"
                target="_blank"
                className="d-block w-100 text-uppercase"
              >
                FACEBOOK
              </Link>
              <Link
                href="#"
                target="_blank"
                className="d-block w-100 text-uppercase"
              >
                TWITTER
              </Link>
              <Link
                href="#"
                target="_blank"
                className="d-block w-100 text-uppercase"
              >
                LINKEDIN
              </Link>
              <Link
                href="#"
                target="_blank"
                className="d-block w-100 text-uppercase"
              >
                INSTAGRAM
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer-widget">
              <p>
                Lorem Ipsum&nbsp;is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the.
              </p>
              <Link href="contact" className="default-btn">
                Let’s Talk
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom-area">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <ul className="custom-links p-0 mb-0 list-unstyled">
                <li className="d-inline-block">
                  <Link href="about">About Lanklub</Link>
                </li>
                <li className="d-inline-block">
                  <Link href="courses">Our Courses</Link>
                </li>
                <li className="d-inline-block">
                  <Link href="contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-12 text-lg-center">
              <Link href="index-3" className="logo d-inline-block">
                <Image
                  width={112}
                  height={60}
                  src="/images/white-logo.svg"
                  alt="white-logo"
                />
              </Link>
            </div>
            <div className="col-lg-5 col-md-12 text-lg-end">
              <ul className="custom-links p-0 mb-0 list-unstyled">
                <li className="d-inline-block">
                  <Link href="privacy-policy">Privacy Policy</Link>
                </li>
                <li className="d-inline-block">
                  <Link href="terms-conditions">Terms &amp; Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright text-center">
          <p>Copyright, Lanklub All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterThree;
