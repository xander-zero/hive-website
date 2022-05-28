
import styled from "styled-components";
import NavContainer from "../../core/layout/NavContainer";
import { useRouter } from "next/router";
import Link from "next/link";
import {FiTwitter, FiInstagram} from "react-icons/fi";
import {FaTelegramPlane} from "react-icons/fa";
import {AiOutlineYoutube} from "react-icons/ai";
import {AiOutlineLinkedin} from "react-icons/ai";

const Footer = () => {

    const router = useRouter();

    return <FooterStyle>
        <NavContainer>
        <div className="nav-links">
            <div className="links">
               <Link  href="/" passHref>
                   <p className={`nav-element ${router.pathname === "/" ? "active" : ""}`}>صفحه اصلی</p>
               </Link>
               <Link  href="about" passHref>
                   <p className={`nav-element ${router.pathname === "/about" ? "active" : ""}`}>درباره ما</p>
               </Link>
               <Link  href="contact" passHref>
                   <p className={`nav-element ${router.pathname === "/contact" ? "active" : ""}`}>تماس با ما</p>
               </Link>
            </div>

            <div className="media-link">
                <ul className="links-contact">
                    <li><FiTwitter/></li>
                    <li><FiInstagram/></li>
                    <li><FaTelegramPlane/> </li>
                    <li><AiOutlineYoutube/></li>
                    <li><AiOutlineLinkedin/></li>
                </ul>
            </div>
        </div>
        </NavContainer>
    </FooterStyle>
}

const FooterStyle = styled.div`
    width: 100%;
    height: 10vh;
    min-height:10vh;
    background-color: #fff;
    display: flex;
    align-items:center;
    justify-content: center;
    bottom: 0;
    left:0 ;

    .nav-links {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
  }

  .nav-element {
      cursor: pointer;
      padding: 0.5rem 1rem;
      color: #3F5D7D;
  }

  .nav-element.active {
     color : #21D178;
  }

  .logo {
      cursor: pointer;
  }

  .links {
      display: flex;
      /* margin-right: 1rem; */
  }

  
  .links-contact {
      display: flex;
      align-items: center;

      li {
          cursor: pointer;
          padding : 0.5rem;
          font-size: 2rem;
      }
  }

`;


export default Footer;