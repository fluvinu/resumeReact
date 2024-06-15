import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <Section>
      <h1>About Me</h1>
      <p>Details about yourself.</p>
    </Section>
  );
};

const Section = styled.section`
  padding: 2rem;
  text-align: center;
`;

export default About;
