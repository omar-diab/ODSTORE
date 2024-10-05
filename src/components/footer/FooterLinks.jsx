import "./footer.css";

const FooterLinks = () => {
  return (
    <div className="footer-items-wrapper">
      <div className="footer-item">
        <h4 className="footer-item-title">Electronics</h4>
        <ul className="footer-item-links">
          <li className="footer-item-link">Laptop</li>
          <li className="footer-item-link">Smartphone</li>
          <li className="footer-item-link">Headphones</li>
          <li className="footer-item-link">Smart TV</li>
        </ul>
      </div>
      <div className="footer-item">
        <h4 className="footer-item-title">Fashion</h4>
        <ul className="footer-item-links">
          <li className="footer-item-link">Men's Clothing</li>
          <li className="footer-item-link">Women's Clothing</li>
          <li className="footer-item-link">Shoes</li>
          <li className="footer-item-link">Accessories</li>
        </ul>
      </div>
      <div className="footer-item">
        <h4 className="footer-item-title">Home</h4>
        <ul className="footer-item-links">
          <li className="footer-item-link">Vacuum Cleaner</li>
          <li className="footer-item-link">Microwave</li>
          <li className="footer-item-link">Refrigerator</li>
          <li className="footer-item-link">Washing Machine</li>
        </ul>
      </div>
      <div className="footer-item">
        <h4 className="footer-item-title">Cleaning</h4>
        <ul className="footer-item-links">
          <li className="footer-item-link">Detergents</li>
          <li className="footer-item-link">Floor Cleaners</li>
          <li className="footer-item-link">Glass Cleaners</li>
          <li className="footer-item-link">Disinfectants</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;
