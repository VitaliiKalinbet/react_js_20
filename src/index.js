import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import App from "./components/App";

import "./styles.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// function sum (a, b, c) {
//   return a + b + c;
// }
// sum(5,6,7)
// function curriedSum(a) {
//   return function(b){
//       return function(c){
//           return a + b + c;
//       }
//   }
// }
// curriedSum(5)(6)(7)
// const curriedSumArrow = a => b => c => a + b + c;
// curriedSumArrow(5)(6)(7)

// function curriedSum(a) {
//   console.log(a)
//   return function(b){
//       console.log(a, b)
//       return function(c){
//           console.log(a, b, c)
//           return a + b + c;
//       }
//   }
// }
// curriedSum(5)(6)(7)
