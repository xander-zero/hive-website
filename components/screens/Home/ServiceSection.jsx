import styled from "styled-components";
import { ablityCardTable } from "../../../utility/data/ablityCardTable";
import AbilityCard from "../Cards/AbilityCard";

const ServiceSection = () => {

    const renderablityCard = () => {
        return ablityCardTable.map((cardData, index) => <AbilityCard key={index} cardData={cardData}/>  )
    }

  return (
    <ServiceSectionStyle>
      <div className="main-container">
        <div className="head-title">
          <div className="title">
            <h2>در کمتر از ۱۰ دقیقه ثبت‌نام کنید و به ناوگان اسنپ بپیوندید.</h2>
          </div>
          <div className="subtitle">
            <p>
              بدون نیاز به مراجعه‌ی حضوری، از طریق این صفحه، تمام مراحل ثبت‌نام
              را اینترنتی انجام دهید
            </p>
          </div>
          <div className="submit-enter">
            <button className="sub-btn-enter">ثبت نام رانندگان</button>
          </div>
        </div>
        <div className="video-player">
          <video
            controls="auto"
            className="radius-lg"
            src="https://web-cdn.snapp.ir/snapp-website/videos/homepage/jazb-ranande.mp4"
            poster="https://web-cdn.snapp.ir/snapp-website/images/homepage/jazb-ranande-cover.jpg"
            controlsList="nodownload"
            type="video/mp4"
            preload="none"
          >
          </video>
        </div>
        <div className="ablity-cards">
              {renderablityCard()}
        </div>
      </div>
    </ServiceSectionStyle>
  );
};

const ServiceSectionStyle = styled.div`
  width: 100%;
  background-color: #f2f5f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  .head-title {
    margin-bottom: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    .title {
      font-weight: 600;
      font-size: 2rem;
    }

    .subtitle {
      font-size: 1.5rem;
      opacity: 0.9;
      font-weight: 500;
    }

    .sub-btn-enter {
      cursor: pointer;
      padding: 1rem 2rem;
      border: none;
      background-color: #21aa58;
      color: #f2f5f8;
      outline: none;
      width: 200px;
      height: 70px;
      border-radius: 5%;
      font-weight: 700;
      font-size: 1.2rem;
    }
  }

  .video-player {
      width: 100%;
      overflow: hidden;
      border-radius: 1rem;
      .radius-lg {
          width: 100%;
      }
    }

    .ablity-cards {
        padding : 2rem 1rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2rem ;
    }

    @media screen and (max-width : 1190px) {
        .head-title {
            padding : 2rem;
        }
     }


     @media screen and (max-width : 1100px) {

        .head-title {
          .title {
            font-size: 1.5rem !important;
          }

          .subtitle {
            font-size: 1.2rem;
          }
        }
        
        .ablity-cards {
            flex-direction: column;
        }
    }

`;

export default ServiceSection;
