import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import axios from 'axios'
import _ from "lodash"

const Gallery = ({ galleryData }) => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios({
            method: "get",
            responseType: "json",
            url: "http://localhost:1337/api/datacards/79?populate[0]=listitems,images&[populate][1]=listitems.datacard,listitems.datacarditems,listitems.subcards",
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

    let imgData = _.get(data, "data.attributes.images", [])
    return (
        <>
            <section className='gallery-section background-gradient'>
                <div className='container-l2'>
                    <div className='gallery-box'>
                        {
                            imgData.map((path => {
                                return (
                                    <div className='gallery-img'>
                                        <Image src={path.image} layout="fill" alt='' className='resp-img' />
                                    </div>
                                )
                            }))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery