import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import {
  CREATE_CART_LIST_API_REQUEST,
  CREATE_WISH_LIST_API_REQUEST,
  PRODUCT_DETAILS_API_REQUEST,
} from "../../services/API_REQUEST";
import { ErrorToast, SuccessToast } from "../../utility/FormHelper";
import Brands from "../Home/Brands";
import ProductGallery from "./ProductGallery";
import ProductSpecification from "./ProductSpecification";
import SimilarProduct from "./SimilarProduct";

const ProductDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [cartBtnLoader, setCartBtnLoader] = useState(false);
  const [wishBtnLoader, setWishBtnLoader] = useState(false);

  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const [dataAddToCart, setDataAddToCart] = useState({
    product_id: id,
    price: data[0]?.price,
    qty: 1,
    size: "",
    color: "",
  });

  // cart data
  const inputOnChange = (size, value) => {
    setDataAddToCart((prevDataAddToCart) => ({
      ...prevDataAddToCart,
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

  // Add to wish
  const handleAddToWish = async () => {
    setWishBtnLoader(true);
    const response = await CREATE_WISH_LIST_API_REQUEST(id);
    setWishBtnLoader(false);
    if (response.status) {
      SuccessToast(response.message);
    } else {
      ErrorToast(response.message);
    }
  };

  // Add to Cart
  const handleAddToCart = async (event) => {
    event.preventDefault();
    if (dataAddToCart.color.length === 0) {
      ErrorToast("Color is Required");
    } else if (dataAddToCart.size.length === 0) {
      ErrorToast("Size is Required");
    } else {
      setCartBtnLoader(true);
      const response = await CREATE_CART_LIST_API_REQUEST(dataAddToCart);
      setCartBtnLoader(false);
      if (response.status) {
        SuccessToast(response.message);
      } else {
        ErrorToast(response.message);
      }
    }
  };

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
                  value={dataAddToCart.size}
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
                  value={dataAddToCart.color}
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
                    onChange={(event) => {
                      inputOnChange("qty", event.target.value);
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
                <Button
                  onClick={handleAddToCart}
                  isSubmit={cartBtnLoader}
                  text="Add to Cart"
                  className="btn btn-success w-100"
                />
              </div>
              <div className="col-4  p-2">
                <Button
                  onClick={handleAddToWish}
                  isSubmit={wishBtnLoader}
                  text="Add to Wish"
                  className="btn btn-success w-100"
                />
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
