import React from 'react'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'



const FreeResourcesBanner = () => {

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
            <section className="free-resources">
                <div className="free-banner">
                    <div className="banner-text">
                        <h2 className="heading02">Master the Exam with our Free Resources!</h2>
                        <h3 className="heading01">Get access to Free MCQs pertaining
                            to CPA / CMA / CIA / EA courses</h3>
                    </div>

                    <div className='tab-box resource-btn'>
                        <a href="javascript:;" className="btn maroon-btn maroon-btn-arrow mt-35">Download Free Resources</a>
                    </div>
                </div>

            </section>

            <section className="section free-resource-form">
                <div className="container">
                    <div className="form">
                        <form className='resource-form' method='post' onSubmit={handleSubmit(onFormSubmit)}>
                            <div className="form-text">
                                <h2 className="heading03">Unlock Your Free Download!</h2>
                            </div>
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
                            <PhoneInput country='in' inputProps={{ name: 'phone', required: true, autoFocus: true }} />
                                <input  id="enquiry" name="enquiry" type="number" placeholder="Enter Your Mobile Number" minLength="10" maxLength="10"
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
            </section>
        </>
    )
}


export default FreeResourcesBanner