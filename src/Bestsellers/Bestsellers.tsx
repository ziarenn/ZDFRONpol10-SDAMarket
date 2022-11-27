import { useEffect } from "react";
import { useAppDispatch } from "../redux/store";
import { fetchProducts } from "../redux/actions/productActions";
import { InitialState } from "../helpers/interfaces";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
const Bestsellers = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // fetchProducts
    dispatch(
      fetchProducts(10) as ThunkDispatch<InitialState, unknown, AnyAction>
    );
  }, []);

  return <div>Bestsellers</div>;
};

export default Bestsellers;

// Bestsellers.tsx
// 4. Dispatch fetchProducts w useEffect z pkt 2, jako argument do fetchProducts podaj liczbę 10
