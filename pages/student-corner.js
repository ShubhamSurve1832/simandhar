import React from 'react'
import Head from 'next/head'
import Header from '../components/header'

import FaqSection from '../CPA/FaqSection'
import StudentCorner from '../CPA/StudentCorner'
import StudentAlumni from '../CPA/StudentAlumni'
import AsideBox from '../components/AsideBox'
import StudentData from '../database/data/onlineCourse.json'


const ifrs = () => {
    return (
        <>
            <Head>
                <title>Student Corner- Simandhar Education</title>
            </Head>
            <Header />
            <div>
                <StudentCorner StudentData={StudentData.studentpage} />
                <StudentAlumni StudentData={StudentData.studentalumni} />
            </div>
            <AsideBox />
            <FaqSection />
        </>
    )
}

export default ifrs