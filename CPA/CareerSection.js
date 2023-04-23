import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import _ from 'lodash'

const CareerSection = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:1337/api/datacards/25?populate[0]=listitems&[populate][1]=listitems.datacard,listitems.datacarditems,listitems.subcards",
      responseType: "json",
      headers: { "Authorization": "Bearer f7d1423065e7dfad4ff8aa84d496bd543a5cbc619216dfcd5ab593c7cb6101b82aa49976194a9d2332238b31d1942548e7469ed662e3c30881baf8deae11c3e46fb40b5ecfe15f2c5d02bf4e4dc9d20a53c37ffdec9903f13ba5850c24263fe4fcaaad033294bb29d4a6a84392c853a1e6a597ea26f7f2a997a3699b4d187be0" }
    })

      .then((res) => {
        {
          if (!_.isEmpty(res.data))
            setData(res.data)
        }
      })
      .catch((err) => {
        console.log("here is error", err.message)
      })
  }, [])

  let heading = _.get(data, "data.attributes.title")
  let cardData = _.get(data, "data.attributes.listitems.data", [])
  // console.log(cardData)

  // export default function careerSection() {
  return (
    <>
      <section className="section career-section pt-0">
        <div className="container-l">
          <h2 className="heading02">{heading}</h2>
          <div className="career-container">

            {
              cardData.map((data => {
                let values = _.get(data, "attributes.subcards", [])
                let heading = _.get(data, "attributes.subcard.heading")
                // console.log(values, heading)

                return (
                  <>
                    {
                      values.map((data) => {
                        let heading = _.get(data, "heading")
                        let description = _.get(data, "description")
                        return (
                          <div className="career-box">
                            <div className="career-head">
                              {heading}
                            </div>
                            <div className="career-content">
                              {description}
                            </div>
                          </div>
                        )
                      })
                    }

                  </>

                )
              }))
            }



            {/* <div className="career-box">
              <div className="career-head">
                International Credibility
              </div>
              <div className="career-content">
              CPAs enjoy international recognition for their expertise and high standards.
              </div>
            </div>
            <div className="career-box">
              <div className="career-head">
                Mandatory for High Profile Roles
              </div>
              <div className="career-content">
                The CPA designation is mandatory for many high-profile roles such as Vice President, President, Head, CXO’s etc.
              </div>
            </div>
            <div className="career-box">
              <div className="career-head">
                Better pay scale
              </div>
              <div className="career-content">
                Better pay scale: Average salary of a beginner CPA in India is about INR 7,00,000 per annum.
              </div>
            </div> */}
          </div>
          <p>Simandhar Education has various corporate tie-ups and elite industry relations that we leverage to place our clients in the top accounting firms round the year.</p>
        </div>
      </section>
    </>
  )
}
export default CareerSection