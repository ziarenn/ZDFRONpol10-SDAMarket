export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData extends LoginFormData {
  password2: string;
}

export interface State {
  authState: boolean;
  productState: ProductState;
}

interface ProductRating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductRating;
}

export interface InitialState {
  fetchedCategories: string[] | [];
  fetchedImages: string[] | [];
  fetchedProducts: Product[] | [];
}

export interface ProductState {
  fetchedCategories: string[] | [];
  fetchedImages: string[] | [];
  fetchedProducts: Product[] | [];
}

export interface CategoryTileProps {
  category: string;
  image: string;
}
