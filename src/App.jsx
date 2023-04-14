import React from "react";

// import Article from "./components/article/Article";
import Navbar from "./components/navbar/Navbar";
import Header from "./containers/header/Header";
import Brand from "./components/brand/Brand";
import WhatGPT3 from "./containers/whatGPT3/WhatGPT3";
import Features from "./containers/features/Features";
import Possibility from "./containers/possibility/Possibility";
import CTA from "./components/cta/CTA";
import Blog from "./containers/blog/Blog";
import Footer from "./containers/footer/Footer";
import "./App.scss";
import "./index.scss";

const App = () => {
  return (
    <div className='app'>
      <div className='container'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default App;
