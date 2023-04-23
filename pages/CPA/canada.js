import React from 'react'
import Head from 'next/head'
import Header from '../../components/header'
import CanadaBanner from '../../CPAInner/canadaBanner'
import BannerSection from '../../CPA/BannerSection'
import CanadaTable from '../../CPAInner/canadatable'
import FaqSection from '../../CPA/FaqSection'


import bannerData from '../../database/data/banner.json'

const canada = () => {
    return (
        <>
            <Head>
                <title>Canada - Simandhar Education</title>
            </Head>
            <div className="width-50">
                <Header showData={true} />
            </div>
            <div className="canada-banner">
                <CanadaBanner  />
                <BannerSection bannerData={bannerData.cpaPage} dataCard_id={86} />
            </div>
            <CanadaTable />
            <FaqSection />

        </>
    )
}

export default canada