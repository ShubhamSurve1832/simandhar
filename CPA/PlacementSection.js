import Image from 'next/image'
import { useState, useEffect } from 'react';
import axios from 'axios';
import _ from "lodash"


const PlacementSection = () => {
  const [isShow, setShow] = useState(false)
  const [buttonText, setButtonText] = useState(false)
  const showContent =() =>{
    setShow(!isShow)
    setButtonText(!buttonText)
  }

  const [data, setData] = useState([])
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:1337/api/datacards/78?populate[0]=listitems,images&[populate][1]=listitems.datacard,listitems.datacarditems,listitems.subcards",
      responseType: 'json',
      headers: { "Authorization": "Bearer f7d1423065e7dfad4ff8aa84d496bd543a5cbc619216dfcd5ab593c7cb6101b82aa49976194a9d2332238b31d1942548e7469ed662e3c30881baf8deae11c3e46fb40b5ecfe15f2c5d02bf4e4dc9d20a53c37ffdec9903f13ba5850c24263fe4fcaaad033294bb29d4a6a84392c853a1e6a597ea26f7f2a997a3699b4d187be0" },
    })
      .then((res) => {
        if (!_.isEmpty(res.data))
          setData(res.data)
      })
      .catch((err) => {
        console.log("bad request", err.message)
      })
  }, [])

  let heading = _.get(data, "data.attributes.title")
  let image = _.get(data, "data.attributes.goto_url")
  let cta_title = _.get(data, "data.attributes.cta_title")
  let imageData = _.get(data, "data.attributes.images", [])

  return (
    <>
      <section className="section placement-section pt-0">
        <div className="container-l">
          <h2 className="heading02">{heading}</h2>
          <div className="partner-container">
            <div className="partner-logo-box">
              {
                imageData.map((data) => {
                  let image = _.get(data, "image")
                  // console.log(image)
                  return (
                    <>
                      <div className="logo-box resp-img-box">
                        <Image src={image} alt="" layout="fill" className='resp-img' />
                      </div>
                    </>
                  )
                })
              }           

              <div className="logo-box resp-img-box">
                <a href="javascript:;" className='btn maroon-border-btn maroon-border-btn-arrow'>{cta_title}</a>
              </div>
            </div>
            <div className="partner-addbanner resp-img-box">
              <Image src={image} alt="" layout="fill" className='resp-img' />
            </div>
          </div>
          <div className={"content" + " " + (isShow ? 'active' : '')}>
            <p className='title'>About Ernst & Young:</p>
            <p> Ernst & Young is a multinational professional services partnership headquartered in London, England. EY is one of the largest professional services networks in the world. It is one of the Big 4 accounting firms. It primarily provides assurance, which includes financial audit, tax, consulting, and advisory services to its clients.</p>
            <p className='title'>Simandhar’s collaboration with Ernst & Young:</p>
            <p>Simandhar Education's vision of enabling people all over the world to advance their careers through a CPA course and CMA course by offering jobs at EY is widely admired.</p>
            <p>EY Leadership appreciation was received by Simandhar for placing two Elijah Watt Sells Award winners at its organization. It is assured that Simandhar is working in the right direction when the appreciation comes from EY Leadership itself. The partnership with EY-GDS Tax and EY Assurance has proved to be fruitful because, through this relationship, the lives of so many talented individuals have been transformed.</p>
            <p>Dhruv Patel (CPA alumnus) won the Elijah Watt Sells Award for scoring great numbers in the CPA exam. 98 in BEC, 97 in REG, 98 in FAR, and 91 in AUD. He was placed in EY within 4 days of completing his CPA course. On the other hand, Kavneet Hanspal (CPA alumnus), who also won the Elijah Watt Sells award by scoring 99 in BEC, 97 in REG, 96 in FAR, and 93 in AUD, was placed at EY within a week of completing his CPA course. Both Dhruv and Kavneet were placed with a salary package of more than 9 LPA. </p>
            <p>Moreover, 49 CMA and CPA students who were sent to EY for internships have been offered full-time roles.</p>
            <p>Simandhar Education has been helping EY build a strong future with a huge talent pool. This partnership will result in the shaping of the careers of many individuals.</p>
          </div>
          <div className='text-center' >
            {/* <a className='btn maroon-btn maroon-arrow-btn btn1'> View More </a> */}
            <a className="btn maroon-btn maroon-arrow-btn" onClick={showContent}>{buttonText ? 'Read Less ' : 'Read More'}</a>
            {/* <a className='btn maroon-btn maroon-arrow-btn btn2'> View Less </a> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default PlacementSection;