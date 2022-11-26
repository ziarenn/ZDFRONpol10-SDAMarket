import React from "react";
import { CategoryTileProps } from "../../helpers/interfaces";
import { Card, Typography, Box } from "@mui/material";
const CategoryTile: React.FC<CategoryTileProps> = ({ category, image }) => {
  return (
    <Card
      sx={{
        display: "inline-block",
        width: "calc(24%-1px)",
        mx: "0.5%",
        height: "45vh",
      }}
    >
      <Typography variant="h2" align="center" sx={{ fontSize: "1.5rem" }}>
        {category.toUpperCase()}
      </Typography>
      <Box
        component="img"
        alt={category}
        src={image}
        sx={{ width: "50%", display: "block", mx: "auto" }}
      />
    </Card>
  );
};

export default CategoryTile;
// CATEOGORYMENU
// 3. Ściągnij liste fetchedImages ze store przy pomocy useSelector
// 4. JSX:
// - całość obiwnięta w komponent Paper (MUI) elevation 1, sx: my 2rem
// - w środku renderowanie warunkowe + renderowanie w pętli
// Jeżeli lista obrazków z pkt 3 nie jest pusta to odpal map na liście categories
// W mapie wyświetlaj komponent CategoryTile, przekaż tam odpowiednie propsy, tj. category (pierwszy parametr mapa) i image odpowiednio według indexów
// categories.map((category, i) => {
//     return komponent props1 image={images[i]}
// })
