import React from 'react';

import styled from "styled-components";


export const AbilityCard = ({cardData}) => {
  return (
    <AbilityCardStyle>
        <div className="icon-head">
            <img src={cardData.iconPath} alt="icon-img" />
        </div>
        <div className="desc">
        <div className="title">
            <h3>{cardData.title}</h3>
        </div>
        <div className="subtitle">
            <p>{cardData.subtitle}</p>
        </div>
        </div>
    </AbilityCardStyle>
  );
}

const AbilityCardStyle = styled.div`
     width: 45%;
     display: flex;
     align-items: center;
     justify-content: flex-start;
     background-color: #fff;
     border-radius: 2rem; 
     padding: 1rem;

     .icon-head {
         width: 100%;
         display: flex;
         align-items: center;
         justify-content: center;
     }

     .desc {
         display: flex;
         flex-direction: column;
         align-items: flex-start;
         justify-content: flex-start ;
         padding-left: 1rem;

         .title {
             margin-top: 1rem;
         }

         .subtitle {
             color : #857f7f;
         }
     }


     @media screen and (max-width : 1100px) {
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        .desc {
            flex-direction: column;
            align-items: center;
        }
      }


`;


export default AbilityCard; 
