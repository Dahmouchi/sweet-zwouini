import PartnersClient from "./partnersClient";

export interface PartnerType {
  partner: string;
  star: string;
}

const data: PartnerType[] = [
  {
    partner: "/images/logowhite.png",
    star: "/images/partners/star.svg",
  },
  {
    partner: "/images/logowhite.png",
    star: "/images/partners/star.svg",
  },
  {
    partner: "/images/logowhite.png",
    star: "/images/partners/star.svg",
  },
  {
    partner: "/images/logowhite.png",
    star: "/images/partners/star.svg",
  },
  {
    partner: "/images/logowhite.png",
    star: "/images/partners/star.svg",
  },
  {
    partner: "/images/logowhite.png",
    star: "/images/partners/star.svg",
  },
  {
    partner: "/images/logowhite.png",
    star: "/images/partners/star.svg",
  },
];

const Partners = () => {
  return <PartnersClient data={data} />;
};

export default Partners;
