import { Link } from "react-router-dom";

import { useSelector } from "react-redux";


const MiddleHeader = () => {
  const { cartItems } = useSelector(state => state.cart);

  return (
    <div className="middle-header">
      <div className="middle-header-search-box">
        <input type="search" placeholder="Search..." />
        <button className="search-box-btn">Search</button>
      </div>
      <Link to='/cart' className="middle-header-shopping-cart">
        <span className="header-cart-text">Shopping Cart</span>
        <i className="bi bi-cart3 header-cart-icon"></i>
        {cartItems.length > 0 && (
          <span className="header-cart-notification">{cartItems.length}</span>
        )}
      </Link>
    </div>
  );
};

export default MiddleHeader;
