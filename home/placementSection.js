import Image from 'next/image'
import { useEffect, useState } from 'react'
import axios from 'axios'
import _ from "lodash"
import Link from 'next/link'

export default function placementSection({ dataCard_id }) {

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

    const title = _.get(data, "data.attributes.title")
    const dataCard = _.get(data, "data.attributes.listitems.data", [])
    // console.log(dataCard)


    return (
        <section className="section pm-section pt-0">
            <div className='container'>
                <h2 className='heading02'>{title}</h2>
                <div className='pm-container'>
                    {
                        dataCard.map((data => {
                            let title = _.get(data, "attributes.title")
                            let subtitle = _.get(data, "attributes.subtitle")
                            let path = _.get(data, "attributes.image_url")
                            let image_alt = _.get(data, "attributes.iamge_alt")
                            let goto_url_text = _.get(data, "attributes.goto_url_text")
                            let goto_url = _.get(data, "attributes.goto_url")


                            return <div className='pm-box'>
                                <figure>
                                    <div className='pm-img resp-img-box'>
                                        <Image src={path} layout="fill" className='resp-img' alt={image_alt} />
                                    </div>
                                    <figcaption>
                                        <h6>{title}</h6>
                                        <p>{subtitle}</p>
                                    </figcaption>
                                </figure>
                                <Link href={goto_url} className='btn maroon-border-btn maroon-border-btn-arrow'>{goto_url_text}</Link>
                            </div>
                        }))
                    }
                </div>
            </div>
        </section>
    )
}