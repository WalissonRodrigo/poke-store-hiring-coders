export const ADD_POKEMON_CART = "ADD_POKEMON_CART";
export const REMOVE_POKEMON_CART = "REMOVE_POKEMON_CART";
export const INCREASE_POKEMON_CART_QTD = "INCREASE_POKEMON_CART_QTD";
export const DECREASE_POKEMON_CART_QTD = "DECREASE_POKEMON_CART_QTD";
export const CLEAR_CART = "CLEAR_CART";
export const CLOSE_CART = "CLOSE_CART";
export const OPEN_CART = "OPEN_CART";

export const addPokemonCart = (pokemon) => {
  return {
    type: ADD_POKEMON_CART,
    payload: pokemon,
  };
};

export const removePokemonCart = (pokemon) => {
  return {
    type: REMOVE_POKEMON_CART,
    payload: pokemon,
  };
};

export const increasePokemonCartQtd = (pokemon) => {
  return {
    type: INCREASE_POKEMON_CART_QTD,
    payload: pokemon,
  };
};

export const decreasePokemonCartQtd = (pokemon) => {
  return {
    type: DECREASE_POKEMON_CART_QTD,
    payload: pokemon,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const closeCartDialog = () => {
  return {
    type: CLOSE_CART,
  };
};

export const openCartDialog = () => {
  return {
    type: OPEN_CART,
  };
};
