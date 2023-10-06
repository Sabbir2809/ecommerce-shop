import { useEffect, useState } from "react";
import NavPill from "../../components/NavPill";
import ProductCard from "../../components/ProductCard";
import { PRODUCT_LIST_BY_REMARK_API_REQUEST } from "../../services/API_REQUEST";

const Products = () => {
  const [newData, setNewData] = useState([]);
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [top, setTop] = useState([]);
  const [special, setSpecial] = useState([]);

  useEffect(() => {
    (async () => {
      const newProducts = await PRODUCT_LIST_BY_REMARK_API_REQUEST("new");
      setNewData(newProducts);

      const trendingProducts = await PRODUCT_LIST_BY_REMARK_API_REQUEST("trending");
      setTrending(trendingProducts);

      const popularProducts = await PRODUCT_LIST_BY_REMARK_API_REQUEST("popular");
      setPopular(popularProducts);

      const topProducts = await PRODUCT_LIST_BY_REMARK_API_REQUEST("top");
      setTop(topProducts);

      const specialProducts = await PRODUCT_LIST_BY_REMARK_API_REQUEST("special");
      setSpecial(specialProducts);
    })();
  }, []);

  return (
    <div className="section">
      <div className="container-fluid py-5 bg-light">
        <div className="row">
          <h1 className="headline-4 text-center my-2 p-0">Our Products</h1>
          <span className="bodySmal mb-3 text-center">
            Explore a World of Choices Across Our Most Popular
          </span>
          <div className="col-12">
            <div>
              <NavPill></NavPill>
              {/* Tab Content */}
              <div className="tab-content" id="pills-tabContent">
                {/* New Remark  */}
                <div
                  className="tab-pane fade show"
                  id="pills-new"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                  tabIndex="0">
                  <div className="container">
                    <div className="row">
                      <ProductCard data={newData} />
                    </div>
                  </div>
                </div>

                {/* Trending Remark  */}
                <div
                  className="tab-pane fade show active"
                  id="pills-trending"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                  tabIndex="0">
                  <div className="container">
                    <ProductCard data={trending} />
                  </div>
                </div>

                {/* Popular */}
                <div
                  className="tab-pane fade show"
                  id="pills-popular"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                  tabIndex="0">
                  <div className="container">
                    <ProductCard data={popular} />
                  </div>
                </div>

                {/* Top */}
                <div
                  className="tab-pane fade show"
                  id="pills-top"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                  tabIndex="0">
                  <div className="container">
                    <ProductCard data={top} />
                  </div>
                </div>

                {/* Special */}
                <div
                  className="tab-pane fade show"
                  id="pills-special"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                  tabIndex="0">
                  <div className="container">
                    <ProductCard data={special} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
