import React, { useState } from 'react'

const FaqSection = () => {
  const [show, setShow] = useState("")
  function showHideFaq() {
    setShow(show === "" ? "active" : "");
  }
  return (
    <>
      <section className="section faq-section pt-8">
        <div className="container-l">
          <h2 className="heading02">Frequently Asked Questions(FAQ's)</h2>
          <div className="faq-container">
            <div className={`faq-row ${show}`} onClick={showHideFaq}>
              <h2 className="faq-title">Certified Public Accountant (CPA)</h2>
              <div className="faq-toggle-box" style={{ display: (show ? "block" : 'none') }}>
                <div className="faq-box">
                  <h3 className="heading06">What is CPA?</h3>
                  <p>CPA (Certified Public Accountant) is a designation given by AICPA to the individuals who have passed the Uniform CPA exam, met the required and relevant experience. The CPA designation enforces high professional standards in the field of accounting. </p>
                </div>
                <div className="faq-box">
                  <h3 className="heading06">Who are eligible for CPA? </h3>
                  <p> The CPA Exams are administered by AICPA, the world's largest accounting body. AICPA offers membership to all the aspirants successfully clearing all 4 CPA exams. CPA license, however, is issued by the 55 state boards of accountancy of the US that are part of NASBA. Each state board has different eligibility criteria that the aspirant needs to meet to take the US CPA exams.</p>
                  <ul>
                    <li>Master's Degree in any of the streams of Commerce, Accounting or Finance</li>
                    <li>An aspirant needs 120 credits to take the US CPA exams and 150 credits to get his CPA license</li>
                    <li>It's considered that one year of University education in India is equal to 30 credits of US education</li>
                    <li>In some cases, first division graduates of a three-year degree from NAAC-A accredited universities of India are qualified to take the US CPA exams too.</li>
                  </ul>
                </div>
                <div className="faq-box">
                  <h3 className="heading06">Which companies hire CPA?</h3>
                  <p>There are indeed many job opportunities in India for US CPA qualified professionals. Obviously, there are the big 4s like Deloitte, EY, etc where CPAs have an opportunity. Apart from the big 4s there are many more international companies like PwC India hiring CPAs even right now. According to Naukri.com there are around 26,426 job openings for a CPA in India as of now and this number keeps increasing, changing every day. </p>
                </div>
                <div className="faq-box">
                  <h3 className="heading06">How many sections are in CPA?</h3>
                  <p>There are four sections in the CPA exam: </p>
                  <ul>
                    <li>Regulation (REG)</li>
                    <li>Auditing and Attestation (AUD)</li>
                    <li>Financial Accounting and Reporting (FAR)</li>
                    <li>Business Environment and Concepts (BEC)</li>
                  </ul>
                </div>
                <div className="faq-box">
                  <h3 className="heading06"> What is the minimum passing score for CPA?</h3>
                  <p>You need a score of 75 or higher to pass the CPA exam. Specifically, you must earn a 75 or higher on each of the four tests that make up the CPA exam. </p>
                </div>
              </div>
            </div>
            <div className={`faq-row ${show}`} onClick={showHideFaq}>
              <h2 className="faq-title">CPA Scores</h2>
              <div className="faq-toggle-box" style={{ display: (show ? "block" : 'none') }}>
                <div className="faq-box">
                  <h3 className="heading06">What are the CPA exam score release dates for the year 2021?</h3>
                  <p>According to the AICPA, 2021 CPA Exam scores will be released
                    on the following CPA Exam score release dates:</p>
                  <table>
                    <tbody>
                      <tr>
                        <th>If you take your exam on/before:</th>
                        <th colspan="2">Your target score release date is:</th>
                      </tr>
                      <tr>
                        <td>23rd January, 2021</td>
                        <td>9th February, 2021</td>
                      </tr>
                      <tr>
                        <td>
                          15th February, 2021 </td>
                        <td>
                          23rd February, 2021 </td>
                      </tr>
                      <tr>
                        <td>
                          23rd February, 2021 </td>
                        <td>18th March, 2021</td>
                      </tr>
                      <tr>
                        <td>31st March, 2021</td>
                        <td>09th April, 2021</td>
                      </tr>
                      <tr>
                        <td>23rd April, 2021</td>
                        <td>11th May, 2021</td>
                      </tr>
                      <tr>
                        <td>16th May, 2021</td>
                        <td>25th May, 2021</td>
                      </tr>
                      <tr>
                        <td>08th June, 2021</td>
                        <td>16th June, 2021</td>
                      </tr>
                      <tr>
                        <td>30th June, 2021</td>
                        <td>13th July, 2021</td>
                      </tr>
                      <tr>
                        <td>23rd July, 2021</td>
                        <td>10th August, 2021</td>

                      </tr>
                      <tr>
                        <td>15th August, 2021 </td>
                        <td>24th August, 2021 </td>
                      </tr>
                      <tr>
                        <td>07th September, 2021 </td>
                        <td>15th September, 2021</td>
                      </tr>
                      <tr>
                        <td>30th September, 2021</td>
                        <td>12th October, 2021</td>
                      </tr>
                      <tr>
                        <td>23rd October, 2021</td>
                        <td>09th November, 2021</td>
                      </tr>
                      <tr>
                        <td>15th November, 2021</td>
                        <td>23rd November, 2021</td>
                      </tr>
                      <tr>
                        <td>8th December, 2021</td>
                        <td>16th December, 2021</td>
                      </tr>
                      <tr>
                        <td>31st December, 2021</td>
                        <td>11th January, 2022</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FaqSection;


