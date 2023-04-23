
// import React from 'react'
// import { useState, useEffect, useRef } from 'react';
import React from "react";
import {useForm, useFieldArray, Controller} from 'react-hook-form';
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'

// you can use yup for default error message
const DownloadFormComponents = () => {
  const { register, handleSubmit, formState: { errors },  formState, reset  } = useForm();
  const router = useRouter()
  const buttonRef = useRef()
  const [values, setValues] = useState({
      name: "",
      email: "",
      number: "",
      course: "",
  }) 
  const [success, setSuccess] = useState(false);
  const [hideBtn, setHideBtn] = useState(false);
  const {name, email, number, course } = values;

 const hideDwnBtn = () => setHideBtn(true);
  // useEffect(() => {
  //     // reset form with user data
  //     reset(values);
  // }, [values]);

  // const handleChange = (e) =>
  //   setValues({...values, [e.target.name]: e.target.value });

  // const onFormSubmit = async (e) => {}
  const onSubmit = async (e) => {
    //e.preventDefault();
    
    try{
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
          setSuccess({success:true})
        }
      })
    } catch (err){
      console.log(err)
    }

  }

 useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ name: "",
      email: "",
      number: "",
      course: "", });
      
    }
  }, [formState, reset]);


  return (
    <>
      <div className='enq-form'>
      <div className='form-header'>
        <i className='resp-img-box'><Image src="/img/enq_icon.svg" alt="" layout="fill" className='resp-img' /></i>
        <p>We assure a Price match <br /> Guarantee with any Becker Partner</p>
      </div>
      <div className='form-box'>
        <h6>Take The First Step!</h6>
        {/* <form method="post" onSubmit={handleSubmit}>
          <div className='input-box'>
            <input type="text" name="name" placeholder='Enter your Name' onChange={handleChange}/>
          </div>
          <div className='input-box'>
            <input type="email" name="email" placeholder='Enter your mail' onChange={handleChange}/>
          </div>
          <div className='input-box'>
            <input type="number" name="number" placeholder='Enter your number' onChange={handleChange}/>
          </div>
          <div className='input-box'>
            <button className='btn black-border black-border-btn-arrow'>Submit</button>
          </div>
        </form> */}
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='input-box'>
            <input type="text" name="name" placeholder='Enter your Name' 
               value={name}
              {...register("name", { 
                required: "Name is required",
                pattern: {
                  value: /^[a-zA-Z ]*$/,
                  message: "Enter letters only"
                },
                onChange: (e) => { setValues({...values, [e.target.name]: e.target.value })},
            })} 
              className={errors.name ? 'error-border' : null}
              //onChange={handleChange}
             
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
                onChange: (e) => { setValues({...values, [e.target.name]: e.target.value })},
              })} 
              className={errors.email ? 'error-border' : null}
              //onChange={handleChange}
              value={email}
            />
            {errors.email && <span className='error-message'>{errors.email?.message}</span>}
          </div>
          <div className='input-box'>
            <input type="number" name="number" minlength="10" maxlength="10" placeholder='Enter your Mobile Number' 
              {...register("number", 
              { 
                required: "Number is required",
                pattern: {
                  value: /^[0-9\b]+$/,
                  message: "Enter Numbers only"
                },
                minLength:{
                  value: 10,
                  message: "Enter Min 10 Number"
                },
                maxLength:{
                  value: 10,
                  message: "Enter Max 10 Number"
                },
                onChange: (e) => { setValues({...values, [e.target.name]: e.target.value })},
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
                onChange: (e) => { setValues({...values, [e.target.name]: e.target.value })},
              })}
              className={errors.course ? 'error-border' : null}
              //onChange={handleChange}
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
            <button type="submit" className='btn black-border black-border-btn-arrow'>Submit</button>
            {success && (hideBtn ? " " : <a href='/img/sample.pdf' download={true} className='btn maroon-btn maroon-btn-arrow dwn-btn'  onClick={hideDwnBtn}>Download PDF</a>)}
            
          </div>
        </form>
      </div>
      </div>
      

</>
)
}

export default DownloadFormComponents
