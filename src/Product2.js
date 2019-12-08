import React from "react";

const Product2 = ({ product2Url, product2Alt }) => (
  <div>
    <img src={product2Url} alt={product2Alt} width="640" />
    <h2>"Fries and Burger"</h2>
    <p>Price: 14.29$</p>
    <button type="button">Add to cart</button>
  </div>
);

Product2.defaultProps = {
  product2Url:
    "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
};

export default Product2;
