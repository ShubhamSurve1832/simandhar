import ReactReadMoreReadLess from "react-read-more-read-less";
import { useState } from "react";

  const ProgrammTableSection = () => {
  const [buttonText2, setButtonText2] = useState(false);
  const [isShow, setShow] = useState(false)
  const showContent = () => {
    setShow(!isShow)
    setButtonText2(!buttonText2);
  }

  const [readMore, setReadMore] = useState(false)
  const showData = () => {
    setReadMore(!readMore)
  }
  const [buttonText, setButtonText] = useState(false);
  const handleClick = () => {
    setButtonText(!buttonText);
    setReadMore(!readMore)
  };

  const [readMore1, setReadMore1] = useState(false)
  const showData1 = () => {
    setReadMore1(!readMore1)
  }
  const [buttonText1, setButtonText1] = useState(false);
  const handleClick1 = () => {
    setButtonText1(!buttonText1);
    setReadMore1(!readMore1)
  };

  return (
    <>
      <section className="table-section">
        <div className="container-l">
          <div className="table-container">
            <table className="table" cellPadding="0" cellSpacing="0">
              <thead>
                <tr>
                  <th>US CPA for CA’s <br /> (Chartered Accountants) in India</th>
                  <th>US CPA for CS’s <br /> (Company Secretaries) in India</th>
                  <th>US CPA for CMA’s <br /> (Certified Management Accountant) in India</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="US CPA for CA’s">
                    <p>
                      A few state boards of US have an MoU with the ICAI which allows the chartered accountants to take the US CPA exam without pursuing any additional degree in accounting, commerce or other streams, which are usually required for non-CA’s. India CA and US CPA are similar in a few ways,as they both deal with professional accountancy. However, there are a few distinct differences between the two.
                    </p>
                    <p className="read-more" onClick={showContent}>{buttonText2 ? 'Read Less ' : 'Read More'}</p>
                  </td>
                  <td data-label="US CPA for CA’s">
                    <p>Like the CA’s, a few state boards of US have an MoU with the ICSI which allows the company secretaries (CS) to take the US CPA exam. However, it varies with the state board of accountancy. </p>
                    <div className={"cs-content" + " " + (readMore ? 'active' : '')}>
                      <p className="title">Their Profession's Demand -</p>
                      <p>Company secretaries must obtain a CPA in order to chair a few high-profile roles for the organisations in which they work.</p>
                      <p className="title">Curriculum similarities between CS and CPA -</p>
                      <p>Because a portion of the CPA curriculum is similar to the CS curriculum, CSs can pursue additional professional qualifications more easily.</p>
                      <p className="title">Additional Professional Credentials -</p>
                      <p>Besides CS, they pursue CPA, a global credential, to make their mark in the international arena, as it opens new career avenues.</p>
                      <p>Being a member of ICSI earns a few perks while pursuing a CPA. CSs earn 60 semester credits to pursue CPA certification in India, depending on the state board of accountancy.</p>
                    </div>
                    <p className="read-more" onClick={handleClick}>{buttonText ? 'Read Less ' : 'Read More'}</p>
                  </td>

                  <td data-label="US CPA for CA’s">
                    <div>
                      <p><span>CMA is a popular professional credential in India. Thousands of CMA's pursue CPA for various reasons.</span></p>
                      <p><span>
                        <strong>Career shift from Cost Accounting to Other accounting:</strong>
                        While CPAs focus on all parts of accounting, CMAs focus on cost accounting. CMAs in India pursue CPA to broaden their spectrum of knowledge and explore new career opportunities in India as well as worldwide.
                      </span>
                      </p>
                      <span className={"cs-content" + " " + (readMore1 ? 'active' : '')}>
                        <p>  <strong>Additional Professional Credentials:</strong>
                          Besides CS, they pursue CPA, a global credential, to make their mark in the international arena, opening new career avenues.
                          Being a member of ICSI earns a few perks while pursuing a CPA. Depending on the state board of accountancy, CSs earn 60 semester credits to pursue a CPA in India.
                        </p>
                      </span>
                      <p className="read-more" onClick={handleClick1}>{buttonText1 ? 'Read Less ' : 'Read More'}</p>
                    </div>
                  </td>

                </tr>
              </tbody>
            </table>
          </div>
          <div className={"inner-container" + " " + (isShow ? 'active' : '')}>
            <table className="inner-table">
              <thead>
                <tr>
                  <th>Point of Difference</th>
                  <th>	Indian CA</th>
                  <th>	US CPA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Eligibility</td>
                  <td>	ICAI decides</td>
                  <td>55 State Boards</td>
                </tr>
                <tr>
                  <td>Exams Administer</td>
                  <td>ICAI</td>
                  <td>AICPA</td>
                </tr>
                <tr>
                  <td>Licensed by</td>
                  <td>ICAI</td>
                  <td>55 State Boards</td>
                </tr>
                <tr>
                  <td>Duration</td>
                  <td>4-5 Years</td>
                  <td>18 Months Max.</td>
                </tr>
                <tr>
                  <td>Toughness</td>
                  <td>3</td>
                  <td>Single level</td>
                </tr>
                <tr>
                  <td>No. of Exams</td>
                  <td>20</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Exam Pattern</td>
                  <td>Descriptive</td>
                  <td>Objective</td>
                </tr>
                <tr>
                  <td>Passing perc.</td>
                  <td>10-15%</td>
                  <td>50-60%</td>
                </tr>
                <tr>
                  <td>Recognition</td>
                  <td>Well Recognized</td>
                  <td>Well Recognized</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section >
    </>
  )
}
export default ProgrammTableSection;