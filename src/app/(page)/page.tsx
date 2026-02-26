import AboutAreaTwo from "@/components/about/aboutAresTwo";
import ContactAreaOne from "@/components/contact/contactAreaOne";
import ContactAreaTwo from "@/components/contact/contactAreaTwo";
import FeedbackTwo from "@/components/feedbacks/feedbackTwo";
import FunfactsArea from "@/components/funfactsArea";
import GalleryArea from "@/components/gallery/galleryArea";
import HeroTwo from "@/components/hero/heroTwo";
import Partners from "@/components/partners";
import PricingArea from "@/components/pricingArea";

export default function HomeTwo() {
  return (
    <>
      <HeroTwo />
      <FunfactsArea />
      <AboutAreaTwo />
      <PricingArea />
      <Partners />
      <GalleryArea />
      <FeedbackTwo />
      <ContactAreaTwo />
      <ContactAreaOne />
    </>
  );
}
