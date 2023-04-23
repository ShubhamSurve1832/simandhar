import React from 'react'
import Image from 'next/image'

const canadaBanner = () => {
    return (
        <>
            <section>
                <div className="can_banner">
                    <div className="can_banner_img">
                        <Image src="/img/cpa/can-banner.webp" alt="banner image" layout="fill" className='resp-img' />
                    </div>
                    <div className="can_text">
                        <div className="canHeading">
                            <h2 className='heading02'>CPA Canada</h2>
                            <img src="/img/cpa/can_logo.webp" alt="" />
                        </div>
                        <div className="title01 ">
                        Become CPA Canada without any additional efforts!
                        </div>
                        {/* <div className="title01 can-text">
                            For more info, fill up this form & get your queries clarified from the counselors at Simandhar.
                        </div> */}
                        <div className="">
                            <a href="" className='btn maroon-btn maroon-arrow-btn'>Download Free Prospectus</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default canadaBanner