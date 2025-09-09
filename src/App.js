import React from 'react';
import {Features, Footer, Header, Possibility, WhatGPT3, Blog} from './container'
import { Brand, CTA,  Navbar} from "./components";
import './App.css';

const App = () => {
  return (
    <div>
        <div className='gradient__bg'>
          <Navbar/>
          <Header />
        </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App