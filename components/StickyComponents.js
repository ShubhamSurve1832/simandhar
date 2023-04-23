import React from 'react'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image'
import {TfiEmail} from 'react-icons/tfi'
import {BsTelephone} from 'react-icons/bs'

const StickyComponents = ({isactive, showPopup}) => {
 
  const buttonNameRef = useRef()


  useEffect(() => {
    const timer = setTimeout(() => {
      buttonNameRef.current.click()
    }, 4000);
    return () => clearTimeout(timer);
   
  }, []);

  return (
    <>
    <div className="sticky-box">
        <a href="tel:07780273388" className='resp-img-box'><BsTelephone /></a>
        <a href="mailto: info@simandhareducation.com" className='resp-img-box'><TfiEmail /></a>
        <a href="https://wa.me/07780273388" className='wa-icon resp-img-box' target="_blank"><Image src="/img/whatsapp.png" alt="" layout="fill" className='resp-img' /></a>
       
        <button className={'enq-btn resp-img-box' + ' ' + (isactive ? 'active' : '')} onClick={showPopup}  ref={buttonNameRef}>
          <Image src="/img/enquire_now1.svg" alt="" layout="fill" className='resp-img' />
        </button>
      </div>

      
    </>
  )
}

export default StickyComponents