import React from "react";
import styled from "styled-components";
import earth from "../assests/earth.png";

import {Link} from "react-router-dom"


const MainComponent = styled.div`
 overflow: hidden;
 position:relative;
  color: #fff;
  z-index: -1;
  height:100vh;
  width: 100%;
  background: url(${earth}) no-repeat left bottom;
  animation: rotate 35s linear infinite;
  @keyframes rotate {
    100% {
      background-position: 100%;
    }
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index:0;
  }
`;

const MainContent = styled.h1`
  font-size: 4.5rem;
  font-weight: 1000;
  width: 40%;
  line-height: 1.25;
`;

const MainDescription = styled.div`
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

 const Introduce = styled(Link)`
  display: inline-flex;
  margin-top: 3rem;
  align-items: center;
  color: #fff;
  cursor:pointer;
  z-index:11;
  
  :hover {
    width: 15vw;
    color: #ff4157;
    z-index:20;
  }
     
  
  &::before {
    width: 60px;
    height: 60px;
    background-color: #ff4157;
    content: "";
    transition: all 0.5s;
    z-index: 1;
  }

  &::after {
    position: absolute;
    margin-left: 2.5rem;
    content: "";
    width: 40px;
    height: 2px;
    background-color: #fff;
    z-index:3;
  }
  h4{
    margin-left: 2rem;
  }
`;

const MainAnimation = styled.div`
  margin: 16rem 20rem;
  z-index:10;
  position:absolute;
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


const Main = () => {
  return (
      <MainComponent>
        <MainAnimation>
          <MainContent>we code the world of the future </MainContent>
          <MainDescription>
            We offer digital solutions with 100% customer satisfaction!
          </MainDescription>
          <Introduce to={"/services"}><h4>What we are doing?</h4></Introduce>
        </MainAnimation>
      </MainComponent>
  );
};

export default Main;
