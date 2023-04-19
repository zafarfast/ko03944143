import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import ContactMe from './components/ContactMe'
import Resume from './components/Resume'
import Footer from './components/Footer'


function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe') 
  const changePage = (page)=>{setCurrentPage(page)}
  return <>
  <Header currentPage={currentPage} changePage={changePage}/>
  {currentPage === 'AboutMe' ? <AboutMe /> :' '}
  {currentPage === 'Portfolio' ? <Portfolio /> : ' '}
  {currentPage === 'ContactMe' ? <ContactMe /> : ' '}
  {currentPage === 'Resume' ? <Resume /> : ' '}
  <Footer />
  </>
}

export default App;
