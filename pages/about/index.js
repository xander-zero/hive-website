import React from "react";
import AboutScreen from "../../components/screens/AboutUs/AboutScreen";
import styled from "styled-components";

export default function About() {
  return (
    <AboutStyle>
      <AboutScreen />
    </AboutStyle>
  );
}

const AboutStyle = styled.div`
  min-height: 90vh;
  width: 100vw;
  height: 100%;
  top: 10vh;
  position: relative;
  margin-bottom: 10vh;
`;
