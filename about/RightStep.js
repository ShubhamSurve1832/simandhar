import React, { useState } from 'react'
import Image from 'next/image'

const RightStep = () => {

    const [card,setCard]=useState([{path:"/img/AnjuNampoothiry.png",title:'Anju Nampoothiry',rank:'BEC-98 - REG-97 - AUD-93 - FAR-89',country:'US Texas | BDO'},
    {path:"/img/Accenture.png",title:'Akshay Jaiswal',rank:'FAR-98 - BEC-96 - REG-96 - AUD-88',country:'CPA Bangalore | Amazon'},
    {path:"/img/KavneetSinghHanspal.png",title:'Kavneet Singh Hanspal',rank:'US CPA, Delhi, India',country:'EY'},
    {path:"/img/SwethaKiran.png",title:'Swetha Kiran',rank:'US CPA, Hyderabad, India',country:'JP Morgan'}])
var images = [1,2,3,4,5]
    let [logo1,logo2,logo3,logo4,logo5]= images
    return (
        <section className='right-step-section'>
            <h2 className='heading02'>The Right Step To Take A Giant Leap</h2>
            <div className="container">
                <div className='right-step-row'>
                    <h3 className='right-steps-title'>Advance Your Career with Online Courses</h3>
                    <div className='btn white-btn white-btn-arrow'>Buy Courses</div>
                </div>
                <div className='steps-container'>
                    <div className='left-box'>
                        <div className='row-1'>

                            <figure className='achiever-box'>
                                <div className='achiever-img resp-img-box'>
                                    <Image src='/img/AnjuNampoothiry.png' layout="fill" className='resp-img' alt=''/>
                                </div>
                                <figcaption>
                                    <h3 className='caption-title'>Anju Nampoothiry</h3>
                                    <p>BEC-98 - REG-97 - AUD-93 - FAR-89</p>
                                    <p>US Texas | BDO</p>
                                </figcaption>
                            </figure>

                            <div className='partner-logo'>
                                <Image src='/img/Accenture.png' layout="fill" className='resp-img' alt=''/>
                            </div>

                        </div>

                        <div className='row-1 row-reverse'>

                            <figure className='achiever-box'>
                                <div className='achiever-img resp-img-box'>
                                    <Image src='/img/AkshayJaiswal.png' layout="fill" className='resp-img' alt='' />
                                </div>
                                <figcaption>
                                    <h3 className='caption-title'>Akshay Jaiswal</h3>
                                    <p>FAR-98 - BEC-96 - REG-96 - AUD-88</p>
                                    <p>CPA Bangalore | Amazon</p>
                                </figcaption>
                            </figure>
                            <div className='partner-logo'>
                                <Image src='/img/pwc.png' layout="fill" className='resp-img' alt=''/>
                            </div>

                        </div>
                    </div>
                    <div className='right-box'>
                    <div className='row-1'>
                            <figure className='achiever-box'>
                                <div className='achiever-img resp-img-box'>
                                    <Image src='/img/KavneetSinghHanspal.png' layout="fill" className='resp-img' alt=''/>
                                </div>
                                <figcaption>
                                    <h3 className='caption-title'>Kavneet Singh Hanspal</h3>
                                    <p>US CPA, Delhi, India</p>
                                    <p>EY</p>
                                </figcaption>
                            </figure>
                            <div className='partner-logo'>
                                <Image src='/img/kpmg.png' layout="fill" className='resp-img' alt=''/>
                            </div>

                        </div>
                        <div className='row-1 row-reverse'>
                            <figure className='achiever-box'>
                                <div className='achiever-img resp-img-box'>
                                    <Image src='/img/SwethaKiran.png' layout="fill" className='resp-img' alt=''/>
                                </div>
                                <figcaption>
                                    <h3 className='caption-title'>Swetha Kiran</h3>
                                    <p>US CPA, Hyderabad, India</p>
                                    <p>JP Morgan</p>
                                </figcaption>
                            </figure>
                            <div className='partner-logo'>
                                <Image src='/img/Deloitte.png' layout="fill" className='resp-img img1' alt=''/>
                                <Image src='/img/EY_logo.png' layout="fill" className='resp-img img2' alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RightStep