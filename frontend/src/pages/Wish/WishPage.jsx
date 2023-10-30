import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import ProductsSkeleton from "../../components/loader/ProductsSkeleton";
import { REMOVE_WISH_LIST_API_REQUEST, WISH_LIST_API_REQUEST } from "../../services/API_REQUEST";
import { ErrorToast, SuccessToast } from "../../utility/FormHelper";

const WishPage = () => {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    (async () => {
      const { data } = await WISH_LIST_API_REQUEST();
      setData(data);
    })();
  }, [refresh]);

  const handleRemoveWishList = async (id) => {
    const data = await REMOVE_WISH_LIST_API_REQUEST(id);
    if (data.status) {
      SuccessToast(data.message);
    } else {
      ErrorToast(data.message);
    }
    setRefresh(1);
  };

  return (
    <>
      {data.length === 0 ? (
        <ProductsSkeleton />
      ) : (
        <div className="container">
          <div className="row">
            {data.map((item, i) => {
              let price = <p className="bodyMedium  text-dark my-1">Price: ${item["product"]["price"]} </p>;
              if (item["product"]["discount"] === true) {
                price = (
                  <p className="bodyMedium  text-dark my-1">
                    Price: <strike>${item["product"]["price"]}</strike> ${item["product"]["discount_price"]}
                  </p>
                );
              }

              return (
                <div key={i} className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
                  <div className="card shadow-sm h-100 rounded-3 bg-white">
                    <Link to={"/product-details/" + item["_id"]}>
                      <img className="w-100 rounded-top-2" src={item["product"]["image"]} />
                    </Link>
                    <div className="card-body">
                      <Link to={"/product-details/" + item["_id"]}>
                        <p className="bodySmal text-secondary my-1">{item["product"]["title"]}</p>
                        {price}
                      </Link>
                      <Button
                        isSubmit={false}
                        text="Remove"
                        onClick={() => handleRemoveWishList(item["product_id"])}
                        className="btn btn-danger btn-sm"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default WishPage;
