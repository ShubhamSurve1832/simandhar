import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import CorporateEvent from '../CPAInner/CorporateEvents'
import CorporateRecord from '../CPAInner/corporateRecord'
import CorporateWebinars from '../CPAInner/corporateWebinars'

const CorporateEvents = () => {
    return (
        <>
            <Head>
                <title> Simandhar Education</title>
            </Head>
            <div className='width-50'>
            <Header showData={true} />
            </div>
            <CorporateEvent dataCard_id={65}/>   
            <CorporateRecord dataCard_id={66} />
            <CorporateWebinars dataCard_id={67}/>
            
        </>
    )
}

export default CorporateEvents