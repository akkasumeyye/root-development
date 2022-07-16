import React from "react";
import styled from "styled-components";
import software from "../assests/software.svg";

const ServicesPage = styled.div`
  width: 100%;
  height: 100vh;
  color: #fff;
  margin-top: 15rem;
  margin-left: 18rem;
  display: flex;
`;
const CompanyIntroduce = styled.div`
  width: 18rem;
  height: 60px;
  position: relative;

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
    margin-top: 2rem;
    font-size: 1.5rem;
    opacity: 0.7;
  }
`;

const ServicesIntroduce = styled.div`
  cursor: pointer;
  display: inline-flex;
  margin-top: 18rem;
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
  margin-left: 15rem;
  `;
const ServicesText = styled.div`
  margin-left: 25px;
  width :18rem;
  p{
    opacity: 0.7;
    line-height: 1.3;
    margin-top: 1rem;
  }


&:hover {
&::after {
  margin-top: 1rem;
  content: "Get info";
  color: #ff4157;
}
}

`

const Services = () => {
  return (
    <ServicesPage>
      <div>
      <CompanyIntroduce>
        <h5>What are we doing ?</h5>
        <h1>Innovative Software and Designs</h1>
        <p>
          With an experienced team in the sector; We offer web design, software
          and digital media solutions.
        </p>
      </CompanyIntroduce>
      <ServicesIntroduce>
        <h4>Know about us!</h4>
      </ServicesIntroduce>
      </div>
      <div>

      <ServicesContainer>
        <img src={software} alth="software" width={110}></img>
        <ServicesText>
          <h1>IT Consulting</h1>
          <p>
            We are also devoted to support you in a process of continuous
            improvement for a better performance and efficiency every day
          </p>
        </ServicesText>
      </ServicesContainer>
      </div>
    </ServicesPage>
  );
};

export default Services;
