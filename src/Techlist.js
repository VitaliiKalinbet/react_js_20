import React from "react";
import T from "prop-types";

const Techlist = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

Techlist.propTypes = {
  items: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      name: T.string.isRequired
    })
  ).isRequired
};

export default Techlist;
