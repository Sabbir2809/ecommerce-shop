import f1 from "./../../assets/images/f1.svg";
import f2 from "./../../assets/images/f2.svg";
import f3 from "./../../assets/images/f3.svg";
import f4 from "./../../assets/images/f4.svg";

const Features = () => {
  const featuresData = [
    {
      title: "Free Delivery",
      details: "For All Orders Over $99",
      path: f1,
    },
    {
      title: "90 Days Return",
      details: "If goods have a problem",
      path: f2,
    },
    {
      title: "Secure Payment",
      details: "100% Secure Payment",
      path: f3,
    },
    {
      title: "24/7 Support",
      details: "Dedicated Support",
      path: f4,
    },
  ];

  return (
    <div className="container section">
      <div className="row">
        {featuresData.map((feature, index) => (
          <div key={index} className="col-6 p-2 col-md-3 col-lg-3 col-sm-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="row">
                  <div className="col-3">
                    <img className="w-100" src={feature.path} alt={feature.title} />
                  </div>
                  <div className="col-9">
                    <h3 className="bodyXLarge">{feature.title}</h3>
                    <span className="bodySmal">{feature.details}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
