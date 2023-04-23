import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import _ from 'lodash'
const trainer = ({ trainerData }) => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:1337/api/datacards/52?populate[0]=listitems,images,descriptions&[populate][1]=listitems.datacard,listitems.datacarditems,listitems.subcards",
            responseType: 'json',
            headers: { "Authorization": "Bearer f7d1423065e7dfad4ff8aa84d496bd543a5cbc619216dfcd5ab593c7cb6101b82aa49976194a9d2332238b31d1942548e7469ed662e3c30881baf8deae11c3e46fb40b5ecfe15f2c5d02bf4e4dc9d20a53c37ffdec9903f13ba5850c24263fe4fcaaad033294bb29d4a6a84392c853a1e6a597ea26f7f2a997a3699b4d187be0" }
        })
            .then((res) => {
                {
                    if (!_.isEmpty(res.data))
                        setData(res.data)
                }
            })

            .catch((err) => {
                console.log("here is error", err.message)
            })
    }, [])

    let heading = _.get(data, "data.attributes.title")
    let descriptions = _.get(data, "data.attributes.descriptions",[])
    // let description = _.get(data, "data.attributes.desc")
    let imgData = _.get(data, "data.attributes.images", [])
    // console.log(descriptions)

    console.log(heading)
    return (
        <section className='trainer-section pb-8'>
            <div className="container-l">
                <div className="box">
                    <div className="right_box">
                        <h2 className="heading02">{heading}</h2>
                        <div className="txt">
                            {
                                descriptions.map((data)=>{

                                    return(

                                        <p>{data.description}</p>
                                    )
                                })
                            }

                            {/* {trainerData.para.map((pass => {
                                return <p>{pass.text}</p>

                            }))} */}
                        </div>
                    </div>
                    <div className="left_box">
                        {
                          imgData.map((image)=>{
                            let img =_.get(image,'image')
                            console.log()
                            return <img src={image.image} alt=""  className='hii'/>
                          })  
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default trainer