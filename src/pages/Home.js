import React from 'react'
import Main from '../assests/components/Main';
import About from './About';
import Services from './Services';
import Contact from './Contact';

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