import { combineReducers } from "redux";

import pokemonReducer from "./pokemon";
import cartReducer from "./cart";

const appReducers = combineReducers({
  pokemon: pokemonReducer,
  cart: cartReducer,
});

export default appReducers;
