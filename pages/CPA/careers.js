import React from 'react'
import Head from 'next/head'
import Header from '../../components/header'
import Careers from '../../CPAInner/careersContent'

const careers = () => {
    return (
        <>
            <Head>
                <title>careers - Simandhar Education</title>
            </Head>
            <div className='width-50'>
                <Header showData={true} />
            </div>
            <Careers/>
        </>
    )
}

export default careers