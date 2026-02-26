import PageHeader from "@/components/pageHeader";
import Image from "next/image";
import Link from "next/link";
 
  export default function Register() { 
  return (
    <>
      <PageHeader title="Register" />
      <div className="register-area bg-fbfbfb ptb-120">
        <div className="container">
          <div
            className="row align-items-center"
            data-cues="slideInUp"
            data-group="registerContent"
          >
            <div className="col-lg-6 col-md-12 order-2 order-lg-1">
              <div className="register-image text-center">
                <Image
                  width={537}
                  height={585}
                  src="/images/register.jpg"
                  alt="register-image"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 order-1 order-lg-2">
              <div className="register-content">
                <ul className="links p-0 list-unstyled">
                  <li className="d-inline-block">
                    <Link href="login" className="d-block position-relative">
                      Log in
                    </Link>
                  </li>
                  <li className="d-inline-block">
                    <Link
                      href="register"
                      className="d-block position-relative active"
                    >
                      Register
                    </Link>
                  </li>
                </ul>
                <h3 className="fw-medium">Create account</h3>
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control shadow-none"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control shadow-none"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group position-relative">
                    <input
                      type="password"
                      id="passwordInput"
                      className="form-control shadow-none"
                      placeholder="Password"
                    />
                    <button
                      type="button"
                      className="p-0 bg-transparent border-0"
                      id="togglePassword"
                    >
                      <i className="fa-regular fa-eye-slash" />
                    </button>
                  </div>
                  <Link href="#" className="forgot-password">
                    Forgot your Password?
                  </Link>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Agree to{" "}
                      <Link href="#">
                        Terms &amp; Conditions and Privacy Policy
                      </Link>
                    </label>
                  </div>
                  <button type="submit" className="default-btn d-block w-100">
                    Register
                  </button>
                  <p className="text-center">Or register with an account</p>
                  <div className="socials text-center">
                    <button
                      type="button"
                      className="d-inline-block border-0 p-0 position-relative"
                    >
                      <i className="fa-brands fa-apple" />
                    </button>
                    <button
                      type="button"
                      className="d-inline-block border-0 p-0 position-relative"
                    >
                      <i className="fa-brands fa-github" />
                    </button>
                    <button
                      type="button"
                      className="d-inline-block border-0 p-0 position-relative"
                    >
                      <i className="fa-brands fa-google" />
                    </button>
                    <button
                      type="button"
                      className="d-inline-block border-0 p-0 position-relative"
                    >
                      <i className="fa-brands fa-facebook-f" />
                    </button>
                    <button
                      type="button"
                      className="d-inline-block border-0 p-0 position-relative"
                    >
                      <i className="fa-brands fa-windows" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
 