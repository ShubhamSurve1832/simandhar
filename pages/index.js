import Head from 'next/head'
import Format from '../layout/format'
import { useEffect, useState, useRef } from 'react'
import _ from 'lodash'

//components
import Banner from '../home/bannerSection'
import Usp from '../home/uspSection'
import Eduction from '../home/educationSection'
import Programm from '../home/programmSection'
import Placement from '../home/placementSection'
import Founder from '../home/founderSection'
import Video from '../home/videoSection'
import AchieversSection from '../CPA/AchieversSection'
import Partner from '../home/partnerSection'
import Award from '../home/awardSection'
import ContactUs from '../home/contactUsSection'
import OfferSection from '../home/OfferSection'
import Header from '../components/header'


// Data
import indexData from '../database/index.json'
import achieverData from '../database/data/achieversSection.json'
import videoData from '../database/data/videoSection.json'






export default function Home({ showPopup }) {

  const [data,setData] =useState()
  // useEffect(() => {
  //   axios({
  //   method:"get",
  //   url:"http://localhost:1337/api/datacards/1?populate[0]=listitems&[populate][1]=listitems.datacard&[populate][2]=listitems.datacard.listitems",
  //   responseType: 'json',
  //   headers: { "Authorization": "Bearer f7d1423065e7dfad4ff8aa84d496bd543a5cbc619216dfcd5ab593c7cb6101b82aa49976194a9d2332238b31d1942548e7469ed662e3c30881baf8deae11c3e46fb40b5ecfe15f2c5d02bf4e4dc9d20a53c37ffdec9903f13ba5850c24263fe4fcaaad033294bb29d4a6a84392c853a1e6a597ea26f7f2a997a3699b4d187be0" },

  // })
  //     .then((res)=>
  //     setData(res.data)
  //     // console.log("here is data",res.data)
  //     )
  //     .catch((err) =>
  //     console.log("error is ",err.message)
  //     )
  // }, [])

  const title = _.get(data,"data.attributes")
  // console.log("im calling this",title)

  // const cta_title = _.get(data,"data.attributes.cta_title")
  // console.log(title.cta_title)
  // const data1 = [ ]
  // const dataobject={
  //   title,cta_title
  // }

  // data1.push(dataobject)
  // console.log(data1.title)

  

  
  const myRef = useRef();
  useEffect(() => {
    console.log('mrRef', myRef.current)
  }, [])
  const [initialstate, finalState] = useState();
  const [navBar, setNavBar] = useState(false)

  const changebackground = ()=>{
    console.log(window.scrollY)
    if(window.scrollY >= 500 ){
      setNavBar(true)
    } else{
      setNavBar(false)
    }
  }
  //  window.addEventListener('scroll',changebackground)

  return (
    <>
      <Head>
        <title>Simandhar Education</title>
      </Head>
      <Format>
        {/* <div className={navBar ? "hide" : ""}> */}
        <Header />
        {/* </div> */}
        <OfferSection indexData={indexData.offerRow} />
        <Banner showPopup={showPopup} />
        <Usp />
        <Programm indexData={indexData.programTab} />
        <Eduction indexData={indexData.education} />
        <Placement dataCard_id={4} />
        <Founder />
        <Video dataCard_id={6} />
        <AchieversSection achieverData={achieverData.homePage} showData={true} dataCard_id={5}/>
        <Partner ref={myRef} indexData={indexData.corporateTab} dataCard_id={8} />
        <Award />
        <ContactUs />
      </Format>

    </>
  )
}