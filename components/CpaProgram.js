import React from 'react'
import { IoCaretForward } from 'react-icons/io5'
import Link from 'next/link'
import { useState } from 'react'
import { title } from 'process'
// import ProgramData from '../database/data/program.json'



const CpaProgram = ({programData}) => {
    const [isShow, setIsShow] = useState(false);
    const showDwnPopup = () => {
        setIsShow(!isShow);
    };

    
    return (
        <>
            <section className='light-backgroud'>
                <div className='hf-container'>
                    <div className='uscpa-program'>
                        <div className= {'nav-title1' + ' '+(isShow ?"active":"")} onClick={showDwnPopup}>{programData.mainheading}<span><i><IoCaretForward /></i></span></div>
                        <div className={'program-scroll' + ' ' + (isShow ? 'active' : '')}>
                            <div className='programs'>
                                {/* <Slider {...programSlider}> */}

                                {
                                    programData.lists.map((title => {
                                        return <Link href= { title.path} className='nav-title'>{title.title}</Link>
                                    }))
                                }

                                {/* <Link href='/us-cpa' className='nav-title'>Course Review</Link>
                                <Link href='' className='nav-title'>Our Courses</Link>
                                <Link href='' className='nav-title'>Canada</Link>
                                <Link href='' className='nav-title'>Fees</Link>
                                <Link href='' className='nav-title'>Awards</Link>
                                <Link href='' className='nav-title'>Alumni</Link>
                                <Link href='' className='nav-title'>Jobs</Link>
                                <Link href='' className='nav-title'>Faculty</Link> */}
                                {/* </Slider> */}

                                {/* <div className='nav-title'>More<span><i><RiArrowDropDownLine /></i></span>
  </div> */}
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default CpaProgram