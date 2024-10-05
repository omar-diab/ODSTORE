import { useState } from "react";
import Rating from "../offers/Rating";
import "./slider.css";

import { Link } from "react-router-dom";

const Slider = ({ data }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <div className="slider-container">
      <button
        onClick={() => handleClick("left")}
        disabled={slideIndex === -data.lenght}
        className="bi bi-chevron-left arrow-left"
      ></button>
      <div
        style={{ transform: `translate(${slideIndex * -270}px)` }}
        className="slider-wrapper"
      >
        {data.map((item) => (
          <Link to={`/products/${item.id}`} key={item.id} className="slide">
            <img src={item.image} alt={item.title} className="slide-img" />
            <h3 className="slide-title">{item.title}</h3>
            <Rating rating={item.rating} reviews={item.reviews} />
            <div className="slide-price">${item.price}</div>
          </Link>
        ))}
      </div>
      <button
        onClick={() => handleClick("right")}
        disabled={slideIndex === 1}
        className="bi bi-chevron-right arrow-right"
      ></button>
    </div>
  );
};

export default Slider;
