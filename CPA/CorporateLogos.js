import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import axios from 'axios'
import _ from 'lodash'


const CorporateLogos = ({showHeading,showDescription1,showDescription2,dataCard_id}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios({
            method: "get",
            responseType: "json",
            url: "http://localhost:1337/api/datacards/"+dataCard_id+"?populate[0]=listitems,images&[populate][1]=listitems.datacard,listitems.datacarditems,listitems.subcards",
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
    const subtitle = _.get(data, "data.attributes.subTitle")
    const description = _.get(data, "data.attributes.desc")
    const imagedata = _.get(data, "data.attributes.images", [])
    console.log(imagedata)
    return (
        <>
           
            <section className='simandhartieups-section'>
                <div className='container'>
                { showHeading ?
                    <h2 className="heading02">{heading}</h2> : ''}
                    <div>
                    { showDescription1 ?  
                        <p>{subtitle}</p> : '' }
                      { showDescription2 ?
                        <p>{description}</p> : ''}
                    </div>
                </div>
            </section>
            <section className='logo-section'>
                <div className="container-l">
                    <div className="logo-grid">
                        {
                            imagedata.map((data) => {
                                return (
                                    <a href='' className="logo-box">
                                        <div>
                                            <Image src={data.image} layout="fill" className='resp-img' alt="" />
                                        </div>
                                    </a>
                                )
                            })
                        }                      

                    </div>
                </div>
            </section>
        </>
    )
}

export default CorporateLogos