import PageHeader from "@/components/pageHeader";
import Image from "next/image";
import Link from "next/link";

export default function Login() { 
  return (
    <>
      <PageHeader title="Log In" />
      <div className="login-area bg-fbfbfb ptb-120">
        <div className="container">
          <div
            className="row align-items-center"
            data-cues="slideInUp"
            data-group="loginContent"
          >
            <div className="col-lg-6 col-md-12 order-2 order-lg-1">
              <div className="login-image text-center">
                <Image
                  width={537}
                  height={585}
                  sizes="100vw"
                  src="/images/login.jpg"
                  alt="login-image"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 order-1 order-lg-2">
              <div className="login-content">
                <ul className="links p-0 list-unstyled">
                  <li className="d-inline-block">
                    <Link
                      href="login"
                      className="d-block position-relative active"
                    >
                      Log in
                    </Link>
                  </li>
                  <li className="d-inline-block">
                    <Link
                      href="register"
                      className="d-block position-relative"
                    >
                      Register
                    </Link>
                  </li>
                </ul>
                <h3 className="fw-medium">Log in to your account</h3>
                <form>
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
                  <button type="submit" className="default-btn d-block w-100">
                    Log in
                  </button>
                  <p className="text-center">Or log in with an account</p>
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
 