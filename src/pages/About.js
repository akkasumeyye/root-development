import React from "react";
import styled from "styled-components";
import about from "../assests/Root-DNA.png"

const AboutPage = styled.div`
  height: 100vh;
  color: #fff;
  display: flex;
  margin-top: 10rem;
`;
const AboutContent = styled.div`
margin-top: 15rem;
h1 {
  margin-left:22rem;
}
p{
  margin-top: 2rem;
  line-height: 1.8;
  margin-left: 4rem;
  font-size: 1.2rem;
}
`;

const About = () => {
  return (
    <AboutPage>
      <AboutContent>
        <h1>ROOT'S DNA</h1>
        <p>
          Root is a Tunisian company founded in 2021 by the hands of a team of
          experts in the field of information and communication technology. Our
          mission is to support our partners through the solutions and services
          we offer. Considering that your satisfaction is our priority. Root
          guarantees quality services and puts at your disposal a 24/7 after
          sales service to help us understand and meet your expectations.
        </p>
      </AboutContent>
      <img src={about} alt="logo"></img>
    </AboutPage>
  );
};

export default About;
