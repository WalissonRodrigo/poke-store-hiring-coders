import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 140,
    margin: 12,
    backgroundSize: "contain !important",
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            Math.floor(Math.random() * 806) + 1
          }.png`}
          title="Pokemon Padrão"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Pokemon
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Pokemons are a group of animals
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">Adicionar</Button>
      </CardActions>
    </Card>
  );
}
