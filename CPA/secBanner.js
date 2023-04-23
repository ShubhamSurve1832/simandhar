import React from 'react'
import CommonForm from "../components/CommonForm"
import Image from 'next/image'
import indexData from '../database/index.json'


const secBanner = () => {
    return (
        <>
            <section className='section sec_banner_section'>
                <div className="container-l">
                    <div className='banner-grid'>
                        <div className='right-form-box'>
                            <CommonForm showcity={false} showTitle={true} indexData={indexData.secPageTitle} formType='data1'/>
                        </div>
                        <div className='middel-box'>
                            <Image src='/img/sec_banner_image.webp' layout="fill" className='resp-img' alt='' />
                        </div>
                        <div className='left-box'>
                            <Image src='/img/sec_banner_video_thumbnail.webp' layout="fill" className='resp-img' alt=''/>
                            
                        </div>
                    </div>
                </div>
            </section>    

        </>
    )
}

export default secBanner