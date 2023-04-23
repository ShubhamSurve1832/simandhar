import React from 'react'


import Head from 'next/head'
import Header from '../components/header'
import Video from '../home/videoSection'
import TestimonialVideoTab from '../CPAInner/testimonialVideoTab'

import videoData from '../database/data/videoSection.json'
import testimonialVideoTab from '../database/data/testimonialVideoTab.json'

const testmonialVideos = () => {
    return (
        <>
            <Head>
                <title> Simandhar Education</title>
            </Head>
            <div className="width-50">
                <Header showData={true} />
            </div>
            <div className='testimonial-video-section'>
                <h2 className='heading02 text-center'> Testimonial Videos</h2>
                <Video videoData={videoData.testimonialVideoPage} dataCard_id={71} />
            </div>
            <TestimonialVideoTab testimonialVideoTab={testimonialVideoTab.testimonialTab} />
        </>
    )
}

export default testmonialVideos