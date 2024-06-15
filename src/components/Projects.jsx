import React from 'react';
import styled from 'styled-components';

const Projects = () => {
  return (
    <Section>
      <h1>My Projects</h1>
      <p>Showcase your projects here.</p>
    </Section>
  );
};

const Section = styled.section`
  padding: 2rem;
  text-align: center;
`;

export default Projects;
