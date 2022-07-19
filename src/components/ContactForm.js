import React, { useState } from "react";
import styled from "styled-components";
import { FaRegPaperPlane } from "react-icons/fa";

const Form = styled.form`
  margin-top: 5rem;
  width: 35vw;
  height: 70vh;
  border-radius: 1rem;
  background-color: #fff;
  color: #231955;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  line-height: 2.5rem;
  
  div {
    position: relative;
    background: radial-gradient(
      ellipse at 50% 15%,
      #ffbf00 75%,
      transparent 70%
      );
      
      ::after {
      position: absolute;
      margin-top: 2rem;
      width: 35vw;
      height: 10vh;
      z-index:-1;
      content: "-";
      background: radial-gradient(
        ellipse at 50% 15%,
        #ffefd5 75%,
        transparent 70%
      );
    }
  }

  h1 {
    margin-left: 12vw;
    margin-top: 3rem;
  }

  h3 {
    color: #ff4157;
    margin-left: 2vw;
  }

  textarea,
  input,
  h5 {
    margin-left: 2.5rem;
  }

  input,
  textarea {
    border: 2px solid #d0d0d0;
    border-radius: 5px;
  }

  input {
    width: 30vw;
    height: 2.5rem;
  }

  textarea {
    width: 30vw;
    height: 20vh;
  }

  button {
    margin-left: 15vw;
    font-weight: bold;
    width: 5vw;
    background-color: #ff4157;
    color: #fff;
    padding: 0.7rem;
    border-radius: 1rem;
  }
`;

const FormIcon = styled.div`
  width: 100%;
  height: 10vh;
  position: relative;

  :before {
    content: "";
    width: 4.5vw;
    height: 8vh;
    border-radius: 50%;
    background-color: #fff;
    z-index: 12;
    position: absolute;
    margin-left: 15vw;
    margin-top: 3rem;
  }
  svg {
    margin-top: 4rem;
    margin-left: 16vw;
    z-index: 13;
    position: absolute;
  }
`;

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const [visible, setvisible] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    
    if (name && email && message) {
      setName("");
      setemail("");
      setmessage("");
    } else { 

      setvisible(true);  

       setTimeout(() => {
          setvisible(false);
        }, 5000);

    }
  };

  return (
    <Form>
      <div></div>
      <FormIcon>
        <FaRegPaperPlane fontSize="2.5rem" />
      </FormIcon>
      <h1>CONTACT US</h1>
      <h5>Name</h5>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <h5>E-Mail</h5>
      <input
        type="email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      ></input>
      <h5>Message</h5>
      <textarea
        value={message}
        type="text"
        onChange={(e) => setmessage(e.target.value)}
      ></textarea>
      <br />
      <button type="submit" onClick={submit}>
        SUBMIT
      </button>
      {
      visible ? <h3>Please fill in the all fields.</h3>
      : <span />
      }
    </Form>
  );
};

export default ContactForm;
