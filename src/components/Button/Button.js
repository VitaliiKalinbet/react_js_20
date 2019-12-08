import React from "react";
import T from "prop-types";

// const Button = () => <button>Submit</button>;

const buttonStyles = {
  display: "inline-flex",
  margin: "0 4px",
  padding: "8px 24px",
  border: 0,
  borderRadius: 2,
  fontSize: "1rem",
  fontFamily: "inherit"
};

const Button = ({ propDisabled }) => {
  return (
    <button
      style={{
        ...buttonStyles,
        backgroundColor: propDisabled ? "#0000001f" : "#2196f3",
        color: propDisabled ? "#00000042" : "#ffffff"
      }}
      disabled={propDisabled}
    >
      Submit
    </button>
  );
};

export default Button;
