import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import Link from 'next/link';
import { Tab } from "@headlessui/react"
import { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri'

const testimonialVideoTab = ({ testimonialVideoTab }) => {

    var partnerSlider = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [isActive, setActive] = useState(false);

    const showTab = () => {
        setActive(!isActive);
    };

    const [selectedItem, setSelectedItem] = useState(null);
    const [items, setItem] = useState(testimonialVideoTab);

    const handleItemClick = (id) => {
        selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
        setActive(!isActive);
    }
    return (
        <>
            <section className="section partner-section testimonialVideotab">
                <Tab.Group>
                    <div className='container'>
                        <div className='tab-head-row'>
                            <p className='tab-button-mobile tab-btn' onClick={showTab}>
                                {selectedItem ? items.corporateTitle.find(item => item.id == selectedItem).title : "Our Corporate Tie-Ups"}
                                <span className={'tab-head-box ' + ' ' + (isActive ? 'active' : '')}><RiArrowDropDownLine />
                                </span>
                            </p>

                            <Tab.List className={'tab-header tab-head-box ' + ' ' + (isActive ? 'active' : '')}>
                                {items.corporateTitle.map(item => (
                                    <Tab className="tab-btn" onClick={e => handleItemClick(e.target.id)} id={item.id}>
                                        {item.title}
                                    </Tab>
                                ))}
                            </Tab.List>
                        </div>


                        <div className='tab-container'>
                            <div className='tab-box'>
                                <Tab.Panels>
                                    <Tab.Panel>
                                        <div className="gridRow">
                                            <div className="box">
                                                <div className="content">
                                                    <div className="content_img">
                                                        <Image src="/img/cpa-inner/Corporate_video1.webp" alt="" layout="fill" className='resp-img' />
                                                        <div className="overlay text-center">
                                                            <a href="" className="overlay_img">
                                                                <Image src="/img/cpa-inner/videoIcon.png" alt="" layout="fill" className='resp-img' />Watch Video</a>
                                                        </div>
                                                    </div>
                                                    <div className="content_txt">
                                                        <p className="title01">CPA Examsssss in India Now Permanent |
                                                            NASBA Host Sripal Jain| CPA Evaluation |
                                                            CPA changes 2024 | CPA US</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box">
                                                <div className="content">
                                                    <div className="content_img">
                                                        <Image src="/img/cpa-inner/Corporate_video2.webp" alt="" layout="fill" className='resp-img' />
                                                        <div className="overlay text-center">
                                                            <a href="" className="overlay_img">
                                                                <Image src="/img/cpa-inner/videoIcon.png" alt="" layout="fill" className='resp-img' />Watch Video</a>
                                                        </div>
                                                    </div>
                                                    <div className="content_txt">
                                                        <p className="title01">US CPA Opportunities in Canada |
                                                            Canada CPA vs US CPA | MRA CPA Canada
                                                            US CPA | CPA Canada | CPA US</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box">
                                                <div className="content">
                                                    <div className="content_img">
                                                        <Image src="/img/cpa-inner/Corporate_video3.webp" alt="" layout="fill" className='resp-img' />
                                                        <div className="overlay text-center">
                                                            <a href="" className="overlay_img">
                                                                <Image src="/img/cpa-inner/videoIcon.png" alt="" layout="fill" className='resp-img' />Watch Video</a>
                                                        </div>
                                                    </div>
                                                    <div className="content_txt">
                                                        <p className="title01">First Ever US CPA Session by AICPA &
                                                            NASBA in India – Hosted by Simandhar
                                                            Education</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box">
                                                <div className="content">
                                                    <div className="content_img">
                                                        <Image src="/img/cpa-inner/Corporate_video1.webp" alt="" layout="fill" className='resp-img' />
                                                        <div className="overlay text-center">
                                                            <a href="" className="overlay_img">
                                                                <Image src="/img/cpa-inner/videoIcon.png" alt="" layout="fill" className='resp-img' />Watch Video</a>
                                                        </div>
                                                    </div>
                                                    <div className="content_txt">
                                                        <p className="title01">CPA Examsssss in India Now Permanent |
                                                            NASBA Host Sripal Jain| CPA Evaluation |
                                                            CPA changes 2024 | CPA US</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box">
                                                <div className="content">
                                                    <div className="content_img">
                                                        <Image src="/img/cpa-inner/Corporate_video1.webp" alt="" layout="fill" className='resp-img' />
                                                        <div className="overlay text-center">
                                                            <a href="" className="overlay_img">
                                                                <Image src="/img/cpa-inner/videoIcon.png" alt="" layout="fill" className='resp-img' />Watch Video</a>
                                                        </div>
                                                    </div>
                                                    <div className="content_txt">
                                                        <p className="title01">CPA Examsssss in India Now Permanent |
                                                            NASBA Host Sripal Jain| CPA Evaluation |
                                                            CPA changes 2024 | CPA US</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box">
                                                <div className="content">
                                                    <div className="content_img">
                                                        <Image src="/img/cpa-inner/Corporate_video2.webp" alt="" layout="fill" className='resp-img' />
                                                        <div className="overlay text-center">
                                                            <a href="" className="overlay_img">
                                                                <Image src="/img/cpa-inner/videoIcon.png" alt="" layout="fill" className='resp-img' />Watch Video</a>
                                                        </div>
                                                    </div>
                                                    <div className="content_txt">
                                                        <p className="title01">US CPA Opportunities in Canada |
                                                            Canada CPA vs US CPA | MRA CPA Canada
                                                            US CPA | CPA Canada | CPA US</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box">
                                                <div className="content">
                                                    <div className="content_img">
                                                        <Image src="/img/cpa-inner/Corporate_video3.webp" alt="" layout="fill" className='resp-img' />
                                                        <div className="overlay text-center">
                                                            <a href="" className="overlay_img">
                                                                <Image src="/img/cpa-inner/videoIcon.png" alt="" layout="fill" className='resp-img' />Watch Video</a>
                                                        </div>
                                                    </div>
                                                    <div className="content_txt">
                                                        <p className="title01">First Ever US CPA Session by AICPA &
                                                            NASBA in India – Hosted by Simandhar
                                                            Education</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box">
                                                <div className="content">
                                                    <div className="content_img">
                                                        <Image src="/img/cpa-inner/Corporate_video1.webp" alt="" layout="fill" className='resp-img' />
                                                        <div className="overlay text-center">
                                                            <a href="" className="overlay_img">
                                                                <Image src="/img/cpa-inner/videoIcon.png" alt="" layout="fill" className='resp-img' />Watch Video</a>
                                                        </div>
                                                    </div>
                                                    <div className="content_txt">
                                                        <p className="title01">CPA Examsssss in India Now Permanent |
                                                            NASBA Host Sripal Jain| CPA Evaluation |
                                                            CPA changes 2024 | CPA US</p>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </Tab.Panel>

                                    <Tab.Panel>
                                        <div className="gridRow">
                                            <div className="box">
                                                <div className="content">
                                                    <div className="content_img">
                                                        <Image src="/img/cpa-inner/Corporate_video1.webp" alt="" layout="fill" className='resp-img' />
                                                        <div className="overlay text-center">
                                                            <a href="" className="overlay_img">
                                                                <Image src="/img/cpa-inner/videoIcon.png" alt="" layout="fill" className='resp-img' />Watch Video</a>
                                                        </div>
                                                    </div>
                                                    <div className="content_txt">
                                                        <p className="title01">CPA Exam in India Now Permanent |
                                                            NASBA Host Sripal Jain| CPA Evaluation |
                                                            CPA changes 2024 | CPA US</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box">
                                                <div className="content">
                                                    <div className="content_img">
                                                        <Image src="/img/cpa-inner/Corporate_video1.webp" alt="" layout="fill" className='resp-img' />
                                                        <div className="overlay text-center">
                                                            <a href="" className="overlay_img">
                                                                <Image src="/img/cpa-inner/videoIcon.png" alt="" layout="fill" className='resp-img' />Watch Video</a>
                                                        </div>
                                                    </div>
                                                    <div className="content_txt">
                                                        <p className="title01">CPA Exam in India Now Permanent |
                                                            NASBA Host Sripal Jain| CPA Evaluation |
                                                            CPA changes 2024 | CPA US</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box">
                                                <div className="content">
                                                    <div className="content_img">
                                                        <Image src="/img/cpa-inner/Corporate_video2.webp" alt="" layout="fill" className='resp-img' />
                                                        <div className="overlay text-center">
                                                            <a href="" className="overlay_img">
                                                                <Image src="/img/cpa-inner/videoIcon.png" alt="" layout="fill" className='resp-img' />Watch Video</a>
                                                        </div>
                                                    </div>
                                                    <div className="content_txt">
                                                        <p className="title01">US CPA Opportunities in Canada |
                                                            Canada CPA vs US CPA | MRA CPA Canada
                                                            US CPA | CPA Canada | CPA US</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box">
                                                <div className="content">
                                                    <div className="content_img">
                                                        <Image src="/img/cpa-inner/Corporate_video3.webp" alt="" layout="fill" className='resp-img' />
                                                        <div className="overlay text-center">
                                                            <a href="" className="overlay_img">
                                                                <Image src="/img/cpa-inner/videoIcon.png" alt="" layout="fill" className='resp-img' />Watch Video</a>
                                                        </div>
                                                    </div>
                                                    <div className="content_txt">
                                                        <p className="title01">First Ever US CPA Session by AICPA &
                                                            NASBA in India – Hosted by Simandhar
                                                            Education</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box">
                                                <div className="content">
                                                    <div className="content_img">
                                                        <Image src="/img/cpa-inner/Corporate_video1.webp" alt="" layout="fill" className='resp-img' />
                                                        <div className="overlay text-center">
                                                            <a href="" className="overlay_img">
                                                                <Image src="/img/cpa-inner/videoIcon.png" alt="" layout="fill" className='resp-img' />Watch Video</a>
                                                        </div>
                                                    </div>
                                                    <div className="content_txt">
                                                        <p className="title01">CPA Examsssss in India Now Permanent |
                                                            NASBA Host Sripal Jain| CPA Evaluation |
                                                            CPA changes 2024 | CPA US</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box">
                                                <div className="content">
                                                    <div className="content_img">
                                                        <Image src="/img/cpa-inner/Corporate_video2.webp" alt="" layout="fill" className='resp-img' />
                                                        <div className="overlay text-center">
                                                            <a href="" className="overlay_img">
                                                                <Image src="/img/cpa-inner/videoIcon.png" alt="" layout="fill" className='resp-img' />Watch Video</a>
                                                        </div>
                                                    </div>
                                                    <div className="content_txt">
                                                        <p className="title01">US CPA Opportunities in Canada |
                                                            Canada CPA vs US CPA | MRA CPA Canada
                                                            US CPA | CPA Canada | CPA US</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box">
                                                <div className="content">
                                                    <div className="content_img">
                                                        <Image src="/img/cpa-inner/Corporate_video3.webp" alt="" layout="fill" className='resp-img' />
                                                        <div className="overlay text-center">
                                                            <a href="" className="overlay_img">
                                                                <Image src="/img/cpa-inner/videoIcon.png" alt="" layout="fill" className='resp-img' />Watch Video</a>
                                                        </div>
                                                    </div>
                                                    <div className="content_txt">
                                                        <p className="title01">First Ever US CPA Session by AICPA &
                                                            NASBA in India – Hosted by Simandhar
                                                            Education</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box">
                                                <div className="content">
                                                    <div className="content_img">
                                                        <Image src="/img/cpa-inner/Corporate_video1.webp" alt="" layout="fill" className='resp-img' />
                                                        <div className="overlay text-center">
                                                            <a href="" className="overlay_img">
                                                                <Image src="/img/cpa-inner/videoIcon.png" alt="" layout="fill" className='resp-img' />Watch Video</a>
                                                        </div>
                                                    </div>
                                                    <div className="content_txt">
                                                        <p className="title01">CPA Examsssss in India Now Permanent |
                                                            NASBA Host Sripal Jain| CPA Evaluation |
                                                            CPA changes 2024 | CPA US</p>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </Tab.Panel>

                                    <Tab.Panel>
                                        <div className="gridRow">
                                            <div className="box">
                                                <div className="content">
                                                    <div className="content_img">
                                                        <Image src="/img/cpa-inner/Corporate_video1.webp" alt="" layout="fill" className='resp-img' />
                                                        <div className="overlay text-center">
                                                            <a href="" className="overlay_img">
                                                                <Image src="/img/cpa-inner/videoIcon.png" alt="" layout="fill" className='resp-img' />Watch Video</a>
                                                        </div>
                                                    </div>
                                                    <div className="content_txt">
                                                        <p className="title01">CPA Exam in India Now Permanent |
                                                            NASBA Host Sripal Jain| CPA Evaluation |
                                                            CPA changes 2024 | CPA US</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box">
                                                <div className="content">
                                                    <div className="content_img">
                                                        <Image src="/img/cpa-inner/Corporate_video2.webp" alt="" layout="fill" className='resp-img' />
                                                        <div className="overlay text-center">
                                                            <a href="" className="overlay_img">
                                                                <Image src="/img/cpa-inner/videoIcon.png" alt="" layout="fill" className='resp-img' />Watch Video</a>
                                                        </div>
                                                    </div>
                                                    <div className="content_txt">
                                                        <p className="title01">US CPA Opportunities in Canada |
                                                            Canada CPA vs US CPA | MRA CPA Canada
                                                            US CPA | CPA Canada | CPA US</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box">
                                                <div className="content">
                                                    <div className="content_img">
                                                        <Image src="/img/cpa-inner/Corporate_video3.webp" alt="" layout="fill" className='resp-img' />
                                                        <div className="overlay text-center">
                                                            <a href="" className="overlay_img">
                                                                <Image src="/img/cpa-inner/videoIcon.png" alt="" layout="fill" className='resp-img' />Watch Video</a>
                                                        </div>
                                                    </div>
                                                    <div className="content_txt">
                                                        <p className="title01">First Ever US CPA Session by AICPA &
                                                            NASBA in India – Hosted by Simandhar
                                                            Educationsssss</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box">
                                                <div className="content">
                                                    <div className="content_img">
                                                        <Image src="/img/cpa-inner/Corporate_video2.webp" alt="" layout="fill" className='resp-img' />
                                                        <div className="overlay text-center">
                                                            <a href="" className="overlay_img">
                                                                <Image src="/img/cpa-inner/videoIcon.png" alt="" layout="fill" className='resp-img' />Watch Video</a>
                                                        </div>
                                                    </div>
                                                    <div className="content_txt">
                                                        <p className="title01">US CPA Opportunities in Canada |
                                                            Canada CPA vs US CPA | MRA CPA Canada
                                                            US CPA | CPA Canada | CPA US</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box">
                                                <div className="content">
                                                    <div className="content_img">
                                                        <Image src="/img/cpa-inner/Corporate_video1.webp" alt="" layout="fill" className='resp-img' />
                                                        <div className="overlay text-center">
                                                            <a href="" className="overlay_img">
                                                                <Image src="/img/cpa-inner/videoIcon.png" alt="" layout="fill" className='resp-img' />Watch Video</a>
                                                        </div>
                                                    </div>
                                                    <div className="content_txt">
                                                        <p className="title01">CPA Examsssss in India Now Permanent |
                                                            NASBA Host Sripal Jain| CPA Evaluation |
                                                            CPA changes 2024 | CPA US</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box">
                                                <div className="content">
                                                    <div className="content_img">
                                                        <Image src="/img/cpa-inner/Corporate_video2.webp" alt="" layout="fill" className='resp-img' />
                                                        <div className="overlay text-center">
                                                            <a href="" className="overlay_img">
                                                                <Image src="/img/cpa-inner/videoIcon.png" alt="" layout="fill" className='resp-img' />Watch Video</a>
                                                        </div>
                                                    </div>
                                                    <div className="content_txt">
                                                        <p className="title01">US CPA Opportunities in Canada |
                                                            Canada CPA vs US CPA | MRA CPA Canada
                                                            US CPA | CPA Canada | CPA US</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box">
                                                <div className="content">
                                                    <div className="content_img">
                                                        <Image src="/img/cpa-inner/Corporate_video3.webp" alt="" layout="fill" className='resp-img' />
                                                        <div className="overlay text-center">
                                                            <a href="" className="overlay_img">
                                                                <Image src="/img/cpa-inner/videoIcon.png" alt="" layout="fill" className='resp-img' />Watch Video</a>
                                                        </div>
                                                    </div>
                                                    <div className="content_txt">
                                                        <p className="title01">First Ever US CPA Session by AICPA &
                                                            NASBA in India – Hosted by Simandhar
                                                            Education</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box">
                                                <div className="content">
                                                    <div className="content_img">
                                                        <Image src="/img/cpa-inner/Corporate_video1.webp" alt="" layout="fill" className='resp-img' />
                                                        <div className="overlay text-center">
                                                            <a href="" className="overlay_img">
                                                                <Image src="/img/cpa-inner/videoIcon.png" alt="" layout="fill" className='resp-img' />Watch Video</a>
                                                        </div>
                                                    </div>
                                                    <div className="content_txt">
                                                        <p className="title01">CPA Examsssss in India Now Permanent |
                                                            NASBA Host Sripal Jain| CPA Evaluation |
                                                            CPA changes 2024 | CPA US</p>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </Tab.Panel>


                                </Tab.Panels>
                            </div >

                            <div className="text-center">
                                <a href="" className="btn maroon-btn maroon-arrow-btn">View Post</a>
                            </div>
                        </div >
                    </div >
                </Tab.Group>
            </section >
        </>
    )
}

export default testimonialVideoTab