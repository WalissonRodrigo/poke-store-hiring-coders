import {
  POKEMON_FETCH_LOAD_FINISH,
  POKEMON_FETCH_LOADING,
  POKEMON_FETCH_SUCCESS,
  POKEMON_FETCH_ERROR,
  POKEMON_FETCH_ADD,
  POKEMON_FETCH_PAGINATE,
  OPEN_SEARCH_DRAWER,
  CLOSE_SEARCH_DRAWER,
  SEARCHING_POKEMON,
} from "../../actions";

const initialState = {
  paginate: [],
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
    case POKEMON_FETCH_LOAD_FINISH:
      return {
        ...state,
        loading: false,
      };
    case POKEMON_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        searching: false,
        pokemon: payload,
      };
    case POKEMON_FETCH_PAGINATE:
      return {
        ...state,
        loading: true,
        searching: false,
        paginate: payload,
      };
    case POKEMON_FETCH_ADD:
      let addPokemon = filterData(state.pokemon, payload).sort(sortData);
      return {
        ...state,
        loading: true,
        searching: false,
        pokemon: addPokemon,
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

const sortData = (up, down) => {
  if (up.order > down.order) return 1;
  else if (up.order < down.order) return -1;
  else return 0;
};

const filterData = (pokemons, search) =>
  pokemons.includes(search).length <= 1 ? pokemons : [...pokemons, search];

export default pokemonReducer;
