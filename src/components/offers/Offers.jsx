import "./offers.css";

import { specialOffers } from "../../data/special-offers";
import Offer from "./Offer";

const Offers = () => {
  return (
    <div className="offers">
      <h1 className="offers-title">Today Offers</h1>
      <span className="offers-icon-wrapper">
        <i className="bi bi-stopwatch"></i> Only For 24 Hours
      </span>
      <div className="offers-wrapper">
        {specialOffers.map((offer) => (
          <Offer key={offer.id} offer={offer} />
        ))}
      </div>
    </div>
  );
};

export default Offers;
