import React, { useState } from "react";
import styled from "styled-components";
import { FaRegPaperPlane } from "react-icons/fa";

const Form = styled.form`
  margin-top: 5rem;
  width: 35vw;
  height: 70vh;
  border-radius: 1rem;
  background-color: hsla(0, 100%, 90%, 0.3);
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  line-height: 2.5rem;
  position:relative;
  

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
    border: 2px solid hsla(0, 100%, 90%, 0.1);
    border-radius: 5px;
    background-color: hsla(0, 100%, 100%, 0.1);
    font-size: large;
    color: #fff;
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
    background-color: #ff6781;
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
    width: 5.5vw;
    height: 10vh;
    border-radius: 50%;
    background-color: hsla(0, 100%, 100%, 0.1);
    z-index: 12;
    position: absolute;
    margin-left: 15vw;
    margin-top: 2.2rem;
  }
  svg {
    margin-top: 3rem;
    margin-left: 15.9vw;
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
      <FormIcon>
        <FaRegPaperPlane fontSize="4rem" />
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
