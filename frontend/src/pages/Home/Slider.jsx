import { useEffect, useState } from "react";
import { GET_LIST_API_REQUEST } from "../../services/API_REQUEST";

const Slider = () => {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await GET_LIST_API_REQUEST("/list-by-slider");
      setSliders(response);
    })();
  }, []);

  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide hero-bg carousel-dark"
      data-bs-ride="carousel">
      <div className="carousel-indicators">
        {sliders.length > 0 ? (
          sliders.map((slider, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide-to={index}
              className="active"
              aria-current="true"
              aria-label={`Slide ${index}`}></button>
          ))
        ) : (
          <span className="text-center">No Data Found</span>
        )}
      </div>

      <div className="carousel-inner">
        {sliders.length > 0 ? (
          sliders.map((slider, index) => (
            <div
              key={slider._id}
              className={index === 0 ? "carousel-item active" : "carousel-item"}
              data-bs-interval="5000">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                    <h1 className="headline-1">{slider.title}</h1>
                    <p>{slider.short_des}</p>
                    <button className="btn text-white btn-success px-5">Buy Now</button>
                  </div>
                  <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                    <img src={slider.image} className="img-fluid w-80 h-60" alt="..." />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <span className="text-center">No Data Found</span>
        )}
      </div>

      <button
        className="carousel-control-prev btn rounded-5"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next btn"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
