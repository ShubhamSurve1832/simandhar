import React from 'react'

const saamarthTabelone = () => {
  return (
    <>
      <section className=' tableSection custom-scrollbar'>
        <div className='container-l'>
          <h2 className="heading02">Simandhar’s Saamarth Workshop Schedule</h2>
          <div className='custom-scrollbar'>

            <table cellpadding="0" cellspacing="0" className="strip">
              <thead>
                <tr>
                  <th>Week 1-4</th>
                  <th>Week 5-8</th>
                  <th>Week 9-12</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Softskills</td>
                  <td>Future of Finance</td>
                  <td>Importance of Data and Data Analytics</td>
                </tr>
                <tr>
                  <td> Basics of accounting</td>
                  <td> Basics of AUD</td>
                  <td> Interview experience sharing</td>
                </tr>
                <tr>
                  <td> Ratio Analysis and working capital management</td>
                  <td>AUD in Industry</td>
                  <td>Mock Interview</td>
                </tr>
                <tr>
                  <td> IFRS and US GAAP</td>
                  <td>Basics of US Tax</td>
                  <td></td>

                </tr><tr>
                  <td> </td>
                  <td>US Tax in Industry</td>
                  <td> </td>
                </tr>
              </tbody>
            </table>
            <div className="Download-btn">
              <a href="javascript:;" className="btn maroon-btn maroon-arrow-btn">Download Schedule</a>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default saamarthTabelone