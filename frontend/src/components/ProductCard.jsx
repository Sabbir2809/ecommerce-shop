import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const ProductCard = ({ data }) => {
  return (
    <div className="row">
      {data.length > 0 ? (
        data.map((item) => {
          let price = <p className="bodyMedium text-dark my-1">Price: ${item["price"]} </p>;
          if (item["discount"] === true) {
            price = (
              <p className="bodyMedium text-dark my-1">
                Price: <strike>${item["price"]}</strike> ${item["discount_price"]}
              </p>
            );
          }
          return (
            <div key={item._id} className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
              <Link to={`/product-details/${item._id}`} className="card shadow-sm h-100 rounded-3 bg-white">
                <img className="img-fluid h-50 rounded-top-2" src={item["image"]} />
                <div className="card-body">
                  <p className="bodySmal text-secondary my-1">{item["title"]}</p>
                  {price}
                  <StarRatings
                    rating={parseFloat(item["star"])}
                    starRatedColor="red"
                    starDimension="15px"
                    starSpacing="2px"
                  />
                </div>
              </Link>
            </div>
          );
        })
      ) : (
        <span className="text-center">No Data Found</span>
      )}
    </div>
  );
};

export default ProductCard;
