import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainComponent = styled.div`
  margin: 16rem 20rem;
  color: #fff;
`;

const MainContent = styled.h1`
  font-size: 4.5rem;
  font-weight: 1000;
  width: 40%;
  line-height: 1.25;
`;

const MainDescription = styled.p`animation-name: fadeInFromCenter;
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
  position: relative;

  &:hover {
    width: 15vw;
    background-color: #ff4157;
  }
  h5 {
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

const Main = () => {
  return (
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
  );
};

export default Main;