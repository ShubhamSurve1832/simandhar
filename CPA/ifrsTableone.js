import React from 'react'

const ifrsTableone = () => {
    return (
        <section className=' tableSection custom-scrollbar'>
            <div className='container-l'>
                <h2 className="heading02">IFRS Syllabus</h2>
                <div className='custom-scrollbar'>

                    <table cellpadding="0" cellspacing="0" className="strip">
                        <thead>
                            <tr>
                                <th>Learning Objectives</th>
                                <th>Who Should Attend?</th>
                                <th>Key Differentiators</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr>
                                <td>BOARD</td>
                                <td>Institute for Management Accountants</td>
                                <td>yogesh</td>
                            </tr> */}
                            <tr>
                                <td>Understand and explain the structure of the framework of international accounting</td>
                                <td>Chief Financial Officers (CFOs), finance directors and strategic planners.</td>
                                <td>Session Presentations</td>
                            </tr>
                            <tr>
                                <td>Apply relevant financial reporting standards to key elements of financial reports.</td>
                                <td> Accountants and Analysts.</td>
                                <td> Live online classes (Login from anywhere in the world).</td>
                            </tr>
                            <tr>
                                <td>Identify and apply disclosure requirements for companies in financial reports and notes.</td>
                                <td>Consultants, practicing Chartered Accountants (CA), Cost and Management Accountants (CMA).</td>
                                <td>Summary of standards</td>
                            </tr>
                            <tr>
                                <td> Prepare group financial statements including subsidiaries, associates and joint ventures.</td>
                                <td>Finance and accounting professionals.</td>
                                <td> Modules on difference between IFRS/ Ind AS/ Indian GAAP</td>

                            </tr>
                            <tr>
                                <td> </td>
                                <td>Graduates/Post graduates who are a part of the finance/accounting team.</td>
                                <td> <a href="" className='read-more'>View More</a></td>
                            </tr>
                            {/* <tr>
                                <td>Fraud Risks (10%)</td>
                                <td> </td>
                                <td> </td>

                            </tr> */}
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

export default ifrsTableone