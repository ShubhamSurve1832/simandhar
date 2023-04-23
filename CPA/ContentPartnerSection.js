import Image from 'next/image'
import { useEffect, useState } from 'react'
import axios from 'axios'
import _ from "lodash"
import ReactReadMoreReadLess from "react-read-more-read-less";
import DownloadFormComponents from '../components/download_form'




const ContentPartnerSection = ({ contentPartnerData, showData, dataCard_id }) => {

  const [data, setData] = useState([])
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:1337/api/datacards/" + dataCard_id + "?populate[0]=listitems&[populate][1]=listitems.datacard,listitems.datacarditems,listitems.subcards",
      responseType: 'json',
      headers: { "Authorization": "Bearer f7d1423065e7dfad4ff8aa84d496bd543a5cbc619216dfcd5ab593c7cb6101b82aa49976194a9d2332238b31d1942548e7469ed662e3c30881baf8deae11c3e46fb40b5ecfe15f2c5d02bf4e4dc9d20a53c37ffdec9903f13ba5850c24263fe4fcaaad033294bb29d4a6a84392c853a1e6a597ea26f7f2a997a3699b4d187be0" },
    })


      .then((res) => {
        if (!_.isEmpty(res.data))
          setData(res.data)
        // console.log(data)
      }
      )

      .catch((err) =>
        console.log("here is error", err.message)
      )
  }, [])

  let heading = _.get(data, "data.attributes.title")
  let cardData = _.get(data, "data.attributes.listitems.data", [])
  return (
    <>
      <section className="section cont-partner-section">
        <div className="container-l">
          <h2 className="heading02">{heading}</h2>
          <div className="cont-partner-container">

            {cardData.map((partnerData => {
              let dataCard = _.get(partnerData, "attributes")
              let listitems = _.get(partnerData, "attributes.datacarditems",[])
              // console.log(dataCard)

              return <div className="cont-partner-row">
                <div className="logo-box resp-img-box"><Image src={dataCard.image_url} alt="" layout="fill" className='resp-img' /></div>
                <div className="content-box p2">
                  <p>
                    <ReactReadMoreReadLess
                      readMoreClassName="readMoreClassName read-more"
                      charLimit={212}
                      readMoreText="Read More"
                      readLessText="Read Less">
                      {dataCard.description}
                    </ReactReadMoreReadLess>
                    {/* <a href="javascript:;" className="read-more">{partnerData.readBtn}</a> */}
                  </p>
                  {
                    showData ? (

                      <ul className='hiii'>
                        {
                          listitems.map((item => {
                            let list =_.get(item,"item")
                            // console.log(list)
                            return <li className='hello'>{list}</li>
                          }))
                        }
                      </ul>
                    ) : ('')
                  }
                  <a href={dataCard.goto_url} className="btn maroon-btn maroon-arrow-btn">{dataCard.goto_url_text} </a>
                </div>
              </div>
            }))}



            {/* <div className="cont-partner-row">
              <div className="logo-box resp-img-box"><Image src="/img/cpa/simdhan_logo.png" alt="" layout="fill" className='resp-img' /></div>
              <div className="content-box p2">
                <p>Simandhar Education’s in house CMA exam review, taught by India’s best CPA & CMA instructors like Sripal Jain (CA, CGMA, US CPA), Surinder Kaur (CPA), Srikanth Tadikonda (CMA, CPA), Dhanashree Kshirsagar (CA, CPA),<a href="javascript:;" className="read-more">Read More</a></p>
                <a href="javascript:;" className="btn maroon-btn maroon-arrow-btn">Download Prospectus</a>
              </div>
            </div> */}


          </div>
        </div>
      </section>
    </>
  )
}

export default ContentPartnerSection;