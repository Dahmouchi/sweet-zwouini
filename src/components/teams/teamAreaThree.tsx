import { teamData } from "@/db/teamData";
import Image from "next/image";
import Link from "next/link";

const TeamAreaThree = () => {
  return (
    <div className="team-area pt-120 pb-95">
      <div className="container">
        <div className="section-title mb-40 text-center">
          <h2 className="fw-semibold fs-32 mx-auto mb-0 text-uppercase">
            Meet the Passionate Team Driving Excellence
          </h2>
        </div>
        <div
          className="row justify-content-center"
          data-cues="slideInUp"
          data-group="teamContent"
        >
          {teamData.slice(0, 3).map((member, idx) => (
            <div key={idx} className="col-lg-4 col-sm-6">
              <div className="team-box position-relative mb-25">
                <Image
                  width={416}
                  height={579}
                  sizes="100vw"
                  src={member.image}
                  alt="team-image"
                />
                <div className="content d-flex align-items-center justify-content-between">
                  <div>
                    <h3 className="fw-semibold">
                      <Link href="team-details">{member.name}</Link>
                    </h3>
                    <span className="d-block">{member.role}</span>
                  </div>
                  <button
                    type="button"
                    className="link-btn d-inline-block p-0 border-0 position-relative rounded-circle"
                  >
                    <i className="fa-solid fa-arrow-right" />
                  </button>
                </div>
                <ul className="socials mb-0 list-unstyled">
                  {member.socials.map((social, sidx) => (
                    <li key={sidx}>
                      <Link
                        href={social.url}
                        className="d-inline-block rounded-circle"
                        target="_blank"
                      >
                        <i className={`fa-brands ${social.icon}`} />
                      </Link>
                    </li>
                  ))}
                  <li>
                    <button
                      type="button"
                      className="link-btn d-inline-block p-0 border-0 position-relative rounded-circle"
                    >
                      <i className="fa-solid fa-arrow-right" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamAreaThree;
