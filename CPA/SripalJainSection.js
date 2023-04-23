import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import axios from 'axios'
import _ from 'lodash'
import ReactReadMoreReadLess from "react-read-more-read-less";



const SripalJainSection = ({ SripalData,dataCard_id }) => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios({
            method: "get",
            responseType: "json",
            url: "http://localhost:1337/api/datacards/"+dataCard_id+ "?populate[0]=listitems&[populate][1]=listitems.datacard,listitems.datacarditems,listitems.subcards",
            headers: { "Authorization": "Bearer f7d1423065e7dfad4ff8aa84d496bd543a5cbc619216dfcd5ab593c7cb6101b82aa49976194a9d2332238b31d1942548e7469ed662e3c30881baf8deae11c3e46fb40b5ecfe15f2c5d02bf4e4dc9d20a53c37ffdec9903f13ba5850c24263fe4fcaaad033294bb29d4a6a84392c853a1e6a597ea26f7f2a997a3699b4d187be0" }
        })
            .then((res) => {
                if (!_.isEmpty(res.data))
                    setData(res.data)
            })
            .catch((err) => {
                console.log("bad request", err.message)
            })
    }, [])

    const heading = _.get(data, "data.attributes.title")
    const description = _.get(data, "data.attributes.desc")
    const cardData = _.get(data, "data.attributes.listitems.data", [])
    
    return <section className='section sripal-section'>
        <div className='container'>
            <div className='mainheading'>
                <h2 className='heading02'>{heading}</h2>
            </div>
            <div>
                <p className='pr-color'>{description}</p>
            </div>

            <div className="sripal-main-box">
                {
                    cardData.map((data,index) => {
                       let dataCard = _.get(data, "attributes.subcards", [])
                        // console.log("bad request", dataCard)
                        return (
                            <>
                                {
                                    dataCard.map((card, index) => {
                                        return (
                                            <div className='sripalBox' key={index} >
                                                <div className='sripalImg'>
                                                    <Image src={card.image} alt={card.heading} layout="fill" className='resp-img' />
                                                </div>
                                                <div className='sripalCaption'>
                                                    <h3 className='title01'>{card.heading}</h3>
                                                </div>
                                                <div className='sripalDescription'>
                                                    <p><ReactReadMoreReadLess
                                                        readMoreClassName="readMoreClassName read-more"
                                                        charLimit={200}
                                                        readMoreText="Read More"
                                                        readLessText="Read Less">
                                                        {card.description}
                                                    </ReactReadMoreReadLess></p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </>
                        )




                    })
                }

                {/* <div className='sripalBox'>
                            <div className='sripalImg'>
                                <img src='/img/cpa/sripal01.png'></img>
                            </div>
                            <div className='sripalCaption'>
                                <h3 className='title01'>Meeting the Vice President, Mr. Kenneth Koskay and the Leadership Team of Becker Professional Education</h3>
                            </div>
                            <div className='sripalDescription'>
                                <p>Mr. Sripal Jain (CA, CPA) had the pleasure of meeting Mr. Kenneth Koskay (CPA, CFP), Vice President of Becker Professional Education along with the rest of the leadership team at Dallas, USA.  Read More</p>
                            </div>
                        </div> */}
            </div>
        </div>

    </section>


}

export default SripalJainSection