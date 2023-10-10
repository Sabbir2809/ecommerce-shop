import parse from "html-react-parser";

const ProductSpecification = ({ data }) => {
  return (
    <div className="tab-content" id="myTabContent">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="Speci-tab"
            data-bs-toggle="tab"
            data-bs-target="#Speci-tab-pane"
            type="button"
            role="tab"
            aria-controls="Speci-tab-pane"
            aria-selected="true">
            Specifications
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="Review-tab"
            data-bs-toggle="tab"
            data-bs-target="#Review-tab-pane"
            type="button"
            role="tab"
            aria-controls="Review-tab-pane"
            aria-selected="false">
            Review
          </button>
        </li>
      </ul>
      <div
        className="tab-pane fade show active"
        id="Speci-tab-pane"
        role="tabpanel"
        aria-labelledby="Speci-tab"
        tabIndex="0">
        {data[0] ? parse(data[0]["details"]["des"]) : ""}
      </div>
      <div
        className="tab-pane fade"
        id="Review-tab-pane"
        role="tabpanel"
        aria-labelledby="Review-tab"
        tabIndex="0">
        {/* <Review/> */}
      </div>
    </div>
  );
};

export default ProductSpecification;
