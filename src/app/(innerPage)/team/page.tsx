import PageHeader from "@/components/pageHeader";
import TeamAreaOne from "@/components/teams/teamAreaOne";
import { teamData } from "@/db/teamData";
import Link from "next/link";

  export default function Team() { 
  return (
    <>
      <PageHeader title="Team" />
      <div className="pb-120 border-bottom"></div>
      <TeamAreaOne titleShown={false} data={teamData} className="bg-f3f3f3" />
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
 