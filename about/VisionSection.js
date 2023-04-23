import React from 'react'
import Image from 'next/image';
import Slider from 'react-slick';
import { useEffect, useState } from 'react'
import axios from 'axios'
import _ from "lodash"

const VisionSection = ({dataCard_id}) => {

    const [data, setData] = useState([])
    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:1337/api/datacards/"+ dataCard_id+"?populate[0]=listitems&[populate][1]=listitems.datacard,listitems.datacarditems,listitems.subcards",
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

    let dataCard = _.get(data, "data.attributes.listitems.data", [])

    var visionSlider = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
            ,
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section>
            <div className='three-box-grid'>
                {/* <Slider {...visionSlider}> */}

                {
                    dataCard.map((data => {
                        let databox = _.get(data, "attributes.subcards", [])
                        // console.log("hello",databox)
                        return( 
                            <>
                            {
                            databox.map((values => {
                                let image = _.get(values, "image")
                                let title = _.get(values, "heading")
                                let description = _.get(values, "description")
                                // console.log(title, image, description)
                                return <div className='grid-box'>
                                    <Image src={image} layout="fill" alt='' className='resp-img' />
                                    <h3 className='heading04'>{title}</h3>
                                    <p>{description}</p>
                                </div>
                            }))
                        }
                      </>  )
                        // return 
                            // <div className='grid-box'>
                            //     <Image src={setData.path} layout="fill" alt='' className='resp-img' />
                            //     <h3 className='heading04'>{setData.title}</h3>
                            //     <p>{setData.desc}</p>
                            // </div>
                        
                            }))
                }


            
                {/* </Slider> */}
            </div>
        </section>
    )
}

export default VisionSection;