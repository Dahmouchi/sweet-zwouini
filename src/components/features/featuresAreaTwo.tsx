import FeaturesAreaTwoClient from "./featuresAreaTwoClient";

const FeaturesAreaTwo = () => {
  return (
    <div className="features-area ptb-120">
      <div className="container">
        <div
          className="row justify-content-center"
          data-cues="slideInUp"
          data-group="featuresContent"
        >
          <FeaturesAreaTwoClient />
        </div>
      </div>
    </div>
  );
};

export default FeaturesAreaTwo;
