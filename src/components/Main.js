import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import earth from "../assests/earth.png";

const MainComponent = styled.div`
  margin: 16rem 20rem;
  color: #fff;
  position: absolute;
z-index:5;
`;

const MainContent = styled.h1`
  font-size: 4.5rem;
  font-weight: 1000;
  width: 40%;
  line-height: 1.25;
`;

const MainDescription = styled.p`
  animation-name: fadeInFromCenter;
  animation-duration: 0.9s;
  animation-fill-mode: both;
  animation-timing-function: ease-out;
  animation-delay: 1.2s;
  @keyframes fadeInFromCenter {
    from {
      visibility: hidden;
      opacity: 0;
    }
    to {
      visibility: visible;
      opacity: 1;
    }
  }
  font-size: 1.875rem;
  font-weight: 100 !important;
  margin-top: 5rem;
`;

const Introduce = styled.div`
  cursor: pointer;
  display: inline-flex;
  margin-top: 3rem;
  align-items: center;
  color: #fff;
  height: 60px;

  &:hover {
    width: 15vw;
    background-color: #ff4157;
    z-index: 1;
  }
  h5 {
    margin-left: 2rem;
    z-index: 2;
  }

  &::before {
    width: 60px;
    height: 100%;
    background-color: #ff4157;
    content: "";
    z-index: 0;
    transition: all 0.5s;
  }

  &::after {
    position: absolute;
    margin-left: 2.5rem;
    content: "";
    width: 40px;
    height: 2px;
    background-color: #fff;
    z-index: 2;
  }
`;

const MainAnimation = styled.div`
  animation-name: fadeInFromCenter;
  animation-duration: 0.9s;
  animation-fill-mode: both;
  animation-timing-function: ease-out;
  animation-delay: 1.2s;
  @keyframes fadeInFromCenter {
    from {
      opacity: 0.2;
    }
    to {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const MainBackground = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url(${earth}) no-repeat center ;
  z-index: -1;
  animation: rotate 35s linear infinite;
  @keyframes rotate {
    100% {background-position:100%}
  }


  &:after {
    position:absolute;
    content: "";
  position: absolute;
  left: 0; right: 0;
  top: 0; bottom: 0;
  background: rgba(0,0,0,.5);
  }
`;

const Main = () => {
  return (
    <MainBackground>
      <MainComponent>
        <MainAnimation>
          <MainContent>we code the world of the future </MainContent>
          <MainDescription>
            We offer digital solutions with 100% customer satisfaction!
          </MainDescription>
        </MainAnimation>
        <Link to={"/services"}>
          <Introduce>
            <h5> What we are doing ?</h5>
          </Introduce>
        </Link>
      </MainComponent>
    </MainBackground>
  );
};

export default Main;
