


import styled from "styled-components";
import UseScrollTop from "../../utility/hooks/useScrollTop";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useRouter } from "next/router";
import {Fragment} from "react";


const AppContainer = ({Component, pageProps}) => {

  const router = useRouter();

  return (
    <Fragment>
      <UseScrollTop />
      <Navbar />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer/>
    </Fragment>
  );
};

const Main = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export default AppContainer;
