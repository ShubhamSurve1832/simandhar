import React from 'react'
import Image from 'next/image'

const OurBanner = () => {
    return (
        <>
            <section className='pb-8'>
                <div className="">
                    <div className="ol-class-section">
                        <div className="ourclass">
                            <div className="ourclass-banner">
                                <Image src="/img/cpa/ourcourse-banner.webp" alt="our page banner"  layout="fill" className='resp-img ourcourse-banner' />
                            </div>
                            <div className="side-text">
                                <div className="our-classtext">
                                    <h2 className='heading08'>Enhanccce your US CPA Exam/ License Eligibility with Bridge Course</h2>
                                </div>
                                <div className="our-classbtn">
                                    <a href="" className='heading07'>Flash Sale | Flat 50% Off</a>
                                </div>
                                <div className="">
                                    <a href="" className='btn maroon-btn maroon-arrow-btn'>View All Courses</a>
                                </div>
                            </div>
                            <div className="our-classbtn our-classbtn01">
                                <a href="" className='heading07'>Earn 60 Credits along with your US CPA course and sit for US CPA exam in India</a>
                            </div>

                        </div>




                        {/* <div className="text-heading">
                            <h2>Earn 60 Credits along with your US CPA course and sit for US CPA exam in India</h2>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurBanner