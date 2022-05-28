import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import NavContainer from "../../core/layout/NavContainer";
import { useRouter } from "next/router";

const Navbar = () => {

    const router = useRouter();


    return <NavStyle>
     <NavContainer>
        <div className="nav-links">
            <Link href="/" passHref className="logo">
              <img src="https://web-cdn.snapp.ir/snapp-website/icons/snappTextLogo.svg" alt="snap-logo" />
            </Link>
            <div className="links">
               <Link  href="/" passHref>
                   <p className={`nav-element ${ router.pathname === "/" ? "active" : ""}`}>صفحه اصلی</p>
               </Link>
               <Link  href="/about" passHref>
                   <p className={`nav-element ${router.pathname === "/about" ? "active" : ""}`}>درباره ما</p>
               </Link>
               <Link  href="/contact" passHref>
                   <p className={`nav-element ${router.pathname === "/contact" ? "active" : ""}`}>تماس با ما</p>
               </Link>
            </div>
        </div>
     </NavContainer>
    </NavStyle>
}

const NavStyle = styled.div`
  width : 100%;
  height: 10vh;
  min-height: 10vh;
  background-color: #fff;
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-links {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
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
      margin-right: 2rem;
  }
`;



export default Navbar;