import React from "react";
import { Card, Paper, Typography, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { RegisterFormData } from "../../helpers/interfaces";
import { auth } from "../../helpers/firebaseConfig";
const RegisterPage = () => {
  const { register, handleSubmit } = useForm<RegisterFormData>();

  const signUserUp = ({ email, password, password2 }: RegisterFormData) => {
    if (password === password2) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => console.log("sukces"))
        .catch((err) => console.error(err.message));
    }
  };

  return (
    <Card
      component={Paper}
      sx={{ display: "block", mx: "auto", maxWidth: "35%", my: "1rem" }}
    >
      <Typography variant="h2" align="center" sx={{ fontSize: "2rem" }}>
        Register new account
      </Typography>
      <form
        onSubmit={handleSubmit(signUserUp)}
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
          sx={{ display: "block", mx: "auto", my: ".3rem" }}
          {...register("email", { required: true })}
        />
        <TextField
          variant="outlined"
          label="password"
          type="password"
          sx={{ display: "block", mx: "auto", my: ".3rem" }}
          {...register("password", { required: true })}
        />
        <TextField
          variant="outlined"
          label="password"
          type="password"
          sx={{ display: "block", mx: "auto", my: ".3rem" }}
          {...register("password2", { required: true })}
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
          Register
        </Button>
      </form>
    </Card>
  );
};

export default RegisterPage;
