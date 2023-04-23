import React from 'react'

const CiaTabelThree = () => {
  return (
    <section className=' tableSection pb-0'>
    <div className='container-l'>
        <h2 className="heading02">Overall course comparison</h2>
    <div className='custom-scrollbar'>
        <table cellpadding="0" cellspacing="0" className="strip">
            <thead>
                <tr>
                    <th>Particulars</th>
                    <th>CIA</th>
                    <th>US CPA Course</th>
                    <th>US CMA Course</th>
                    <th>CISA Course</th>
                    <th>CA Course (India)</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Exam Body</td>
                    <td>Institute of Internal auditors- IIA</td>
                    <td>American Institute of Certified public Accountant-AICPA</td>
                    <td>Institute of Management Accountants- IMA USA</td>
                    <td>Information Systems Audit and Control Association-ISACA</td>
                    <td>Institute of Chartered accountants of India – ICAI</td>
                </tr>
                <tr>
                    <td> Careers</td>
                    <td> Internal Audit</td>
                    <td> External audit, Corporate finance- Global companies</td>
                    <td>Business finance, Finance planning, analysis</td>
                    <td>Information system audit</td>
                    <td>External audit, Corporate finance- Indian companies</td>
                </tr>
                <tr>
                    <td>Exam </td>
                    <td>3 parts</td>
                    <td>4 exams </td>
                    <td>2 parts</td>
                    <td>1 exam</td>
                    <td>3 levels</td>
                </tr>
                <tr>
                    <td>Duration</td>
                    <td>10 Months</td>
                    <td>10 months</td>
                    <td>8 Months</td>
                    <td>6 months</td>
                    <td>4 years</td>

                </tr>
                <tr>
                    <td>Exam Pattern </td>
                    <td> Objective</td>
                    <td>Objective and SIMs based- Case laws </td>
                    <td>Objective and SIMs based- Case laws</td>
                    <td>Objective</td>
                    <td>Descriptive</td>

                </tr><tr>
                    <td> Passing percentage</td>
                    <td> 60%</td>
                    <td>55%</td>
                    <td>50%</td>
                    <td>55%</td>
                    <td>5%</td>

                </tr><tr>
                    <td> Passing exam scores</td>
                    <td>75% </td>
                    <td>75% </td>
                    <td>75%</td>
                    <td>50%</td>
                    <td>50% aggregate</td>

                </tr>

            </tbody>
        </table>
        </div>
        <p className='mt-4'>Every course has its own pros and cons and one need to select course based on one’s own specialisation</p>
   
    </div>
</section>
  )
}

export default CiaTabelThree