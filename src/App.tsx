import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import Navbar from "./components/Navbar/Navbar";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setAuthState } from "./redux/actions/authActions";
import { auth } from "./helpers/firebaseConfig";
import HomePage from "./components/HomePage/HomePage";
import CartPage from "./components/CartPage/CartPage";
function App() {
  const dispatch = useDispatch();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // ustaw stan auth na true
      dispatch(setAuthState(true));
    } else {
      // ustaw stan auth na false
      dispatch(setAuthState(false));
    }
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
