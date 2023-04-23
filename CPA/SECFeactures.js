import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import _ from 'lodash'
import Image from 'next/image'

const SECFeactures = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios({
            method: "get",
            responseType: "json",
            url: "http://localhost:1337/api/datacards/73?populate[0]=listitems&[populate][1]=listitems.datacard,listitems.datacarditems,listitems.subcards",
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
    const cardData = _.get(data, "data.attributes.listitems.data", [])
    return (
        <>
            <section className='SECfeature mt-6'>
                <div className="container-m">
                    <h2 className="heading02 text-center">{heading}</h2>
                    <div className='feature_container mt-6'>
                        {
                            cardData.map((data) => {
                                let dataCard = _.get(data, "attributes.subcards", [])
                                return (
                                    <>
                                        {
                                            dataCard.map((data) => {
                                                return (
                                                    <div className="card">
                                                        <Image src={data.image} layout="fill" className='resp-img' alt='' />
                                                        <h5 className="heading05">{data.heading}</h5>
                                                        <p>{data.description}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </>
                                )

                            })
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default SECFeactures