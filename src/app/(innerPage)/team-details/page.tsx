import PageHeader from "@/components/pageHeader";
import TeamAreaOne from "@/components/teams/teamAreaOne";
import { teamData } from "@/db/teamData";
import Image from "next/image";
import Link from "next/link";

export default function TeamDetails() { 
  return (
    <>
      <PageHeader title="Team Details" />
      <div className="team-details-area ptb-120">
        <div className="container">
          <div className="team-details-box" data-cue="slideInUp">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-12">
                <div className="image text-center">
                  <Image
                    width={215}
                    height={215}
                    sizes="100vw"
                    src="/images/teams/team16.jpg"
                    alt="team-image"
                  />
                  <div className="socials">
                    <a
                      href="#"
                      className="d-inline-block position-relative rounded-circle text-center"
                    >
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                    <a
                      href="#"
                      className="d-inline-block position-relative rounded-circle text-center"
                    >
                      <i className="fa-brands fa-x-twitter" />
                    </a>
                    <a
                      href="#"
                      className="d-inline-block position-relative rounded-circle text-center"
                    >
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="content">
                  <h3 className="text-uppercase fw-semibold">
                    GINGER GRIFFITH
                  </h3>
                  <span className="d-block designation">
                    Spanish Language Instructor
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <ul className="info mb-0 p-0 list-unstyled">
                    <li className="d-inline-block position-relative">
                      <Image
                        width={22}
                        height={22}
                        src="/images/icons/phone-call.svg"
                        alt="phone-call"
                      />
                      <a href="tel:(000)967-237-96">(000) 967-237-96</a>
                    </li>
                    <li className="d-inline-block position-relative">
                      <Image
                        width={25}
                        height={25}
                        src="/images/icons/email.svg"
                        alt="email"
                      />
                      <a href="mailto:farnsinfokk@email.com">
                        farnsinfokk@email.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TeamAreaOne
        titleShown={false}
        data={teamData}
        className="bg-f3f3f3 border-top"
      />
      {/* join us btn */}
      <div className="pb-120 pt-40 text-center">
        <div className="container">
          <Link href="contact" className="default-btn" data-cue="slideInUp">
            Join With Us
          </Link>
        </div>
      </div>
    </>
  );
};
 
