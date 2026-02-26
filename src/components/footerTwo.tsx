import Image from "next/image";
import Link from "next/link";

const FooterTwo = () => {
  return (
    <footer className="footer-area bg-f6ffeb pt-120">
      <div className="container">
        <div className="row" data-cues="fadeIn" data-group="footerContent">
          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget mb-25">
              <Link href="home-2" className="logo d-inline-block">
                <Image
                  width={112}
                  height={60}
                  src="/images/logo.png"
                  alt="logo"
                />
              </Link>
              <p>
                Lorem ipsum&nbsp;is simply dummy text of the printing and
                typesetting industry.
              </p>
              <div className="socials">
                <Link
                  href="#"
                  className="d-inline-block position-relative rounded-circle text-center"
                >
                  <i className="fa-brands fa-facebook-f" />
                </Link>
                <Link
                  href="#"
                  className="d-inline-block position-relative rounded-circle text-center"
                >
                  <i className="fa-brands fa-x-twitter" />
                </Link>
                <Link
                  href="#"
                  className="d-inline-block position-relative rounded-circle text-center"
                >
                  <i className="fa-brands fa-linkedin-in" />
                </Link>
                <Link
                  href="#"
                  className="d-inline-block position-relative rounded-circle text-center"
                >
                  <i className="fa-brands fa-google" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget style-two mb-25">
              <h3 className="fw-medium">About Us</h3>
              <ul className="custom-links p-0 mb-0 list-unstyled">
                <li>
                  <Link href="contact">Contact</Link>
                </li>
                <li>
                  <Link href="contact">Support</Link>
                </li>
                <li>
                  <Link href="blog">Resources</Link>
                </li>
                <li>
                  <Link href="contact">Help Center</Link>
                </li>
                <li>
                  <Link href="blog">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="single-footer-widget style-two mb-25">
              <h3 className="fw-medium">Courses</h3>
              <ul className="custom-links p-0 mb-0 list-unstyled">
                <li>
                  <Link href="course-details">Language Learning</Link>
                </li>
                <li>
                  <Link href="#">Testimonials</Link>
                </li>
                <li>
                  <Link href="#">Events</Link>
                </li>
                <li>
                  <Link href="#">Partners</Link>
                </li>
                <li>
                  <Link href="#">Careers</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 col-sm-6">
            <div className="single-footer-widget style-two mb-25">
              <h3 className="fw-medium">Newsletter</h3>
              <p>Stay updated with our latest news and offers.</p>
              <div className="newsletter-form">
                <form>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter email address"
                  />
                  <button type="button">Subscribe</button>
                </form>
                <p>By subscribing, you agree to our Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area style-two border-top">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-5 col-sm-6">
              <p className="mb-0">© 2024 Lanklub. All rights reserved.</p>
            </div>
            <div className="col-lg-6 col-md-7 col-sm-6">
              <ul className="custom-links mb-0 list-unstyled">
                <li className="d-inline-block">
                  <Link href="privacy-policy">Privacy Policy</Link>
                </li>
                <li className="d-inline-block">
                  <Link href="terms-conditions">Terms of Service</Link>
                </li>
                <li className="d-inline-block">
                  <Link href="privacy-policy">Cookies Settings</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
