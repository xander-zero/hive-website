import React from 'react';
import styled from "styled-components";

export const NavContainer = ({children}) => {
  return (
    <NavConainerStyle>
      {children}
    </NavConainerStyle>
  )
}

const NavConainerStyle = styled.div`
    width: 100%;
    max-width: 1500px;
    background-color: #fff;
    margin: 0 auto ;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 1rem;
`;



export default NavContainer;