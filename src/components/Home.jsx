import React from 'react';
import styled from 'styled-components';

import TypeWriterEffect from 'react-typewriter-effect';
const Home = () => {


    return (
        <Section itemID='home'>
            <Content>
                <div style={{ textAlign: 'left' }}>
                    <h1 style={{ color: 'black' }}>Hi, I'm Siddharth, </h1>

                    {/* Typewriter effect */}

                    <h1 style={{ margin: '40px',textShadow:'revert' }}>
                        I am a
                        <span> <TypeWriterEffect
                            textStyle={{
                                fontFamily: 'Red Hat Display',
                                color: '#FF5733',
                                fontWeight: 500,
                                fontSize: '50px',
                            }}
                            startDelay={2000}
                            cursorColor="#3F3D56"
                            multiText={[
                                'webDevloper',
                                'Full Stack Java Devloper',
                                'Desiner',
                            ]}
                            multiTextLoop={true}
                            multiTextDelay={2000}
                            typeSpeed={50}
                        /></span>
                    </h1>

                    <p style={{ color: 'black' }}>Hope you're doing well</p>
                    <div>
                        <button style={{ background: 'black' }}>
                            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Hire me</a>
                        </button>
                        <button style={{ background: 'white', margin: '5px' }}>
                            <a href="#" style={{ color: 'black', textDecoration: 'none' }}>My resume ⬇</a>
                        </button>
                    </div>
                </div>
            </Content>

            <Content style={{ marginRight: '20%' }}>
                <div style={{ borderRadius: '50%', backgroundColor: 'transparent' }}>
                    <img
                        style={{ width: '200%', borderRadius: '50%' }}
                        src="src/assets/hero-image.jpg"
                        alt="Hero"
                    />
                </div>
            </Content>
        </Section>
    );
};

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  background-image: linear-gradient(to right, #C7F4FF, #328EA5);
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  position: absolute;
  width: 100vw;
  top: 0;
`;

const Content = styled.div`
  
`;

export default Home;
