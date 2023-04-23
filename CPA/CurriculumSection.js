import { Tab } from "@headlessui/react"
import { useState, useEffect } from "react"
import axios from 'axios'
import _ from "lodash"

const CurriculumSection = ({ curriculumData, showData, dataCard_id }) => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios({
      method: "get",
      responseType: "json",
      url: "http://localhost:1337/api/datacards/"+ dataCard_id +"?populate[0]=listitems&[populate][1]=listitems.datacard,listitems.datacarditems,listitems.subcards",
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

  const heading = _.get(data, "data.attributes.title")
  const cardData = _.get(data, "data.attributes.listitems.data[0].attributes.subcards", [])
 
  // console.log(cardData)
  return (
    <>
      <section className="section aside-tab-section">
        <div className="aside-tab-container">
          <Tab.Group>
            <div className="left-tab-box">
              <h2 className="heading02">{curriculumData.mainHeading}</h2>
              <p>{curriculumData.heading}</p>

              <Tab.List className='tab-header'>
                {
                  cardData.map((list => {
                    let title = _.get(list, "heading")
                    // console.log(title)
                    return <Tab className='tab-btn active'>{title}</Tab>
                  }))
                }
              </Tab.List>
            </div>

            <div className="right-tab-box">
              <Tab.Panels className='tab-container'>
                {
                  cardData.map((data) => {
                    let exam = _.get(data, "subcard_json")
                    let time = _.get(data, "subcard_json.time")
                    let subCard = _.get(data, "subcard_json.questions", [])
                    // console.log(exam, time, subCard)
                    return <>
                      <Tab.Panel className='tab-box'>
                        <div className="syllabus-row">
                          <h5 className="heading05">{exam.time}</h5>
                          <ul className='li2'>
                            <li>{exam.hour}</li>
                          </ul>
                        </div>


                        {
                          subCard.map((data) => {
                            let answers = _.get(data, "answers")
                            return (
                              <>
                                <div className="syllabus-row">
                                  <h5 className="heading05">{data.question}</h5>
                                  <ul className='li2'>
                                    {answers.map((answer) => {
                                      return <li>{answer}</li>
                                    })}
                                  </ul>
                                </div>
                              </>
                            )
                          })
                        }





                        {/* <div className="syllabus-row">
                        <h5 className="heading05">Question Pattern</h5>
                        <ul className='li2'>
                          <li>62 multiple choice questions(50% Weightage) & 5 short task-based simulations (35% Weightage),Written communication( 15% Weightage)</li>
                          <li>62 multiple choice questions(50% Weightage) & 5 short task-based simulations (35% Weightage),Written communication( 15% Weightage)</li>
                          <li>62 multiple choice questions(50% Weightage) & 5 short task-based simulations (35% Weightage),Written communication( 15% Weightage)</li>
                        </ul>
                      </div> */}
                      </Tab.Panel>
                    </>
                  })
                }


              </Tab.Panels>
            </div>
          </Tab.Group>
        </div>
      </section>
    </>
  )
}

export default CurriculumSection