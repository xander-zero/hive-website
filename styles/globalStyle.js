import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * , *::after , *::before {
      margin: 0 ;
      padding: 0;
      box-sizing: border-box;
      direction:rtl !important;
      font-family: "IRANSans" !important;
    }
    body {
        overflow-x: hidden;
        width: 100vw;
    }

    html{
    @media (max-width: 1700px){
        font-size: 75%; 
    }
    
    }

    input {
        -webkit-appearance: none;
    }

    input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 10%;
  height: 100%;
`;
