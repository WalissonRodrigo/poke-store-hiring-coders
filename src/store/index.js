import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

import appReducers from "./reducers";
import rootSaga from "./sagas";

const rootReducer = (state, action) => {
  return appReducers(state, action);
};
const persistConfig = {
  key: "pokemonStorage",
  storage,
  blacklist: ["pokemons"],
};
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);
export { store, persistor };
