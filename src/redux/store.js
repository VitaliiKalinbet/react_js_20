import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

const middleware = [ReduxThunk];
const enhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(() => ({ a: 1 }), enhancer);

export default store;
