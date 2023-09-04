import { useState } from "react";
import "./App.css";
import SignUp from "./auth/SignUp";
import Login from "./auth/LogIn";
import CreateQuiz from "./Features/CreateQuiz";
import ViewAll from "./Features/ViewAll";

function App() {
  return (
    <div>
      <SignUp />
      <Login />
      <CreateQuiz />
      <ViewAll />
    </div>
  );
}

export default App;
