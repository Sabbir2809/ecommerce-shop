import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import CategoriesSkeleton from "../../components/loader/CategoriesSkeleton";
import { LIST_BY_CATEGORY_API_REQUEST } from "../../services/API_REQUEST";

const ListByCategory = () => {
  const { category } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await LIST_BY_CATEGORY_API_REQUEST(category);
      setData(data);
    })();
  }, []);

  return (
    <>
      {data.length === 0 ? (
        <CategoriesSkeleton />
      ) : (
        <div className="container mt-5">
          <div className="row">
            <ProductCard data={data} />
          </div>
        </div>
      )}
    </>
  );
};

export default ListByCategory;
