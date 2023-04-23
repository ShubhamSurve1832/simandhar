import React from 'react'
import Head from 'next/head'
import Header from '../../components/header'
import Image from 'next/image'
import CommonForm from '../../components/CommonForm';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import indexData from '../../database/index.json'
import HelpSection from '../../CPA/HelpSection'
import helpData from '../../database/data/helpSection.json'





const basicsOfAccounting = () => {
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


    return (<>
        <Head>
            <title>Basics Of Accounting - Simandhar Education</title>
        </Head>
        <div className='width-50'>
            <Header showData={true} />
        </div>

        <section className='accounting-banner'>
            <div className="can_banner">
                <div className="can_banner_img">
                    <Image src="/img/accounting-banner.webp" alt="banner image" layout="fill" className='resp-img' />
                </div>
                <div className="right-form-box">
                    <h3 className="heading03">Kickstarting your CPA/CMA career?</h3>
                    <h3 className="heading03">But not strong with the basic concepts?</h3>

                    <div>
                        <h3 className='heading03'>Dont Worry, We Bring You</h3>
                    </div>

                    <h3 className="heading03">Simandhar Exclusive</h3>
                    <h3 className="heading03 bold">Finance for Non-Finance Professionals (FNP)</h3>
                </div>
            </div>
        </section>

        <section className='fnp-section'>
            <div className='container text-center'>
                <h2 className="heading02">What is Simandhar’s Finance for Non-Finance Professionals (FNP)?</h2>

                <p>Simandhar's Finance for Non-Finance Professionals is a course curated especially for students enrolled in CPA or CMA courses.</p>
                <p>Our team has rigorously designed this course to support the students from non-accounting backgrounds who are new to the concepts of finance and accounting in CPA/CMA. It helps students kickstart their preparation for the CPA and CMA exams without any difficulties.</p>
            </div>
        </section>

        <section className='register-section'>
            <div className='container-l'>
                <div className='left-box'>
                    <h2 className='heading02'>Create a strong foundation in the accounting concepts for CPA and CMA</h2>
                </div>
                <div className="right-form-box">
                    <CommonForm showTitle={true} indexData={indexData.basicsOfAccounting} showcity={true} />
                </div>
            </div>
        </section>

        <section className='unique-section'>
            <div className='container-l'>
                <h2 className="heading02 text-center">What makes us Unique?</h2>
                <h3 className='heading04'>Trust only the best</h3>
                <div className='row-flex'>
                    <div className='column-flex'>
                        <h2 className='heading02'>8000+</h2>
                        <h3 className='title01'>Students</h3>
                    </div>
                    <div className='column-flex'>
                        <h2 className='heading02'>15+</h2>
                        <h3 className='title01'>Faculties</h3>
                    </div>
                    <div className='column-flex'>
                        <h2 className='heading02'>40+</h2>
                        <h3 className='title01'>Corporate Tie-Ups</h3>
                    </div>
                    <div className='column-flex'>
                        <h2 className='heading02'>500+</h2>
                        <h3 className='title01'>Placements</h3>
                    </div>
                </div>
            </div>
        </section>

        <section className='unique-grid background-none'>
        <HelpSection helpData={helpData.basicsOfAccounting} dataCard_id={84} />
            {/* <div className="container-l">
                <div className="grid">
                    <div className='grid-card'>
                        <div className='image-card'>
                            <Image src="/img/cpa/key_img4.webp" alt="banner image" layout="fill" className='resp-img' />
                        </div>
                        <h4 className="heading05">8000+ Students</h4>
                    </div>
                    <div className='grid-card'>
                        <div className='image-card'>
                            <Image src="/img/cpa/key_img4.webp" alt="banner image" layout="fill" className='resp-img' />
                        </div>

                        <h4 className="heading05">200+ Placement Partners</h4>
                    </div>
                    <div className='grid-card'>
                        <div className='image-card'>
                            <Image src="/img/cpa/key_img4.webp" alt="banner image" layout="fill" className='resp-img' />
                        </div>
                        <h4 className="heading05">10+ Top Instructor</h4>
                    </div>
                    <div className='grid-card'>
                        <div className='image-card'>
                            <Image src="/img/cpa/key_img4.webp" alt="banner image" layout="fill" className='resp-img' />
                        </div>

                        <h4 className="heading05">100+ Corporate Events</h4>
                    </div>
                    <div className='grid-card'>
                        <div className='image-card'>
                            <Image src="/img/cpa/key_img4.webp" alt="banner image" layout="fill" className='resp-img' />
                        </div>
                        <h4 className="heading05">Comprehensive Study Material</h4>
                    </div>
                    <div className='grid-card'>
                        <div className='image-card'>
                            <Image src="/img/cpa/key_img4.webp" alt="banner image" layout="fill" className='resp-img' />
                        </div>
                        <h4 className="heading05">Live Interactive Classes</h4>
                    </div>
                    <div className='grid-card'>
                        <div className='image-card'>
                            <Image src="/img/cpa/key_img4.webp" alt="banner image" layout="fill" className='resp-img' />
                        </div>
                        <h4 className="heading05">Recorded Videos</h4>
                    </div>
                    <div className='grid-card'>
                        <div className='image-card'>
                            <Image src="/img/cpa/key_img4.webp" alt="banner image" layout="fill" className='resp-img' />
                        </div>
                        <h4 className="heading05">100% Placement Assistance</h4>
                    </div>
                    <div className='grid-card'>
                        <div className='image-card'>
                            <Image src="/img/cpa/key_img4.webp" alt="banner image" layout="fill" className='resp-img' />
                        </div>
                        <h4 className="heading05">Free CPA Eligibility Check</h4>
                    </div>
                    <div className='grid-card'>
                        <div className='image-card'>
                            <Image src="/img/cpa/key_img4.webp" alt="banner image" layout="fill" className='resp-img' />
                        </div>
                        <h4 className="heading05">End to End Licensing Support</h4>
                    </div>
                    <div className='grid-card'>
                        <div className='image-card'>
                            <Image src="/img/cpa/key_img4.webp" alt="banner image" layout="fill" className='resp-img' />
                        </div>
                        <h4 className="heading05">CPA bridge course to meet the shortfall of credits</h4>
                    </div>
                    <div className='grid-card'>
                        <div className='image-card'>
                            <Image src="/img/cpa/key_img4.webp" alt="banner image" layout="fill" className='resp-img' />
                        </div>
                        <h4 className="heading05">Support & Counselling from Experts</h4>
                    </div>
                    <div className='grid-card'>
                        <div className='image-card'>
                            <Image src="/img/cpa/key_img4.webp" alt="banner image" layout="fill" className='resp-img' />
                        </div>
                        <h4 className="heading05">State-of-the-art Learning Management System</h4>
                    </div>
                </div>
            </div> */}
        </section>

        <section className='benifits-section'>
            <div className="container">
                <h2 className='heading02 text-center'>Who can Benefit from this Course?</h2>
                <div className="benefits-container">
                    <figure className='achiever-box'>
                        <div className='achiever-img resp-img-box'>
                            <Image src='/img/course_banifits01.png' layout="fill" className='resp-img' alt='' />
                        </div>
                        <figcaption>
                            <p>This course benefits the students who hail from non-financial backgrounds and are struggling with the fundamentals of accounting and finance.</p>
                        </figcaption>
                    </figure>
                    <figure className='achiever-box'>
                        <div className='achiever-img resp-img-box'>
                            <Image src='/img/course_banifits02.png' layout="fill" className='resp-img' alt=''/>
                        </div>
                        <figcaption>
                            <p>It is also beneficial for accounting professionals who want to review and improve their accounting knowledge.</p>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>

        <section className='mixed-gradient'>
            <div className='two-box-grid'>
                <div className='left-box text-center'>
                    <h5 className="heading05">We are trusted by 10000+ students globally.</h5>
                    <h5 className="heading05">Enroll now for CPA| CMA| EA| CIA| IFRS.</h5>
                    <h5 className="heading05">Join Simandhar to make your dreams come true.</h5>
                    <a href="#register" className='btn white-btn white-btn-arrow'>
                        Enroll Now
                    </a>
                </div>
                <div className='right-box text-center'>
                    <h5 className="heading05">Enroll with Simandhar & Ace US CPA Exam in 9 months.</h5>
                    <h5 className="heading05">Get Placed in Big 4s and Top MNCs.</h5>
                    <h5 className="heading05">To know about CPA eligibility and get CPA career counseling for free.</h5>
                    <a href="#register" className='btn white-btn white-btn-arrow'>
                        Contact Us
                    </a>
                </div>
            </div>
        </section>

        <section>
            <div className='container text-center'>
                <h2 className="heading02">Learn it for Free!</h2>
                <p>Simandhar Finance for Non-Finance Professionals Course is absolutely free for CPA and CMA aspirants enrolled with Simandhar Education!</p>
            </div>
        </section>

        <section className='simandhar-fnp'>
            <div className="container-l">
                <h2 className="heading02 text-center">What will you get from Simandhar’s Finance for Non-Finance Professionals?</h2>
                <div className="two-box-flex">
                    <div className="left-box">
                        <p>The course will help you get strong with the basic finance and accounting concepts to help you pursue the US CPA or US CMA with absolute confidence.</p>
                        <ul>
                            <li>Understanding the basic concepts of finance and accounting for a strong foundation</li>
                            <li>Learning the basic concepts of auditing, taxation, reporting, and regulation.</li>
                            <li>ntroduction to cost management and accounting</li>
                            <li>Preparation of financial statements, balance sheets, and cash flow</li>
                            <li>Current trends and opportunities in the finance and accounting fields</li>
                            <li>1:1 mentoring session with Mr. Sripal Jain, CA, CPA</li>
                        </ul>

                    </div>
                    <div className="right-box">
                        <Image src="/img/cpa/fnp_img01.webp" alt="banner image" layout="fill" className='resp-img' />
                    </div>
                </div>
            </div>
        </section>

        <section className='register-counseling' id='register'>
            <div className="container-l">
                <h3 className='heading03'>Want to know about the US CPA and US CMA scope in India?</h3>
                <h4 className="heading04">Register now to get free counseling for US CPA and US CMA in India</h4>
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
                                    <PhoneInput country='in' inputProps={{ name: 'phone', required: true}} />
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

export default basicsOfAccounting