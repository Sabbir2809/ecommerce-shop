import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ProductGallery = ({ data }) => {
  const images = [
    { original: data[0]?.details?.img1, thumbnail: data[0]?.details?.img1 },
    { original: data[0]?.details?.img2, thumbnail: data[0]?.details?.img2 },
    { original: data[0]?.details?.img3, thumbnail: data[0]?.details?.img3 },
    { original: data[0]?.details?.img4, thumbnail: data[0]?.details?.img4 },
    { original: data[0]?.details?.img5, thumbnail: data[0]?.details?.img5 },
    { original: data[0]?.details?.img6, thumbnail: data[0]?.details?.img6 },
    { original: data[0]?.details?.img7, thumbnail: data[0]?.details?.img7 },
    { original: data[0]?.details?.img8, thumbnail: data[0]?.details?.img8 },
  ];

  return (
    <div className="col-md-7 p-3">
      <ImageGallery items={images} />
    </div>
  );
};

export default ProductGallery;
