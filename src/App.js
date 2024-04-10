import React from "react";
import PokemonGallary from "./Componets/PokemonGallary";
import NavbarComponet from "./Componets/Navbar";
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "./Componets/About";

const App = () => {
  return (
    <>
      <NavbarComponet />
      <Routes>
        <Route
          path="/"
          element={<PokemonGallary/>}
        />
        <Route
          exact
          path="/about"
          element={<About/>}
        />
      </Routes>
    </>
  );
};

export default App;
