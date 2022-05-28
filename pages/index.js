import Head from 'next/head'
import Image from 'next/image'

import styled from "styled-components";

import styles from '../styles/Home.module.css';
import HeroSection from '../components/screens/Home/HeroSection';
import AppFeatureSection from '../components/screens/Home/AppFeatureSection';
import FeatureSection from '../components/screens/Home/FeatureSection';
import ServiceSection from '../components/screens/Home/ServiceSection';
import AnswerSection from '../components/screens/Home/AnswerSection';

export default function Home() {
  return (
    <HomeStyle className={styles.container}>
      <HeroSection />
      <AppFeatureSection/>
      <FeatureSection/>
      <AnswerSection/>
      <ServiceSection/>
    </HomeStyle>
  )
}

const HomeStyle = styled.div`
   min-height: 90vh;
   width: 100vw;
   height: 100%;
   top: 10vh;
   position: relative;
   margin-bottom: 10vh;
`;