import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import appReducers from "./reducers";

const rootReducer = (state, action) => {
  return appReducers(state, action);
};
const persistConfig = {
  key: "pokemonStorage",
  storage,
  blacklist: ["pokemons"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const persistor = persistStore(store);
export { store, persistor };
