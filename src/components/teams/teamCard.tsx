import { TeamMember } from "@/db/teamData";
import Image from "next/image";
import Link from "next/link";

const TeamCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="single-team-member text-center mb-25 position-relative">
      <Image
        width={306}
        height={394}
        sizes="100vw"
        src={member.image}
        alt="team-image"
      />
      <div className="content">
        <h3 className="fw-semibold">
          <Link href={"team-details"}>{member.name}</Link>
        </h3>
        <span className="d-block">{member.role}</span>
        <ul className="socials p-0 mb-0 list-unstyled">
          {member.socials.map((social, sidx) => (
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
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamCard;
