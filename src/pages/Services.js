import React from "react";
import styled from "styled-components";
import software from "../assests/software.svg";
import outsourcing from "../assests/outsourcing.svg";
import mobile from "../assests/mobile.svg";
import embedded from "../assests/embedded.svg";

const ServicesPage = styled.div`
  height: 60vh;
  width: 85vw;
  color: #fff;
  margin-top: 15rem;
  margin-left: 8rem;
  display: grid;
  grid-template-areas: 'company consulting outsourcing'
  'company mobile embedded';
  row-gap: 0;
  
  div {
    :nth-child(1){
    grid-area: company;
  }
  :nth-child(2){
    grid-area: consulting;
  }
  :nth-child(3){
    grid-area: outsourcing;
  }
  :nth-child(4){
    grid-area: mobile;
  }
  :nth-child(5){ 
    grid-area: embedded;
  }
  }
`;
const CompanyIntroduce = styled.div`
  width: 18rem;
  height: 60px;
  position: relative;
  grid-area: company;

  h5 {
    color: #ff4157;
    margin-left: 2rem;
  }

  &::before {
    position: absolute;
    width: 20px;
    height: 2px;
    content: "";
    margin-top: 5px;
    background-color: #ff4157;
  }
  h1 {
    margin-top: 2rem;
  }
  p {
    margin-top: 3rem;
    font-size: 1.5rem;
    opacity: 0.7;
  }
`;

const ServicesIntroduce = styled.div`
  cursor: pointer;
  display: inline-flex;
  margin-top: 20rem;
  align-items: center;
  color: #fff;
  height: 60px;
  position: relative;

  &:hover {
    width: 15vw;
    background-color: #ff4157;
  }
  h4 {
    margin-left: 2rem;
  }

  &::before {
    width: 60px;
    height: 100%;
    background-color: #ff4157;
    content: "";
    z-index: -1;
    transition: all 0.5s;
  }

  &::after {
    position: absolute;
    margin-left: 2.5rem;
    content: "";
    width: 40px;
    height: 2px;
    background-color: #fff;
  }
`;

const ServicesContainer = styled.div`
  display: flex;
  margin-left: 10rem;
  
`;
const ServicesText = styled.div`
  margin-left: 25px;
  width: 18rem;
  position: relative;
  p {
    opacity: 0.7;
    line-height: 1.3;
    margin-top: 1rem;
  }

  &:hover {
    &::after {
      margin-top: 1rem;
      position: absolute;
      content: "Get info >";
      color: #ff4157;
    }
  }
`;

const Services = () => {
  return (
    <ServicesPage>
      <div>
        <CompanyIntroduce>
          <h5>What are we doing ?</h5>
          <h1>Innovative Software and Designs</h1>
          <p>
            With an experienced team in the sector; We offer web design,
            software and digital media solutions .
          </p>
        </CompanyIntroduce>
        <ServicesIntroduce>
          <h4>Know about us!</h4>
        </ServicesIntroduce>
      </div>
      <div>
        <ServicesContainer>
          <img src={software} alt="software" width={110}></img>
          <ServicesText>
            <h1>IT Consulting</h1>
            <p>
              We are also devoted to support you in a process of continuous
              improvement for a better performance and efficiency every day.
            </p>
          </ServicesText>
        </ServicesContainer>
      </div>
      <div>
        <ServicesContainer>
          <img src={outsourcing} alt="outsourcing" width={110}></img>
          <ServicesText>
            <h1>Outsourcing</h1>
            <p>
              Our teams of expert engineers and consultants have the
              responsibility of providing you with high quality services and
              personalized solutions
            </p>
          </ServicesText>
        </ServicesContainer>
      </div>
      <div>
        <ServicesContainer>
          <img src={mobile} alt="mobile" width={110}></img>
          <ServicesText>
            <h1>Digital Transformation</h1>
            <p>
              we provide consulting solutions and computer technologies in Web &
              Mobile Development, Digital Marketing and in Business
              intelligence.
            </p>
          </ServicesText>
        </ServicesContainer>
      </div>
      <div>
        <ServicesContainer>
          <img src={embedded} alt="embedded" width={110}></img>
          <ServicesText>
            <h1>Industrial & Embedded Systems</h1>
            <p>
              We operate in different fields to facilitate the way you monitor
              all of your installed systems in real time (lighting, air
              conditioning, ventilation, heating, energy supplies, access
              control, car park…)
            </p>
          </ServicesText>
        </ServicesContainer>
      </div>
    </ServicesPage>
  );
};

export default Services;
