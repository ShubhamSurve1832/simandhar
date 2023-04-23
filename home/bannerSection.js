import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import _ from 'lodash'
import Slider from 'react-slick'


const bannerSection = ({ showPopup }) => {

  const [data, setdata] = useState([])
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:1337/api/datacards/3?populate[0]=listitems,images&[populate][1]=listitems.datacard,listitems.datacarditems,listitems.subcards,listitems.subcards.item",
      responseType: 'json',
      headers: { "Authorization": "Bearer f7d1423065e7dfad4ff8aa84d496bd543a5cbc619216dfcd5ab593c7cb6101b82aa49976194a9d2332238b31d1942548e7469ed662e3c30881baf8deae11c3e46fb40b5ecfe15f2c5d02bf4e4dc9d20a53c37ffdec9903f13ba5850c24263fe4fcaaad033294bb29d4a6a84392c853a1e6a597ea26f7f2a997a3699b4d187be0" },
    })
      .then((res) => {
        if (!_.get(res.data))
          setdata(res.data)
      })

      .catch((err) => {
        console.log("bad request", err.message)
      })
  }, [])

  let imageData = _.get(data, "data.attributes.images", [])
  // console.log("images ", imageData)

  var bannerSlider = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <>
      <section className="banner-section flex">
        <div className="right-box">
          <Slider {...bannerSlider}>
            {
              imageData.map((data) => {
                let image = _.get(data, "image")
                // console.log("images banner", image)
                return (
                  <div className='banner-slider'>
                    <div className="banner-inner-slider" style={{ backgroundImage: `{image}` }}>
                      <div className="banner-content">
                      </div>
                    </div>
                  </div>
                )
              })
            }




            {/* <div className='banner-slider'>
              <div className="banner-inner-slider" style={{ backgroundImage: 'url("img/dummyBan2.webp")' }}>
                <div className="banner-content">
                </div>
              </div>
            </div>
            <div className='banner-slider'>
              <div className="banner-inner-slider" style={{ backgroundImage: 'url("img/dummyBan3.webp")' }}>
                <div className="banner-content">
                </div>
              </div>
            </div> */}

            {/* <div className='banner-slider'>
              <div className="banner-inner-slider" style={{ backgroundImage: 'url("img/banner_bg.jpg")' }}>
                <div className="banner-content">
                  <div className="banner-text">
                    <h1 className='banner-title'>Get into <span>Big 4s and MNCs</span> with the most trusted institute of India</h1>
                    <p>We believe that education has the ability to transform every individual.</p>
                  </div>
                  <button className='btn maroon-btn' onClick={showPopup}>Enquire Now</button>
                </div>
              </div>
            </div>
            <div className='banner-slider'>
              <div className="banner-inner-slider" style={{ backgroundImage: 'url("img/banner_bg02.png")' }}>
                <div className="banner-content">
                  <div className="banner-text">
                    <p>Charting Your Path to Success.</p>
                    <h1 className='banner-title'> Unleash your potential
                      and become a financial expert with a <span>CPA career</span></h1>
                  </div>
                  <button className='btn maroon-btn' onClick={showPopup}>Enquire Now</button>
                </div>
              </div>
            </div>
            <div className='banner-slider'>
              <div className="banner-inner-slider" style={{ backgroundImage: 'url("img/banner_bg.jpg")' }}>
                <div className="banner-content">
                  <div className="banner-text">
                    <p>Charting Your Path to Success.</p>
                    <h1 className='banner-title'> Unleash your potential
                      and become a financial expert with a <span>CPA career</span></h1>
                  </div>
                  <button className='btn maroon-btn' onClick={showPopup}>Enquire Now</button>
                </div>
              </div>
            </div> */}
          </Slider>
        </div>
        {/* <div className="left-box resp-img-box">
          <h3 className='heading04'>Learn Anywhere with Online Courses</h3>
          <Image src="/img/trangle.png" alt="" layout="fill" className='resp-img desktop' />
          <Image src="/img/mobile_trangle.webp" alt="" layout="fill" className='resp-img mobile' />
          <a className='btn white-btn white-btn-arrow' href="">Buy Courses</a>
          <div className="clear"></div>
        </div> */}
      </section>

    </>
  )
}


export default bannerSection;