import React from "react";
import styled from "styled-components";

export const AboutScreen = () => {



  

  return (
    <AboutStyle>
      <div className="head-about">
        <div className="right-sec">
          <div className="title-container">
            <div className="title">
              <h1>
                تجربه‌ی زندگی راحت‌تر، سریع‌تر و به‌صرفه‌تر با سوپراپلیکیشن
                اسنپ!
              </h1>
            </div>
            <div className="subtitle">
              <p>
                از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیت
                سفر، مشاوره‌ی پزشکی و روانشناسی، رزرو هتل و... را میتوانید با
                سوپراپلیکیشن اسنپ انجام دهید.
              </p>
            </div>
          </div>
        </div>
        <div className="left-sec">
          <img
            src="https://web-cdn.snapp.ir/snapp-website/images/about/about-intro--mobile.jpg"
            alt="about-back-1"
          />
        </div>
      </div>
      <div className="aboutus-des main-container">
        <div className="title">
          <h2>درباره‌ی ما</h2>
        </div>
        <div className="subtitle">
          <p>
            شرکت ایده گزین ارتباطات روماک، با نام تجاری اسنپ، در سال ۱۳۹۳
            راه‌اندازی شد. اسنپ شرکتی پویا و مبتنی بر داده است که از ذهن پویا و
            خلاق جوانان ایران قدرت می‌گیرد. این شرکت به عنوان راهکاری اثربخش
            برای انجام سفرهای درون شهری، فعالیت خود را با یک تیم کوچک آغاز کرد و
            در کمتر از چند سال به بزرگ‌ترین سامانه هوشمند حمل‌ونقل در ایران
            تبدیل شد. دکتر ایاد الکسار و دکتر محمود فوز هم‌بنیان‌گذاران این شرکت
            هستند. اپلیکیشن اسنپ بعد از گذشت چهار سال از شروع فعالیتش به سوپراپ
            تبدیل شد و اکنون خدمات گروه اسنپ در آن ارائه می‌شود. امکان درخواست
            خودرو، موتور، وانت، سفارش غذا، خدمات پزشکی و مشاوره آنلاین، رزرو هتل
            و اقامتگاههای ارزان، خرید بلیط هواپیما، اتوبوس و … در این اپلیکیشن
            جامع به صورت یکجا فراهم است.
          </p>
        </div>
      </div>
      <div className="origin-activity main-container">
        <div className="title">اسنپ در چه شهرهایی فعال است؟</div>
        <div className="map-img">
          <img
            src="https://web-cdn.snapp.ir/snapp-website/images/about/active-cities.jpg"
            alt="map-img"
          />
        </div>
      </div>
      <div className="send-link-address main-container">
        <div className="title">
          <h2>زندگی خودتو با اسنپ ساده‌تر کن!</h2>
        </div>
        <div className="send-link-input">
          <input
            className="phone-input"
            type="number"
            placeholder="09xxxxx6789"
          />
          <button className="send-msg-btn">ارسال لینک</button>
        </div>
      </div>
    </AboutStyle>
  );
};

const AboutStyle = styled.div`
  width: 100%;

  .head-about {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 40vh;

    .right-sec {
      width: 50%;
      background-color: #21aa58;
      height: 100%;
      color: #fff;

      .title-container {
        padding: 1rem 20% 1rem 1.7rem;
        display: flex;
        align-items: center;
        flex-direction: column;

        .title {
          font-size: 1.2rem;
        }

        .subtitle {
          font-size: 1.3rem;
        }
      }
    }

    .left-sec {
      width: 50%;
      height: 100%;
      /* height: 40vh; */

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .aboutus-des {
    margin-top: 5rem;

    .title {
      font-size: 1.5rem;
    }

    .subtitle {
      font-size: 1.1rem;
      color: #514a4a;
      line-height: 2.5rem;
      font-weight: 500;
    }
  }

  .origin-activity {
    margin-top: 4rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;

    .title {
      font-size: 1.7rem;
      color: #21aa58;
      font-weight: 600;
      margin-bottom: 2rem;
    }

    .map-img {
      width: 100%;
      height: 50vh;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  .send-link-address {
    width: 100%;
    margin-bottom: 2rem;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;

    .phone-input {
      padding: 1rem 2rem;
      width: 50%;
      background-color: #fff;
      color: #514a4a;
      outline: none;
      border: 2px solid #fff;
      border-right-style: hidden;
      border-left-style: hidden;
      border-top-style: hidden;
      border-bottom: 1px solid #21aa58;
      font-size: 1.2rem;
      -webkit-appearance: none;
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }

    .phone-input::placeholder {
      color: #514a4a;
      font-size: 1.2rem;
    }

    .send-msg-btn {
      margin-right: 1rem;
      padding: 2% 7%;
      background-color: #21aa58;
      color: #fff;
      border: none;
      outline: none;
      border-radius: 0.5rem;
      font-weight: 600;
      font-size: 1.1rem;
      margin-left: 1rem;
      cursor: pointer;
    }
  }

  
  @media screen and (max-width: 1400px) {
     .head-about {
       .right-sec {
         padding-bottom: 2rem;
       }
     }
     .aboutus-des {
       padding: 2rem;
     }

     .send-link-address  {
       padding: 2rem;
     }
  }


  @media screen and (max-width: 1100px) {
    .head-about {
      flex-direction: column-reverse;
      height: 100%;

      .right-sec {
        width: 100%;
        padding-bottom: 2rem;

        .title-container {
          padding: 2rem;
          font-size: 75% !important;

          .title {
            font-size: 1.4rem;
          }

          .subtitle {
            font-size: 1.2rem;
            padding-bottom: 1rem;
          }
        }
      }

      .left-sec {
        width: 100%;
        height: 40vh;
      }
    }

    .aboutus-des {
      padding: 2rem;
    }
  }

  @media screen and (max-width: 100px) {
    .right-sec {
      .title-container {
        .title {
          font-size: 1.1rem;
        }
        .subtitle {
          font-size: 1.1rem;
        }
      }
    }
  }

  @media screen and (max-width: 800px) {
    .title {
      font-size: 90% !important;
    }

    .subtitle {
      font-size: 100% !important;
    }
  }
`;

export default AboutScreen;
