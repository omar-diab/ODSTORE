import "./SingleProduct.css";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { Rating } from "../../components";

import ProductDesc from "../special-offer-page/ProductDesc";

import { useDispatch, useSelector } from "react-redux";

import { getProductById } from "../../redux/apiCalls/productApiCall";

import { Spinner } from '../../components'
import { addToCart } from "../../redux/apiCalls/cartApiCalls";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { product, loading } = useSelector(state => state.product)

  const { id } = useParams();
  const [qty, setQty] = useState(1);

  useEffect(() => {
    dispatch(getProductById(id))
    window.scrollTo(0, 0);
  }, [id])

  // Add to cart handlers
  const addToCartHandler = () => {
    dispatch(addToCart({
      id: product?.id,
      title: product?.title,
      price: product?.price,
      quantity: qty,
      image: product?.image,
    }))
  }


  if(loading) {
    return <Spinner />
  }

  return (
    <div className="single-product">
      <div className="product-wrapper">
        <div className="product-img-wrapper">
          <img src={product?.image} alt={product?.title} />
        </div>
        <div className="product-info">
          <h1 className="product-title">{product?.title}</h1>
          <Rating rating={product?.rating} reviews={product?.reviews} />
          <div className="product-price">${product?.price}</div>
          <div className="product-add-to-cart">
            <input value={qty} onChange={(e) => setQty(e.target.value)} type="number" min="1" max="10" />
            <button onClick={addToCartHandler} className="product-add-to-cart-btn">Add</button>
          </div>
        </div>
      </div>
      <ProductDesc />
    </div>
  );
};

export default SingleProduct;
