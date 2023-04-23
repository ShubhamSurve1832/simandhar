import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import StudentEngagement from '../CPA/StudentEngagement'
import SECFeactures from '../CPA/SECFeactures'
import AchieversSection from '../CPA/AchieversSection'
import SecBanner from '../CPA/secBanner'
import NewsLetter from '../CPA/NewsLetter'
import SocialMedia from '../CPA/SocialMedia'
import FaqSection from '../CPA/FaqSection'



const sec = () => {
    return (
        <>
            <Head>
                <title>SEC - Student Engagement Council</title>
            </Head>
            <div className="width-50">
            <Header  showData={true}/>
            </div>
            <StudentEngagement />
            <SecBanner />
            <SECFeactures />
            <AchieversSection dataCard_id={74} showData={true}/>
            <NewsLetter />
            <SocialMedia />
            <FaqSection />

        </>
    )
}

export default sec