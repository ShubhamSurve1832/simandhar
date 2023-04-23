import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import BannerSection from '../CPA/BannerSection'
import ExamSection from '../CPA/ExamSection'
import HelpSection from '../CPA/HelpSection'
import Gallery from '../CPA/Gallery'
import CurriculumSectionone from '../CPA/CurriculumSectionone'
import ContentPartnerSection from '../CPA/ContentPartnerSection'
import TableSection from '../CPA/ifrsTableone'
import AchieversSection from '../CPA/AchieversSection'
import FaqSection from '../CPA/FaqSection'


import bannerData from '../database/data/banner.json'
import examData from '../database/data/exam.json'
import helpData from '../database/data/helpSection.json'
import galleryData from '../database/data/gallerySection.json'
import CurriculumSectiononeData from '../database/data/curriculumsectionOne.json'
import contentPartnerData from '../database/data/contentSection.json'
import achieverData from '../database/data/achieversSection.json'

const ifrs = () => {
    return (
        <>
            <Head>
                <title>IFRS- Simandhar Education</title>
            </Head>
            <Header />
            <div className="banner-ifrsPage">
                <BannerSection bannerData={bannerData.ifrsPage} dataCard_id={53} />
            </div>
            <div className='ifrs-exam-section'>
                <ExamSection examData={examData.ifrsPage} dataCard_id={54} />
            </div>
            <div className='background-none key-takeways ifrs-help-section' >
                <HelpSection helpData={helpData.ifrsPage} dataCard_id={55} />
            </div>
            <div className="ifrs-gallery-page">
                <Gallery dataCard_id={81} />
            </div>
            <div className='ifrs-tab cma-tab'>
                <CurriculumSectionone CurriculumSectiononeData={CurriculumSectiononeData.ifrsPage} dataCard_id={56} />
            </div>
            <ContentPartnerSection contentPartnerData={contentPartnerData.eaPage} showData={true} dataCard_id={41} />
            <TableSection />
            <div className='ifsr-achiever'>
                <AchieversSection achieverData={achieverData.ifrsPage} showData={true} dataCard_id={57} />
            </div>
            <FaqSection />
        </>
    )
}

export default ifrs