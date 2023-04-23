import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import CorporateLogos from '../CPA/CorporateLogos'

const simandharTieUps = () => {
    return (
        <>
            <Head>
                <title>Corporate Tie-Ups- Simandhar Education</title>
            </Head>
            <div className='width-50'>
                <Header showData={true}  />
            </div>
            <CorporateLogos showHeading={true} showDescription1={true} showDescription2={true} dataCard_id={64} />
        </>
    )
}
 

export default simandharTieUps