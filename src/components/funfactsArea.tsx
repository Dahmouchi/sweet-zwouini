const FunfactsArea = () => {
  return (
    <div className="funfacts-area bg-image position-relative z-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12">
            <div className="section-title position-relative">
              <h2 className="fs-32 mb-0 fw-semibold ">
                Nous gagnons votre confiance
              </h2>
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="funfacts-list">
              <div
                className="row justify-content-center"
                data-cues="slideInUp"
                data-group="funfactsContent"
              >
                <div className="col-lg-4 col-sm-4 col-6">
                  <div className="single-funfact-box text-center position-relative">
                    <h3 className="fw-semibold">
                      10<span>+</span>
                    </h3>
                    <p className="fw-medium text-white">Ans d'expérience</p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-4 col-6">
                  <div className="single-funfact-box text-center position-relative">
                    <h3 className="fw-semibold">
                      62<span>+</span>
                    </h3>
                    <p className="fw-medium  text-white">Etudiantes formées</p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-4 col-6">
                  <div className="single-funfact-box text-center position-relative">
                    <h3 className="fw-semibold">
                      6<span>+</span>
                    </h3>
                    <p className="fw-medium text-white">Types de formation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunfactsArea;
