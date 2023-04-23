import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import axios from 'axios'
import _ from 'lodash'

const TESection = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:1337/api/datacards/31?populate[0]=listitems&[populate][1]=listitems.datacard,listitems.datacarditems,listitems.subcards",
            responseType: "json",
            headers: { "Authorization": "Bearer f7d1423065e7dfad4ff8aa84d496bd543a5cbc619216dfcd5ab593c7cb6101b82aa49976194a9d2332238b31d1942548e7469ed662e3c30881baf8deae11c3e46fb40b5ecfe15f2c5d02bf4e4dc9d20a53c37ffdec9903f13ba5850c24263fe4fcaaad033294bb29d4a6a84392c853a1e6a597ea26f7f2a997a3699b4d187be0" },
        })
            .then((res) => {
                {
                    if (!_.get(res.data))
                        setData(res.data)
                }
            })
            .catch((err) => {
                console.log("bad request", err.message)
            })
    }, [])

    let heading = _.get(data, "data.attributes.title")
    let subHeading = _.get(data, "data.attributes.subTitle")
    let cardData = _.get(data, "data.attributes.listitems.data", [])
    // console.log(cardData)

    return (
        <section className='transform-educ'>
            <div className='education-row'>
                <div className="heading02">
                    {heading}
                </div>
                <div className="heading05">
                    {subHeading}
                </div>
            </div>

            {
                cardData.map((data) => {
                    let datacard = _.get(data, "attributes")
                    let lists = _.get(data, "attributes.datacarditems", [])
                    // console.log(lists)
                    return (
                        <div className='TE-flex container-l'>
                            <div className='left-box'>
                                <h2 className='heading02'>{datacard.title}</h2>
                                <p className='m-block'>{datacard.description}</p>
                                <div>
                                    <p>{datacard.list_heading}</p>
                                    <ul>
                                    {
                                        lists.map((list) => {
                                            let items = _.get(list, "item")
                                            return (
                                          <li>{items} </li>
                                            )
                                        })
                                    }
                                        </ul>                                
                                </div>
                            </div>
                            <div className='right-box'>
                                <Image src={datacard.image_url} layout="fill" className='resp-img' alt={datacard.iamge_alt} />
                            </div>
                        </div>
                    )
                })
            }

        </section>
    )
}

export default TESection