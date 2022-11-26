export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData extends LoginFormData {
  password2: string;
}

export interface State {
  authState: boolean;
}

export interface InitialState {
  fetchedCategories: string[] | [];
  // ten interface bedzie sie rozwijac
}
