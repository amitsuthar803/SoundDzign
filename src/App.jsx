import React, { useState } from "react";
import {
  Header,
  Blog,
  Topics,
  Info,
  Testimonials,
  Footer,
} from "./components/index";

function App() {
  return (
    <>
      <Header />
      <Topics />
      <Info />
      <Blog />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
