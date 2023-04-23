import React from 'react'

const saamarthTabeltwo = () => {
  return (
    <>
     <section className=' tableSection custom-scrollbar'>
        <div className='container-l'>
          <h2 className="heading02">Who can Attend this Workshop?</h2>
          <div className='custom-scrollbar'>

            <table cellpadding="0" cellspacing="0" className="strip">
              <thead>
                <tr>
                  <th>Simandhar students</th>
                  <th>Simandhar Alumni</th>
                  <th>Non-Simandhar Students</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Simandhar students who are currently pursuing any one of the courses—the US CPA course, the US CMA course, the EA course, and the CIA course.</td>
                  <td>Simandhar alumni who have completed their US CPA exam, US CMA exam, EA exam, and CIA exam.</td>
                  <td>Non-Simandhar accounting aspirants who want to work with the Big 4 and top accounting firms.</td>
                </tr>
              </tbody>
            </table>
            {/* <div className="Download-btn">
              <a href="javascript:;" className="btn maroon-btn maroon-arrow-btn">Download Schedule</a>
              </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default saamarthTabeltwo