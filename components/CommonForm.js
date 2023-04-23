import React from 'react'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const CommonForm = ({ isactive, showPopup, showTitle, showcity, showcourse, showgclid, indexData, formType, showRadio,showPara }) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const router = useRouter()
    const buttonRef = useRef()
    const [values, setValues] = useState({
        name: "",
        email: "",
        number: "",
        course: "",
        city: "",
        gclid: "",
        formName: ""

    })
    const { name, email, number, city, course, gclid, formName } = values;
    const [success, setSuccess] = useState(false);

    const [hideBtn, setHideBtn] = useState(false);
    const hideDwnBtn = () => setHideBtn(true);


    const onFormSubmit = async (e) => {

        try {
            await fetch('/api/formData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values)

            }).then((res) => {
                console.log("Response received");
                console.log(values)
                if (res.status === 200) {
                    //e.target.reset();
                    console.log("sucess");
                    setSuccess({ success: true })
                }
            })
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <div className='form-box'>
            {
                showTitle ? (
                    <h6 className='heading06'>{indexData.heading}</h6>
                ) : ('')
            }
            <form method="post" onSubmit={handleSubmit(onFormSubmit)}   >
                <input type='hidden' name={formType} value={formName} />

                <div className='input-box'>
                    <input type="text" name="name" placeholder='Enter your Name'
                        value={name}
                        {...register("name", {
                            required: "Name is required",
                            pattern: {
                                value: /^[a-zA-Z ]*$/,
                                message: "Enter letters only"
                            },
                            onChange: (e) => { setValues({ ...values, [e.target.name]: e.target.value }) },
                        })}
                        className={errors.name ? 'error-border' : null}


                    />
                    {errors.name && <span className='error-message'>{errors.name?.message}</span>}
                </div>
                <div className='input-box'>
                    <input type="text" name="email" placeholder='Enter Your Email Address'
                        {...register("email", {
                            required: "Email Id is required",
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
                <div className='input-box'>
                    <PhoneInput country='in' inputProps={{ name: 'phone', required: true }} />
                    <input type="text" name="number" minLength="10" maxLength="10" placeholder='Enter your Mobile Number'
                        {...register("number",
                            {
                                required: "Number is required",
                                pattern: {
                                    value: /^((?!(0))[0-9]{10})$/,
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

                {
                    showgclid ?
                        <div className='input-box'>
                            <input type="text" name="name" placeholder='Enter your gclid'
                                value={gclid}
                                {...register("name", {
                                    required: "gclid is required",
                                    pattern: {
                                        value: /^[a-zA-Z ]*$/,
                                        message: "Enter letters only"
                                    },
                                    onChange: (e) => { setValues({ ...values, [e.target.name]: e.target.value }) },
                                })}
                                className={errors.gclid ? 'error-border' : null}
                            />
                            {errors.gclid && <span className='error-message'>{errors.gclid?.message}</span>}
                        </div> : ''
                }

                {
                    showcity ?
                        <div className='input-box custom-select'>
                            <input type="text" name="city" placeholder='Enter City'
                                value={city}
                                {...register("city", {
                                    required: "City is required",
                                    pattern: {
                                        value: /^[a-zA-Z ]*$/,
                                        message: "Enter letters only"
                                    },
                                    onChange: (e) => { setValues({ ...values, [e.target.name]: e.target.value }) },
                                })}
                                className={errors.city ? 'error-border' : null} />
                            {errors.city && <span className='error-message'>{errors.city?.message}</span>}

                            {errors.course && <span className='error-message'>{errors.course?.message}</span>}
                        </div> : " "
                }

                {
                    showcourse ?
                        <div className='input-box custom-select'>
                            <select id="select-course" name="course" placeholder='Select Course'
                                {...register("course",
                                    {
                                        required: "Select Course",
                                        onChange: (e) => { setValues({ ...values, [e.target.name]: e.target.value }) },
                                    })}
                                className={errors.course ? 'error-border' : null}

                                value={course}
                            >
                                <option value="" selected>Select Course</option>
                                <option value="US CPA">US CPA</option>
                                <option value="US CMA">US CMA</option>
                                <option value="EA">EA</option>
                                <option value='CIA'>CIA</option>
                                <option value='IFRS'>IFRS</option>
                                <option value='Data Analytics'>Data Analytics</option>
                                <option value='Data Analytics'>Simandhar Saamarth</option>
                            </select>
                            {errors.course && <span className='error-message'>{errors.course?.message}</span>}
                        </div> : ' '
                }

                {
                    showRadio ?
                        <div className="input-box radio"style={{ borderBottom:'none' }}>
                            <p>Simandhar or Non-Simandhar Student</p>
                            <label class="radio-btn">Simandhar
                                <input type="radio" checked="checked" name="radio" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="radio-btn">Non-Simandhar
                                <input type="radio" name="radio" />
                                <span class="checkmark"></span>
                            </label>
                        </div> : ''
                }
                {
                    showPara ? 
                    <p className='formPara'>
                        Disclaimer - Keeping in view of the various aspects, students enrolled by our corporate client will not be provided with any placement assistance.
                    </p> : ''
                
                }
                <div className='input-box'>
                    <button type="submit" className='btn maroon-border-btn maroon-border-btn-arrow' ref={buttonRef}>Register</button>
                    {success && (hideBtn ? " " : <a href='/img/sample.pdf' download={true} className='btn maroon-btn maroon-btn-arrow dwn-btn' onClick={hideDwnBtn}>Download PDF</a>)}



                    {/* 
                    <button type="submit" className='btn black-border black-border-btn-arrow'>Submit</button>
                    {success && (hideBtn ? " " : <a href='/img/sample.pdf' download={true} className='btn maroon-btn maroon-btn-arrow dwn-btn' onClick={hideDwnBtn}>Download PDF</a>)} */}
                </div>
            </form>
        </div>
    )
}

export default CommonForm