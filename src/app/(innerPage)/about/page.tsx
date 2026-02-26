import AboutAreaOne from "@/components/about/aboutAreaOne";
import ContactAreaOne from "@/components/contact/contactAreaOne";
import PageHeader from "@/components/pageHeader";
import TeamAreaOne from "@/components/teams/teamAreaOne";
import { teamData } from "@/db/teamData";

export default function About() {  

  return (
    <>
      <PageHeader title="About" />
      <div className="pb-120 border-bottom"></div>
      <AboutAreaOne className="bg-f3f3f3 border-bottom" />
      <TeamAreaOne data={teamData.slice(0, 4)} titleShown={true} />
      <ContactAreaOne className="border-top-0"/>
    </>
  );
};
 
