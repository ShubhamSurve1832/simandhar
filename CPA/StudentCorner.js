import React, { useState } from 'react'
import Image from 'next/image'

const StudentCorner = ({ StudentData }) => {
  const [isShow, setShow] = useState(false)
  const [buttonText, setButtonText] = useState(false)
  const showContent = () => {
    setShow(!isShow)
    setButtonText(!buttonText)
  }
  return (
    <>
      <section className="student-corner-section">
        <div className="container-l">
          <h2 className="heading02">{StudentData.mainheading}</h2>
          <div className="student-corner-row">
            <div className="student-corner-left-row">
              {
                StudentData.boxes.map((data, index) => {
                  return <div className='student-corner-left-box'>
                    <h6 className="heading06"><span>{data.spanheading}</span> | {data.smallheading}</h6>
                    <h3 className="heading03">{data.subheading}</h3>
                    <p>{data.description}</p>
                    <a href='' className='read-more' onClick={showContent}>{buttonText ? 'Read Less ' : 'Read More'}</a>
                    <div className="student-img">
                      <Image src={data.img} layout="fill" className='resp-img' alt='' />
                    </div>
                  </div>
                })
              }
            </div>
          </div>
        </div>
        <div>

        </div>

      </section>
    </>
  )
}

export default StudentCorner
