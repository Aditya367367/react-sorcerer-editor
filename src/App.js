// src/App.js
import React from "react";
import Title from "./components/Title";
import EditorComponent from "./components/EditorComponent";

const App = () => (
  <div style={{ margin: "20px" }}>
    <Title text="React Sorcerer Editor" />
    <EditorComponent />
  </div>
);

export default App;
