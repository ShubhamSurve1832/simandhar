import React from 'react'

const ciaTabelTwo = () => {
  return (
    <section className=' tableSection '>
    <div className='container-l'>
    <h2 className="heading02">CIA Exam Fee</h2>
    <div className='custom-scrollbar'>
        <table cellpadding="0" cellspacing="0" className="strip">
            <thead>
                <tr>
                    <th>Pricing</th>
                    <th>Non-Members</th>
                    <th>Global Members</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Application Fee</td>
                    <td>$230 / ~ Rs 15,904</td>
                    <td>$115 / ~ Rs 7,952 </td>
                </tr>
                <tr>
                    <td> CIA Exam Part 1</td>
                    <td> $395 / ~ Rs 27,313</td>
                    <td> $280 / ~ Rs 19,361</td>
                </tr>
                <tr>
                    <td> CIA Exam Part 2</td>
                    <td>$345 / ~ Rs 23,856</td>
                    <td>$230 / ~ Rs 15,904 </td>
                </tr>
                <tr>
                    <td>CIA Exam Part 3</td>
                    <td> $345 / ~ Rs 23,856</td>
                    <td> $230 / ~ Rs 15,904</td>
                    
                </tr>
                {/* <tr>
                    <td>Single level </td>
                    <td> Three</td>
                    <td>Five </td>
                    
                </tr><tr>
                    <td> INR 80 Thousand</td>
                    <td> INR 1 lakh</td>
                    <td>INR 2.5-3 lakhs </td>
                    
                </tr><tr>
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

export default ciaTabelTwo