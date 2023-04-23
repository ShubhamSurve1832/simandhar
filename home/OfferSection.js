import React from 'react'
import Image from 'next/image'

const OfferSection = ({indexData}) => {
    return (
        <section>
            <div className='offer_row conatainer02'>
                <div className='offer_box1 resp-img-box'>
                    <Image src='/img/flash_sale.png' layout="fill" className='resp-img' alt='' />
                </div>
                <div className='offer_box2'>
                    <h3 >FLAT {indexData.offerone}% OFF</h3>
                </div>
                <div className='offer_box3'>
                    <h3>Discount <br /> on All Courses</h3>
                </div>
                <div className='offer_box4'>
                    <h3>Promo Code : SALE {indexData.promoCode}</h3>
                </div>
                <div className='offer_box5 avail-btn'>
                    <h3>{indexData.availbtn}</h3>
                </div>
            </div>
        </section>
    )
}

export default OfferSection