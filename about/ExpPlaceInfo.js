import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import _ from "lodash"


const ExpPlaceInfo = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:1337/api/datacards/12?populate[0]=listitems,descriptions&[populate][1]=listitems.datacard,listitems.datacarditems,listitems.subcards",
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

    let description = _.get(data, "data.attributes.desc")
    let descriptions = _.get(data, "data.attributes.descriptions", [])
    let innerData = _.get(data, "data.attributes.listitems.data", [])


    return (
        <>
            <section className='values'>
                {
                    descriptions.map((description) => {
                        let des = _.get(description, "description")
                        console.log('inner data', des)
                        return (
                            <p className='heading05'>
                                {des}
                            </p>
                        )
                    })
                }

                <div className='four-box-grid'>
                    {
                        innerData.map((values => {
                            let value = _.get(values, "attributes.title")
                            let title = _.get(values, "attributes.subtitle")
                            // console.log("hyat ky aahe",title)
                            return (
                                <div className='grid-box'>
                                    <h3 className='heading02'>{value}</h3>
                                    <h4 className='title'>{title}</h4>
                                </div>
                            )
                        }))
                    }
                </div>
            </section>
            {/* <section className='values'>
            <p className='heading05'>
                    We believe that education has the ability to transform every individual. Today the students just don’t need information to be educated but it needs overall transformation to be successful in life.
                </p>
            <div className='four-box-grid'>
                    <div className='grid-box'>
                        <h3 className='heading02'>10000+</h3>
                        <h4 className='title'>Students</h4>
                    </div>
                    <div className='grid-box'>
                        <h3 className='heading02'>15+</h3>
                        <h4 className='title'>Faculties</h4>
                    </div>
                    <div className='grid-box'>
                        <h3 className='heading02'>40+</h3>
                        <h4 className='title'>Corporate Tie-Ups  </h4>
                    </div>
                    <div className='grid-box'>
                        <h3 className='heading02'>500+</h3>
                        <h4 className='title'>Placements</h4>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default ExpPlaceInfo