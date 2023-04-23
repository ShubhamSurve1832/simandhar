import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import _ from "lodash"

const PrinceSection = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:1337/api/datacards/15?populate[0]=listitems&[populate][1]=listitems.datacard,listitems.datacarditems,listitems.subcards",
            responseType: 'json',
            headers: { "Authorization": "Bearer f7d1423065e7dfad4ff8aa84d496bd543a5cbc619216dfcd5ab593c7cb6101b82aa49976194a9d2332238b31d1942548e7469ed662e3c30881baf8deae11c3e46fb40b5ecfe15f2c5d02bf4e4dc9d20a53c37ffdec9903f13ba5850c24263fe4fcaaad033294bb29d4a6a84392c853a1e6a597ea26f7f2a997a3699b4d187be0" },
        })
            .then((res) => {
                if (!_.isEmpty(res.data))
                    setData(res.data)
            })
            .catch((err) => {
                console.log("here is error", err.message)
            })
    }, [])

    let title = _.get(data, "data.attributes.title")
    let dataCard = _.get(data, "data.attributes.listitems.data", [])
    // console.log("price title", dataCard)


    return (
        <section className='princeSection'>
            <div className='container-l'>
                <h2 className='heading02'>Our <span> PRINCE </span>values show how we work together</h2>
                <div className='flex space-between text-center'>

                    {
                        dataCard.map((dataSet => {
                            let values = _.get(dataSet, "attributes")
                            // console.log("prince title", title)


                            return (

                                <div className='grid-box'>
                                    <div className='inner-box'>
                                        <h2 className='heading01'>{values.title}</h2>
                                        <p className='title01'>{values.subtitle} </p>
                                    </div>
                                    <div className='desc-box'>
                                        <p className='desc-para'>{values.description} </p>
                                    </div>
                                </div>
                            )
                        }))
                    }





                    {/* <div className='grid-box'>
                        <div className='inner-box'>
                            <h2 className='heading01'>R</h2>
                            <p className='title01'>RESPONSIBLE</p>
                        </div>
                        <div className='desc-box'>
                            <p className='desc-para'>We take responsibility for every issue and solve them by collaborating.</p>
                        </div>
                    </div>
                    <div className='grid-box'>
                        <div className='inner-box'>
                            <h2 className='heading01'>I</h2>
                            <p className='title01'>INTEGRITY</p>
                        </div>
                        <div className='desc-box'>
                            <p className='desc-para'>We like doing every work with utmost integrity, respect, and care.</p>
                        </div>
                    </div>
                    <div className='grid-box'>
                        <div className='inner-box'>
                            <h2 className='heading01'>N</h2>
                            <p className='title01'>NURTURING</p>
                        </div>
                        <div className='desc-box'>
                            <p className='desc-para'>We believe in Nurturing individuals with different initiatives and grooming them.</p>
                        </div>
                    </div>
                    <div className='grid-box'>
                        <div className='inner-box'>
                            <h2 className='heading01'>C</h2>
                            <p className='title01'>COMMITTED</p>
                        </div>
                        <div className='desc-box'>
                            <p className='desc-para'>We believe in Commitment to continuous learning and updating ourselves with the latest changes.</p>
                        </div>
                    </div>
                    <div className='grid-box'>
                        <div className='inner-box'>
                            <h2 className='heading01'>E</h2>
                            <p className='title01'>ENERGY</p>
                        </div>                      <div className='desc-box'>
                            <p className='desc-para'>We believe in quickly moving out from our mistakes and surrounding ourselves with positive energy to add value to our stakeholders.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default PrinceSection