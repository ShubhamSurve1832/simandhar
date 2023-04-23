import React from 'react'
import { useState } from 'react'

const careersContent = () => {
    const [active, isActive] = useState(false)
    const showCard = () => {
        console.log(this)
        isActive(!active)
    }
    return (
        <>
            <section className="section careersSection">
                <div className="help-container">
                    <div className='mainheading text-center'>
                        <h2 className='heading02'>Career at Simandhar</h2>
                    </div>
                    <div>
                        <p className='pr-color text-center mt-4'>The career at Simandhar Education opens up immense learning opportunities under experts guidance. Simandhar rates high in work culture, values and ensures work-life balance for employees. All work & no play? Oh no. Simandhar is a happy place that explodes with fun, games, and laughter once in a month at least. We have half-yearly trips to beautiful locations to help us all connect with each other.</p>
                    </div>
                </div>
                <div className="container">
                    <h2 className='heading02 text-center'>Current Openings</h2>
                    <div className="careersBoxs">
                        <figure className="box">
                            <div className="caption">
                                Sr. SEO Specialist
                            </div>
                            <div className="title">
                                Experience - 2 to 8 years
                            </div>
                            <div className="discription">
                                <div className="title01">Description</div>
                                Sr. SEO Specialist to coordinate SEO efforts, including onsite and offsite optimization and keyword expansion research. You'll also oversee paid search campaigns to ensure their success.
                            </div>

                            <div className={"discription discription01" + " " + (active ? "active" : " ")}>
                                <div className="content">
                                    <div className="title01">Responsibilities</div>
                                    <ul>
                                        <li> Making calls to give course details and enroll them.</li>
                                        <li>Do regular follow ups on probables data</li>
                                        <li>Deal with pending payments of there enrollments</li>
                                        <li>Provide guidance on exam process</li>
                                        <li>Participate in events in corporates sessions.</li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <div className="title01">Requirements</div>
                                    <ul>
                                        <li>Customer service /sales experience minimum 2-3years.</li>
                                        <li>Knowledge of standard and current SEO practices</li>
                                        <li>Good written and excell communication skills</li>
                                        <li>Corporate experience added advantage</li>
                                        <li>Fluent in English, Hindi, Telugu</li>
                                        <li>Excellent communication skills and Strong organizational and leadership skills</li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <div className="title01">Experience</div>
                                    <ul>
                                        <li>2 to 3 Years</li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <div className="title01">Education</div>
                                    <ul>
                                        <li>Graduation (Minimum )</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="buttons">
                            <a className='btn white-border-btn white-border-btn-arrow' onClick={showCard}>View More</a>
                            <a href="" className='btn white-btn white-btn-arrow'>Apply</a>
                            </div>
                        </figure>
                        
                        <figure className="box">
                            <div className="caption">
                                Sr. SEO Specialist
                            </div>
                            <div className="title">
                                Experience - 2 to 8 years
                            </div>
                            <div className="discription">
                                <div className="title01">Description</div>
                                Sr. SEO Specialist to coordinate SEO efforts, including onsite and offsite optimization and keyword expansion research. You'll also oversee paid search campaigns to ensure their success.
                            </div>

                            <div className={"discription discription01" + " " + (active ? "active" : " ")}>
                                <div className="content">
                                    <div className="title01">Responsibilities</div>
                                    <ul>
                                        <li> Making calls to give course details and enroll them.</li>
                                        <li>Do regular follow ups on probables data</li>
                                        <li>Deal with pending payments of there enrollments</li>
                                        <li>Provide guidance on exam process</li>
                                        <li>Participate in events in corporates sessions.</li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <div className="title01">Requirements</div>
                                    <ul>
                                        <li>Customer service /sales experience minimum 2-3years.</li>
                                        <li>Knowledge of standard and current SEO practices</li>
                                        <li>Good written and excell communication skills</li>
                                        <li>Corporate experience added advantage</li>
                                        <li>Fluent in English, Hindi, Telugu</li>
                                        <li>Excellent communication skills and Strong organizational and leadership skills</li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <div className="title01">Experience</div>
                                    <ul>
                                        <li>2 to 3 Years</li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <div className="title01">Education</div>
                                    <ul>
                                        <li>Graduation (Minimum )</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="buttons">
                            <a className='btn white-border-btn white-border-btn-arrow' onClick={showCard}>View More</a>
                                <a href="" className='btn white-btn white-btn-arrow'>Apply</a>
                            </div>
                        </figure>

                    </div>
                </div>
            </section>
        </>
    )
}

export default careersContent