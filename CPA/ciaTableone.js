import React from 'react'

const ciaTableone = () => {
    return (
        <section className=' tableSection custom-scrollbar'>
            <div className='container-l'>
                <h2 className="heading02">CIA Course Syllabus</h2>
                <div className='custom-scrollbar'>

                    <table cellpadding="0" cellspacing="0" className="strip">
                        <thead>
                            <tr>
                                <th>Part 01</th>
                                <th>Part 02</th>
                                <th>Part 03</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr>
                                <td>BOARD</td>
                                <td>Institute for Management Accountants</td>
                                <td>yogesh</td>
                            </tr> */}
                            <tr>
                                <td>Foundations of Internal Auditing (15%)</td>
                                <td>Managing the Internal Audit Activity (20%)</td>
                                <td>Business Acumen (35%)</td>
                            </tr>
                            <tr>
                                <td> Independence and Objectivity (15%)</td>
                                <td> Planning the Engagement (20%)</td>
                                <td> Information Security (25%)</td>
                            </tr>
                            <tr>
                                <td> Proficiency and Due Professional Care (18%)</td>
                                <td>Performing the Engagement (40%)</td>
                                <td>Information Technology (20%)</td>
                            </tr>
                            <tr>
                                <td> Quality Assurance and Improvement Program (7%)</td>
                                <td>Quality Assurance and Improvement Program (7%)</td>
                                <td> Financial Management (20%)</td>

                            </tr><tr>
                                <td>Governance, Risk Management, and Control (35%) </td>
                                <td> Communicating Engagement Results and Monitoring Progress (20%)</td>
                                <td> </td>

                            </tr><tr>
                                <td>Fraud Risks (10%)</td>
                                <td> </td>
                                <td> </td>

                            </tr>
                            {/* <tr>
                            <td> Globally</td>
                            <td>India </td>
                            <td>UK </td>
                        </tr> */}

                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default ciaTableone