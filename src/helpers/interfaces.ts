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

export interface InitialState {
  fetchedCategories: string[] | [];
  fetchedImages: string[] | [];
}

export interface ProductState {
  fetchedCategories: string[] | [];
  fetchedImages: string[] | [];
}

export interface CategoryTileProps {
  category: string;
  image: string;
}
