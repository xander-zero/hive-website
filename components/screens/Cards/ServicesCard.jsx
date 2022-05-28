import React from 'react';
import styled from "styled-components";

export const ServicesCard = ({service}) => {
  return (
    <ServicesCardStyle>
        <div className="icon-serv">
             <img src={service.iconPath} alt="service-icon" />
        </div>
        <div className="sub-icon">
            <div className="title">
              <h3>{service.title}</h3>
            </div>
            <div className="sutitle">
                <p>
                 {service.subtitle}
                </p>
            </div>
        </div>
    </ServicesCardStyle>
  )
}

const ServicesCardStyle = styled.div`
    
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 30%;
    height: 500px;

    .icon-serv {
         width: 100%;
         height: 50%;
         background-color: #F2F5F8;
         border-radius: 1rem;

         display: flex;
         align-items: center;
         justify-content: center;
    }

    .sub-icon {
        padding-right: 1rem;
        display: flex;
        flex-direction: column;

        .title {
            font-weight: 500;
            font-size: 1.2rem;
        }

        .sutitle {
            font-size: 1.2;
            color: #857f7f;
        }
    }

   @media screen and (max-width : 1100px) {
       width: 40% !important;
   } 

   @media screen and (max-width : 800px) { 
       width: 80% !important;
       align-items: center;
       justify-content: center;
       text-align: center;
   }

`;

export default ServicesCard;