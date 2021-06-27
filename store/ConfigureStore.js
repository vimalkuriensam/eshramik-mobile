import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import authReducer from "./reducers/auth.reducer";

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};
