import React from "react";
import styled from "styled-components";
import { servicesCardTable } from "../../../utility/data/servicesCardTable";
import ServicesCard from "../Cards/ServicesCard";

export const AnswerSection = () => {

    const renderCardService = () => {
        return servicesCardTable.map((service, index) => <ServicesCard key={index} service={service} /> );
    }

  return (
    <AnswerSectionStyle>
      <div className="top-sec">
        <div className="img-anser">
            <img src="https://web-cdn.snapp.ir/snapp-website/images/homepage/asghar-image.jpg" alt="img-anser" />
        </div>
        <div className="desc-sub main-cotainer" >
          <div className="title">
            <h2>سوپر اپ اسنپ؛ پاسخی به تمام نیازها</h2>
          </div>
          <div className="subtitle">
            <p>
              اسنپ، اولین تاکسی اینترنتی ایران، بعد از پنج سال فعالیت در حوزه‌ی
              تردد شهری، به یک سوپر‌اپ با خدمات متنوع تبدیل شد. سوپراپ اسنپ
              راه‌حلی جدید و ساده است که با استفاده از آن تنها با یک اپلیکیشن
              می‌توانید علاوه بر درخواست خودرو، موتور و وانت از خدمات متعددی از
              جمله سفارش غذا، پزشک و مشاور آنلاین، خرید از سوپرمارکت‌ها و
              فروشگاه‌ها، اسباب‌کشی، خرید بلیط (هواپیما، اتوبوس، قطار)، رزرو
              هتل، پرداخت قبض و خرید شارژ استفاده کنید.
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-sec main-container">
           {renderCardService()}
      </div>
    </AnswerSectionStyle>
  );
};

const AnswerSectionStyle = styled.div`
  width: 100%;
  /* min-height: 40vh; */
  .top-sec {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    .img-anser {
      width: 50%;
      height: 50vh;
      img {
          width: 100%;
          height: 100%;
          object-fit: cover;
      }
    }

    .desc-sub {
      width: 50%;
      padding-left: 15%;
      padding-right: 2rem;
      padding-top: 2rem;

      .title {
          font-weight: 600;
          font-size: 1.2rem;
      }

      .subtitle {
          font-size: 1.2rem;
          font-weight: 500;
          line-height: 2rem;
          color: #857f7f;
      }
    }
  }

  .bottom-sec {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 5%;
      transform: translateY(-10%) ;
  }

  @media screen and (max-width : 1190px) { 
    .top-sec {
        flex-direction: column;

        .img-anser {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .desc-sub  {
            width: 100%;
        }
    }
    .bottom-sec{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        transform: translateY(0) !important;
        padding: 1rem;
        gap: 3%;
    }
  }

  
`;

export default AnswerSection;
