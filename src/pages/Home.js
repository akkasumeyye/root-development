import React from 'react'
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Main from '../components/Main';

const Home = () => {
  return (
    <div>
        <Main></Main>
        <About></About>
        <Services></Services>
        <Contact></Contact>
    </div>
  )
}

export default Home