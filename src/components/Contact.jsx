import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Section>
      <h1>Contact Me</h1>
      <p>Your contact details here.</p>
      <form name='contactMe' method='POST' netlify onSubmit='submit' data-netlify-honeypot="pot">
        <input type='hidden' name='pot'  />
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label for ="contactNo"> contact no </label>
        <input type="text" id="contactNo" name="phone" />
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label for="message">Message:</label>
        <textarea id="message" name="message"></textarea>
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
