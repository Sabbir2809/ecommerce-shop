import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import BrandsSkeleton from "../../components/loader/BrandsSkeleton";
import { LIST_BY_BRAND_API_REQUEST } from "../../services/API_REQUEST";

const ListByBrand = () => {
  const { brand } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await LIST_BY_BRAND_API_REQUEST(brand);
      setData(data);
    })();
  }, []);

  return (
    <>
      {data.length === 0 ? (
        <BrandsSkeleton />
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

export default ListByBrand;
