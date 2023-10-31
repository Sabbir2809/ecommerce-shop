import { useEffect, useState } from "react";
import FeaturesSkeleton from "../../components/loader/FeaturesSkeleton";
import { GET_LIST_API_REQUEST } from "../../services/API_REQUEST";

const Features = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await GET_LIST_API_REQUEST("features");
      setFeatures(response);
    })();
  }, []);

  return (
    <>
      {features.length === 0 ? (
        <FeaturesSkeleton />
      ) : (
        <div className="container section">
          <div className="row">
            {features.map((feature, index) => (
              <div key={index} className="col-6 p-2 col-md-3 col-lg-3 col-sm-6">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-3">
                        <img className="w-100" src={feature.img} alt={feature.name} />
                      </div>
                      <div className="col-9">
                        <h3 className="bodyXLarge">{feature.name}</h3>
                        <span className="bodySmal">{feature.description}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Features;
