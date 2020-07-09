import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addPokemonCart } from "../actions";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 140,
    margin: 12,
    backgroundSize: "contain !important",
  },
  name: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    display: "flex",
  },
  cardAction: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export default function MediaCard({ pokemon }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const addCart = (event) => {
    event.preventDefault();
    dispatch(addPokemonCart(pokemon));
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={pokemon.image}
          title={pokemon.name}
        />
        <CardContent>
          <Typography
            className={classes.name}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {pokemon.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardAction}>
        <Button
          className={classes.button}
          variant="contained"
          size="small"
          color="primary"
          onClick={addCart}
        >
          Adicionar
        </Button>
        <Box className={classes.button} color="text.primary">
          <h4>R$ {pokemon.price}</h4>
        </Box>
      </CardActions>
    </Card>
  );
}
