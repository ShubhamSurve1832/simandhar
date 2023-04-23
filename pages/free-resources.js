import Head from 'next/head'
import Format from '../layout/format'

//components
import FreeResourcesBanner from '../CPA/FreeResourcesBanner'
import Header from "../components/header"






export default function Home({showPopup}) {
  return (
    <>
      <Head>
        <title>Simandhar Education</title>
      </Head>
      <Header/>
      <Format>
        
     <FreeResourcesBanner></FreeResourcesBanner>
       
      </Format>
      
    </>
  )
}