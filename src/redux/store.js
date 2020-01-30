// With redux toolkit
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

// Without redux toolkit
/* eslint-disable no-underscore-dangle */
// import { createStore } from 'redux';
// import rootReducer from './rootReducer';

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

// export default store;
