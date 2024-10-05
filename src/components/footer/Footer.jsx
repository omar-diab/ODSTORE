import "./footer.css";

import { FooterTop, FooterLinks, FooterBottom } from "../index";

const Footer = () => {
  return (
    <footer className="footer">
      <FooterTop />
      <FooterLinks />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
