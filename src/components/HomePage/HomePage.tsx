import { Typography } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Typography
        variant="h2"
        align="center"
        sx={{ fontSize: "2rem", mt: "2rem" }}
      >
        Browse and buy your favorite electronics, jewellery and clothes. All in
        one place.
      </Typography>
      {/* CategoryMenu */}
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontSize: "1.5rem",
          borderBottom: "1px solid orange",
          mb: ".5rem",
          fontWeight: 100,
        }}
      >
        Our bestsellers:
      </Typography>
    </>
  );
};

export default HomePage;
