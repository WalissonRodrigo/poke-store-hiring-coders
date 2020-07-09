import {
  ADD_POKEMON_CART,
  REMOVE_POKEMON_CART,
  INCREASE_POKEMON_CART_QTD,
  DECREASE_POKEMON_CART_QTD,
  CLOSE_CART,
  OPEN_CART,
  CLEAR_CART,
} from "../../actions";

const initialState = {
  cart: {},
  totalPrice: 0,
  qtdPokemons: 0,
  shouldShowCart: false,
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  let { pokemon } = state.cart[payload] || {};
  //
  switch (type) {
    case ADD_POKEMON_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          [payload.id]: {
            qtd: state.cart[payload.id] ? state.cart[payload.id].qtd + 1 : 1,
            pokemon: payload,
            totalPokemonPrice: state.cart[payload.id]
              ? state.cart[payload.id].totalPokemonPrice + payload.price
              : payload.price,
          },
        },
        totalPrice: state.totalPrice + payload.price,
        qtdPokemons: (state.qtdPokemons += 1),
      };
    case REMOVE_POKEMON_CART:
      return {
        ...state,
        qtdPokemons: state.qtdPokemons - state.cart[payload].qtd,
        totalPrice:
          state.totalPrice - state.cart[payload].totalPokemonPrice < 0
            ? 0
            : state.totalPrice - state.cart[payload].totalPokemonPrice,
        cart: {
          ...state.cart,
          [payload]: null,
        },
      };
    case INCREASE_POKEMON_CART_QTD:
      return {
        ...state,
        qtdPokemons: state.qtdPokemons + 1,
        totalPrice: state.totalPrice + pokemon.price,
        cart: {
          ...state.cart,
          [payload]: {
            ...state.cart[payload],
            qtd: state.cart[payload].qtd + 1,
            totalPokemonPrice:
              state.cart[payload].totalPokemonPrice + pokemon.price,
          },
        },
      };
    case DECREASE_POKEMON_CART_QTD:
      if (state.cart[payload].qtd === 1) {
        return {
          ...state,
          qtdPokemons: state.qtdPokemons - 1,
          totalPrice: state.totalPrice - state.cart[payload].totalPokemonPrice,
          cart: {
            ...state.cart,
            [payload]: null,
          },
        };
      }
      return {
        ...state,
        qtdPokemons: state.qtdPokemons - 1,
        totalPrice: state.totalPrice - pokemon.price,
        cart: {
          ...state.cart,
          [payload]: {
            ...state.cart[payload],
            qtd: state.cart[payload].qtd - 1,
            totalPokemonPrice:
              state.cart[payload].totalPokemonPrice - pokemon.price,
          },
        },
      };
    case CLEAR_CART:
      return {
        cart: {},
        totalPrice: 0,
        qtdPokemons: 0,
        shouldShowCart: false,
      };
    case CLOSE_CART:
      return {
        ...state,
        shouldShowCart: false,
      };
    case OPEN_CART:
      return {
        ...state,
        shouldShowCart: true,
      };
    default:
      return state;
  }
};

export default cartReducer;
