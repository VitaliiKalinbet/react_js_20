import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import logger from "../redux/middleware/logger";
import throttle from "../redux/middleware/throttle";
import ReduxThunk from "redux-thunk";

const middleware = [logger, throttle, ReduxThunk];
const enhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(rootReducer, enhancer);

export default store;
