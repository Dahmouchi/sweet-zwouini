import Image from "next/image";
import Link from "next/link";

const FooterOne = () => {
  return (
    <footer
      className="footer-area bg-f6ffeb pt-120 text-white"
      style={{
        backgroundImage: "url('/images/footer.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="row" data-cues="fadeIn" data-group="footerContent">
          <div className="col-md-3 col-sm-6">
            <div className="single-footer-widget mb-25">
              <Link href="/" className="logo mb-0 d-inline-block">
                <Image
                  width={222}
                  height={60}
                  src="/images/logowhite.png"
                  alt="logo"
                />
              </Link>
              <p className="mt-3">
                Centre de formation professionnelle en pâtisserie et cuisine,
                100% dédié aux femmes passionnées.
              </p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="single-footer-widget mb-25">
              <h3 className="fw-medium">Nos Formations</h3>
              <ul className="custom-links p-0 mb-0 list-unstyled">
                <li>
                  <Link href="#tarifs" className="text-white">
                    Pâtisserie Française
                  </Link>
                </li>
                <li>
                  <Link href="#tarifs" className="text-white">
                    Cuisine Traditionnelle
                  </Link>
                </li>
                <li>
                  <Link href="#tarifs" className="text-white">
                    Décoration de Gâteaux
                  </Link>
                </li>
                <li>
                  <Link href="#tarifs" className="text-white">
                    Boulangerie Artisanale
                  </Link>
                </li>
                <li>
                  <Link href="#temoignages" className="text-white">
                    Témoignages
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="single-footer-widget mb-25">
              <h3 className="fw-medium">Contactez-nous</h3>
              <ul className="custom-links p-0 mb-0 list-unstyled">
                <li>
                  <a href="tel:0697083442" className="text-white">
                    0697 08 34 42
                  </a>
                </li>
                <li>
                  <a href="tel:0674309881" className="text-white">
                    0674 30 98 81
                  </a>
                </li>
                <li>
                  <Link href="#contact" className="text-white">
                    oomarrbachnati@gmail.com
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-white">
                    Salé – Rabat
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright-area border-top">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6">
              <p className="mb-0">
                © {new Date().getFullYear()} Sweet Zwouini. Tous droits
                réservés.
              </p>
            </div>
            <div className="col-lg-3 col-sm-6">
              <ul className="custom-links mb-0 list-unstyled">
                <li className="d-inline-block text-white"></li>
                <li className="d-inline-block ms-3"></li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="socials">
                <Link
                  target="_blank"
                  href="https://www.facebook.com/sweetzouini/"
                  className="d-inline-block position-relative rounded-circle text-center"
                >
                  <i className="fa-brands fa-facebook-f" />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/atelier_sweet_zouini/"
                  className="d-inline-block position-relative rounded-circle text-center"
                >
                  <i className="fa-brands fa-instagram" />
                </Link>
                <Link
                  target="_blank"
                  href="https://wa.me/0697083442"
                  className="d-inline-block position-relative rounded-circle text-center"
                >
                  <i className="fa-brands fa-whatsapp" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
