import { Link } from "react-router-dom";
import { RemoveformCart } from "../../redux/apiCalls/cartApiCalls";
import "./cart.css";

import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  const totalPrice = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  return cartItems.length < 1 ? (
    <div className="empty-cart">
      <h1>Your Cart is Empty</h1>
      <Link to="/products" className="empty-cart-link">
        Go to products page
      </Link>
    </div>
  ) : (
    <div className="cart">
      <h1 className="cart-title">Your Cart Items</h1>
      <div className="cart-wrapper">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-img-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-img"
                />
              </div>
              <div className="cart-item-info">
                <h3 className="cart-item-title">{item.title}</h3>
                <div className="cart-item-quantity">
                  <span>Quantity:</span> {item.quantity}
                </div>
                <div className="cart-item-price">
                  <span>Price:</span> ${item.price * item.quantity}
                </div>
                <i
                  onClick={() => dispatch(RemoveformCart(item.id))}
                  className="bi bi-trash cart-item-delete-icon"
                ></i>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <div className="cart-summary-text">
            <i className="bi bi-check-circle-fill"></i>
            You have a free delivery service
          </div>
          <div className="cart-summary-total">
            <span>Total:</span> ${totalPrice}
          </div>
          <button className="cart-summary-btn">Continue Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
