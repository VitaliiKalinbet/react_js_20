import React from "react";
import T from "prop-types";

const Product1 = ({ productUrl, productPrice }) => {
  //   console.log(props);
  return (
    <div>
      <img src={productUrl} alt="Tacos With Lime" width="640" />
      <h2>Tacos With Lime</h2>
      <p>Price: {productPrice}$</p>
      <button type="button">Add to cart</button>
    </div>
  );
};

Product1.defaultProps = {
  productPrice: 500
};

Product1.propTypes = {
  productUrl: T.string.isRequired,
  productPrice: T.number
};

export default Product1;
