import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container py-4 px-3 mx-auto">
        <h1>Hello, Bootstrap and Vite!</h1>
        <button className="btn btn-primary">Primary button</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
