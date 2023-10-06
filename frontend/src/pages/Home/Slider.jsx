import { useEffect, useState } from "react";
import { GET_LIST_API_REQUEST } from "../../services/API_REQUEST";

const Slider = () => {
  const [sliders, setSliders] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    (async () => {
      const response = await GET_LIST_API_REQUEST("/list-by-slider");
      setSliders(response);
    })();
  }, []);

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? sliders.length - 1 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === sliders.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div
      id="carouselExampleDark"
      className="carousel hero-bg carousel-dark slide"
      style={{ height: "500px", width: "100%" }}>
      <div className="carousel-indicators">
        {sliders.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={index}
            className={index === activeIndex ? "active" : ""}
            aria-label={`Slide ${index + 1}`}></button>
        ))}
      </div>

      <div className="carousel-inner py-5">
        {sliders.map((slider, index) => (
          <div
            key={slider._id}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
            data-bs-interval="10000">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                  <h1 className="headline-1">{slider.title}</h1>
                  <p>{slider.short_des}</p>
                  <button className="btn text-white btn-success px-5">Buy Now</button>
                </div>
                <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                  <img src={slider.image} className="w-100" alt="..." />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-control-prev btn rounded-5" type="button" onClick={handlePrevSlide}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next btn" type="button" onClick={handleNextSlide}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
