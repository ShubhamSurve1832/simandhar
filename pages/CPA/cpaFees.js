import React from 'react'
import Head from 'next/head'
import Header from '../../components/header'
import CpaFess from '../../CPAInner/uscpaFees'

const cpaFees = () => {
    return (
        <>
            <Head>
                <title>Fees - Simandhar Education</title>
            </Head>
            <div className='width-50'>
            <Header showData={true} />
            </div>
            <CpaFess/>
        </>
    )
}

export default cpaFees