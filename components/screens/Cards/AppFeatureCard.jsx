import React from "react";
import styled from "styled-components";

const AppFeatureCard = ({ service }) => {
  return (
    <CardAppStyle>
      <div className="icon-li">
        <img src={service?.iconPath} alt="service-icon" />
      </div>
      <div className="des-service">
        <div className="title">
          <p>{service.title}</p>
        </div>
        <div className="subtitle">
          <p>{service.subtitle}</p>
        </div>
      </div>
    </CardAppStyle>
  );
};

const CardAppStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  /* width: 30%; */
  background-color: #fff;
  border-radius: 1rem;
  min-width: 300px;
  padding: 1rem;
  text-align: center;

  des-service {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-right: 1rem;
    text-align: center;
    width: 100%;

    .title {
      text-align: center;
    }

    .subtitle {
      text-align : center;
    }
  }
  .icon-li {
    width: 70px;
    height: 70px;
    max-width: 70px;
    max-height: 70px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

export default AppFeatureCard;
