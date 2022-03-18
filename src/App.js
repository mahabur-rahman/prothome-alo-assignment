import React from "react";
// react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// global scss
import "./global.scss";
// component
import Header from "./components/Header/Header";
// pages
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
};

export default App;
