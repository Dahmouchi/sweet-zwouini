import { pricingData } from "@/db/pricingData";

const PricingArea = () => {
  return (
    <div
      className="pricing-area bg-fff7cd pt-120 pb-95"
      id="pricing"
      style={{
        backgroundImage: "url('/images/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="section-title">
          <div className="title">
            <h2 className="fs-32 mb-0 fw-semibold text-uppercase text-black">
              Nos Tarifs de Formation
            </h2>
          </div>
        </div>

        <div
          className="pricing-boxes-list"
          data-cues="slideInUp"
          data-group="pricingContent"
        >
          <div className="single-pricing-box d-none d-lg-block border-bottom bg-light">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <span className="fw-bold">Filières / Formations</span>
              </div>
              <div className="col-lg-2 ">
                <span className="fw-bold">Durée</span>
              </div>
              <div className="col-lg-2 text-center">
                <span className="fw-bold">Tarif Mensuel</span>
              </div>
              <div className="col-lg-2 text-end">
                <span className="fw-bold">Remarques</span>
              </div>
            </div>
          </div>

          {pricingData.map((item) => (
            <div className="single-pricing-box" key={item.title}>
              <div className="row align-items-center text-white">
                <div className="col-lg-6 col-md-12">
                  <h5 className=" mb-0 fw-semibold">{item.title}</h5>
                </div>
                <div className="col-lg-2 col-md-4 ">
                  <h5 className="mb-0 fw-medium">
                    <span className="d-lg-none fw-bold text-white">
                      Durée:{" "}
                    </span>
                    {item.duration}
                  </h5>
                </div>
                <div className="col-lg-2 col-md-4 text-lg-center">
                  <h5 className="price mb-0 fw-semibold">
                    <span className="d-lg-none fs-16 fw-bold">Tarif: </span>
                    {item.price}
                  </h5>
                </div>
                {item.remarks && (
                  <div className="col-lg-2 col-md-4 text-lg-end">
                    <h5 className="mb-0 text-muted">
                      <span className="d-lg-none fw-bold text-white">
                        Remarques:{" "}
                      </span>
                      {item.remarks}
                    </h5>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingArea;
