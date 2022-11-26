import { useEffect } from "react";
import { fetchImages } from "../../redux/actions/productActions";
import { useAppDispatch } from "../../redux/store";
import { ThunkDispatch } from "redux-thunk";
import { InitialState } from "../../helpers/interfaces";
import { AnyAction } from "redux";
const CategoryMenu = ({ categories }: { categories: string[] | [] }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    // fetchImages
    dispatch(
      fetchImages(categories) as ThunkDispatch<InitialState, unknown, AnyAction>
    );
  }, []);
  return <div>CategoryMenu</div>;
};

export default CategoryMenu;
