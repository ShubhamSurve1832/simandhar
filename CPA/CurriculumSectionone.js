import { Tab } from "@headlessui/react"
import { useState, useEffect } from "react"
import axios from "axios"
import _ from 'lodash'

const CurriculumSectionone = ({ CurriculumSectiononeData, showData, dataCard_id }) => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios({
      method: "get",
      responseType: "json",
      url: "http://localhost:1337/api/datacards/" + dataCard_id + "?populate[0]=listitems&[populate][1]=listitems.datacard,listitems.datacarditems,listitems.subcards",
      headers: { "Authorization": "Bearer f7d1423065e7dfad4ff8aa84d496bd543a5cbc619216dfcd5ab593c7cb6101b82aa49976194a9d2332238b31d1942548e7469ed662e3c30881baf8deae11c3e46fb40b5ecfe15f2c5d02bf4e4dc9d20a53c37ffdec9903f13ba5850c24263fe4fcaaad033294bb29d4a6a84392c853a1e6a597ea26f7f2a997a3699b4d187be0" }
    })
      .then((res) => {
        if (!_.get(res.data))
          setData(res.data)
      })
      .catch((err) => {
        console.log("bad request", err.message)
      })
  }, [])

  const cardData = _.get(data, "data.attributes.listitems.data", [])
  console.log(cardData)
  return (
    <>
      <section className="section aside-tab-section">
        <div className="aside-tab-container">
          <Tab.Group>
            <div className="left-tab-box">
              <Tab.List className='tab-header'>
                {cardData.map((title => {
                  let heading = _.get(title, "attributes.title")
                  return <>
                    <Tab className='tab-btn active'>{heading}</Tab></>
                }))}
              </Tab.List>
            </div>
            <div className="right-tab-box">
              {/* <p className='title01'>{CurriculumSectiononeData.para}</p> */}
              <Tab.Panels className='tab-container custom-scrollbar'>

                {cardData.map((passData => {
                  let dataCard = _.get(passData, "attributes.datacarditems", [])
                  console.log(dataCard)

                  return <>
                    <Tab.Panel className='tab-box'>

                      {dataCard.map((list, index) => {
                        return <>
                          <div className="row">
                            <div className="number rounded_number">{index + 1}</div>
                            <div className="heading05">{list.item}</div>
                          </div>
                        </>
                      })}
                    </Tab.Panel>
                  </>
                }))}
              </Tab.Panels>
              <p className='scroll-down-arrow'> Scroll to view more </p>
            </div>
          </Tab.Group>
        </div>
      </section>
    </>
  )
}

export default CurriculumSectionone