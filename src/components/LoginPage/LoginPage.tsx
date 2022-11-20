import React from "react";
import { useForm } from "react-hook-form";
import { Card, Typography, Button, TextField, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { RegisterFormData } from "../../helpers/interfaces";
import { signInWithEmailAndPassword } from "firebase/auth";
const auth = {};
const LoginPage = () => {
  const { register, handleSubmit } = useForm<RegisterFormData>();

  const signUserIn = ({ email, password }: RegisterFormData) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => console.log("sukces"))
      .catch((err) => console.error(err.message));
  };

  return (
    <Card
      component={Paper}
      sx={{ displa: "block", mx: "auto", maxWidth: "35%", my: "1rem" }}
    >
      <Typography variant="h2" align="center" sx={{ fontSize: "2rem" }}>
        Log in to use our site
      </Typography>
      <form
        onSubmit={handleSubmit(signUserIn)}
        style={{
          margin: "auto",
          marginTop: ".5rem",
          marginBottom: ".5rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          variant="outlined"
          label="email"
          type="email"
          sx={{ display: "block", my: ".3rem", mx: "auto" }}
          {...register("email", { required: true })}
        />
        <TextField
          variant="outlined"
          label="password"
          type="password"
          sx={{ display: "block", my: ".3rem", mx: "auto" }}
          {...register("password", { required: true })}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            display: "block",
            mx: "auto",
            my: ".3rem",
            bgcolor: "#FC766AFF",
          }}
        >
          Log in
        </Button>
      </form>
      <Typography
        variant="h3"
        align="center"
        sx={{ fontSize: "1rem", my: "3rem" }}
      >
        No account yet? Register for free now!
      </Typography>
      <Link to="/register" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          sx={{
            display: "block",
            mx: "auto",
            mb: ".3rem",
            bgcolor: "#FC766AFF",
          }}
        >
          Register
        </Button>
      </Link>
    </Card>
  );
};

export default LoginPage;
