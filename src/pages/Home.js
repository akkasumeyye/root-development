import React from 'react'
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Main from '../components/Main';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div id='home'>
        <Main></Main>
        <About></About>
        <Services></Services>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  )
}

export default Home