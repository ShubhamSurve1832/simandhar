import { Tab } from "@headlessui/react"
import { RiArrowDropDownLine } from 'react-icons/ri'
import { useState, useEffect } from 'react'
import axios from 'axios'
import _ from 'lodash'
import Link from "next/link"


export default function programmSection({ indexData, dataCard_id }) {
  const [isActive, setActive] = useState(false);
  const [leftCard, setLeftCard] = useState()
  const [data, setData] = useState([])
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:1337/api/datacards/1?populate[0]=listitems&[populate][1]=listitems.datacard,listitems.datacarditems,listitems.subcards",
      responseType: 'json',
      headers: { "Authorization": "Bearer f7d1423065e7dfad4ff8aa84d496bd543a5cbc619216dfcd5ab593c7cb6101b82aa49976194a9d2332238b31d1942548e7469ed662e3c30881baf8deae11c3e46fb40b5ecfe15f2c5d02bf4e4dc9d20a53c37ffdec9903f13ba5850c24263fe4fcaaad033294bb29d4a6a84392c853a1e6a597ea26f7f2a997a3699b4d187be0" },
    })
      .then((res) => {
        if (!_.isEmpty(res.data))
          setData(res.data)
      })
      .catch((err) =>
        console.log("here is error", err.message)
      )
  }, [])

  let mainheading = _.get(data, "data.attributes.title")
  let subheading = _.get(data, "data.attributes.subTitle")
  let rightList = _.get(data, "data.attributes.listitems.data", [])
  // console.log("cta is here", cta)
  const leftArray = []

  const genrateRightCard = (item) => {
    const leftCards = _.get(item, "attributes")
    genrateLeftCard(leftCards)
    // console.log(leftCards)

    return (<Tab className="tab-button" onClick={e => handleItemClick(leftCards)} id={_.get(item, "id")}>
      {_.get(item, "attributes.title")}
    </Tab>)
  }

  const genrateLeftCard = (leftCard) => {
    const heading = _.get(leftCard, "subtitle");
    const cta = _.get(leftCard, "goto_url_text");
    const lists = _.get(leftCard, "datacarditems", [])
    // console.log("data is here", cta)

    let leftdata =
      <div className='tab-box'>
        <h4 className='heading04'>{heading}</h4>
        <ul className='custom-scrollbar'>

          {
            lists.map((list => {
              const item = _.get(list, "item")
              return <li> {item}</li>
            }))
          }

        </ul>
        <Link href={leftCard.goto_url} className='btn maroon-btn maroon-btn-arrow'>{cta}</Link>
      </div>

    leftArray.push(leftdata)
  }


  const showTab = () => {
    setActive(!isActive);
  };
  const [selectedItem, setSelectedItem] = useState(null);
  const [items, setItem] = useState(indexData);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    setActive(!isActive);
  }
  return (
    <section className="section programm-section">
      <Tab.Group>
        <div className='container programm-container'>
          <div className='pro-leftbox '>
            <h2 className='heading02'>{mainheading}</h2>
            <p>{subheading}</p>
            <div className='tab-head-row custom-scrollbar '>

              <p className='tab-button-mobile' onClick={showTab}>
                {/* {selectedItem ? items.programTitle.find(item => item.id == selectedItem).label : "CPA"}
                <span className={'tab-head-box ' + ' ' + (isActive ? 'active' : '')}><RiArrowDropDownLine /></span> */}
              </p>
              <Tab.List className={'tab-head-box ' + ' ' + (isActive ? 'active' : '')}>


                {rightList && rightList.map(item => genrateRightCard(item))}
              </Tab.List>
            </div>
          </div>

          <Tab.Panels>
            <div className='pro-rigbhbox'>
              {
                leftArray.map((lists => {
                  return <Tab.Panel>
                    {lists}
                  </Tab.Panel>
                }))
              }
            </div>
          </Tab.Panels>

        </div>
      </Tab.Group>
    </section >
  )
}