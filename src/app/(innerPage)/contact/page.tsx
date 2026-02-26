import ContactAreaOne from "@/components/contact/contactAreaOne";
import ContactInfoArea from "@/components/contact/contactInfoArea";
import PageHeader from "@/components/pageHeader";

export default function Contact() {  
  return (
    <>
      <PageHeader title="Contact" />
      <div className="pb-120 border-bottom"></div>
      <ContactInfoArea />
      <ContactAreaOne />
    </>
  );
};
 
