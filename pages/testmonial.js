import React from 'react'
import CommonForm from '../components/CommonForm'
import Head from 'next/head'
import Header from '../components/header'
import AchieversSection from '../CPA/AchieversSection'
import achieverData from '../database/data/achieversSection.json'
import Image from 'next/image'
import CpacmaPlacement from '../CPAInner/cpacmaPlacement'
import indexData from '../database/index.json'

const Testmonial = () => {
    return (
        <>
            <Head>
                <title>Alumni & Placements - Simandhar Education</title>
            </Head>
            <div className='width-50'>
                <Header showData={true} />
            </div>
            <section className="testmonial-hero-section">
                <h2 className="heading02">Simandhar's Alumni & Placements</h2>
                <div className="container-l">
                    <div className="hero-flex">
                        <div className="left-form-box right-form-box">
                            <CommonForm showTitle={true} showgclid={true} showcourse={true} indexData={indexData.testimonialTitle} formType='data' />
                        </div>
                        <div className="right-video-box">
                            <Image src="/img/placement_video_img.webp" layout="fill" className='resp-img' alt='' />
                        </div>
                    </div>
                </div>
            </section>

            <div className='text-center testimonial-achivers'>
                <AchieversSection achieverData={achieverData.testimonialPage} showData={false} dataCard_id={68} />
            </div>

            <CpacmaPlacement achieverData={achieverData.placementAlumnis} dataCard_id={69} />
            <div className='testimonial-achiver'>
                <AchieversSection achieverData={achieverData.testimonialOnePage} showData={true} showlogo={true} showbtn={true} dataCard_id={70}/>
            </div>

        </>
    )
}

export default Testmonial