import React from "react";
import AppBar from "./components/AppBar";
import {
  CssBaseline,
  Toolbar,
  Container,
  Grid,
  createMuiTheme,
  ThemeProvider,
  Fab,
} from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ScrollTop from "./components/ScrollTop";
import Card from "./components/Card";

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
const App = (props) => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar />
        <Toolbar id="back-to-top-anchor" />
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {[...new Array(120)].map((x, i) => (
              <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
                <Card key={i} />
              </Grid>
            ))}
          </Grid>
        </Container>
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
