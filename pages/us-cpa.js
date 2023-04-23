import Head from 'next/head'
//components
import BannerSection from '../CPA/BannerSection'
import ExamSection from '../CPA/ExamSection'
import JournerySection from '../CPA/JournerySection'
import OnlineCourseSection from '../CPA/OnlineCourseSection'
import CurriculumSection from '../CPA/CurriculumSection'
import ContentPartnerSection from '../CPA/ContentPartnerSection'
import FaqSection from '../CPA/FaqSection'
import HelpSection from '../CPA/HelpSection'
import PlacementSection from '../CPA/PlacementSection'
import ProgrammTableSection from '../CPA/ProgrammTableSection'
import AchieversSection from '../CPA/AchieversSection'
import CareerSection from '../CPA/CareerSection'
import CpaProgram from '../components/CpaProgram'
import ExamTab from '../CPA/ExamTab'
import Header from '../components/header'
import DesignationSection from '../CPA/DesignationSection'
import BeckerSection from '../CPA/BeckerSection'
import CpaTableOne from '../CPA/CpaTableOne'
import CpaTableTwo from '../CPA/CpaTableTwo'

// import Exam from './examSection'
// import Journery from './journerySection'
// import OnlineCourse from './onlineCourseSection'
// import Curriculum from './curriculumSection'
// import Table from './programmTableSection'
// import ContentPartner from './contentPartnerSection'
// import Help from './helpSection'
// import Career from './careerSection'
// import Achievers from './achieversSection'
// import Placement from './placementSection'
// import Faq from './faqSection'
import helpData from '../database/data/helpSection.json'
import bannerData from '../database/data/banner.json'
import exam from '../database/data/exam.json'
import journeyData from '../database/data/journeySection.json'
import contentPartnerData from '../database/data/contentSection.json'
import achieverData from '../database/data/achieversSection.json'
import examData from '../database/data/exam.json'
import tabData from '../database/data/examTab.json'
import beckerData from '../database/data/beckerData.json'
import curriculumData from '../database/data/CurriculumData.json'





export default function CPA() {
  return (
    <>
      <Head>
        <title>US CPA - Simandhar Education</title>
      </Head>
      <div id="page-container">
        <main className='main' id='main'>
          {/* <CpaProgram /> */}
          <div className="width-50">
            <Header showData={true}  />
          </div>
          <BannerSection dataCard_id ={16} />
          <ExamSection examData={examData.cpaPage} showStrip={true} showStrip2={true}  dataCard_id={18}/>
          <ExamTab tabData={tabData.cpaPage} />
          <JournerySection journeyData={journeyData.cpaPage} dataCard_id={19}/>
          <OnlineCourseSection dataCard_id={20}/>
          <CurriculumSection curriculumData={curriculumData.cpaPage} showData={true} dataCard_id={75}/>
          <CpaTableTwo />
          <CpaTableOne />
          <div className='cpa-exam-tab'>
          <ExamSection examData={examData.cpaPageOne} showStrip={false} dataCard_id={33} />
          </div>
          <div className='cpa-location'>
          <DesignationSection contentPartnerData={contentPartnerData.prometric} dataCard_id={26}/>
          </div>
          <div className='cpa-program-table'>
          <ProgrammTableSection />
          </div>
          <ContentPartnerSection contentPartnerData={contentPartnerData.cpaPage} dataCard_id={21}/> 
          <HelpSection dataCard_id={22} />
          <CareerSection />
          <div className='cpa-achivers'>
          <AchieversSection achieverData={achieverData.homePage} showData={true} dataCard_id={5} />
          </div>
          <PlacementSection />
          <div className='cpa-exam-tab2'>
          <ExamSection  showStrip={false} paraTwo={true} dataCard_id={35} />
          </div>
          <BeckerSection beckerData={beckerData.Becker}  />
          <div className='globle-accounting'>
          <DesignationSection contentPartnerData={contentPartnerData.Locations} shortHeading={true} dataCard_id={24} />
          </div>
          <FaqSection />
          
        </main>
      </div>
    </>
  )
}