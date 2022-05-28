import React from 'react'
import styled from "styled-components";
import ContactScreen from '../../components/screens/ContactUs/ContactScreen';

export default function  Contact() {
  return (
    <ContactStyle>
      <ContactScreen/>
    </ContactStyle>
  )
}

const ContactStyle = styled.div`
 min-height: 90vh;
  width: 100vw;
  height: 100%;
  top: 10vh;
  position: relative;
  margin-bottom: 10vh;
`;
