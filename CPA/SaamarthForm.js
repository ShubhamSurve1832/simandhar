import React from 'react'
import CommonForm from '../components/CommonForm'
const SaamarthForm = () => {
    return (
        <section className='saamarth-form'>
            <div className="container-l">
                <div className='left-box'>
                    <h3 className="heading03">Discover Your Dream Job with the Big 4s</h3>
                    <h4 className="heading08">Mode of Training: Virtual Duration: 40 hours</h4>
                    <p className='title01'>Registration Fee: Free for Simandhar Students and Alumni and Rs. 15000 (inclusive of taxes) for Non-Simandhar Students (valid for one year)</p>
                </div>
                <div className="right-form-box">
                    <CommonForm showcourse={true} showRadio={true} showPara={true} />
                </div>
            </div>
        </section>
    )
}

export default SaamarthForm