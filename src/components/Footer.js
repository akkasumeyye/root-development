import React from "react";
import styled from "styled-components";
import { AiFillLinkedin } from "react-icons/ai";
import tunisia from "../assests/tunisia.png";
import france from "../assests/france.png";
import canada from "../assests/canada.png";
import logo from "../assests/root-logo.png";

const FooterContainer = styled.div`
  width: 100%;
  height: 25vh;
`;

const CompanyIntroduce = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  gap: 10rem;
  margin-top: 3rem;
  margin-left: 5rem;

  div {
    width: 25rem;

    p{
      margin-top: 1rem;
    }

    :nth-child(1) {
      img {
        position: relative;
        margin-top: -3rem;
      }

      h3 {
        color: #fff;
        font-weight: 100;
        opacity: 0.5;
        position: absolute;
        margin-top: -4rem;
        margin-left: -3rem;
      }
    }

    :nth-child(3) {
      p {
        display: flex;
        align-items: center;
        margin-top: 1rem;
        gap: 10px;
      }
    }
  }

  svg {
    margin-top: 2rem;
    width: 5rem;
    height: 3rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <CompanyIntroduce>
        <div>
          <img src={logo} alt="logo" width="200" height="200"></img>
          <h3>
            © Copyright <b>Root Development</b>. All Rights Reserved
          </h3>
        </div>
        <div>
          <h2>SERVICES</h2>
          <p>IT Consulting</p>
          <p>Outsourcing</p>
          <p>Industrial & Embedded Systems</p>
          <p>Digital Transformation</p>
        </div>
        <div>
          <h2>CONTACT</h2>
          <p>
            <img src={tunisia} alt="tunisia" width={40} />
            +216 21 158 188
          </p>
          <p>
            <img src={france} alt="france" width={40} />
            +33 620 665 869
          </p>
          <p>
            <img src={canada} alt="canada" width={40} />
            +141 85 767 677
          </p>
        </div>
        <div>
          <h2>FOLLOW US</h2>
          <AiFillLinkedin />
        </div>
      </CompanyIntroduce>
    </FooterContainer>
  );
};

export default Footer;
