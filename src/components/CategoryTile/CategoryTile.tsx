import React from "react";
import { fetchCategories } from "../../redux/actions/productActions";

const CategoryTile = () => {
  return <div>CategoryTile</div>;
};

export default CategoryTile;
// CATEGORYTILE
// 1. Komponent CategoryTile będzie 2 propsy: category (string), image (string). Stwórz odpowiedni interface i otypuj komponent i propsy
// 2. JSX:
// - Wszystko będzie obwinięte komponent Card (MUI), sx: display inline-block, width calc(24%-1px), mx 0.5%, height 45vh
// w środku Card:
// - Typography variant h2, align center, sx: fontSize 1.5rem. TextContent: category (props) pisana wielkimi literami (caps lockiem)
// - Box (MUI) component img, alt category (props), src image (props), sx: width: 50%, display block, mx auto
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