import { useState } from 'react';
import './offers.css';
import Rating from './Rating';

import { Link } from "react-router-dom";

const Offer = ({ offer }) => {
  const { firstImage, secondImage, title, price, discount, rating, reviews, id} = offer;
  
  const [ imgSrc, setImgSrc ] = useState(firstImage);

  const finalPrice = (price - (discount * price)/ 100);

  return (
    <div className="offer">
        <div className="offer-image-wrapper">
          <img 
            src={imgSrc} alt={title} className="offer-image"
            onMouseEnter={() => setImgSrc(secondImage)}
            onMouseLeave={() => setImgSrc(firstImage)}
          />
        </div>
        <div className="offer-info">
          <h5 className="offer-title">{title}</h5>
          <Rating rating={rating} reviews={reviews}/>
          <div className="offer-price">
            <b className="offer-price-item">${price}</b>
            <b className="offer-final-price-item">
              ${finalPrice}
            </b>
          </div>
          <Link to={`/special-offer-page/${id}`} className="offer-see-more">
            See More
          </Link>
          <div className="offer-discount">Discount {discount}%</div>
        </div>
    </div>
  )
}

export default Offer