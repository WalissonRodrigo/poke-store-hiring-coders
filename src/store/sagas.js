import {
  put,
  takeLatest,
  all,
  call,
  select,
  takeEvery,
} from "redux-saga/effects";

const getPaginate = (state) => state.paginate;

function fetchPokemon() {
  return fetch(`${process.env.REACT_APP_URL_API}pokemon/?offset=0&limit=50`)
    .then((data) => data.json())
    .then((data) => data);
}

function searchPokemon(name) {
  return fetch(`${process.env.REACT_APP_URL_API}pokemon/${name}`)
    .then((data) => data.json())
    .then((data) => data);
}

function fetchPokemonUrl(url) {
  return fetch(url)
    .then((data) => data.json())
    .then(function (res) {
      let pokemon = {
        id: res.id,
        name: res.name,
        image: `https://pokeres.bastionbot.org/images/pokemon/${res.id}.png`,
        price: ((res.weight * res.height) / res.base_experience).toFixed(2),
        qtd: 0,
        order: res.order,
      };
      return pokemon;
    });
}

function* callFetchPokemon() {
  try {
    const pokemonList = yield call(fetchPokemon);
    yield put({ type: "POKEMON_FETCH_PAGINATE", payload: pokemonList });
  } catch (error) {
    yield put({ type: "POKEMON_FETCH_ERROR", payload: error });
  }
}

function* callFetchPokemonUrl() {
  try {
    const paginate = yield select(getPaginate);
    let pokemons = [];
    paginate.results.map(function* (data) {
      const pokemon = yield call(fetchPokemonUrl(data.url));
      pokemons.push(pokemon);
    });
    yield put({ type: "POKEMON_FETCH_SUCCESS", payload: pokemons });
  } catch (error) {
    yield put({ type: "POKEMON_FETCH_ERROR", payload: error });
  }
}

function* callSearchPokemon(args) {
  try {
    const pokemon = yield call(searchPokemon, args.payload);
    yield put({ type: "POKEMON_FETCH_SUCCESS", payload: pokemon });
  } catch (error) {
    yield put({ type: "POKEMON_FETCH_ERROR", payload: error });
  }
}

export function* watchPokemonFetchCall() {
  yield takeLatest("POKEMON_FETCH", callFetchPokemon);
}

export function* watchFetchPokemonUrlCall() {
  yield takeEvery("POKEMON_FETCH_GET", callFetchPokemonUrl);
}

export function* watchPokemonSearchCall() {
  yield takeLatest("SEARCHING_POKEMON", callSearchPokemon);
}

export default function* rootSaga() {
  yield all([
    watchPokemonFetchCall(),
    // watchFetchPokemonUrlCall(),
    watchPokemonSearchCall(),
  ]);
}
