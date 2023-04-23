import React from 'react'
import Image from 'next/image'

const SocialMedia = () => {
    return (
        <section className="socialMedia-section">
            <div className="container-l">
                <h2 className="heading02">Follow SEC Social Media Pages</h2>
                <div className="grid">
                <div className='sm-box'> <Image src='/img/Facebook.webp' layout="fill" className='resp-img' alt='Facebook' /></div>
                <div className='sm-box'> <Image src='/img/Instagram.webp' layout="fill" className='resp-img' alt='Instagram' /></div>
                <div className='sm-box'> <Image src='/img/Linkdin.webp' layout="fill" className='resp-img' alt='Linkdin' /></div>
                </div>
            </div>
        </section>
    )
}

export default SocialMedia