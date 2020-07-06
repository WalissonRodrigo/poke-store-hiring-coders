import {
  POKEMON_FETCH_LOADING,
  POKEMON_FETCH_SUCCESS,
  POKEMON_FETCH_ERROR,
  OPEN_SEARCH_DRAWER,
  CLOSE_SEARCH_DRAWER,
  SEARCHING_POKEMON,
} from "../actions";

const initialState = {
  pokemon: [],
  loading: true,
  fetchPokemonError: false,
  errorMessage: null,
  searchResult: null,
  searching: false,
};

const pokemonReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case POKEMON_FETCH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case POKEMON_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        searching: false,
        pokemon: payload,
      };
    case POKEMON_FETCH_ERROR:
      return {
        ...state,
        fetchPokemonError: true,
        errorMessage: payload,
      };
    case OPEN_SEARCH_DRAWER:
      return {
        ...state,
        shouldShowSearch: true,
      };
    case CLOSE_SEARCH_DRAWER:
      return {
        ...state,
        shouldShowSearch: false,
        searchResult: null,
      };
    case SEARCHING_POKEMON:
      return {
        ...state,
        searching: true,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
