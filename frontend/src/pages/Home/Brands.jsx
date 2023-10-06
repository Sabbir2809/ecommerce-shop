import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GET_LIST_API_REQUEST } from "../../services/API_REQUEST";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await GET_LIST_API_REQUEST("brands");
      setBrands(data);
    })();
  }, []);

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <h1 className="headline-4 text-center my-2 p-0">Top Brands</h1>
          <span className="bodySmal mb-5 text-center">
            Explore a World of Choices Across Our Most Popular <br />
            Shopping Categories
          </span>
          {brands.map((brand) => (
            <div key={brand._id} className="col-6 col-lg-8r text-center col-md-8r p-2">
              <Link to="/" className="card h-100 rounded-3 bg-light">
                <div className="card-body">
                  <img className="w-75 h-25" src={brand.brandImg} alt={brand.brandName} />
                  <p className="bodySmall mt-3">{brand.brandName}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
