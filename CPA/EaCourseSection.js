import React from 'react'

const EaCourseTable = () => {
    return (
        <section className=' tableSection pb-0'>
            <div className='container-l'>
            <h2 className='heading02'>EA Course Syllabus</h2>
<div className='custom-scrollbar'>
                <table cellpadding="0" cellspacing="0" className="strip">
                    <thead>
                        <tr>
                            <th>Individuals</th>
                            <th>Business</th>
                            <th>Representation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Preliminary Work with Taxpayer Data - 17 questions</td>
                            <td>Business Entities – 28 questions</td>
                            <td>Practices and Procedures – 25 questions</td>
                        </tr>
                        <tr>
                            <td>Income and Assets - 21 questions</td>
                            <td>Business Financial Information – 39 questions</td>
                            <td> Representation before the IRS – 24 questions</td>
                        </tr>
                        <tr>
                            <td>Deductions and Credits - 21 questions</td>
                            <td>Specialized Returns and Taxpayers – 18 questions</td>
                            <td>Specific Types of Representation – 19 questions</td>
                        </tr>
                        <tr>
                            <td> Taxation and Advice - 14 questions</td>
                            <td> </td>
                            <td>Filing Process – 17 questions</td>

                        </tr><tr>
                            <td>Specialized Returns for Individuals - 12 questions</td>
                            <td> </td>
                            <td>  </td>

                        </tr>
                    </tbody>
                </table>
                </div>                
            </div>
        </section>
    )
}

export default EaCourseTable