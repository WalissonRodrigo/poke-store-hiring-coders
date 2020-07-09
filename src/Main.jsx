import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import MediaCard from "./components/MediaCard";

function Main() {
  const { loading, pokemon, fetchPokemonError, searching } = useSelector(
    (state) => state.pokemon
  );
  return (
    <div>
      {fetchPokemonError && (
        <p>Ops, parece que ocorreu um erro! Por favor recarregue a página.</p>
      )}
      {loading || searching ? (
        <p style={{ display: "flex", alignItems: "center" }}>Carregando...</p>
      ) : (
        <Grid container spacing={4}>
          {pokemon.map((poke) => (
            <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
              <MediaCard key={poke.order} pokemon={poke} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default Main;
