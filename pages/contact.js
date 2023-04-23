import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Contact from '../CPA/contactUs'

const contact = () => {
  return (
    <>
    <Head>
        <title>Contact Us - Simandhar Education</title>
      </Head>
      <Header />
      <div className="cpaInnerCon">
      <Contact />
      </div>

    </>
  )
}

export default contact