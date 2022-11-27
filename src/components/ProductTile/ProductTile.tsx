import { useState } from "react";
import { ProductTileProps } from "../../helpers/interfaces";
import { useDispatch } from "react-redux";
import { Card, Paper, Typography, Button, Box } from "@mui/material";
const ProductTile: React.FC<ProductTileProps> = ({ product }) => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <Card
        component={Paper}
        sx={{ maxWidth: "35%", mx: "auto", my: "1rem", p: ".5rem" }}
        onClick={() => setClicked((prev) => !prev)}
      >
        <Box component="img" alt="product image" src={product.image} sx={{width: '30vh', display: 'block', mx: 'auto', my: '5%'}} />
        <Typography variant='h2' sx={{fontSize: '2rem'}}>{product.title}</Typography>
        <Typography paragraph sx={{fontSize: '1rem'}}>{product.category}</Typography>
        <Typography variant='h3' sx={{fontSize: '2rem'}}>{product.price}$</Typography>
        <Typography variant='h4' sx={{fontSize: '1rem'}}>Rates: {product.rating.rate} ({product.rating.count})</Typography>
      </Card>
      {clicked && <Card component={Paper} sx={{maxWidth: '35%', mx: 'auto', mb: '1rem', p: '.5rem'}}>
        <Typography paragraph sx={{fontSize: '1rem'}}>{product.description}</Typography>
        <Button variant="contained" sx={{bgcolor: "#FC766AFF"}}>Add to cart</Button>
        </Card>}
    </>
  );
};

export default ProductTile;

