import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
// import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'
// import Slider from 'react-slick'
import { CgProfile } from 'react-icons/cg'
import { BsCart2 } from 'react-icons/bs'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { IoCaretForward } from 'react-icons/io5'
import Slider from 'react-slick'
import CpaProgram from '../components/CpaProgram'
import programData from '../database/data/program.json'


function useScrollDirection() {
	const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return scrollDirection;

};

// function MyComponent (props) {
//   const [isActive, setActive] = useState(false);

//   const toggleClass = () => {
//     setActive(!isActive);
//   };

//   return (
//     <div 
//       className={isActive ? 'active': ''} 
//       onClick={toggleClass} 
//     >
//       <p>{props.text}</p>
//     </div>
//    );
// }

export default function header({showData,showData1}) {
  const scrollDirection = useScrollDirection();


  const [isActive, setActive] = useState(false);
  const showMenu = () => {
    setActive(!isActive);
  };

  const pathname = usePathname();

  // Nav Dropdown
  const [isShow, setIsShow] = useState(false);
  const showDwnPopup = () => {
    if (isShow1) {
      setIsShow1(!isShow1);
    }
    setIsShow(!isShow);
  };

  const [isShow1, setIsShow1] = useState(false);
  const showDwnPopup1 = () => {
    if (isShow) {
      setIsShow(!isShow);
    }
    setIsShow1(!isShow1);
  };

  const [isShow2, setIsShow2] = useState(false);
  const showDwnPopup2 = () => {
    setIsShow2(!isShow2);
  };
  


  // const [isActive, setActive] = useState(false);
  // const toggleClass = () => {
  //   setActive(!isActive);
  // };

  return (

    <>
      <header   className={`header ${ scrollDirection === "down" ? "active" : " "}`} id="header">
        <nav className='navbar hf-container'>
          <div className='logo_img  resp-img-box'>
            <Link href="/"> <Image src='/img/logo.png' layout="fill" className='resp-img' alt='Simandhar logo' />
              <Image src='/img/mobile_logo.png' layout="fill" className='resp-img mobile-logo' alt='Simandhar logo' /></Link>
          </div>
          <div className='left_nav'>
            <button className="menu-btn" onClick={showMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className={'nav' + ' ' + (isActive ? 'active' : '')}>
              <button className="close-menu" onClick={showMenu}>
                <span></span>
                <span></span>
              </button>
              <ul className='navbar_list'>
                {/* {
                links.map(link => (
                  <li>
                    <Link className="home" href={link.path}>{link.label}</Link>
                    
                  </li>
                ))
              } */}
                <li className={pathname == '/' ? 'active' : ''} onClick={showMenu}>  <Link href="/">  Home  </Link> </li>
                <li className={pathname == '/about-us' ? 'active' : ''} onClick={showMenu}>  <Link href="/about-us">About </Link> </li>
                <li className={pathname == '/webinars' ? 'active' : ''} onClick={showMenu}>   <Link href='/webinars'> Webinars</Link></li>
                <li className={pathname == '/free-resources' ? 'active' : ''} onClick={showMenu}><Link href='/free-resources'>Free Resources</Link></li>
                <li className='more_dropdown' onClick={showDwnPopup}>
                  More
                  <span  className={'tab-head-box ' + ' ' + (isShow ? 'active' : '')}><i><RiArrowDropDownLine /></i></span>
                  <ul className='navDropdown' style={{display: !isShow ? 'none' : 'block'}}>
                  
                    {/* <li><Link href="sripal">Sripal Jain USA Visit</Link></li> */}
                    <li><Link  href="/student-corner">Students Corner</Link ></li>
                    <li><Link href="/sripal">Sripal Jain USA Visit</Link></li>
                    <li><Link href="/CPA/test">Corporate Journey</Link></li>
                    <li><Link href="/corporateEvents">Corporate Events</Link></li>
                    <li><Link href="/simandharTieUps">Corporate Tie-Ups</Link></li>
                    <li><Link href="/sec">SEC</Link></li>
                    <li><Link href="/testmonial">Testimonials</Link></li>
                    <li><Link href="/testmonialVideos">Testimonials Videos</Link></li>
                    <li><a href="javascript;">Blogs</a></li>
                    <li><Link href="careers">Career</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                    <li><Link href="/free-resources">Free Resources</Link></li>
                   
                  </ul>
                </li>
              </ul>
            </div>
            <div className='btn01'><button className='btn'>Buy Courses</button></div>
            <div className='profile-icon'>
              <span><i className='cart'> <BsCart2 /></i></span>
              <span><h3 className='profile'>LOGIN </h3></span>
            </div>
          </div>
          <div className='clear'></div>
        </nav>

        {/* 
        <div className='backgroud'>
          <div className='program_bar'>
            {
              porgrams.map(program => (
                <div className='nav-title'> {program.name}{program.icon}</div>
              ))
            }
          </div>
        </div> */}



        {/* Second NavBar */}
        <section className='backgroud'>
          <div className='hf-container'>

            <div className='program_bar'>
              <div className= {'nav-title1' + ' '+(isShow2 ? "active":"")} onClick={showDwnPopup2}>Our Programs<span><i><IoCaretForward /></i></span></div>
              
              <div className={'program-scroll' + ' ' + (isShow2 ? 'active' : '')} >
             
                <div className='programs'>
                  {/* <Slider {...programSlider}> */}

                  <Link href='/us-cpa' className={pathname =='/us-cpa' ? "nav-title active" :" nav-title"}>US CPA</Link>
                  <Link href='/us-cma' className={pathname =='/us-cma' ? "nav-title active" :" nav-title"}>US CMA</Link>
                  <Link href='/ea' className={pathname =='/ea' ? "nav-title active" :" nav-title"}>EA</Link>
                  <Link href='/cia' className={pathname =='/cia' ? "nav-title active" :" nav-title"}>CIA</Link>
                  <Link href='/ifrs' className={pathname =='/ifrs' ? "nav-title active" :" nav-title"}>IFRS</Link>
                  <Link href='/dataAnalytics' className={pathname =='/dataAnalytics' ? "nav-title active" :" nav-title"}>DA</Link>
                  <Link href='/saamarth' className={pathname =='/saamarth' ? "nav-title active" :" nav-title"}>Simandhar Saamarth</Link>
                  <div className={'more_dropdown nav-title' + ' ' + (isShow1 ? 'active' : '')} onClick={showDwnPopup1}>
                    More
                    <span><i><RiArrowDropDownLine /></i></span>
                    <ul className='navDropdown' style={{display: !isShow1 ? 'none' : 'block'}}>
                    <li><Link href="/sripal">Sripal Jain USA Visit</Link></li>
                    <li><Link href="/student-corner">Students Corner</Link></li>
                    <li><Link href="">Corporate Journey</Link></li>
                    <li><Link href="/corporateEvents">Corporate Events</Link></li>
                    <li><Link href="">Corporate Tie-Ups</Link></li>
                    <li><Link href="">SEC</Link></li>
                    <li><Link href="">Testimonials</Link></li>
                    <li><Link href="">Testimonials Videos</Link></li>
                    <li><Link href="">Blogs</Link></li>
                    <li><Link href="">Career</Link></li>
                    <li><Link href="">Contact Us</Link></li>
                  </ul>
                  </div>
                  {/* </Slider> */}

                  {/* <div className='nav-title'>More<span><i><RiArrowDropDownLine /></i></span>
            </div> */}
                </div>
                

              </div>
            </div>
            
          </div>

        </section>
        {
          showData ? 
        (  <CpaProgram programData={programData.cpaPage} />) :( " ")
        }
           {
          showData1 ? 
        (  <CpaProgram programData={programData.cmaPage} />) :( " ")
        }
       



      </header>

      {/* Form */}
    </>
  )
}