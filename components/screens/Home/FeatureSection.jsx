import styled from "styled-components";

const FeatureSection = () => {
  return (
    <FeatureSectionStyle className="main-container">
      <img
        src="https://web-cdn.snapp.ir/snapp-website/images/homepage/slider/Food.jpg"
        alt="img-mie"
      />
    </FeatureSectionStyle>
  );
};

const FeatureSectionStyle = styled.div`
  border-radius: 2rem;

  width: 100%;
  background-size: contain;
  height: 40vh;
  padding: 4rem 2rem;
  margin-top: 5rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }

  @media screen and (max-width : 500px)
  {
    img {
      object-fit: fill-cover;
    }
  }


`;

export default FeatureSection;
