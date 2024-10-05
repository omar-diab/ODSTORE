import "./offers.css";

const Rating = ({ rating, reviews }) => {
  return (
    <div className="rating-wrapper">
      <b className="rating">
        {rating} <i className="bi bi-star-fill"></i>
      </b>
      <span className="reviews">
        <strong>Reviews</strong> {reviews}
      </span>
    </div>
  );
};

export default Rating;
