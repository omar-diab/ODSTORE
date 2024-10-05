import "./footer.css";

const FooterTop = () => {
  return (
    <div className="footer-top">
      <h3 className="footer-top-title">Always Here For you</h3>
      <div className="footer-top-email">
        <span className="footer-top-text">Contact Us</span>
        <span className="footer-top-address">
          <i className="bi bi-envelope"></i>
          odstore@gmail.com
        </span>
        <span className="footer-top-address">
          <i className="bi bi-telephone"></i>
          123-456-789
        </span>
      </div>
    </div>
  );
};

export default FooterTop;
