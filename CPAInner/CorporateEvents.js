import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import axios from 'axios'
import _ from 'lodash'

const CorporateEvents = ({dataCard_id}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios({
            method: "get",
            responseType: "json",
            url: "http://localhost:1337/api/datacards/"+ dataCard_id +"?populate[0]=listitems&[populate][1]=listitems.datacard,listitems.datacarditems,listitems.subcards",
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

    return (
        <>
            <section className="section corporateSection">
                <div className="help-container">
                    <div className='mainheading text-center'>
                        <h2 className='heading02'>{heading}</h2>
                    </div>
                    <div>
                        <p className='pr-color text-center mt-4 '>{description}</p>
                    </div>
                </div>
                <div className="container">
                    <div className="gridBox">

                        {
                            cardData.map((data) => {
                                let dataCard = _.get(data, "attributes.subcards", [])
                                
                                return (
                                    <>
                                        {
                                            dataCard.map((imageCard,index) => {
                                                let image = _.get(imageCard, "image")
                                                
                                                return (
                                                    <div className="box" key={index}>
                                                        <Image src={imageCard.image} alt="" layout="fill" className='resp-img' />
                                                        <div className="overlay">
                                                            <a href={imageCard.CTA} className="btn maroon-btn maroon-arrow-btn">{imageCard.CTAText}</a>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

                                    </>
                                )

                            })
                        }







                        {/* <div className="box">
                            <Image src="/img/cpa-inner/Corporate2.webp" alt="" layout="fill" className='resp-img' />
                            <div className="overlay">
                                <a href="" className="btn maroon-btn maroon-arrow-btn">View Post</a>
                            </div>
                        </div>

                        <div className="box">
                            <Image src="/img/cpa-inner/Corporate3.webp" alt="" layout="fill" className='resp-img' />
                            <div className="overlay">
                                <a href="" className="btn maroon-btn maroon-arrow-btn">View Post</a>
                            </div>
                        </div>

                        <div className="box">
                            <Image src="/img/cpa-inner/Corporate4.webp" alt="" layout="fill" className='resp-img' />
                            <div className="overlay">
                                <a href="" className="btn maroon-btn maroon-arrow-btn">View Post</a>
                            </div>
                        </div>

                        <div className="box">
                            <Image src="/img/cpa-inner/Corporate5.webp" alt="" layout="fill" className='resp-img' />
                            <div className="overlay">
                                <a href="" className="btn maroon-btn maroon-arrow-btn">View Post</a>
                            </div>
                        </div>

                        <div className="box">
                            <Image src="/img/cpa-inner/Corporate6.webp" alt="" layout="fill" className='resp-img' />
                            <div className="overlay">
                                <a href="" className="btn maroon-btn maroon-arrow-btn">View Post</a>
                            </div>
                        </div>

                        <div className="box">
                            <Image src="/img/cpa-inner/Corporate7.webp" alt="" layout="fill" className='resp-img' />
                            <div className="overlay">
                                <a href="" className="btn maroon-btn maroon-arrow-btn">View Post</a>
                            </div>
                        </div>

                        <div className="box">
                            <Image src="/img/cpa-inner/Corporate8.webp" alt="" layout="fill" className='resp-img' />
                            <div className="overlay">
                                <a href="" className="btn maroon-btn maroon-arrow-btn">View Post</a>
                            </div>
                        </div>

                        <div className="box">
                            <Image src="/img/cpa-inner/Corporate9.webp" alt="" layout="fill" className='resp-img' />
                            <div className="overlay">
                                <a href="" className="btn maroon-btn maroon-arrow-btn">View Post</a>
                            </div>
                        </div>

                        <div className="box">
                            <Image src="/img/cpa-inner/Corporate10.webp" alt="" layout="fill" className='resp-img' />
                            <div className="overlay">
                                <a href="" className="btn maroon-btn maroon-arrow-btn">View Post</a>
                            </div>
                        </div>

                        <div className="box">
                            <Image src="/img/cpa-inner/Corporate11.webp" alt="" layout="fill" className='resp-img' />
                            <div className="overlay">
                                <a href="" className="btn maroon-btn maroon-arrow-btn">View Post</a>
                            </div>
                        </div>

                        <div className="box">
                            <Image src="/img/cpa-inner/Corporate12.webp" alt="" layout="fill" className='resp-img' />
                            <div className="overlay">
                                <a href="" className="btn maroon-btn maroon-arrow-btn">View Post</a>
                            </div>
                        </div> */}

                    </div>
                </div>
            </section>
        </>
    )
}

export default CorporateEvents