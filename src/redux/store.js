import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import authReducer from './auth/authReducers';

const rootReducer = combineReducers({
  auth: authReducer,
});

const middleware = [ReduxThunk];
const enhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(rootReducer, enhancer);

export default store;
