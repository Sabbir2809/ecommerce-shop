import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SliderSkeleton from "../../components/loader/SliderSkeleton";
import { GET_LIST_API_REQUEST } from "../../services/API_REQUEST";

const Slider = () => {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await GET_LIST_API_REQUEST("list-by-slider");
      setSliders(response);
    })();
  }, []);

  return (
    <>
      {sliders.length === 0 ? (
        <SliderSkeleton />
      ) : (
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide hero-bg carousel-dark"
          data-bs-ride="carousel">
          <div className="carousel-indicators">
            {sliders.map((slider, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide-to={index}
                className="active"
                aria-current="true"
                aria-label={`Slide ${index}`}></button>
            ))}
          </div>

          <div className="carousel-inner">
            {sliders.map((slider, index) => (
              <div
                key={slider._id}
                className={index === 0 ? "carousel-item active" : "carousel-item"}
                data-bs-interval="5000">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                      <h1 className="headline-1">{slider.title}</h1>
                      <p>{slider.short_des}</p>
                      <Link to={`/product-details/${slider._id}`} className="btn text-white btn-success px-5">
                        Buy Now
                      </Link>
                    </div>
                    <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                      <img src={slider.image} className="img-fluid w-80 h-60" alt="..." />
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
      )}
    </>
  );
};

export default Slider;
