import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import axios from 'axios'
import _ from 'lodash'

const Batches = ({ batcheData }) => {
    const [data,setData] = useState([])
    return (
        <>
           <section className='batches-section'>
            <div className='container-l'>
                <h2 className='heading02'>Upcoming Batches</h2>
                <div className='two-box-row'>
                    <div className='left-box'>
                        <Image src='/img/batches_thumb01.webp' layout="fill" alt='' className='resp-img'/>                        
                    </div>
                    <div className='right-box'>
                       <div className='grid-row'>
                        <div className='date-circle'>
                            <div className='date-box'>
                                <div className='month-row'>MAR</div>
                                <div className='date-row'>5</div>
                            </div>
                        </div>
                        <div className='batch-content'>
                            <h2 className='heading03'>Data Analytics</h2>
                            <h3 className='heading05'>Batch Starting from 5th March 2022</h3>
                            <h3 className='heading05'>Time : 8am - 10am</h3>
                            <div className='download-schedule'>
                                <a href="" className='btn maroon-btn maroon-btn-arrow'>Download Schedule</a>
                            </div>

                        </div>
                       </div>
                    </div>

                </div>
            </div>
           </section>
        </>
    )
}

export default Batches 