import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import axios from 'axios'
import _ from 'lodash'

const corporateWebinars = ({dataCard_id}) => {
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
    const subtitle = _.get(data, "data.attributes.subTitle")
    const cardData = _.get(data, "data.attributes.listitems.data", [])


    return (
        <>
            <section className='corporate-webinar section'>
                <div className="container">
                    <div>
                        <p className='heading07'>{heading}</p>
                    </div>
                    <div className="gridRow">
                        {
                            cardData.map((imageBox) => {
                                let imageCard = _.get(imageBox, "attributes.subcards", [])
                                // console.log(imageCard)
                                return (
                                    <>
                                        {
                                            imageCard.map((data) => {
                                                return (
                                                    <div className="box">
                                                        <div className="content">
                                                            <div className="content_img">
                                                                <Image src={data.image} alt="" layout="fill" className='resp-img' />
                                                                <div className="overlay text-center">
                                                                    <a href="" className="overlay_img">
                                                                        <Image src="/img/cpa-inner/videoIcon.png" alt="" layout="fill" className='resp-img' />{data.CTAText}</a>
                                                                </div>
                                                            </div>
                                                            <div className="content_txt">
                                                                <p className="title01">{data.heading}</p>
                                                            </div>
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
                            <div className="content">
                                <div className="content_img">
                                    <Image src="/img/cpa-inner/Corporate_webinars1.webp" alt="" layout="fill" className='resp-img' />
                                    <div className="overlay text-center">
                                        <a href="" className="overlay_img">
                                            <Image src="/img/cpa-inner/videoIcon.png" alt="" layout="fill" className='resp-img' />Watch Video</a>
                                    </div>
                                </div>
                                <div className="content_txt">
                                    <p className="title01">CPA Exam in India Now Permanent |
                                        NASBA Host Sripal Jain| CPA Evaluation |
                                        CPA changes 2024 | CPA US</p>
                                </div>
                            </div>
                        </div> */}




                        {/* <div className="box">
                            <div className="content">
                                <div className="content_img">
                                    <Image src="/img/cpa-inner/Corporate_webinars2.webp" alt="" layout="fill" className='resp-img' />
                                    <div className="overlay text-center">
                                        <a href="" className="overlay_img">
                                            <Image src="/img/cpa-inner/videoIcon.png" alt="" layout="fill" className='resp-img' />Watch Video</a>
                                    </div>
                                </div>
                                <div className="content_txt">
                                    <p className="title01">US CPA Opportunities in Canada |
                                        Canada CPA vs US CPA | MRA CPA Canada
                                        US CPA | CPA Canada | CPA US</p>
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <div className="content">
                                <div className="content_img">
                                    <Image src="/img/cpa-inner/Corporate_webinars3.webp" alt="" layout="fill" className='resp-img' />
                                    <div className="overlay text-center">
                                        <a href="" className="overlay_img">
                                            <Image src="/img/cpa-inner/videoIcon.png" alt="" layout="fill" className='resp-img' />Watch Video</a>
                                    </div>
                                </div>
                                <div className="content_txt">
                                    <p className="title01">First Ever US CPA Session by AICPA &
                                        NASBA in India – Hosted by Simandhar
                                        Education</p>
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <div className="content">
                                <div className="content_img">
                                    <Image src="/img/cpa-inner/Corporate_webinars4.webp" alt="" layout="fill" className='resp-img' />
                                    <div className="overlay text-center">
                                        <a href="" className="overlay_img">
                                            <Image src="/img/cpa-inner/videoIcon.png" alt="" layout="fill" className='resp-img' />Watch Video</a>
                                    </div>
                                </div>
                                <div className="content_txt">
                                    <p className="title01">First Ever US CPA Session by AICPA &
                                        NASBA in India – Hosted by Simandhar
                                        Education</p>
                                </div>
                            </div>
                        </div>


                        <div className="box">
                            <div className="content">
                                <div className="content_img">
                                    <Image src="/img/cpa-inner/Corporate_webinars5.webp" alt="" layout="fill" className='resp-img' />
                                    <div className="overlay text-center">
                                        <a href="" className="overlay_img">
                                            <Image src="/img/cpa-inner/videoIcon.png" alt="" layout="fill" className='resp-img' />Watch Video</a>
                                    </div>
                                </div>
                                <div className="content_txt">
                                    <p className="title01">First Ever US CPA Session by AICPA &
                                        NASBA in India – Hosted by Simandhar
                                        Education</p>
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <div className="content">
                                <div className="content_img">
                                    <Image src="/img/cpa-inner/Corporate_webinars6.webp" alt="" layout="fill" className='resp-img' />
                                    <div className="overlay text-center">
                                        <a href="" className="overlay_img">
                                            <Image src="/img/cpa-inner/videoIcon.png" alt="" layout="fill" className='resp-img' />Watch Video</a>
                                    </div>
                                </div>
                                <div className="content_txt">
                                    <p className="title01">First Ever US CPA Session by AICPA &
                                        NASBA in India – Hosted by Simandhar
                                        Education</p>
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <div className="content">
                                <div className="content_img">
                                    <Image src="/img/cpa-inner/Corporate_webinars7.webp" alt="" layout="fill" className='resp-img' />
                                    <div className="overlay text-center">
                                        <a href="" className="overlay_img">
                                            <Image src="/img/cpa-inner/videoIcon.png" alt="" layout="fill" className='resp-img' />Watch Video</a>
                                    </div>
                                </div>
                                <div className="content_txt">
                                    <p className="title01">First Ever US CPA Session by AICPA &
                                        NASBA in India – Hosted by Simandhar
                                        Education</p>
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <div className="content">
                                <div className="content_img">
                                    <Image src="/img/cpa-inner/Corporate_webinars8.webp" alt="" layout="fill" className='resp-img' />
                                    <div className="overlay text-center">
                                        <a href="" className="overlay_img">
                                            <Image src="/img/cpa-inner/videoIcon.png" alt="" layout="fill" className='resp-img' />Watch Video</a>
                                    </div>
                                </div>
                                <div className="content_txt">
                                    <p className="title01">First Ever US CPA Session by AICPA &
                                        NASBA in India – Hosted by Simandhar
                                        Education</p>
                                </div>
                            </div>
                        </div> */}



                    </div>
                </div>
            </section>
        </>
    )
}

export default corporateWebinars