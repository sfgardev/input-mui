import React from "react";

import "./App.css";
import { TextField } from "./components/TextField/TextField";

function App() {
  return (
    <div className="App">
      <TextField label="First name" placeholder="First name" />
      <TextField label="Last name" placeholder="Last name" />
    </div>
  );
}

export default App;
