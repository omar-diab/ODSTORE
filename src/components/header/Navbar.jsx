
import { Link } from "react-router-dom";

const Navbar = ({ toggle, handleClose }) => {
  return (
    <div style={{left: toggle && '0'}} className="navbar">
      <div onClick={handleClose} className="navbar-close-icon">
        <i className="bi bi-x-lg"></i>
      </div>
      <ul className="navbar-links">
        <Link to='/' onClick={handleClose} className="navbar-link">HomePage</Link>
        <Link to='/products' onClick={handleClose} className="navbar-link">Electronics</Link>
      </ul>
    </div>
  );
};

export default Navbar;
