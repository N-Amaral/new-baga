import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CarouselDiv from "./components/Carousel";
import NewsListing from "./components/NewsList";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container py-4 px-3 mx-auto content">
        <CarouselDiv />
        <NewsListing />
      </div>
      <Footer />
    </div>
  );
}

export default App;
