import React from "react";
import Typed from "react-typed";
import {Link} from "react-scroll";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        <h1>web development and websites promotions</h1>
        <Typed
          className="typed-text"
          strings={["Web Design", "Web Development", "Facebook Ads SMM", "Google Ads"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link smooth={true} to="contacts" className="btn-main-offer">contact me</Link>
      </div>
    </div>
  )
}

export default Header;
