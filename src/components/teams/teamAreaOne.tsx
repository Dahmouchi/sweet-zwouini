import { TeamMember } from "@/db/teamData";
import TeamCard from "./teamCard";

interface PropsType {
  titleShown?: boolean;
  className?: string;
  data: TeamMember[];
}
const TeamAreaOne = ({ titleShown, className, data }: PropsType) => {
  return (
    <div className={`team-area pt-120 pb-95 border-bottom ${className}`}>
      <div className="container">
        {titleShown && (
          <div className="section-title text-center mb-60">
            <h2 className="fw-semibold mx-auto mb-0 text-uppercase">
              Meet the Passionate Team Driving Excellence at
            </h2>
          </div>
        )}
        <div
          className="row justify-content-center"
          data-cues="slideInUp"
          data-group="teamContent"
        >
          {data.map((member, idx) => (
            <div className="col-lg-3 col-sm-6" key={idx}>
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamAreaOne;
