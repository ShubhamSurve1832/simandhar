import Image from 'next/image'
import { useEffect, useState } from 'react'
import axios from 'axios'
import _ from "lodash"

export default function educationSection({ indexData, dataCard_id }) {

  const [data, setData] = useState([])
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:1337/api/datacards/2?populate[0]=listitems&[populate][1]=listitems.datacard,listitems.datacarditems,listitems.subcards",
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
  let title = _.get(data, "data.attributes.title")
  let subTitle = _.get(data, "data.attributes.subTitle")
  let allData = _.get(data, "data.attributes.listitems.data", [])
  // console.log(allData)




  return (
    <section className="section education-section">
      <div className='container eduction-container'>
        <div className='info-box'>
          <h2 className='heading02'>{title}</h2>
          <p>{subTitle}</p>
          {
            allData.map((list => {
              let lists = _.get(list, "attributes.datacarditems", [])
              return <div className='edubox-wrap'>
                <div className='edu-row'>
                  <span className='edu-tab'>{_.get(lists[0], "item")}</span>
                  <span className='edu-tab'>{_.get(lists[1], "item")}</span>
                </div>
                <div className='edu-row'>
                  <span className='edu-tab'>{_.get(lists[2], "item")}</span>
                  <span className='edu-tab'>{_.get(lists[3], "item")}</span>
                  <span className='edu-tab'>{_.get(lists[4], "item")}</span>
                </div>
              </div>
            }))
          }
        </div>
        <div className='edu-adbox'>
          <div className='adbox resp-img-box'>
            <Image src={indexData.img1} layout="fill" className='resp-img' alt='' />
          </div>
          <div className='adbox resp-img-box'>
            <Image src={indexData.img2} layout="fill" className='resp-img' alt='' />
          </div>
        </div>
        <div className="clear"></div>
      </div>
    </section>
  )
}