import './App.css';
import Header from './components/header/Header.js'
import Sidebar from './components/sidebar/Sidebar.js'
import Home from './components/home/Home.js'
import React, {useState} from 'react';



function App() {


  return (
    <div className='content-wrapper'>
    <Header/>
    <Sidebar/>

    <Home/>
    </div>
  );
}

export default App;
