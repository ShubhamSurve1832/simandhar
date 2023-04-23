import React from 'react'
import Head from 'next/head'
import BannerSection from '../CPA/BannerSection'
import HelpSection from '../CPA/HelpSection'
import AchieversSection from '../CPA/AchieversSection'
import ContentPartnerSection from '../CPA/ContentPartnerSection'
import DesignationSection from '../CPA/DesignationSection'
import ExamSection from '../CPA/ExamSection'
import CpaProgram from '../components/CpaProgram'
import FaqSection from '../CPA/FaqSection'
import CurriculumSectionone from '../CPA/CurriculumSectionone'
import TableSection from '../CPA/tableSection'
import Header from '../components/header'



import helpData from '../database/data/helpSection.json'
import bannerData from '../database/data/banner.json'
import achieverData from '../database/data/achieversSection.json'
import contentPartnerData from '../database/data/contentSection.json'
import examData from '../database/data/exam.json'
import CurriculumSectiononeData from '../database/data/curriculumsectionOne.json' 
import ProgramData from '../database/data/program.json'

export default function CMA() {
  return (
    <>
      <Head>
        <title>US CMA - Simandhar Education</title>
      </Head>
      <div className="width-50">
      <Header  showData1={true} />
      </div>
      {/* <CpaProgram /> */}
      <BannerSection dataCard_id ={17} />
      <div className='cma-exam-section'>
      <ExamSection examData={examData.cmaPage} dataCard_id={36}/></div>
      <div className='background-none key-takeways' > 
      <HelpSection dataCard_id={27} />
      </div>
      <DesignationSection contentPartnerData={contentPartnerData.designation} dataCard_id={28}/>

      <div className='cma-tab'>
      <CurriculumSectionone CurriculumSectiononeData={CurriculumSectiononeData.cmaPage} dataCard_id={56}/>
      </div>

      <ContentPartnerSection contentPartnerData={contentPartnerData.cmaPage} dataCard_id={21} />
      <div className='cma-help'>
      <HelpSection helpData={helpData.cmaPageone} dataCard_id={29}/>
      </div>
      <div className='background-none '> <HelpSection helpData={helpData.takeaWays} dataCard_id={30}/></div>
      <div className='text-center'> <AchieversSection achieverData={achieverData.cmaPage}  dataCard_id={37} /></div>
      <div className='cma-table'>
      <TableSection />
      </div>
      <FaqSection/>

      

    </>
  )
}
