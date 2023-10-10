import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PRODUCT_DETAILS_API_REQUEST } from "../../services/API_REQUEST";
import Brands from "../Home/Brands";
import ProductGallery from "./ProductGallery";
import ProductSpecification from "./ProductSpecification";
import SimilarProduct from "./SimilarProduct";

const ProductDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    (async () => {
      let result = await PRODUCT_DETAILS_API_REQUEST(id);
      setData(result);

      // color array
      const colorArray = result[0]["details"]["color"].split(",");
      setColor(colorArray);

      // size array
      const sizeArray = result[0]["details"]["size"].split(",");
      setSize(sizeArray);
    })();
  }, []);

  const [cartData, setCartData] = useState({
    product_id: id,
    qty: 1,
    color: "",
    size: "",
  });

  // cart data
  const inputOnChange = (size, value) => {
    setCartData((cartData) => ({
      ...cartData,
      [size]: value,
    }));
  };

  // increment Quantity
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // decrement Quantity
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  // Add to Cart
  const AddCart = async () => {};

  // Add to wish
  const AddWish = async () => {};

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {/* Image Gallery Component */}
          <ProductGallery data={data}></ProductGallery>
          {/* Product Info */}
          <div className="col-md-5 p-3">
            <h4>{data[0]?.title}</h4>
            <p className="text-muted bodySmal my-1">Category: {data[0]?.category?.categoryName}</p>
            <p className="text-muted bodySmal mb-2 mt-1">Brand: {data[0]?.brand?.brandName}</p>
            <p className="bodySmal mb-2 mt-1">{data[0]?.short_des}</p>
            <h4>
              {data[0]?.discount === true ? (
                <span>
                  <strike className="text-secondary">${data[0]?.price} </strike>${data[0]?.discount_price}
                </span>
              ) : (
                <span>${data[0]?.price}</span>
              )}
            </h4>

            <div className="row">
              <div className="col-4 p-2">
                <label className="bodySmal">Size</label>
                <select
                  value={cartData.size}
                  onChange={(event) => inputOnChange("size", event.target.value)}
                  className="form-control my-2 form-select">
                  <option>Choose Size</option>
                  {size.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-4 p-2">
                <label className="bodySmal">Color</label>
                <select
                  value={cartData.color}
                  onChange={(event) => inputOnChange("color", event.target.value)}
                  className="form-control my-2 form-select">
                  <option>Choose Color</option>
                  {color.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-4  p-2">
                <label className="bodySmal">Quantity</label>
                <div className="input-group my-2">
                  <button
                    onClick={decrementQuantity}
                    className="btn btn-outline-secondary"
                    disabled={quantity <= 1}>
                    -
                  </button>
                  <input
                    onChange={(e) => {
                      inputOnChange("qty", e.target.value);
                    }}
                    type="text"
                    value={quantity}
                    className="form-control bg-light text-center"
                    readOnly
                  />
                  <button onClick={incrementQuantity} className="btn btn-outline-secondary">
                    +
                  </button>
                </div>
              </div>
              <div className="col-4  p-2">
                <button onClick={AddCart} className="btn w-100 btn-success">
                  Add to Cart
                </button>
              </div>
              <div className="col-4  p-2">
                <button onClick={AddWish} className="btn w-100 btn-success">
                  Add to Wish
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Specification */}
        <div className="row mt-3">
          <ProductSpecification data={data}></ProductSpecification>
        </div>
      </div>
      {/* Similar Product category_id={data} */}
      <SimilarProduct></SimilarProduct>
      {/* All Brands */}
      <Brands></Brands>
    </>
  );
};

export default ProductDetails;
