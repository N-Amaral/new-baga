import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CarouselDiv from "./components/Carousel";
import NewsListing from "./components/NewsList";
import UserPage from "./components/User";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container py-4 px-3 mx-auto content">
        <UserPage />
        {/* <CarouselDiv />
        <NewsListing /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
