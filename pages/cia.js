import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import BannerSection from '../CPA/BannerSection'
import ExamSection from '../CPA/ExamSection'
import HelpSection from '../CPA/HelpSection'
import CurriculumSectionone from '../CPA/CurriculumSectionone'
import ContentPartnerSection from '../CPA/ContentPartnerSection'
import TableSection from '../CPA/ciaTableone'
import Trainer from '../CPA/trainer'
import CiaTabelTwo from '../CPA/ciaTabelTwo'
import CiaTabelThree from '../CPA/CiaTabelThree'
import FaqSection from '../CPA/FaqSection'
import Gallery from '../CPA/Gallery'


import bannerData from '../database/data/banner.json'
import examData from '../database/data/exam.json'
import helpData from '../database/data/helpSection.json'
import CurriculumSectiononeData from '../database/data/curriculumsectionOne.json'
import contentPartnerData from '../database/data/contentSection.json'
import trainerData from '../database/data/trainerData.json'
import galleryData from '../database/data/gallerySection.json'


const cia = () => {
  return (
    <>
      <Head>
        <title>CIA - Simandhar Education</title>
      </Head>
      <Header />
      <div className="banner-ciaPage">
      <BannerSection bannerData={bannerData.ciaPage} dataCard_id={45}/>
      </div>
      <div className='cia-exam-section'>
        <ExamSection examData={examData.ciaPage} dataCard_id={46}/>
      </div>
      <div className='cia-exam-section black-bag '>
        <ExamSection examData={examData.ciaPageone} dataCard_id={47}/>
      </div>
      <div className='background-none key-takeways pt-8 cia-help-section' >
        <HelpSection helpData={helpData.ciaPage}  dataCard_id={48}/>
      </div>
      <div className='cia-gallery'>
      <Gallery galleryData={galleryData.ciaGallery} dataCard_id={80}/>
      </div>
      <div className='cia-tab cma-tab'>
        <CurriculumSectionone  dataCard_id={51}/>
      </div>
      <div className='cia-content-partner'>
      <ContentPartnerSection contentPartnerData={contentPartnerData.eaPage} showData={true} dataCard_id={41}/>
      </div>
      <TableSection/>
      <Trainer trainerData={trainerData.ciaPage}/>
      <div className='exam-fee-cia'>
      <CiaTabelTwo/>
      </div>
      <CiaTabelThree/>


      <FaqSection/>
    </>

  )
}

export default cia