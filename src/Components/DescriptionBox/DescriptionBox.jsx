import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that facilitates buying
          and selling of products or services over the internet and serves as a
          virtual marketplace where businesses and individuals showcase their
          products, interact with customers and conduct transactions without a
          need for physical presents. E-Commerce website have gained popularity
          due to their convince, accessibility and the global reach they offer.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
