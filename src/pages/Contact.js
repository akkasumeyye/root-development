import React from 'react'
import styled from 'styled-components'
import contact  from "../assests/contact.jpg"
import ContactForm from '../components/ContactForm'
import ContactMap from '../components/ContactMap'

const ContactPage = styled.div`
position:relative;
display: flex;
gap: 8rem;
margin-top: 10vh;
height:100vh;
  color: #fff;
  background: url(${contact});
  z-index:1;

  &:after {
    position:absolute;
    content: "";
  position: absolute;
  left: 0; right: 0;
  top: 0; bottom: 0;
  background: rgba(0,0,0,.7);
  z-index:-1;
  }
`

const Contact = () => {
  return (
    <ContactPage id='contact'>
      <ContactMap/>
      <ContactForm/>
    </ContactPage>
  )
}

export default Contact