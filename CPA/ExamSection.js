import { useState, useEffect } from "react";
import axios from "axios";
import _ from 'lodash'

const ExamSection = ({ examData, showStrip, showStrip2, dataCard_id }) => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios({
      method: "get",
      responseType: "json",
      url: "http://localhost:1337/api/datacards/" + dataCard_id + "?populate[0]=listitems,descriptions&[populate][1]=listitems.datacard,listitems.datacarditems,listitems.subcards",
      headers: { "Authorization": "Bearer f7d1423065e7dfad4ff8aa84d496bd543a5cbc619216dfcd5ab593c7cb6101b82aa49976194a9d2332238b31d1942548e7469ed662e3c30881baf8deae11c3e46fb40b5ecfe15f2c5d02bf4e4dc9d20a53c37ffdec9903f13ba5850c24263fe4fcaaad033294bb29d4a6a84392c853a1e6a597ea26f7f2a997a3699b4d187be0" }
    })

      .then((res) => {
        if (!_.get(res, data))
          setData(res.data)
      })
      .catch((err) => {
        console.log("bad request", err.massage)
      })
  }, [])

  const heading = _.get(data, "data.attributes.title")
  const subHeading = _.get(data, "data.attributes.subTitle")
  const description = _.get(data, "data.attributes.desc")
  const descriptions = _.get(data, "data.attributes.descriptions",[])


  return (
    <>
      <section className="section exam-section">
        <div className="container-l p2">
          <div className="exam-header">
            <h2 className="heading02">{heading}</h2>

            {
              showStrip ? (
                <div className="exam-right-box">
                  <span>{subHeading}</span>
                </div>
              ) : ("")
            }
            {
              showStrip2 ? (
                <h2 className="heading03 mt-4">{examData.mainHeading2}</h2>
              ) : ("")
            }


          </div>
          {/* <p className='pr-color'>{description}</p> */}
         <div>
          {
            descriptions.map((description) => {
              let desc = _.get(description,"description")
              // console.log(desc)
              return (
                <p className='pr-color'>{desc}</p>
              )
            })
          }
          </div>
          {/* <p className='pr-color mt-4'>{examData.descriptionTwo}</p> */}
        </div>
      </section>



    </>
  )
}

export default ExamSection;