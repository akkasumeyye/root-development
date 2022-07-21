import React , {useState} from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import logo from "../assests/root-logo.png";
import { FiPhoneCall } from "react-icons/fi";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 10rem;
  position: fixed;
  width: 100%;
  z-index: 10;
  height: 5rem;
  animation-duration: 0.5s;
  animation-name: slideInFromTop;
  animation-timing-function: ease-out;
  animation-fill-mode: both;
  animation-delay: 1.1s;
  transition: box-shadow 0.6s, background-color 0.2s;

  @keyframes slideInFromTop {
    from {
      top: -4rem;
      opacity: 0;
      visibility: hidden;
    }
    to {
      top: 0;
      opacity: 1;
      visibility: visible;
    }
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  font-size: inherit;
  margin-left: 2rem;
  cursor: pointer;

  :nth-child(1) , :nth-child(2) {

    &:hover {
      color: #ff4157;
    }

  }


  :nth-child(2) {
    &::after {
      margin-left: 2rem;
      opacity: .5;
      content: "|";
    }

  }

  :last-child {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-weight: bold;
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 10px;
    background-color: #ff4157;


    svg {
      animation: shake 0.5s;
      animation-iteration-count: infinite;
      @keyframes shake {
        0% {
          transform: rotate(0deg);
          opacity: 1;
        }
        8.0% {
          transform: rotate(0deg);
          opacity: 1;
        }
        12.0% {
          transform: rotate(52deg);
          opacity: 0.5;
        }
        16.0% {
          transform: rotate(-48deg);
          opacity: 0.4;
        }
        20.0% {
          transform: rotate(0deg);
          opacity: 1;
        }
        23.0% {
          transform: rotate(42deg);
          opacity: 0.3;
        }
        26.0% {
          transform: rotate(-30deg);
          opacity: 0.2;
        }
        29.0% {
          transform: rotate(0deg);
          opacity: 1;
        }
        31.0% {
          transform: rotate(26deg);
          opacity: 0.15;
        }
        33.0% {
          transform: rotate(-18deg);
          opacity: 0.1;
        }
        35.0% {
          transform: rotate(0deg);
          opacity: 1;
        }
        37.0% {
          transform: rotate(-12deg);
          opacity: 0.8;
        }
        40.0% {
          transform: rotate(6deg);
          opacity: 1;
        }
        44.0% {
          transform: rotate(-3deg);
          opacity: 0.8;
        }
        49.0% {
          transform: rotate(2deg);
          opacity: 1;
        }
        55.0% {
          transform: rotate(0deg);
          opacity: 1;
        }
        62.0% {
          transform: rotate(1deg);
          opacity: 1;
        }
        70.0% {
          transform: rotate(0deg);
          opacity: 1;
        }
      }
    }
  }
`;

const Navbar = () => {

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
      <NavLink activeClass="active" smooth={true} spy={true} to="home">
        <img src={logo} alt="logo" height={220}></img>
      </NavLink>
      <div>
        <NavLink activeClass="active" smooth={true} spy={true} to="about">About</NavLink>
        <NavLink activeClass="active" smooth={true} spy={true} offset={-180} to="services">Services</NavLink>
        <NavLink activeClass="active" smooth={true} spy={true} offset={-100} to="contact">
          <FiPhoneCall color={"white"} fontSize="1.3rem" /> Contact
        </NavLink>
      </div>
    </Nav>
  );
};

export default Navbar;
