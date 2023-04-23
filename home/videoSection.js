import Image from 'next/image'
import { Tab } from '@headlessui/react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import _ from "lodash"
import Link from 'next/link'

export default function videoSection({ videoData, dataCard_id }) {

  const [data, setData] = useState([])
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:1337/api/datacards/"+ dataCard_id +"?populate[0]=listitems&[populate][1]=listitems.datacard,listitems.datacarditems,listitems.subcards",
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
  let cta = _.get(data, "data.attributes.cta_title")
  let path = _.get(data, "data.attributes.cta_url")
  let dataList = _.get(data, "data.attributes.listitems.data", [])
  // console.log("video section", dataList)

  return (
    <section className="section video-section">
      <div className='container'>
        <h2 className='heading02'>{heading}</h2>
        <Tab.Group>
          <div className='video-container'>
            <div className='video-lgbox resp-img-box'>
              <Tab.Panels>
                {
                  dataList.map((card => {
                    let path = _.get(card, "attributes.goto_url")
                    return <Tab.Panel>
                      <iframe src={path} frameborder="0" allowfullscreen></iframe>
                    </Tab.Panel>
                  }))
                }

                {/* {
                 dataList.map((card => {
                  let cardData = _.get(card,"attributes.goto_url")
                  console.log(cardData)
                    return (<Tab.Panel>
                      <iframe src={video.path} frameborder="0" allowfullscreen></iframe>
                    </Tab.Panel>
                    )
                  }))
                } */}

              </Tab.Panels>
            </div>
            <div className='video-thumbbox'>
              <Tab.List className='thumb-wrap custom-scrollbar'>
                {
                  dataList.map((card => {
                    let cardData = _.get(card, "attributes")
                    // console.log(cardData.title)
                    return (
                      <Tab className='thumb-row'>
                        <i className='thumb-img  resp-img-box'><Image src={cardData.image_url} layout="fill" className='resp-img' alt='' /></i>
                        <div className='video-info'>
                          <h2 className='heading06'>{cardData.title}</h2>
                          <span>{cardData.subtitle}</span>
                        </div>
                      </Tab>
                    )

                  }))
                }

                {/* {
                  videoData.tabs.map((tabdata => {
                    return (
                      <Tab className='thumb-row'>
                        <i className='thumb-img  resp-img-box'><Image src={tabdata.path} layout="fill" className='resp-img' alt='' /></i>
                        <div className='video-info'>
                          <h2 className='heading06'>{tabdata.heading}</h2>
                          <span>{tabdata.span}</span>
                        </div>
                      </Tab>
                    )
                  }))
                } */}
              </Tab.List>
              <Link href="/testmonialVideos" className='btn maroon-border-btn maroon-border-btn-arrow'>{cta}</Link>
            </div>
          </div>
        </Tab.Group>
      </div>
      <div className="clear"></div>
    </section>
  )
}