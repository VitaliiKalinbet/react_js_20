import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'normalize.css';
import './var.css';

// const image = React.createElement("img", {
//   src:
//     "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
//   alt: "Tacos With Lime",
//   width: 640
// });
// const title = React.createElement("h2", null, "Tacos With Lime");
// const price = React.createElement("p", null, "Price: 10.99$");
// const button = React.createElement("button", { type: "button" }, "Add to cart");

// const product = React.createElement("div", null, image, title, price, button);

// const imageUrl =
//   "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";
// const price = 10.99;

// const product = (
//   <div>
//     <img
//       onClick={() => console.log("div click")}
//       src={imageUrl}
//       alt="Tacos With Lime"
//       width="640"
//     />
//     <h2>Tacos With Lime</h2>
//     <p>Price: {price}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// )

ReactDOM.render(<App />, document.getElementById('root'));
