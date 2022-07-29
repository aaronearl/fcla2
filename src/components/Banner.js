import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Faith Community Foursquare Church</h1>
      {/* <h2>
        Foursquare Gospel Church</h2> */}
      <h2><span>Rev. D.T. Paredes</span>,
        {/* <span>Restaurant Manager</span> and <span>Territory Manager</span>  Let's */}
        <a className="smoothscroll" href="#about">
          {" "}
          {/* start scrolling */}
        </a>{" "}
        {/* and learn more */}
        <a className="smoothscroll" href="#about">
          {" "}
          Senior Pastor
        </a>
      </h2>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
