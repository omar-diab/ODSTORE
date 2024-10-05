import "./header.css";

import { TopHeader, MiddleHeader, Navbar } from "../index";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleClose = () => {
    setToggle(prev => !prev);
  };

  return (
    <header className="header">
      <TopHeader handleClose={handleClose} />
      <MiddleHeader />
      <Navbar toggle={toggle} handleClose={handleClose}/>
    </header>
  );
};

export default Header;
