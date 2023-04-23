import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import _ from 'lodash'

const BeckerSection = ({ beckerData, dataCard_id }) => {
  const [ isShow, setShow]= useState(false)
  const [buttonText, setButtonText] = useState(false)
  const showData =()=>{
    setShow(!isShow)
    setButtonText(!buttonText)
  }

  const [data, setData] = useState([])
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:1337/api/datacards/23?populate[0]=listitems,images&[populate][1]=listitems.datacard,listitems.datacarditems,listitems.subcards",
      responseType: 'json',
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
  let description = _.get(data, "data.attributes.desc")
  let imgData = _.get(data, "data.attributes.images", [])

  return (
    <section className='section'>
      <div className="container-l p2">
        <h2 className='heading02'>{heading}</h2>
        <div className="twoBox">
          <div>
            <p className="boxOne pr-color">
              {description}
            </p>
            <div className={"data" + " " + (isShow ? 'active' : '')}>
              <p className='boxOne pr-color'>Simandhar takes pride on being awarded as the <strong className='bold'> BEST CPA CHANNEL PARTNER 2022</strong> India. </p>
              <p className='boxOne'>With the growing number of institutes providing CPA, CMA training in India, it's really a stark reminder of the fact that hard work, focus, dedication and the desire to provide nothing but the best to our CPA aspirants has resulted in this recognition being bestowed on us by Becker.</p>
              <p className='boxOne bold'>Think CPA, Think Simandhar</p>
            </div>
            <span className='read-more boxOne' onClick={showData}>{buttonText ? 'Read Less ' : 'Read More'}</span>
          </div>
          <div className="boxTwo">
            {
              imgData.map((images) => {
                let image = _.get(images, "image")
                // console.log(image)
                return <img src={image} alt={heading} />
              })
            }

          </div>
        </div>
      </div>
    </section>
  )
}

export default BeckerSection