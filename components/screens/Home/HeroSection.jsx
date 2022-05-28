import styled from "styled-components";
import Link from "next/link";

const HeroSection = () => {
  return (
    <HeroSectionStyle>
      <HeaderHero>
        <div className="right">
          <div className="title">
            <h1>
              تجربه‌ی زندگی راحت‌تر، سریع‌تر و به‌صرفه‌تر با سوپراپلیکیشن اسنپ!
            </h1>
          </div>
          <div className="desc">
            <p>
              از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیط
              سفر، مشاوره‌ی پزشکی و روانشناسی، رزرو هتل و... را میتوانید با
              سوپراپلیکیشن اسنپ انجام دهید.
            </p>
          </div>
          <div className="send-phone-msg">
            <input
              className="phone-input"
              type="number"
              placeholder="09xxxxx6789"
            />
            <button className="send-msg-btn">ارسال لینک</button>
          </div>
          <div className="enter-app">
            <button className="enter-app-btn">ورود به اپلیکیشن اسنپ</button>
          </div>
        </div>
        <div className="left">
          <img
            src="https://web-cdn.snapp.ir/snapp-website/images/homepage/intro_desktop.jpg"
            alt="snapback"
          />
        </div>
      </HeaderHero>
      <AppVersionStyle>
        <div className="apps-links">
          <Link href="/" passHref>
          <img className="apps-link-img" src="https://web-cdn.snapp.ir/snapp-website/images/homepage/markets/google-play-badge.png" alt="google-play" />
          </Link>
          <Link href="/" passHref>
          <img className="apps-link-img" src="https://web-cdn.snapp.ir/snapp-website/images/homepage/markets/bazaar.png" alt="snapp-app" />
          </Link>
          <Link href="/" passHref>
          <img className="apps-link-img" src="https://web-cdn.snapp.ir/snapp-website/images/homepage/markets/snapp-pwa.png" alt="snapp-website" />
          </Link>
          <Link href="/" passHref>
          <img className="apps-link-img" src="https://web-cdn.snapp.ir/snapp-website/images/homepage/markets/sibapp-badge-white.png" alt="sibe-app" />
          </Link>
          <Link href="/" passHref>
          <img className="apps-link-img" src="https://web-cdn.snapp.ir/snapp-website/images/homepage/markets/iApps.png" alt="ip-as" />
          </Link>
        </div>
      </AppVersionStyle>
    </HeroSectionStyle>
  );
};

const HeroSectionStyle = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #fff;
`;

const HeaderHero = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70vh;
  position: relative;

  @media screen and (max-width : 1190px) {
      display : flex;
      flex-direction: column-reverse;
       height: 40vh;
       font-size: 75%;
       position: relative;  
       height: auto;
  
       .apps-links {
         margin: 0 !important;
         position: absolute;
         bottom: 0;
       }
       .right {
         width: 100% !important;
         min-height: 40vh;
         font-size: 75%;
         position: relative;
         /* overflow: hidden; */
         font-size: 75% !important;

         .title {
            font-size: 1rem !important; 
         }
          padding-bottom: 1rem;

          .send-phone-msg {
            justify-content: space-between ;
          }

          .enter-app {
            display: flex;
            align-items: center;
            justify-content: center;

            button {
              background-color: #fff;
              color : #221f1f;
            }
          }
        }

       .left {
         width : 100% !important;
         height: 40vh;
       } 
  }

  .right {
    width: 50%;
    height: 100%;
    background-color: #21aa58;
    color: #fff;
    padding-right: 12%;
    padding-left: 2rem;

    .title {
      font-weight: 600;
      font-size: 1.4rem;
    }

    .desc {
      line-height: 3.5rem;
      font-size: 1.5rem;
    }

    .send-phone-msg {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: flex-start;

      .phone-input {
        padding: 1rem 2rem;
        width: 50%;
        background-color: #21aa58;
        color: #fff;
        outline: none;
        border: 2px solid #fff;
        border-right-style: hidden;
        border-left-style: hidden;
        border-top-style: hidden;
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
        color: #fff;
        font-size: 1.2rem;
      }

      .send-msg-btn {
        margin-right: 1rem;
        padding: 2% 7%;
        background-color: #fff;
        color: #21aa58;
        border: none;
        outline: none;
        border-radius: 0.5rem;
        font-weight: 600;
        font-size: 1.1rem;
        margin-left: 1rem;
        cursor: pointer;
      }
    }

    .enter-app-btn {
        cursor: pointer;
        margin-top: 10%;
        padding: 0.5rem 4rem;
        flex-wrap: nowrap;
        min-width: 50%;
        background-color: #21aa58;
        border: 1px solid #fff;
        border-radius: 0.6rem;
        color : #fff;
        font-size: 1.4rem;
        font-weight: 600;
    }
  }

  .left {
    width: 50%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const AppVersionStyle = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-wrap: wrap;
   width: 100%;

   .apps-links {
      margin: 5% 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      width: 100%;
      gap: 1rem;

      .apps-link-img {
          cursor: pointer;
          width: 200px;
          height: 80px;
          border-radius: 0.5rem ;
          object-fit: contain;
      }

   }

`;

export default HeroSection;
