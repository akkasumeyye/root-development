import React , {useState} from "react";
import styled from "styled-components";
import about from "../assests/Root-DNA.png";

const AboutPage = styled.div`
  height: 100vh;
  width: 100vw;
  color: #fff;
  display: flex;
  img {
    margin-top: 7rem;
  }
`;
const AboutContent = styled.div`
  margin-top: 15rem;
  h1 {
    margin-left: 25rem;
  }
  p {
    margin-top: 2rem;
    line-height: 1.8;
    margin-left: 8rem;
    font-size: 1.2rem;
  }
`;

const OurValues = styled.div`
  h3 {
    margin-left: 28rem;
    margin-top: 5rem;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0e0e0e;
    gap: 3rem;

    :nth-child(2) {
      h4 {
        margin-left: 1.4rem;
      }
    }

    div {
      width: 120px;
      height: 120px;
      background-color: #9dd6df;
      margin-top: 5rem;
      border-radius: 50%;
    }
  }
`;

const About = () => {
  const [startAnimation, setstartAnimation] = useState(false);
const startAnimationAbout = () =>{
   if(window.scrollY >= 800){
     setstartAnimation(true);
   }
   else{
     setstartAnimation(false);
   }
};
window.addEventListener('scroll', startAnimationAbout);
  return (

    <>
      <AboutPage id="about">
        <AboutContent>
          <h1>ROOT'S DNA</h1>
          <p>
            Root is a Turkey company founded in 2021 by the hands of a team of
            experts in the field of information and communication technology.
            Our mission is to support our partners through the solutions and
            services we offer. Considering that your satisfaction is our
            priority. Root guarantees quality services and puts at your disposal
            a 24/7 after sales service to help us understand and meet your
            expectations.
          </p>
          <OurValues>
            <div className={ startAnimation ? "start" : ""}>
              <div>
                <h4>Integrity</h4>
              </div>
              <div>
                <h4>Customer service</h4>
              </div>
              <div>
                <h4>Quality</h4>
              </div>
              <div>
                <h4>Simplicity</h4>
              </div>
            </div>
            <h3>Our Values</h3>
            <p>
              Our team is our most important asset. We encourage a participatory
              culture where the different actors are expected to make
              contributions and improvements.
            </p>
          </OurValues>
        </AboutContent>
        <img src={about} alt="logo"></img>
      </AboutPage>
    </>
  );
};

export default About;
