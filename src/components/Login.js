import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import "./Login.css";

function Login() {
  const signIn = () => {
    //google login
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_logo">
        <img src="https://1000logos.net/wp-content/uploads/2021/06/Discord-logo-2015.png" alt="" />
      </div>
      <Button onClick={signIn}> Sign In </Button>
    </div>
  );
}

export default Login;
