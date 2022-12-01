import React from "react";
import About from "./components/about/About";
import Choose from "./components/Choose/Choose";
import Clients from "./components/Clients/Clients";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Choose />
      <Clients/>
    </>
  );
};

export default App;
