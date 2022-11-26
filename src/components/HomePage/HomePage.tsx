import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch } from "../../redux/store";
import { fetchCategories } from "../../redux/actions/productActions";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { InitialState, State } from "../../helpers/interfaces";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import { useSelector } from "react-redux";
const HomePage = () => {
  const dispatch = useAppDispatch();
  const categories = useSelector(
    (state: State) => state.productState.fetchedCategories
  );
  useEffect(() => {
    dispatch(
      fetchCategories() as ThunkDispatch<InitialState, unknown, AnyAction>
    );
  }, []);
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
      <CategoryMenu categories={categories} />
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
