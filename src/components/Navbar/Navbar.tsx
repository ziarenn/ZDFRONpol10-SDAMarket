import React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { State } from "../../helpers/interfaces";
import { useSelector } from "react-redux";
const Navbar = () => {
  const loggedIn = useSelector((state: State) => state.authState);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "orange" }}>
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", flexGrow: 1 }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ color: "white" }}
            >
              SDA MARKET
            </Typography>
          </Link>
          <Box sx={{ display: "block", mr: "500px" }}>
            <Link
              to="/electronics"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button
                variant="contained"
                sx={{ backgroundColor: "#FC766AFF", mx: ".5rem" }}
              >
                ELECTRONICS
              </Button>
            </Link>
            <Link
              to="/jewelery"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button
                variant="contained"
                sx={{ backgroundColor: "#FC766AFF", mx: ".5rem" }}
              >
                JEWELERY
              </Button>
            </Link>
            <Link to="/mans" style={{ textDecoration: "none", color: "white" }}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#FC766AFF", mx: ".5rem" }}
              >
                MEN'S CLOTHING
              </Button>
            </Link>
            <Link
              to="/womans"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button
                variant="contained"
                sx={{ backgroundColor: "#FC766AFF", mx: ".5rem" }}
              >
                WOMEN'S CLOTHING
              </Button>
            </Link>
          </Box>
          <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#FC766AFF", mr: ".1rem" }}
            >
              CART
            </Button>
          </Link>
          <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
            {/* 1. Jeżeli stan authState jest równa true, w tym Buttonie wyświetl napis Log out, jeżeli stan authState jest równy false, wyświetl napis Log in.  */}
            {/* 2. Jeżeli stan authState jest równy true, to na kliknięcie tego przycisku użytkownik powinien być wylogowywany (wywołanie funkcji signOut z firebase/auth, funkcja signOut przyjmuje argument w postaci obiektu auth z firebaseConfig). Jeżeli stan authState jest równy false to nie rób nic na click. */}
            <Button variant="contained" sx={{ backgroundColor: "#FC766AFF" }}>
              LOG IN
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
