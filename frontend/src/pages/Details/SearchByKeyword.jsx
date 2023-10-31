import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import ProductsSkeleton from "../../components/loader/ProductsSkeleton";
import { SEARCH_BY_KEYWORD_API_REQUEST } from "../../services/API_REQUEST";

const SearchByKeyword = () => {
  const { keyword } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await SEARCH_BY_KEYWORD_API_REQUEST(keyword);
      setData(data);
    })();
  }, [keyword]);

  return (
    <>
      {data.length === 0 ? (
        <ProductsSkeleton />
      ) : (
        <div className="container mt-5">
          <ProductCard data={data} />
        </div>
      )}
    </>
  );
};

export default SearchByKeyword;
