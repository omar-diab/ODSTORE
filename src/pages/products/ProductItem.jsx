import { Link } from "react-router-dom";

import { Rating } from '../../components'

const ProductItem = ({ product }) => {
  const {id, image, title, rating, reviews, price} = product;

  return (
    <Link
      className="products-item"
      to={`/products/${id}`}
    >
      <img
        src={image}
        alt={title}
        className="product-item-img"
      />
      <h3 className="product-item-title">{title}</h3>
      <Rating rating={rating} reviews={reviews} />
      <div className="product-item-price">${price}</div>
    </Link>
  );
};

export default ProductItem;
