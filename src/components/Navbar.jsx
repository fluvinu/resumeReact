import React from 'react';

import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Logo style={{color:'black'}}>Siddharth Shivwanshi</Logo>
      <Menu>
        <MenuItem></MenuItem>
        <MenuItem><a href="#home">Home</a></MenuItem>
        <MenuItem ><a style={{color:'orange'}} href='3'>Skills</a></MenuItem>
        <MenuItem><a style={{color:'black'}} href='5'>Contact</a></MenuItem>
        <MenuItem><a  style={{color:'white' , backgroundColor:'black',  padding:'10px' ,borderRadius:'9px'}} href=''>FullScreen</a></MenuItem>
      </Menu>
    </Nav>

)};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: tranparent;
  width:94vw;
  position:absolute;
  top:0;
  z-index:1;
`;

const Logo = styled.div`
  color: #fff;
  font-size: 1.5rem;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  a {
    color: #fff;
    text-decoration: none;
  }
`;

export default Navbar;
