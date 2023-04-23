import React,{useState} from 'react'
import Image from 'next/image'


const Card = ({path,title,rank,org}) => {

  return (
    <>
      <figure className='achiever-box'>
        <div className='achiever-img resp-img-box'>
          <Image src={path} layout="fill" className='resp-img' alt='' />
        </div>
        <figcaption>
          <h3 className='caption-title'>{title}</h3>
          <p>{rank}</p>
          <p>{org}</p>
        </figcaption>
      </figure>
    </>
  )
}

export default Card