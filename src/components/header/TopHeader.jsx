import { Link } from "react-router-dom";

const TopHeader = ({ handleClose }) => {
  return (
    <div className="top-header">
      <div onClick={handleClose} className="top-header-menu">
        <i className="bi bi-list"></i>
      </div>
      <Link to='/' className="top-header-logo">
        OD<i className="bi bi-basket2"></i>SHOP
      </Link>
      <div className="top-header-text">Welcome to our shop</div>
      <div className="top-header-phone">
        <i className="bi bi-telephone"></i>
        123-456-789
      </div>
    </div>
  );
};

export default TopHeader;
