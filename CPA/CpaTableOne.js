import React from 'react'

const cpaTableOne = () => {
    return (
        <section className=' tableSection '>
            <div className='container-l'>
                <h2 className='heading02'>US CPA vs ACCA vs US CMA</h2>
                <div className='custom-scrollbar'>
                <table cellpadding="0" cellspacing="0" className="strip">
                    <thead>
                        <tr>
                            <th>Key Point</th>
                            <th>US CPA</th>
                            <th>ACCA</th>
                            <th>US CMA</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Levels of toughness</td>
                            <td>1</td>
                            <td>2</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td> No. of exams</td>
                            <td>4</td>
                            <td>14</td>
                            <td> 4</td>
                        </tr>
                        <tr>
                            <td> Paper Pattern</td>
                            <td>Objective</td>
                            <td>Objective + Descriptive </td>
                            <td>Objective</td>
                        </tr>
                        <tr>
                            <td> Syllabus</td>
                            <td>Auditing, Public Accounting, Taxation, Financial Reporting</td>
                            <td> Auditing, Accounting, Taxation</td>
                            <td> Management Accounting, Financial Management</td>

                        </tr><tr>
                            <td>Recognition</td>
                            <td>Global Recognition </td>
                            <td> Global Recognition, focused in UK and EU</td>
                            <td>Global Recognition </td>

                        </tr><tr>
                            <td> Exemptions for graduates</td>
                            <td>No exemptions (Level playing field)</td>
                            <td>Yes</td>
                            <td>No exemptions </td>

                        </tr><tr>
                            <td> Work experience required for license</td>
                            <td> Varies</td>
                            <td>3 Years </td>   
                            <td>	2 Years </td>

                        </tr>
                        <tr>
                            <td> Hiring organizations location</td>
                            <td> India & Global</td>
                            <td>EU, UK, Middle East</td>
                            <td>		India & Global</td>

                        </tr>
                        <tr>
                            <td> License validity</td>
                            <td> Global (Can practice in India too)</td>
                            <td>Few Countries (Cannot be practiced In India) </td>
                            <td>	Global (Can practice in India too) </td>

                        </tr>

                    </tbody>
                </table>
                </div>
            </div>
        </section>
    )
}

export default cpaTableOne