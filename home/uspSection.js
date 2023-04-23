import Image from 'next/image'

export default function uspSection() {
  return (
    <section className="usp-section">
      <div className='container-l'>
        <div className='usp-container'>
          <div className='usp-box resp-img-box'>
            <span><Image src="/img/usp01.png" layout="fill" className='resp-img' alt=''/></span>
            <p>Expert Counselling and support for CPA, CMA, EA & CIA</p>
          </div>
          <div className='usp-box resp-img-box'>
            <span><Image src="/img/usp02.png" layout="fill" className='resp-img' alt=''/></span>
            <p>Live Interactive Classes</p>
          </div>
          <div className='usp-box resp-img-box'>
            <span><Image src="/img/usp03.png" layout="fill" className='resp-img' alt=''/></span>
            <p>100% job assistance for CPA, CMA & EA in India, USA and Canada.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
