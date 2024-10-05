import "./specialOfferPage.css";

import { useParams } from "react-router-dom";

import { specialOffers } from "../../data/special-offers";

import { useState, useEffect } from "react";
import { Rating } from "../../components/index";

import ProductDesc from './ProductDesc'

import { useDispatch } from "react-redux";


import { addToCart } from "../../redux/apiCalls/cartApiCalls";


const SpeicalOfferPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const product = specialOffers.find((p) => p.id === parseInt(id));

  const { images, title, rating, reviews, price, discount } = product;

  const finalPrice = price - (discount * price) / 100;

  const [imageIndex, setImageIndex] = useState(0);

  const [qty, setQty] = useState(1);


  // Add to cart handlers
  const addToCartHandler = () => {
    dispatch(addToCart({
      id: id,
      title: title,
      price: price,
      quantity: qty,
      image: images[0],
    }))
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])



  return (
    <>
      <div className="special-offer-page">
        <div className="special-offer-page-img-wrapper">
          <img
            src={images[imageIndex]}
            alt={title}
            className="special-offer-page-img"
          />
          <div className="special-offer-page-select-img">
            {images.map((src, index) => (
              <img
                onClick={() => setImageIndex(index)}
                key={index}
                src={src}
                className="select-img"
                alt={title}
              />
            ))}
          </div>
        </div>
        <div className="special-offer-page-info">
          <h3 className="special-offer-page-title">{title}</h3>
          <Rating rating={rating} reviews={reviews} />
          <div className="special-offer-page-price">
            <b className="special-offer-price-item">{price}</b>
            <b className="special-offer-final-item">{finalPrice}</b>
          </div>
          <div className="special-offer-page-add-to-cart">
            <input value={qty} onChange={(e) => setQty(e.target.value)} type="number" min="1" max="10" />
            <button onClick={addToCartHandler} className="add-to-cart-btn">Add</button>
          </div>
        </div>
      </div>
      <ProductDesc />
    </>
  );
};

export default SpeicalOfferPage;
