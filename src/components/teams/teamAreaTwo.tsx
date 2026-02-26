import { teamData } from "@/db/teamData";
import Image from "next/image";
import Link from "next/link";

const TeamAreaTwo = () => {
  return (
    <div className="team-area pt-120 pb-95">
      <div className="container">
        <div className="section-title d-md-flex align-items-center justify-content-between">
          <div className="title">
            <h2 className="fs-32 mb-0 fw-semibold text-uppercase">
              Meet the Passionate Team Driving Excellence
            </h2>
          </div>
          <Link
            href="team"
            className="link-btn d-inline-block text-center rounded-circle fw-medium"
          >
            <span className="d-block">View All Members</span>
            <Image
              width={20}
              height={20}
              src="/images/icons/diagonal-arrow-right-up.svg"
              alt="diagonal-arrow-right-up"
            />
          </Link>
        </div>
        <div
          className="row justify-content-center"
          data-cues="slideInUp"
          data-group="teamContent"
        >
          {teamData.slice(0, 3).map((member, idx) => (
            <div key={idx} className="col-lg-4 col-sm-6">
              <div className="single-team-box mb-25">
                <div className="image position-relative text-center">
                  <Image
                    width={416}
                    height={464}
                    sizes="100vw"
                    src={member.image}
                    alt="team-image"
                  />
                  <ul className="socials p-0 mb-0 list-unstyled">
                    {
                        member.socials.map((social, sidx) => (
                          <li className="d-inline-block" key={sidx}>
                            <Link
                              href={social.url}
                              target="_blank"
                              className="d-block rounded-circle"
                              rel="noopener noreferrer"
                            >
                              <i className={`fa-brands ${social.icon}`} />
                            </Link>
                          </li>
                        ))
                    }
                  </ul>
                </div>
                <h3 className="fw-semibold">
                  <Link href="team-details">{member.name}</Link>
                </h3>
                <span className="designation d-block">{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamAreaTwo;
