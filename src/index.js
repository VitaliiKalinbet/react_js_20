import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

// Пример функций высшего порядка/функций декораторов
// const add = (a,b) => a + b;
// const mult = (a,b) => a * b;

// function withLog(fn) {
//     return function(...args) {
//         console.log('arguments :', args);
//         return fn(...args);
//     }
// }

// function withHelloWorld(fn) {
//     return function(...args) {
//     console.log("Hello world!")
//     return fn(...args);
//     }
// }

// const addWithLog = withLog(add);
// const multWithLog = withLog(mult);
// addWithLog(10, 7);
// multWithLog(5, 5);

// const addWithLogAndWithHelloWorld = withHelloWorld(withLog(add));
// const multWithLogAndWithHelloWorld = withHelloWorld(withLog(mult));
// addWithLogAndWithHelloWorld(3,5)
