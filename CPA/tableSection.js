import React from 'react'

const tableSection = () => {
    return (
        <>

            <section className=' tableSection '>
                <div className='container-l custom-scrollbar'>
                <h2 className='heading02'>CMA India vs CMA US vs CIMA UK</h2>
                    <table cellpadding="0" cellspacing="0" className="strip">
                        <thead>
                            <tr>
                                <th>Point of Difference</th>
                                <th>US CMA</th>
                                <th>CMA - India</th>
                                <th>CIMA - UK</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr>
                                <td>BOARD</td>
                                <td>Institute for Management Accountants</td>
                                <td>yogesh</td>
                            </tr> */}
                            <tr>
                                <td>ACADEMIC FOCUS</td>
                                <td>Management Accountancy</td>
                                <td>Cost Accountancy </td>
                                <td> Management Accountancy</td>
                            </tr>
                            <tr>
                                <td> BOARD</td>
                                <td> Institute for Management Accountants</td>
                                <td> Institute of Cost Accountants of India- ICAI (formerly ICWAI)</td>
                                <td> Chartered Institute of Management Accountants </td>
                            </tr>
                            <tr>
                                <td> DURATION</td>
                                <td> 6 months</td>
                                <td>3 years </td>
                                <td> 2-4 years</td>
                            </tr>
                            <tr>
                                <td> PAPERS</td>
                                <td> 2 Papers</td>
                                <td> 20 Papers</td>
                                <td> 16 Papers</td>
                                
                            </tr><tr>
                                <td> LEVELS OF TOUGHNESS</td>
                                <td>Single level </td>
                                <td> Three</td>
                                <td>Five </td>
                                
                            </tr><tr>
                                <td> COST TO PURSUE</td>
                                <td> INR 80 Thousand</td>
                                <td> INR 1 lakh</td>
                                <td>INR 2.5-3 lakhs </td>
                                
                            </tr><tr>
                                <td> RECOGNITION</td>
                                <td> Globally</td>
                                <td>India </td>
                                <td>UK </td>
                                
                            </tr>

                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default tableSection