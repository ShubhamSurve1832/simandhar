import React from 'react'
import Head from 'next/head';
import Header from '../../components/header';
import Image from 'next/image';
import { useState } from 'react';
import CommonForm from '../../components/CommonForm';

const News = () => {
  const [ isShow, setShow]= useState(false)
  const [buttonText, setButtonText] = useState(false)
  const showData =()=>{
    setShow(!isShow)
    setButtonText(!buttonText)
  }
  return (
    <>
      <Head>
        <title>CPA Evolution changes 2024 | clear cpa exam in 2023 | Simandhar Education</title>
      </Head>
      <div className='width-50'>
        <Header showData={true} />
      </div>
      <div className='cpa-news-page'>
        <div className='container-l'>
          <div className="newsbanner">
            <Image src='/img/news_banner.webp' alt="" layout="fill" className='resp-img' />
          </div>

          {/* Second section */}
          <p>Updated December 30, 2022</p>
          <div className='heading03 mt-4'>Guam CPA licensee can now obtain Canada CPA certification without taking exams!</div>
          <div className='two-box-row'>
            <div className='left-box'>
              <p>If you have completed your CPA exam, and you hold a U.S. CPA license, you can earn a Canadian CPA designation. The MRA (mutual recognition agreement) between all Canadian CPA bodies and the United States International Qualifications Appraisal Board (IQAB), which represents the National Association of State Boards of Accountancy (NASBA) and the American Institute of Certified Public Accountants (AICPA), came into effect on 1st January, 2018.</p>
              <p className='mt-4'>Members of provincial/regional CPA bodies have the right to:</p>
              <ul className='mt-4'>
                <li>Use the CPA designation</li>
                <li>Be registered</li>
                <li>Audit</li>
                <li>Other services or licensure</li>
              </ul>
            </div>
            <div className='right-form-box'>
              <CommonForm />
            </div>
          </div>
        </div>

        {/* Third Section */}
        <div className='container-l requirements-section section'>
          <div className="heading03">
            Eligibility Requirements for U.S. CPAs seeking the Canadian CPA designation
            <ul>
              <li>If you have a U.S. CPA credential, you may be eligible to obtain the Canadian CPA designation through this MRA if you are a licensee in good standing of a State Board, and you meet the following additional criteria: You have at least 150 semester hours of college or university education, including a baccalaureate or higher degree conferred by a State Board-approved college or university. The U.S. CPAs who qualified prior to the introduction of the 150-semester hour requirement are grandfathered in by this agreement as having met the 150-semester hour requirement.</li>
              <li>You have successfully completed the Uniform CPA Exam.</li>
              <li>You have 30 months of practical experience in the field. Applicants with two years of relevant post-qualification experience are deemed to have fulfilled the 30-month experience requirement. Candidates with less than two years of relevant post-qualification experience must fill out the International Practical Experience Verification and Employer Details form.</li>
              <li>You are in compliance with the Continuing Professional Education (CPE) requirements of your State Board.</li>
            </ul>
          </div>
        </div>

        {/* Fourth Section */}
        <div className='reciprocity-section section pt-0'>
          <div className="container-l">
            <h3 className='heading03'>Canada-USA Reciprocity (as of July 2022)</h3>
            <div>
              <p className='mt-4'>State Boards of Accountancy with which Canadian bodies have reciprocity (passing the international qualification examination is required) and which have adopted the 150-hour education requirement prescribed by NASBA & the AICPA.</p>
              <div className="twoBox">
              <ul>
                <li>Alabama State Board of Public Accountancy</li>
                <li>Arizona State Board of Accountancy</li>
                <li>Arkansas State Board of Public Accountancy</li>
                <li>California State Board of Accountancy</li>
                <li>Commonwealth of the Northern Mariana Islands</li>
                <li>Colorado State Board of Accountancy</li>
                <li>Connecticut State Board of Accountancy1</li>
                <li>Delaware State Board of Accountancy</li>
                <li>District of Columbia Board of Accountancy1</li>
                <li>Florida Board of Accountancy</li>
                <li>Georgia State Board of Accountancy</li>
                <li>Guam Board of Accountancy</li>
                <li>Hawaii Board of Public Accountancy1A</li>
                <li>Idaho State Board of Accountancy</li>
                <li>Illinois Board of Examiners and Dept. of Financial & Professional Regulation</li>
                <li>Indiana Board of Accountancy</li>
                <li>Iowa Accountancy Examining Board</li>
                <li>Kansas Board of Accountancy1</li>
                <li>Kentucky State Board of Accountancy</li>
                <li>State Board of CPAs of Louisiana</li>
                <li>Maine Board of Accountancy</li>
                <li>Maryland State Board of Public Accountancy</li>
                <li>Massachusetts Board of Public Accountancy</li>
                <li>Michigan Board of Accountancy</li>
                <li>Minnesota State Board of Accountancy</li>
              </ul>
              <ul className={'content' + " " + (isShow ? "active" : "")}>
                <li>Missouri State Board of Accountancy</li>
                <li>Montana State Board of Public Accountants</li>
                <li>Nebraska State Board of Public Accountancy1</li>
                <li>Nevada State Board of Accountancy</li>
                <li>New Hampshire Board of Accountancy</li>
                <li>New Jersey State Board of Accountancy</li>
                <li>New Mexico Public Accountancy Board</li>
                <li>New York State Board for Public Accountancy</li>
                <li>North Carolina Board of CPA Examiners2</li>
                <li>North Dakota State Board of Accountancy</li>
                <li>Accountancy Board of Ohio</li>
                <li>Oklahoma Accountancy Board1</li>
                <li>Oregon State Board of Accountancy</li>
                <li>Pennsylvania State Board of Accountancy</li>
                <li>Rhode Island Board of Accountancy</li>
                <li>South Carolina Board of Accountancy</li>
                <li>South Dakota Board of Accountancy</li>
                <li>Tennessee State Board of Accountancy</li>
                <li>Texas State Board of Public Accountancy</li>
                <li>Utah Board of Accountancy</li>
                <li>Vermont Board of Accountancy</li>
                <li>Virginia Board of Accountancy</li>
                <li>Washington State Board of Accountancy</li>
                <li>West Virginia Board of Accountancy</li>
                <li>Wisconsin Accounting Examining Board</li>
                <li>Wyoming Board of Certified Public Accountants</li>
              </ul>
              <p className='read-more mobile' onClick={showData}>{buttonText ? 'Read Less ' : 'Read More'}</p>
              </div>
            </div>
            <div>
              <p className='uppercase mt-4'>STATE BOARDS OF ACCOUNTANCY WITH WHICH CANADIAN BODIES DO NOT OFFER RECIPROCITY - PASSING THE CFE IS REQUIRED</p>
              <div>
                <ul className='mt-4'>
                  <li>Alaska State Board of Public Accountancy</li>
                  <li>Mississippi State Board of Public Accountancy</li>
                  <li>Puerto Rico Board of Accountancy</li>
                </ul>
                <ol className='mt-4'>
                  <li>These are two-tiered states. Initially, a certificate is obtained that does not grant the individual full CPA privileges. After meeting additional requirements, the certificate holder may be granted a license or permit. Only those candidates who have completed the CPA course and have an active license or permit are deemed substantially equivalent.</li>
                  <li>Legacy CAs are only recognized in the provinces of British Columbia, Nova Scotia, Ontario, Manitoba, New Brunswick, and Saskatchewan.</li>
                </ol>
                <p className='note mt-4'><span className='bold'>Notes:</span> The information contained herein is subject to change by the US state boards without notice. It is the responsibility of the applicant to confirm and, if necessary, provide proof that the state board has adopted the 150-hour education requirement.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FOURTH SECTION CPA Evolution/Changes 2024  */}
        <section className='evolution-section'>
          <div className='container-l'>
            <p className='date'>Updated December 29, 2022</p>
            <h3 className="heading02 mt-4">CPA Evolution / Changes 2024</h3>
            <p className='mt-4'>The NASBA has released critical details for anyone who is willing to sit for the CPA Exam at the end of the year and beyond. All of the dates listed below might change later, but they are critical to be aware of because they may affect your plans.</p>

            {/* PRE - REVOLUTION */}
            <div className='pre-evolution'>
              <h3 className='heading03'>Pre-CPA Evolution scenario</h3>
              <p>By the end of 2023, the CPA will no longer allow you to take BEC.</p>
              <p>The NASBA Gateway system will no longer process authorisations to Test and Notices to Schedule (NTS) for BEC after November 15, 2023.</p>
              <p>That means that Boards of Accountancy will have to set BEC apppcation deadpnes before then.</p>
              <p>When those dates become available, they will be posted on the NASBA website, and we will keep you updated.</p>
              <h4 className="heading04 ">The deadline to take AUD, FAR, and REG exams before CPA Evolution is December 15, 2023!</h4>
              <p>That means that if you pass all four sections of the CPA Exam before December 15, 2023, none of the other content or administration changes should affe The CPA Exam will not be administered between December 16, 2023 and January 9, 2024, so that testing centers can get ready to administer the 2024 CPA Exam.</p>
            </div>

            {/* post-evolution */}
            <div className="post-evolution">
              <h3 className='heading03'>Post-CPA Evolution 2024 scenario</h3>
              <p>The new exam, which incorporates all of the CPA Evolution changes, will be available beginning January 10, 2024.</p>
              <ul>
                <li>Core sections (AUD, FAR, and REG) will be available until March 26, 2024.</li>
                <li>Authorizations to Test and NTSs for these Core sections will be processed in real time.</li>
                <li>Discipline sections (BAR, ISC, and TCP) will be offered through February 6, 2024.</li>
                <li>Testing authorizations and NTSs for Discipline sections will not be processed until November 22, 2023.</li>
              </ul>
              <p>The Boards of Accountancy are considering extending credit for any sections passed by candidates on January 1, 2024, to June 30, 2025.</p>
              <ul>
                <li>The policy has already been approved by 39 people.</li>
                <li>The NASBA maintains an up-to-date map.</li>
              </ul>
              <p>Accountancy boards are also considering changing the start date of the 18-month rolling window for CPA Exam credit.</p>
              <ul>
                <li>Many boards now use the date a candidate sits for and passes their first section of the CPA Exam.</li>
                <li>The date would be shifted to when NASBA or the state board releases the candidate's passing score.</li>
              </ul>
            </div>

            {/* ABOUT  */}
            <div className='about'>
              <div className="heading03">
                All about CPA Evolution
              </div>
              <div>
                <p className='about-title'>The root causes</p>
                <p>The CPA Evolution initiative has been taken into consideration as it modernizes the CPA licensure model to highlight the skills and competencies needed to practice accounting today and in the near future. Evolution introduces a new CPA Exam that tests a particular skill set required by all the candidates, as well as a chosen Discipline in which they can demonstrate their skills and knowledge in detail. The new CPA Exam will still be 16 hours long and will be divided into four sections, three core and one discipline.</p>
              </div>
              <div>
                <p className='about-title'>The background</p>
                <ul>
                  <li>The AICPA and NASBA announced an initiative in June 2019 to update the CPA Exam to meet the increasing demands placed on newly-licensed CPAs.</li>
                  <li>The NASBA Board of Directors unanimously approved the CPA Evolution initiative on July 27, 2020.</li>
                  <li>In May 2020, the AICPA's Governing Council enthusiastically supported the initiative.</li>
                  <li>The AICPA started working with academia in 2021 to ensure that students are well prepared for changes in education requirements when they are implemented.</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className='heading03'>What is the need of CPA Evolution/Changes 2024?</h3>
              <p>The unique "CORE plus Discipline" framework is intended to demonstrate that CPAs have the in-depth knowledge required to perform professional requirement. This also demonstrates the reality of most methods that concentrate on a single important area of accounting instead of all of them simultaneously. This model will enable the AICPA to easily include or exclude Disciplines in order to accurately recognise practice as it evolves.</p>
              <p>Irrespective of which discipline a candidate tests in, once they obtain their CPA licence, they will be able to practice in any area.</p>
            </div>

            <div>
              <h3 className='heading03'>When will the CPA Evolution take place?</h3>
              <p>The new CPA Exam will be available on January 10, 2024. That is when you will be able to take segments of the new and improved CPA Exam pattern.</p>
            </div>

            <div>
              <h3 className='heading03'>2024 CPA sneak-peek!</h3>
              <p>The existing AUD, FAR, and REG segments will be renamed "Core," and all candidates will be required to pass them in order to pass the CPA Exam. The current BEC section, on the other hand, is being phased out. Candidates will choose one of three new "Discipline" sections to demonstrate deeper skills and knowledge in place of BEC.</p>
              <p>The new CPA Exam Discipline sections are as follows:</p>
              <ul>
                <li>Business Analysis and Reporting (BAR)</li>
                <li>Information Systems and Controls (ISC)</li>
                <li>Tax Compliance and Planning (TCP)</li>
              </ul>
              <p>The management of the new CPA Exam is anticipated to remain largely unchanged: it will still take the same 16 hours as it does now and will be divided into four sections.</p>
              <p>Accounting students should be aware of the exam's educational requirements. They have not yet changed, but in June 2021, a new model for an accounting curriculum in line with the CPA Evolution updates was unveiled.</p>
              <p>We recommend that candidates complete their CPA studies as soon as possible to avoid having to account for these changes.</p>
            </div>

            <div>
              <h3 className='heading03'>Things to know about 2024 CPA Exam</h3>
              <p>The AICPA released an Exposure Draft (ED) containing tentative CPA Evolution Blueprints for public comment on June 28, 2022, giving the public their first look at the content coming to the CPA Exam in 2024.</p>

              <p>In addition to the draught Uniform CPA Examination Blueprints, the ED presents the findings and conclusions of the AICPA's Practice Analysis, which was used to draught the blueprints and was overseen by the Board of Examiners.</p>

              <p>The Practice Analysis was designed to identify the technical knowledge and critical skills required of newly licensed CPAs, so the Evolution Blueprint draught is the first look at how the new CPA Exam is addressing the accounting skills gap and ensuring the CPA Certification remains the gold standard in the accounting world.</p>

              <p>The Evolution blueprints include not only the content (represented by representative task statements for each exam section), but also the proposed number of questions, how the AICPA intends to weight the content on the new CPA Exam, and the critical skills assigned for testing on each exam section.</p>
            </div>

          </div>
        </section>
      </div>

    </>
  )
}

export default News