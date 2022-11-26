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

// W PRODUCTSACTIONS.TS:
// 5. Stwórz kreator akcji asynchronicznej o nazwie fetchImages, do samego kreatora przyjmuj parametr categories
// W kreatorze:
// - axiosem pobieracie 4 zdjęcia
// - stwórz 4 zmienne, product1, product2 itd, w każdej zmiennej (AWAIT!!!!) wywołaj axios get dla urla `https://fakestoreapi.com/products/category/${categories[*jeżeli zmienna product1 to tutaj liczba 1 itd]}?limit=1`
// - wszystkie zmienne wrzuć do listy objectList
// const objectList = [product1, product2, product3...]
// const imageList = objectList.map((el) => el.data[0].image)
// - wywołaj funkcje dispatch, w środku obiekt akcji, type ActionTypes.FETCH_IMAGES i payload imageList
// 6. Wywołaj kreator z pkt 5 w useEffect z pkt 4
