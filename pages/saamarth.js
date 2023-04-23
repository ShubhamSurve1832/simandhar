import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import BannerSection from '../CPA/BannerSection'
import TableSection from '../CPA/saamarthTabelone'
import TableSectiontwo from '../CPA/saamarthTabeltwo'
import HelpSection from '../CPA/HelpSection'
import ContentPartnerSection from '../CPA/ContentPartnerSection'
import FaqSection from '../CPA/FaqSection'


import bannerData from '../database/data/banner.json'
import helpData from '../database/data/helpSection.json'
import contentPartnerData from '../database/data/contentSection.json'

const saamarth = () => {
    return (
        <>
            <Head>
                <title>Saamarth- Simandhar Education</title>
            </Head>
            <Header />
            <div className="banner-saamarthPage">
                <BannerSection bannerData={bannerData.saamarthPage} dataCard_id={61} />
            </div>
            <div className="saamarthPage-table pt-8">
                <TableSection />
            </div>
            <div className="saamarthPage-tabletwo">
                <TableSectiontwo />
            </div>

            <div className='background-none key-takeways saamarth-help-section' >
                <HelpSection helpData={helpData.saamarthPage} dataCard_id={62}/>
            </div>

            <div className="saamarthPagepartner">
                <ContentPartnerSection contentPartnerData={contentPartnerData.eaPage} showData={true} dataCard_id={41}/>
            </div>
            <FaqSection />
        </>
    )
}

export default saamarth