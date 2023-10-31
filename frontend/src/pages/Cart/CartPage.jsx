import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "../../components/Button";
import CartListSkeleton from "../../components/loader/CartListSkeleton";
import {
  CART_LIST_API_REQUEST,
  CREATE_INVOICE_API_REQUEST,
  REMOVE_CART_LIST_API_REQUEST,
} from "../../services/API_REQUEST";
import { ErrorToast, SuccessToast } from "../../utility/FormHelper";

const CartPage = () => {
  const [cartData, setCartData] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [btnLoader, setBtnLoader] = useState(false);
  const [paymentData, setPaymentData] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  useEffect(() => {
    (async () => {
      const { data } = await CART_LIST_API_REQUEST();
      setCartData(data);
    })();
  }, [refresh]);

  const handleRemoveCartList = async (id) => {
    setCartData([]);
    const res = await REMOVE_CART_LIST_API_REQUEST(id);
    if (res.status) {
      SuccessToast(res.message);
    } else {
      ErrorToast(res.message);
    }
    setRefresh(1);
  };

  const handleCheckOut = async () => {
    setBtnLoader(true);
    let data = await CREATE_INVOICE_API_REQUEST();
    setShow(true);
    setBtnLoader(false);
    setPaymentData(data.data.desc);
  };

  return (
    <div>
      {cartData.length === 0 ? (
        <CartListSkeleton />
      ) : (
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
              <table className="table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Qty</th>
                    <th>color</th>
                    <th>Size</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartData.map((item, i) => {
                    return (
                      <tr key={i}>
                        <td>
                          <div className="d-flex">
                            <img className="product-img-sm" src={item["product"]["image"]} />
                            <div className="mx-2">
                              <span>{item["product"]["title"]}</span>
                              <br />
                              <span>
                                <b>$ {item["product"]["price"]}</b>
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>{item["qty"]}</td>
                        <td>{item["color"]}</td>
                        <td>{item["size"]}</td>
                        <td>$ {item["price"]}</td>
                        <td>
                          <button
                            onClick={() => {
                              handleRemoveCartList(item["product_id"]);
                            }}
                            className="btn btn-danger btn-sm">
                            Remove
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {cartData.map((item) => (
                <h6 key={item}>Payable: $ {item["price"]}</h6>
              ))}
              <Button
                isSubmit={btnLoader}
                text="Check Out"
                onClick={handleCheckOut}
                className="btn my-2 btn-success"
              />
            </div>
          </div>
        </div>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h6>Pay Now</h6>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              {paymentData?.map((item, i) => {
                return (
                  <div key={i} className="col-md-2 col-lg-2 p-1 col-sm-6 col-6">
                    <a target="_blank" href={item["redirectGatewayURL"]} rel="noreferrer">
                      <img className="pay-img w-100" src={item["logo"]} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CartPage;
