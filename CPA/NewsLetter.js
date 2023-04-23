import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import axios from 'axios'
import _ from 'lodash'
const NewsLetter = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:1337/api/datacards/83?populate[0]=listitems&[populate][1]=listitems.datacard,listitems.datacarditems,listitems.subcards",
            responseType: 'json',
            headers: { "Authorization": "Bearer f7d1423065e7dfad4ff8aa84d496bd543a5cbc619216dfcd5ab593c7cb6101b82aa49976194a9d2332238b31d1942548e7469ed662e3c30881baf8deae11c3e46fb40b5ecfe15f2c5d02bf4e4dc9d20a53c37ffdec9903f13ba5850c24263fe4fcaaad033294bb29d4a6a84392c853a1e6a597ea26f7f2a997a3699b4d187be0" },
        })
            .then((res) => {
                if (!_.isEmpty(res.data))
                    setData(res.data)
                console.log(data)
            })
            .catch((err) =>
                console.log("here is error", err.message)
            )
    }, [])

    let heading = _.get(data, "data.attributes.title")
    let cardData = _.get(data, "data.attributes.listitems.data", [])

    return (
        <section className='newsletter-section'>
            <div className="container-l">
                <h2 className="heading02">{heading}</h2>
                <div className='newletter_grid'>
                    {
                        cardData.map((data) => {
                            let dataCard = _.get(data, "attributes.subcards", [])
                            console.log(dataCard)
                            return (
                                <>
                                    {
                                        dataCard.map((box, index) => {
                                            console.log(box.heading)
                                            return (
                                                <div className='box' key={index}>
                                                    <Link href={box.image} download={true} target='_blank'><p className="title01">{box.heading}</p></Link>
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
    )
}

export default NewsLetter