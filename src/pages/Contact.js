import React from 'react'
import styled from 'styled-components'
import contact  from "../assests/contact.jpg"

const ContactPage = styled.div`
position:relative;
margin-top: 15vh;
height:85vh;
  color: #fff;
  background: url(${contact});
  &:after {
    position:absolute;
    content: "";
  position: absolute;
  left: 0; right: 0;
  top: 0; bottom: 0;
  background: rgba(0,0,0,.5);
  }
`

const Contact = () => {
  return (
    <ContactPage>Contact</ContactPage>
  )
}

export default Contact