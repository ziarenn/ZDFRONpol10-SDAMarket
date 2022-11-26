import { useEffect } from "react";
import { fetchImages } from "../../redux/actions/productActions";
import { useAppDispatch } from "../../redux/store";
import { ThunkDispatch } from "redux-thunk";
import { InitialState, State } from "../../helpers/interfaces";
import { AnyAction } from "redux";
import { useSelector } from "react-redux";
import { Paper } from "@mui/material";
import CategoryTile from "../CategoryTile/CategoryTile";
const CategoryMenu = ({ categories }: { categories: string[] | [] }) => {
  const images = useSelector(
    (state: State) => state.productState.fetchedImages
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    // fetchImages
    dispatch(
      fetchImages(categories) as ThunkDispatch<InitialState, unknown, AnyAction>
    );
  }, []);
  return (
    <Paper elevation={1} sx={{ my: "2rem" }}>
      {images.length > 0 &&
        categories.map((el, i) => {
          return <CategoryTile category={el} image={images[i]} />;
        })}
    </Paper>
  );
};

export default CategoryMenu;
