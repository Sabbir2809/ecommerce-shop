import "./../styles/global.css";

const PaymentFail = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="thank-you-pop">
          <h1>❌</h1>
          <h1>Payment Fail, Please Try Again</h1>
          {/* <h3 className="cupon-pop">
            Your Id: <span>12345</span>
          </h3> */}
        </div>
      </div>
    </div>
  );
};

export default PaymentFail;
