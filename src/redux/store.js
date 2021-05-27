import { applyMiddleware, createStore, compose } from "redux";
import { userReducer } from "./reducer/userReducer";
import thunk from "redux-thunk";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return composeEnhancers(applyMiddleware(...middleware));
  } else {
    return applyMiddleware(...middleware);
  }
};

const composeEnhancersMiddlewares = bindMiddleware([thunk]);
export const store = createStore(userReducer, composeEnhancersMiddlewares);
