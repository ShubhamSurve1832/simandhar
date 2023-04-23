import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import BannerSection from '../CPA/BannerSection'
import ExamSection from '../CPA/ExamSection'
import Batches from '../CPA/Batches'
import AchieversSection from '../CPA/AchieversSection'
import Analytics from '../CPA/AnalyticsSection'
import ContentPartnerSection from '../CPA/ContentPartnerSection'
import FaqSection from '../CPA/FaqSection'


import bannerData from '../database/data/banner.json'
import achieverData from '../database/data/achieversSection.json'
import contentPartnerData from '../database/data/contentSection.json'
import examData from '../database/data/exam.json'




export default function DataAnalytics() {
  return (
    <>
      <Head>
        <title>Data Analytics - Simandhar Education</title>
      </Head>
      <Header />
      {/* <CpaProgram /> */}
      <div className='da-banner'>
        <BannerSection bannerData={bannerData.daPage} showData={true} dataCard_id={58} />
      </div>
      <div className='da-exam'>
        <ExamSection examData={examData.daPage} dataCard_id={59} /></div>
      <Batches />
      <div className='da-achievers'>
        <AchieversSection achieverData={achieverData.daPage} showData={true} showData1={true} dataCard_id={60} />
      </div>
      <div>
        <Analytics />
      </div>
      <div className='ifrs-content'>
        <ContentPartnerSection contentPartnerData={contentPartnerData.eaPage} showData={true} dataCard_id={41} />
      </div>
      <FaqSection />



    </>
  )
}
