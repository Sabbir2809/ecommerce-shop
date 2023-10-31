import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoriesSkeleton from "../../components/loader/CategoriesSkeleton";
import { GET_LIST_API_REQUEST } from "../../services/API_REQUEST";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await GET_LIST_API_REQUEST("categories");
      setCategories(data);
    })();
  }, []);

  return (
    <>
      {categories.length === 0 ? (
        <CategoriesSkeleton />
      ) : (
        <div className="section">
          <div className="container">
            <div className="row">
              <h1 className="headline-4 text-center my-2 p-0">Top Categories</h1>
              <span className="bodySmal mb-5 text-center">
                Explore a World of Choices Across Our Most Popular <br />
                Shopping Categories
              </span>

              {categories.map((category) => (
                <div key={category._id} className="col-6 col-lg-8r text-center col-md-8r p-2">
                  <Link to={`/product-by-category/${category._id}`} className="card h-100 rounded-3 bg-light">
                    <div className="card-body">
                      <img
                        className="img-fluid w-50 h-50"
                        src={category.categoryImg}
                        alt={category.categoryName}
                      />
                      <p className="bodySmall mt-3">{category.categoryName}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Categories;
