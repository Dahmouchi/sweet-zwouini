"use client";
import Image from "next/image";
import Link from "next/link";

const featuresData = [
  {
    image: "/images/banners/banner2.jpg",
    title: "Maîtrisez l'Art de la Pâtisserie",
    description: "Développez des compétences techniques exceptionnelles.",
  },
  {
    image: "/images/about-us/about1.png",
    title: "Ateliers Professionnels",
    description: "Apprentissage 100% pratique dans nos cuisines.",
  },
  {
    image: "/images/features/feature1.jpg",
    title: "Chefs Expérimentés",
    description: "Formez-vous avec des experts reconnus.",
  },
  {
    image: "/images/features/feature2.jpg",
    title: "Accompagnement de Carrière",
    description: "Lancez votre propre projet avec notre aide.",
  },
];

const FeaturesAreaTwoClient = () => {
  return (
    <>
      {featuresData.map((feature, idx) => (
        <div key={idx} className="col-lg-3 col-md-6 mb-4">
          <div className="modern-gallery-item position-relative overflow-hidden rounded-4 shadow-sm h-100">
            <Image
              src={feature.image}
              alt={feature.title}
              width={400}
              height={500}
              className="img-fluid w-100 h-100 object-fit-cover"
            />
            <div className="gallery-overlay position-absolute bottom-0 start-0 w-100 p-4">
              <h4 className="text-white mb-2 fs-5">{feature.title}</h4>
              <p className="text-white-50 small mb-3">{feature.description}</p>
              <Link
                href="/contact"
                className="btn btn-sm btn-outline-light rounded-pill px-3"
              >
                S'inscrire
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturesAreaTwoClient;
