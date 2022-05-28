import styled from "styled-components";

import React from 'react'
import { searchDataTable } from "../../../utility/data/searchDataTable";


export const ContactScreen = () => {

  const renderSearchTable = () => {
    return searchDataTable.map((data, index) => <div className="item-search-place" key={index}><h2>{data.title}</h2><p>{data.subtitle}</p></div>)
  }

  return (
    <ContactStyle>
      <div className="map-back">
          
      </div>
      <div className="search-map main-container">
         <div className="search-place">
                  {renderSearchTable()}
         </div>
         <div className="contact-data">
              <h3 className="title">
                تماس با ما
              </h3>
              <div className="top">
                <li>تلفن تماس : 021 41849000</li>
                <li>و021 91039000  </li>
                <li>فکس : 021 89 77 47 88</li>
                <li className="post-el">پست الکترونیکی: info@snapp.cab</li>
                <li className="green-word">دفتر امور کاربران راننده و مسافر</li>
                <li>شماره تماس: 021 41849000</li>
                <li>و021 91039000  </li>
                <li>خدمات مربوط به مسافران به صورت غیر حضوری عرضه میشود</li>
                <li className="green-word office-gl">دفتر اسنپ باکس و اسنپ بایک در تهران</li>
                <li>خیابان گاندی جنوبی, خیابان هفدهم, پلاک 27</li>
                <li>تلفن پشتیبانی 021 96642</li>
              </div>
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
     
    </ContactStyle>
  )
}

const ContactStyle = styled.div`
    width: 100%;
    
    .map-back {
      background-color:#E8EAED;
      width: 100%;
      height: 75vh;
    }

    .search-map {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      position: static;
      flex-wrap: wrap;
      transform: translateY(-10vh);
      .search-place {
        width: 60%;
        background-color: #fff;
        box-shadow: -2px 5px 121px -17px rgba(0,0,0,0.59);
        border-radius: 1rem;

        .item-search-place {
          display: flex;
          flex-direction: column;
          width: 100%;
          padding: 1rem 2rem;
        }
      }

      .contact-data {
        border-radius: 1rem;
        width: 30%;
        background-color: #fff;
        box-shadow: -2px 5px 121px -17px rgba(0,0,0,0.59);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: fixed;
        top: 0;
        left: 0;

        .top {
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          list-style: none;
          
          .green-word {
            color : #00D170;
            font-weight: 600;
            font-size: 1.2rem;
          }

          li {
            padding-bottom: 0.5rem;
            color : #686060;
          }

          .post-el {
            margin-bottom: 1rem;
          }

          .office-gl {
            margin-top: 1rem;
          }
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

  @media screen and (max-width : 1100px) {

    .search-map {
      flex-direction: column;
      align-items: center;
      justify-content : center;
    }

    .search-place {
      width: 90% !important;
      z-index: 100 ;
    }

    .contact-data {
      margin-top: 2rem;
      width: 90% !important;
      position: relative !important;
    }
  }
`;


export default ContactScreen;