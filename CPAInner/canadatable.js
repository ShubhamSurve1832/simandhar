import React from 'react'
import JournerySection from '../CPA/JournerySection'
import Usp from '../home/uspSection'

import journeyData from '../database/data/journeySection.json'


const canadatable = () => {
    return (
        <>
            <div className="section canada-section analytics-section ">
                <div className="container">
                    {/* <h2 className='heading02'>How to obtain the Canada CPA designation?</h2> */}
                    <JournerySection journeyData={journeyData.canadaPage} dataCard_id={87} />

                    {/* <div className='key-topics-flex'>
                        <div className='box'><h4 className='heading05'>Confirm that you are a U.S. CPA</h4></div>
                        <div className='box'><h4 className='heading05'>List all the relevant experiences</h4></div>
                        <div className='box'><h4 className='heading05'>Submit the required documents</h4></div>
                        <div className='box'><h4 className='heading05'>Obtain Canadian CPA credentials</h4></div>
                    </div> */}
                    <div className="title01">
                        U.S. CPAs (Certified Public Accountants) who are, or have been, Canadian residents must meet certain additional requirements.
                    </div>

                    <div className="part-table">
                        <div className="heading05">
                            Applicants who wrote one or more parts of the U.S. Uniform CPA examination while:
                        </div>
                        <div className='key-topics-flex'>
                            <div className='box'><h4 className='heading05'>Being a resident of Canada; or</h4></div>
                            <div className='box'><h4 className='heading05'>After they returned as a resident to Canada; or</h4></div>
                            <div className='box'><h4 className='heading05'>After they became a resident of Canada</h4></div>
                        </div>
                    </div>

                    <div className="part-table part-table-two">
                        <div className="heading05">
                            Apart from the eligibility requirements mentioned above, if candidates have obtained either of these:
                        </div>
                        <div className='key-topics-flex'>
                            <div className='box'><h4 className='heading05'>A University degree from an authorised degree granting institution in USA (United States of America).This degree must have been given after the student attends the institution physically or on a full-time basis.</h4></div>
                            <div className='box'><h4 className='heading05'>Or the candidate should have at least one year of full-time practical experience in accounting in USA.</h4></div>
                        </div>
                    </div>

                    <div className="part-table">
                        <div className="heading02">
                            Roadmap to CPA Canada Offering
                        </div>
                        {/* <div className='key-topics-flex'>
                            <div className='box'><h4 className='heading05'>Help you attain the CPA Canada designation</h4></div>
                            <div className='box'><h4 className='heading05'>Assist you with Canadian Immigration</h4></div>
                            <div className='box'><h4 className='heading05'>Guide every step during the process</h4></div>
                        </div> */}

                        <Usp />
                    </div>

                    <div className="part-table">
                        <h2 className="heading04 text-center">Pathway to Canadian CPA for non - CA/CPA</h2>
                        <img src="/img/cpa/qualiflying.webp" alt="" />
                    </div>


                    <div className="part-table">
                        <div className="heading02">
                            Salary for CPA Canada
                        </div>
                        <div className="title01">
                            According to Payscale, the average salary of a Certified Public Accountant (CPA) in Canada is C$61,708.
                        </div>
                    </div>

                    <div className="part-table">
                        <div className="heading02">
                            US CPA Exam to Test in Canada
                        </div>
                        <div className="title01">
                            NASBA and AICPA administered the US CPA exam in Canada at approved CPA Prometric test locations/centers. The Canadian CPA aspirants/students may schedule to take the US CPA exam in approved Prometric locations in Canada from December 8 2020.
                        </div>
                        <div className="title01">
                            For complete details about CPA exam in Canada and CPA Canada requirements for international students click here
                        </div>
                    </div>


                    <div className="part-table">
                        <div className="heading02">
                            10 Provinces and 3 Territories for CPA Canada
                        </div>
                        <div className="title01">
                            The Canadian CPA is regulated in 10 provinces and 3 territories in Canada.
                        </div>
                    </div>
                    <div className="part-table">
                        <img src="/img/cpa/map.webp" alt="" />
                    </div>


                </div>
            </div>
        </>
    )
}

export default canadatable