import { useState } from "react";

const ProductInfo = ({ data, id }) => {
  console.log(data);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [cartData, setCartData] = useState({ product_id: id, qty: 1, color: "", size: "" });

  const colorArray = data[0]?.["details"]?.["color"].split(",");
  setColor(colorArray);

  const sizeArray = data[0]?.["details"]?.["size"].split(",");
  setSize(sizeArray);

  const inputOnChange = (name, value) => {
    setCartData((cartData) => ({
      ...cartData,
      [name]: value,
    }));
  };

  const incrementQuantity = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((quantity) => quantity - 1);
    }
  };

  const AddCart = async () => {};

  const AddWish = async () => {};

  return (
    <div className="col-md-5 p-3">
      <h4>{data[0] ? data[0]["title"] : ""}</h4>
      <p className="text-muted bodySmal my-1">
        Category: {data[0] ? data[0]["category"]["categoryName"] : ""}
      </p>
      <p className="text-muted bodySmal mb-2 mt-1">Brand: {data[0] ? data[0]["brand"]["brandName"] : ""}</p>
      <p className="bodySmal mb-2 mt-1">{data[0] ? data[0]["shortDes"] : ""}</p>
      <h4>
        {(() => {
          if (data[0]) {
            if (data[0]["discount"] === true) {
              return (
                <span>
                  <strike className="text-secondary">${data[0]["price"]}</strike> {data[0]["discountPrice"]}
                </span>
              );
            } else {
              return <span>${data[0]["price"]}</span>;
            }
          }
        })()}
      </h4>
      <div className="row">
        <div className="col-4 p-2">
          <label className="bodySmal">Size</label>
          <select
            value={cartData["size"]}
            onChange={(e) => {
              inputOnChange("size", e.target.value);
            }}
            className="form-control my-2 form-select">
            <option value="">Choose Size</option>
            {size.map((item, i) => {
              return (
                <option key={i} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-4  p-2">
          <label className="bodySmal">Color</label>
          <select
            value={cartData["color"]}
            onChange={(e) => {
              inputOnChange("color", e.target.value);
            }}
            className="form-control my-2 form-select">
            <option value="">Choose Color</option>
            {color.map((item, i) => {
              return (
                <option key={i} value={item}>
                  {item}
                </option>
              );
            })}
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
  );
};

export default ProductInfo;
