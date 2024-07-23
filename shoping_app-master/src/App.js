import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Brand from "./components/brand/Brand";
import Slider1 from "./components/slider/Slider1";
import { marvel, slides, slides1, laptop } from "./json/Marval_data";
import { phone } from "./components/bestselling/data";
import BestSelling from "./components/bestselling/BestSelling";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Brand />
      <BestSelling data={phone} heading="Best Selling Mobile Skins" />
      <Slider1 slides={slides} interval={2000} />
      <BestSelling data={marvel} heading="Official Marvel Inspired Designs" />
      <Slider1 slides={slides1} interval={2000} />
      <BestSelling data={laptop} heading="Best Selling Laptop Skins" />
      <Footer />
    </React.Fragment>
  );
}

export default App;
