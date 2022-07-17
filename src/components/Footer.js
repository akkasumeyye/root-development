import React from "react";
import styled from "styled-components";
import {AiFillLinkedin} from "react-icons/ai"
import tunisia from "../assests/tunisia.png"
import france from "../assests/france.png"
import canada from "../assests/canada.png"

const FooterContainer = styled.div`
  width: 100%;
  height: 10vh;
  h3{
    margin-left: 40%;
    color: #fff;
    font-weight: 100;
    opacity: 0.5;
  }
`;

const CompanyIntroduce = styled.div`
  color:bisque;
  display: flex;
  justify-content: center;
  gap:10rem;
  line-height: 2rem;
  margin-top: 3rem;
  margin-left: 5rem;
  div{
    width: 25rem;
    :nth-child(3) { 
      p{
        display: flex;
        align-items: center;
        margin-top: 1rem;
        gap:10px;
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
        <h2>Root Development</h2>
        <p>
          Root is a Tunisian company founded in 2021 by the hands of a team of
          experts in the field of information and communication technology. Our
          mission is to support our partners through the solutions and services
          we offer.
        </p>
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
        <p><img src={tunisia} alt="tunisia" width={40}/>+216 21 158 188</p>
        <p><img src={france} alt="france" width={40}/>+33 620 665 869</p>
        <p><img src={canada} alt="canada" width={40}/>+141 85 767 677</p>
        </div>
        <div>
        <h2>FOLLOW US</h2>
        <AiFillLinkedin/>
        </div>
      </CompanyIntroduce>
      <h3>© Copyright <b>Root Development</b>. All Rights Reserved</h3>
    </FooterContainer>
  );
};

export default Footer;
