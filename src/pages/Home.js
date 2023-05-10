import React from 'react'
import Base from "../components/Base";
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import HeroSection2 from '../components/HeroSection2';
import FAQSection from '../components/FAQSection';
import Stats from '../components/Stats';

const Home = () => {
  
  const converted = {
    width: "50px",
    border: "3px solid rgb(18, 150, 202)",
  }

  return (
   <Base>
 
<h1 className="m-5 text-5xl font-bold lowercase font-Sora">
          Home
    <div style={converted} className='mx-2 '></div>
    </h1>
    <HeroSection/>
    <FeatureSection/>
    <FAQSection/>
    <Stats/>
    </Base>
  )
}

export default Home