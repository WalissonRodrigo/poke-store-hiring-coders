import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Slide from "@material-ui/core/Slide";
import { useSelector, useDispatch } from "react-redux";
import {
  closeCartDialog,
  removePokemonCart,
  decreasePokemonCartQtd,
  increasePokemonCartQtd,
  clearCart,
} from "../actions";
import {
  ListItemSecondaryAction,
  Avatar,
  ListItemAvatar,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  grow: {
    flexGrow: 1,
  },
  grid: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
    },
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const classes = useStyles();
  const { shouldShowCart, cart, qtdPokemons, totalPrice } = useSelector(
    (state) => state.cart
  );
  const cartKeys = Object.keys(cart);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeCartDialog());
  };
  const handleDelete = (idPokemon) => {
    dispatch(removePokemonCart(idPokemon));
  };
  const handleRemove = (idPokemon) => {
    dispatch(decreasePokemonCartQtd(idPokemon));
  };
  const handleAdd = (idPokemon) => {
    dispatch(increasePokemonCartQtd(idPokemon));
  };
  const handleBuyNow = () => {
    dispatch(clearCart());
    alert("Compra Realizada com sucesso!");
  };

  return (
    <Dialog
      fullScreen
      open={shouldShowCart}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            variant="contained"
            color="secondary"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Carinho de Compras
          </Typography>
          {qtdPokemons > 0 ? (
            <Button
              variant="contained"
              color="secondary"
              onClick={handleBuyNow}
              startIcon={<ShoppingCartIcon />}
            />
          ) : null}
        </Toolbar>
      </AppBar>
      <List dense={true}>
        {qtdPokemons > 0 ? (
          cartKeys[0] &&
          // eslint-disable-next-line array-callback-return
          cartKeys.map((key) => {
            if (cart[key]) {
              return (
                <ListItem>
                  <Grid className={classes.grid} container spacing={2}>
                    <Grid
                      className={classes.grid}
                      item
                      xs={5}
                      sm={6}
                      md={4}
                      lg={4}
                      xl={4}
                    >
                      <ListItemAvatar>
                        <Avatar
                          style={{ backgroundSize: "contain !important" }}
                          alt={cart[key].pokemon.name}
                          src={cart[key].pokemon.image}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={cart[key].pokemon.name}
                        secondary={`Preço: R$ ${cart[key].pokemon.price.toFixed(
                          2
                        )}`}
                      />
                    </Grid>
                    <Grid
                      className={classes.grid}
                      item
                      xs={7}
                      sm={6}
                      md={4}
                      lg={4}
                      xl={4}
                    >
                      <ListItemText
                        primary={`Qtd: ${cart[key].qtd}`}
                        secondary=""
                      />
                      <ListItemText
                        primary={`Total: R$ ${cart[
                          key
                        ].totalPokemonPrice.toFixed(2)}`}
                        secondary=""
                      />
                    </Grid>
                    <Grid
                      className={classes.grid}
                      item
                      xs={false}
                      sm={6}
                      md={4}
                      lg={4}
                      xl={4}
                    >
                      <ListItemSecondaryAction>
                        <IconButton
                          edge="start"
                          aria-label="remover"
                          onClick={() => handleRemove(key)}
                        >
                          <RemoveCircleIcon />
                        </IconButton>
                        <IconButton
                          edge={false}
                          aria-label="adicionar"
                          onClick={() => handleAdd(key)}
                        >
                          <AddCircleIcon />
                        </IconButton>
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => handleDelete(key)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </Grid>
                  </Grid>
                </ListItem>
              );
            }
          })
        ) : (
          <ListItem>
            <ListItemText
              primary="Seu carrinho está vazio!"
              secondary="Adicione seus pokemons..."
            />
          </ListItem>
        )}
        <Typography variant="h6" className={classes.title}>
          Total da Compra: R$ {totalPrice.toFixed(2)}
        </Typography>
      </List>
    </Dialog>
  );
}
