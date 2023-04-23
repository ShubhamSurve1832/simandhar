import React from 'react'
import Head from 'next/head'
import Header from '../../components/header'
import OurBanner from '../../CPAInner/OurBanner'
import OnlineCourseSection from '../../CPA/OnlineCourseSection'
import ExamSection from '../../CPA/ExamSection'
import FaqSection from '../../CPA/FaqSection'


import examData from '../../database/data/exam.json'

const ourCourse = () => {
  return (
    <>
      <Head>
        <title>Our_Course - Simandhar Education</title>
      </Head>
      <Header showData={true} />
      <OurBanner />
      <div className="our_Course">
        <OnlineCourseSection />
      </div>
      <div className='our_Course-exam-section'>
        <ExamSection examData={examData.incmaPage} />
      </div>
      <div className="our_Course-faq-section">
        <FaqSection />
      </div>

    </>
  )
}

export default ourCourse