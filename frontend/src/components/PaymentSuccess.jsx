import "./../styles/global.css";

const PaymentSuccess = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="thank-you-pop">
          <h1>✅</h1>
          <h1>Payment Successful</h1>
          <p>Your Payment is received and we will contact you soon</p>
          {/* <h3 className="cupon-pop">
            Your Id: <span>12345</span>
          </h3> */}
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
