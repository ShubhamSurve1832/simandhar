import React from 'react'
import Image from 'next/image'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube, BsLinkedin } from 'react-icons/bs'
import { IoChevronForward } from 'react-icons/io5'
import Link from 'next/link'

export default function footer() {
  return (
    <>
      <footer className='footer' id="footer">
        <div className='ft-top-row'>
          <div className='hf-container footer_row'>
            <div className='Footer_box1 flex01'>
              <div className='logo_img  resp-img-box'>
                <Image src='/img/logo.png' layout="fill" className='resp-img' alt='Simnadhar logo'></Image>
              </div>
              <div className='social_media'>
                <a href="https://www.facebook.com/SimandharEducationCPACMA/" target="_blank"><i><BsFacebook /></i></a>
                <a href="https://twitter.com/simandharedu?lang=en" target="_blank"><i><BsTwitter /></i></a>
                <a href="https://www.instagram.com/simandhar_education/" target="_blank"> <i><BsInstagram /></i></a>
                <a href="https://www.youtube.com/channel/UCNtcsDN1WhnsdS_m2wY-Z-g" target="_blank"><i><BsYoutube /></i></a>
                <a href="https://www.linkedin.com/company/simandhar-education/?originalSubdomain=in" target="_blank"> <i><BsLinkedin /></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className='ft-bottom-row'>
          <div className='hf-container'>
            <div className='footer_grid'>

              <div className='footer_box a'>
                <p className='footer_para'>An award-winning institute that believes in transforming lives. Simandhar Education is aiming to upskill you and create a new-age approach for success.</p>
              </div>
              <div className='footer_box b'>
                <h4 className='footer_title'>Our Courses <span><i>< IoChevronForward /></i></span> </h4>
                <ul>
                  <li ><Link href="/us-cpa" className='title01'> US Certified Public Accountant</Link></li>
                  <li><Link href="/us-cma"className='title01'>US Certified Management Accountant</Link></li>
                  <li><Link href="/ea"className='title01'>Enrolled Agent</Link></li>
                  <li><Link href="/cia"className='title01'>Certified Internal Auditor</Link></li>
                  <li><Link href="/ifrs"className='title01'>IFRS</Link></li>
                  <li><Link href="/dataAnalytics"className='title01'>Data Analytics</Link></li>
                  <li><Link href="/saamarth"className='title01'>Simandhar Saamarth Workshops</Link></li>
                </ul>
              </div>
              <div className='footer_box c'>
                <div>
                  <h4 className='footer_title'>Webinars  <span><i>< IoChevronForward /></i></span> </h4>
                  <ul>
                  <li><Link href="/us-cpa"   className='title01'>US CPA</Link></li>
                  <li><Link href="/us-cma"   className='title01'> US CMA </Link></li>
                  <li><Link href="ea/"  className='title01'>EA</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className='footer_title'>Student Corner   <span><i>< IoChevronForward /></i></span> </h4>
                  <h4 className='footer_title'>Testimonial   <span><i>< IoChevronForward /></i></span> </h4>
                </div>

              </div>
              <div className='footer_box d'>
                <div>
                  <h4 className='footer_title'>Corporate   <span><i>< IoChevronForward /></i></span> </h4>
                  <ul>
                    <li className='title01'>Corporate Journey</li>
                    <li className='title01'> Corporate Events </li>
                    <li className='title01'>Corporate Tie Ups</li>
                  </ul>
                </div>
                <div> <h4 className='footer_title'>Blogs   <span><i>< IoChevronForward /></i></span> </h4>
                  <h4 className='footer_title'>Careers    <span><i>< IoChevronForward /></i></span> </h4>
                </div>

              </div>
              <div className='footer_box e'>
                <div>
                  <h4 className='footer_title'>User Registration/Sign-up    <span><i>< IoChevronForward /></i></span> </h4>
                  <ul>
                    <li className='title01'>Corporate Tie Ups</li>
                    <li className='title01'>Corporate Tie Ups</li>
                  </ul></div>
                <div> <h4 className='footer_title'><Link href="/about-us"> About Us    <span><i>< IoChevronForward /></i></span> </Link></h4>
                  <h4 className='footer_title'>Contact Us     <span><i>< IoChevronForward /></i></span> </h4>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div>
          <h3 className='copyright'>Copyright © 2023 SIMANDHAR EDUCATION LLP - All rights reserved</h3>
        </div>

      </footer>
    </>
  )
}

