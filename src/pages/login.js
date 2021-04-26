import React from "react";
import LoginForm from "../components/loginForm";

import "../style/global.css";

export default function Home() {
  return (
      <div className="container">
          <div className="login-container">
              <LoginForm />
          </div>
      </div>
  )
}