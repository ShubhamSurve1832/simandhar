import React from 'react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import axios from 'axios'
import _ from "lodash"

const CpacmaPlacement = ({ achieverData, dataCard_id }) => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:1337/api/datacards/" + dataCard_id + "?populate[0]=listitems&[populate][1]=listitems.datacard,listitems.datacarditems,listitems.subcards",
            responseType: 'json',
            headers: { "Authorization": "Bearer f7d1423065e7dfad4ff8aa84d496bd543a5cbc619216dfcd5ab593c7cb6101b82aa49976194a9d2332238b31d1942548e7469ed662e3c30881baf8deae11c3e46fb40b5ecfe15f2c5d02bf4e4dc9d20a53c37ffdec9903f13ba5850c24263fe4fcaaad033294bb29d4a6a84392c853a1e6a597ea26f7f2a997a3699b4d187be0" },
        })
            .then((res) => {
                if (!_.isEmpty(res.data))
                    setData(res.data)
                // console.log(data)
            }
            )
            .catch((err) =>
                console.log("here is error", err.message)
            )
    }, [])

    const heading = _.get(data, "data.attributes.title")
    const cardData = _.get(data, "data.attributes.listitems.data", [])
    const goto_url = _.get(data,"data.attributes.cta_url")
    const goto_url_text = _.get(data,"data.attributes.cta_title")
    // console.log(cardData)
    return (
        <>
            <section className='testimonial-placement'>
                <div className="container-l ">
                    <h2 className="heading02">{heading}</h2>
                    <div className='placement-container'>
                        {
                            cardData.map((data => {
                                let card = _.get(data,"attributes")
                                console.log(card)

                                return <div className='pm-card'>
                                    <figure>
                                        <div className='achiever-img resp-img-box'>
                                            <Image src={card.image_url} layout="fill" className='resp-img' alt={card.iamge_alt}/>
                                            <div className='logo'><Image src={card.image_url} layout="fill" className='resp-img' /></div>
                                        </div>
                                        <figcaption>
                                            <p className="title01">{card.title}</p>
                                            <p>{card.subtitle}</p>
                                            <p>{card.description}</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            }))
                        }
                        
                        {/* <div className='pm-card'>
                            <figure>
                                <div className='achiever-img resp-img-box'>
                                    <Image src="/img/anjuNamapoothiry.webp" layout="fill" className='resp-img' />
                                    <div className='logo'><Image src="/img/anjuNamapoothiry.webp" layout="fill" className='resp-img' /></div>
                                </div>
                                <figcaption>
                                    <p className="title01">Anju Nampoothiry</p>
                                    <p>BEC-98 - REG-97 - AUD-93 - FAR-89</p>
                                    <p>Texas - USA</p>
                                </figcaption>
                            </figure>
                        </div>
                        <div className='pm-card'>
                            <figure>
                                <div className='achiever-img resp-img-box'>
                                    <Image src="/img/anjuNamapoothiry.webp" layout="fill" className='resp-img' />
                                    <div className='logo'><Image src="/img/anjuNamapoothiry.webp" layout="fill" className='resp-img' /></div>
                                </div>
                                <figcaption>
                                    <p className="title01">Anju Nampoothiry</p>
                                    <p>BEC-98 - REG-97 - AUD-93 - FAR-89</p>
                                    <p>Texas - USA</p>
                                </figcaption>
                            </figure>
                        </div> */}
                    </div>
                    <div className="text-center mt-6">
                    <a href={goto_url} className='btn maroon-border-btn maroon-border-btn-arrow '>{goto_url_text}</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CpacmaPlacement