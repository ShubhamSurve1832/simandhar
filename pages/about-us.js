import React from 'react'
import Head from 'next/head';
import AboutUsBanner from '../about/AboutUsBanner';
import ExpPlaceInfo from '../about/ExpPlaceInfo';
import TESeducation from '../about/TESection';
import VisionSection from '../about/VisionSection';
import PrinceSection from '../about/PrinceSection';
import PartnersSection from '../about/PartnersSection';
import RightStep from '../about/RightStep';
import Header from '../components/header'


const aboutUS = () => {
  return (
    <>
       <Head>
        <title>About Us - Simandhar Education</title>
      </Head>
<Header />      
<AboutUsBanner />
<ExpPlaceInfo />
<TESeducation/>
<VisionSection dataCard_id={13}/>
<RightStep />
<PrinceSection/>
<PartnersSection/>
</>
  )
}

export default aboutUS;