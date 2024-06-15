import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Section>
      <h1>Contact Me</h1>
      <p>Your contact details here.</p>
      <form name='contactMe' method='POST' netlify onSubmit='submit' action='/sus/' data-netlify-honeypot="pot">
        <input type='hidden' name='pot'  />
        <label for="name"><input type="text" id="name" name="name" /> name </label>
        
        <label for ="contactNo"> <input type="text" id="contactNo" name="phone" /> contact no </label>
        
        <label for="email"> <input type="email" id="email" name="email" />Email:</label>
        
        <label for="message"> <textarea id="message" name="message"></textarea> Message:</label>
        
        <button type="submit">Send</button>
      </form>
    </Section>
  );
};

const Section = styled.section`
  padding: 2rem;
  text-align: center;
`;

export default Contact;
