import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import {
  CssBaseline,
  Toolbar,
  Container,
  createMuiTheme,
  ThemeProvider,
  Fab,
} from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ScrollTop from "./components/ScrollTop";
import { useDispatch, useSelector } from "react-redux";
import { pokemonFetch, setPokemonFetchSuccess } from "./actions";
import Main from "./Main";
import FullScreenDialog from "./components/FullScreenDialog";

const App = (props) => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: "#f6685e",
        main: "#f44336",
        dark: "#aa2e25",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ffde33",
        main: "#ffd600",
        dark: "#b29500",
        contrastText: "#000",
      },
    },
  });
  const [pokemons, setPokemons] = useState([]);
  const { paginate, fetchPokemonError } = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pokemonFetch());
    return;
  }, [dispatch]);

  useEffect(() => {
    if (paginate === undefined || paginate.length === 0) {
      console.log("ERRO PAGINATE", paginate);
      return;
    }
    let pokemonsList = [];
    paginate.results.forEach((data) => {
      fetch(data.url)
        .then((res) => res.json())
        .then((res) => {
          let pokemon = {
            id: res.id,
            name: res.name,
            image: `https://pokeres.bastionbot.org/images/pokemon/${res.id}.png`,
            price: parseFloat(
              ((res.weight * res.height) / res.base_experience).toFixed(2)
            ),
            qtd: 0,
            order: res.order,
          };
          pokemonsList.push(pokemon);
        });
    });
    setPokemons(pokemonsList.sort(sortData));
    dispatch(setPokemonFetchSuccess(pokemons));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchPokemonError, paginate]);

  const sortData = (up, down) => {
    if (up.order > down.order) return 1;
    else if (up.order < down.order) return -1;
    else return 0;
  };
  //const
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Toolbar id="back-to-top-anchor" />
        <Container maxWidth="xl">
          <Main />
        </Container>
        <FullScreenDialog />
        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
