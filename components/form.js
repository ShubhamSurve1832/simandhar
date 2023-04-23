// import React from 'react'
// import { useState, useEffect, useRef } from 'react';
import Image from 'next/image'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

// you can use yup for default error message
const FormComponents = ({ isactive, showPopup }) => {
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
      <div className={'enq-form' + ' ' + (isactive ? 'active' : '')}>
        <button className='close-form resp-img-box' onClick={showPopup} ref={buttonRef}><Image src="/img/form_arrow.svg" alt="" layout="fill" className='resp-img' /></button>
        <div className='form-header'>
          <i className='resp-img-box'><Image src="/img/enq_icon.svg" alt="" layout="fill" className='resp-img' /></i>
          <p>We assure a Price match <br /> Guarantee with any Becker Partner</p>
        </div>
        <div className='form-box'>
          <h6>Take The First Step!</h6>

          <form method="post" onSubmit={handleSubmit(onFormSubmit)}>
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
            <div className='input-box'>
              <PhoneInput country='in' inputProps={{ name: 'phone', required: true}} />
              <input type="number" name="number" minLength="10" maxLength="10" placeholder='Enter your Mobile Number'
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
            </div>
            <div className='input-box'>
              <button className='btn black-border black-border-btn-arrow'>Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="overlay" onClick={showPopup} style={{ display: (isactive ? "block" : 'none') }}></div>

    </>
  )
}

export default FormComponents
