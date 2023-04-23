import React from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Head from 'next/head'
import Header from '../components/header'
import Video from '../home/videoSection'

import videoData from '../database/data/videoSection.json'

const corporateJurney = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const router = useRouter()
    const buttonRef = useRef()
    const [values, setValues] = useState({
        name: "",
        email: "",
        number: "",
        course: "",
    })

    const { name, email, number, course } = values;

    const onFormSubmit = async (e) => {

        try {
            await fetch('/api/formData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values)
            });
            buttonRef.current.click()
            router.push("/thankyou")
        } catch (err) {
            console.log(err)
        }


    }
    return (
        <>
            <Head>
                <title>Corporate Journey - Simandhar Education</title>
            </Head>
            <Header />
            <Video videoData={videoData.homePage} />
            <section className="section text-center">
                <div className="container">
                    <p>These sessions covered a range of topics, including revenue recognition, leases, and other financial and accounting matters.</p>
                    <p className='mt-4'>Mr. Jain's dedication to continuous learning and improvement is evident through his attendance at these events and conferences. Learning is a constant process and Sripal keeps himself up to date on the latest trends hence provides the best practices and immense knowledge to the corporate world. His commitment to personal and professional development has undoubtedly contributed to his successful foundation of Simandhar Education. His passion for teaching serves as an inspiration to others who aspire to excel in their finance and accounting career. This network with BIG 4 accounting firms and other MNCs has proved to be a bridge between the CPA, CMA, EA candidates at Simandhar and the respective employers.</p>
                    <p className='mt-4'>Sripal Jain's efforts in co-founding and leading Simandhar Education have been critical to the success and growth of the organisation. Under his leadership, Simandhar Education has achieved significant milestones, including the launch of new courses and certifications, expansion into new geographies, and the establishment of strategic partnerships with leading industry players. His unwavering commitment to quality, innovation and discipline has helped Simandhar Education become a trusted and valued provider of accounting and finance training, and his vision and leadership continue to drive the organisation's growth and success.</p>
                </div>
            </section>
            <section className='register-counseling' id='register'>
                <div className="container-l">
                    {/* <h3 className='heading03'>Want to know about the US CPA and US CMA scope in India?</h3>
                    <h4 className="heading04">Register now to get free counseling for US CPA and US CMA in India</h4> */}
                    <div className='register-container'>
                        <div className="left-box">
                            <h3 className="heading03">Main Office Location</h3>
                            <div className='contact-box'>
                                <div className='flex-row'>
                                    <div className='img-box'>
                                        <Image src="/img/pin.png" alt="banner image" layout="fill" className='resp-img' />
                                    </div>
                                    <div>
                                        <p>Plot Number: 39/A Dr.Subba Rao Colony, Picket, Secunderabad, Telangana 500026</p>
                                    </div>
                                </div>
                                <div className='flex-row'>
                                    <div className='img-box'><Image src="/img/telephone.png" alt="banner image" layout="fill" className='resp-img' />
                                    </div>
                                    <div><a href="tel:+91-7780273388"><p>+91-7780273388</p></a></div>
                                </div>
                                <div className='flex-row'>
                                    <div className='img-box'><Image src="/img/email1.png" alt="banner image" layout="fill" className='resp-img' />
                                    </div>
                                    <div>
                                        <a href="mailto:info@simandhareducation.com"><p>info@simandhareducation.com</p></a>
                                    </div>
                                </div>
                                <div className='flex-row'>
                                    <div className='img-box'><Image src="/img/web.png" alt="banner image" layout="fill" className='resp-img' />
                                    </div>
                                    <div>
                                        <a href="www.simandhareducation.com" target="_blank"><p>www.simandhareducation.com </p></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-box">
                            <h3 className="heading03">Contact Details</h3>
                            <p>For registration questions please get in touch using the contact details below. For any questions use the form.</p>
                            <div className="form">
                                <form className='resource-form' method='post' onSubmit={handleSubmit(onFormSubmit)}>
                                    <div className="input-text input-box">
                                        {/* className="res-text" */}
                                        <input id="enquiry" name="enquiry" type="text" placeholder="Enter Your Name" value={name}
                                            {...register("name", {
                                                required: "Name is required",
                                                pattern: {
                                                    value: /^[a-zA-Z ]*$/,
                                                    message: "Enter letters only"
                                                },
                                                onChange: (e) => { setValues({ ...values, [e.target.name]: e.target.value }) },
                                            })}
                                            className={errors.name ? 'error-border' : null} />
                                        {errors.name && <span className='error-message'>{errors.name?.message}</span>}

                                    </div>

                                    <div className="input-text input-box">
                                        <input id="enquiry" name="email" type="text" placeholder="Enter Your Email Address"
                                            {...register("email", {
                                                required: "EmailI d is required",
                                                pattern: {
                                                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                                    message: "Enter valid email id"
                                                },
                                                onChange: (e) => { setValues({ ...values, [e.target.name]: e.target.value }) },
                                            })}
                                            className={errors.email ? 'error-border' : null}

                                            value={email}
                                        />
                                        {errors.email && <span className='error-message'>{errors.email?.message}</span>}
                                    </div>
                                    <div className="input-text input-box">
                                        <PhoneInput country='in' inputProps={{ name: 'phone', required: true }} />
                                        <input id="enquiry" name="enquiry" type="number" placeholder="Enter Your Mobile Number" minLength="10" maxLength="10"
                                            {...register("number",
                                                {
                                                    required: "Number is required",
                                                    pattern: {
                                                        value: /^[0-9\b]+$/,
                                                        message: "Enter Numbers only"
                                                    },
                                                    minLength: {
                                                        value: 10,
                                                        message: "Enter Min 10 Number"
                                                    },
                                                    maxLength: {
                                                        value: 10,
                                                        message: "Enter Max 10 Number"
                                                    },
                                                    onChange: (e) => { setValues({ ...values, [e.target.name]: e.target.value }) },
                                                })}
                                            className={errors.number ? 'error-border' : null}
                                            //onChange={handleChange}
                                            value={number}
                                        />
                                        {errors.number && <span className='error-message'>{errors.number?.message}</span>}
                                    </div>
                                    <div className="input-box custom-select select-field">
                                        <select id="select-course" name="course" placeholder="Select Course" {...register("course",
                                            {
                                                required: "Select Course",
                                                onChange: (e) => { setValues({ ...values, [e.target.name]: e.target.value }) },
                                            })}
                                            className={errors.course ? 'error-border' : null}

                                            value={course}><option value="" selected="">Select Course</option><option value="US CPA">US CPA</option><option value="US CMA">US CMA</option><option value="EA">EA</option><option value="CIA">CIA</option><option value="IFRS">IFRS</option><option value="Data Analytics">Data Analytics</option><option value="Data Analytics">Simandhar Saamarth</option></select>
                                        {errors.course && <span className='error-message'>{errors.course?.message}</span>}
                                    </div>
                                    <div className='tab-box resource-btn' >
                                        <button className="btn maroon-btn maroon-btn-arrow mt-35" ref={buttonRef}>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default corporateJurney