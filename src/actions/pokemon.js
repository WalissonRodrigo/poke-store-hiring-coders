export const POKEMON_SEARCH = "POKEMON_SEARCH";
export const POKEMON_FETCH = "POKEMON_FETCH";
export const POKEMON_FETCH_ADD = "POKEMON_FETCH_ADD";
export const POKEMON_FETCH_GET = "POKEMON_FETCH_GET";
export const POKEMON_FETCH_PAGINATE = "POKEMON_FETCH_PAGINATE";
export const POKEMON_FETCH_LOADING = "POKEMON_FETCH_LOADING";
export const POKEMON_FETCH_LOAD_FINISH = "POKEMON_FETCH_LOAD_FINISH";
export const POKEMON_FETCH_SUCCESS = "POKEMON_FETCH_SUCCESS";
export const POKEMON_FETCH_ERROR = "POKEMON_FETCH_ERROR";
export const CLOSE_SEARCH_DRAWER = "CLOSE_SEARCH_DRAWER";
export const OPEN_SEARCH_DRAWER = "OPEN_SEARCH_DRAWER";
export const SEARCHING_POKEMON = "SEARCHING_POKEMON";

export const pokemonSearch = (query) => {
  return {
    type: POKEMON_SEARCH,
    payload: query,
  };
};

export const pokemonFetch = () => {
  return {
    type: POKEMON_FETCH,
  };
};

export const pokemonGetFetch = () => {
  return {
    type: POKEMON_FETCH_GET,
  };
};

export const pokemonFetchAdd = (data) => {
  return {
    type: POKEMON_FETCH_ADD,
    payload: data,
  };
};

export const pokemonFetchPaginate = (data) => {
  return {
    type: POKEMON_FETCH_PAGINATE,
    payload: data,
  };
};

export const setPokemonFetchLoading = () => {
  return {
    type: POKEMON_FETCH_LOADING,
  };
};
export const setPokemonFetchLoadFinish = () => {
  return {
    type: POKEMON_FETCH_LOAD_FINISH,
  };
};

export const setPokemonFetchSuccess = (data) => {
  return {
    type: POKEMON_FETCH_SUCCESS,
    payload: data,
  };
};

export const setPokemonFetchError = (data) => {
  return {
    type: POKEMON_FETCH_ERROR,
    payload: data,
  };
};

export const openSearchDrawer = () => {
  return {
    type: OPEN_SEARCH_DRAWER,
  };
};

export const closeSearchDrawer = () => {
  return {
    type: CLOSE_SEARCH_DRAWER,
  };
};

export const setSearchingPokemon = (query) => {
  return {
    type: SEARCHING_POKEMON,
    payload: query,
  };
};
