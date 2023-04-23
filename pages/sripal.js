import React from 'react'
import Head from 'next/head'
import Sripal from '../CPA/SripalJainSection'

import SripalData from '../database/data/sripalJain.json'
import Header from '../components/header'

const sripal = () => {
    return (
        <>
            <Head>
                <title>Sripal Jain USA Visit</title>
            </Head>
            <Header />
            <Sripal SripalData={SripalData.sripalJain} dataCard_id={63}/>
        </>
    )
}

export default sripal