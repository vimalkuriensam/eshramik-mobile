import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import authReducer from "./reducers/auth.reducer";

const peristConfig = {
  key: "root",
  storage: AsyncStorage,
  whiteList: ["auth"],
};

const persistedReducer = persistReducer(
  peristConfig,
  combineReducers({
    auth: authReducer,
  })
);


const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);
// export default () => {
//   const store = createStore(persistedReducer, applyMiddleware(thunk));
//   return store;
// };

export { store, persistor };