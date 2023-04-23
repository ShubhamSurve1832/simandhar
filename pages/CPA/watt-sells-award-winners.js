import React from 'react'
import Head from 'next/head';
import Header from '../../components/header';
import Image from 'next/image';
import Placement from '../../home/placementSection'
import indexData from '../../database/index.json'
import CommonForm from '../../components/CommonForm';
import CpaProgram from '../../components/CpaProgram';




const WattSellsAward = () => {
    return (
        <>
            <Head>
                <title>Elijah Watt Sells Award  | Simandhar Education</title>
            </Head>
            <div className='width-50'>
                <Header showData={true} />
            </div>

            {/* Award Section */}
            <section className='award-banner'>
                <div className='container'>
                    <div className='awards-heading'>
                        <h4 className='heading04'>Congratulations</h4>
                        <h4 className='heading04'>Simandhar did it again</h4>
                        <h4 className='heading04'>3 Elijah Watt Sells Award winners</h4>
                    </div>
                    <div className='awardies'>
                        <div className='img-box'><Image src="/img/TrishlaManiar.webp" alt="" layout="fill" className='resp-img' /></div>
                        <div className='img-box'><Image src="/img/DhruvPatel.webp" alt="" layout="fill" className='resp-img' /></div>
                        <div className='img-box'><Image src="/img/KavneetHanspal.webp" alt="" layout="fill" className='resp-img' /></div>
                    </div>
                </div>
            </section>

            {/* Award Winners */}
            <section className='award-winner-section'>
                <div className='container-l'>
                    <div className='two-box-row'>
                        <div className='left-box'>
                            <h2 className='heading02'>Elijah Watt Sells Award Winners: Simandhar</h2>
                            <p>The AICPA established the Elijah Watt Sells Award in 1923 to recognise exceptional performance on the CPA Exam. Sells, one of the first CPAs in the United States, was instrumental in establishing the AICPA and advancing professional education within the field. The Watt Sells award, named after CPA pioneer Elijah Watt Sells, is granted to candidates who achieve a cumulative average score of 95.50 or higher on each of the four portions of the Uniform CPA Examination, complete testing during the calendar year, and pass all four sections on their first try.</p>
                        </div>
                        <div className='right-form-box'>
                            <CommonForm showTitle={true} />
                        </div>
                    </div>
                    <div className='mt-6'>
                        <h3 className='heading03'>Elijah Watt Sells Award Winners at Simandhar Education</h3>
                        <p>Simandhar Education is India that has gained the honour of the Watt Sells Award. We congratulate the winner on successfully obtaining his CPA certificate with the highest scores in the country.</p>
                    </div>
                    <div className='mt-6'>
                        <h3 className="heading03">Know the CPA Topper</h3>
                        <p> <span> Kavneet Hanspal </span> is a CA-inter and a B.Com. graduate. After passing CA-inter, he took a break from CA training and opted to focus on US CPA. Kavneet scored 99 in BEC, 97 in REG, 96 in FAR, and 93 in AUD, for a total score of 96.25, thanks to his tireless work and Simandhar's coaching. He received the Elijah Watts Sells Award for 2021 as an honorary recipient for his remarkable achievement on the CPA examinations.</p>
                        <p>Our US CPA alumni, <span> Dhruv Patel </span>has set a new benchmark by winning the Elijah Watt Sells Award, an award for excellent performance in the US CPA. He scored in BEC 98, REG 97, FAR 98, and AUD 91, respectively, and was placed in EY by Simandhar in 4 days as an Advanced Analyst.</p>
                        <p>US CPA Alumni,<span> Trishla Maniar</span> has maintained the legacy of Simandhar Education by winning the Elijah Watt Award for 2022. Her exceptional performance in the US CPA exams has made us extremely proud. She scored 97 in BEC, 97 in REG, 98 in FAR, and 96 in AUD.</p>
                    </div>
                    <div className='toppers-journey mt-6'>
                        <h3 className='heading03'>Hear what topper has to say about his journey</h3>
                        <div className='three-box-flex mt-4'>
                            <div className='video-card'>
                                <div className='video-box'>
                                    <Image src='/img/toppersJourney01.webp' alt="" layout="fill" className='resp-img' />
                                </div>
                                <p className='title01'>Simandhar CPA Student does it again |CPA Watt Sells Winner | Trishla | CPA Course</p>
                            </div>
                            <div className='video-card'>
                                <div className='video-box'>
                                    <Image src='/img/toppersJourney02.webp' alt="" layout="fill" className='resp-img' />
                                </div>
                                <p className='title01'>CPA Course | Watt Sells Award Winner 2021 | CPA Successful Journey with Simandhar Education</p>
                            </div>
                            <div className='video-card'>
                                <div className='video-box'>
                                    <Image src='/img/toppersJourney03.webp' alt="" layout="fill" className='resp-img' />
                                </div>
                                <p className='title01'>Q&A with Dhruv (Simandhar CPA Watt sells award winner ) FAR -98, BEC-98, REG-97, AUD-91 | CPA exam| CPA</p>
                            </div>

                        </div>
                    </div>

                    <div className='student-alumni mt-6'>
                        <div className='container-l'>
                            <h3 className='heading03'>The Pride of Simandhar – Our Students/Alumni</h3>
                            <p>We always take pride in the achievements of our students.</p>
                            <p>Our students, Kavneet Hanspal and Dhruv Patel, have not just made Simandhar proud but our whole country by being the only Indians to win the Elijah Watt Sells award. Many of our students have been placed at the Big 4 and other major accounting firms and top MNCs. They have gone on to hold key positions in major corporations and have made significant contributions to their growth.</p>
                            <p>No matter how high they reach in their careers, they will always be our alumni and a part of the Simandhar family.</p>
                        </div>
                    </div>

                    <div className='palcement mt-6'>
                        <div className="container-l">
                            <Placement indexData={indexData.awardAlumni} />
                        </div>
                    </div>

                </div>
                <div className='counseling-register text-center'>
                    <div className='conatainer-l'>
                        <h2 className='heading02'>Feeling inspired by Kavneet’s journey.</h2>
                        <h3 className='heading03'>Join us at Simandhar to make your US CPA dream come true.</h3>
                        <h3 className='heading03'>For free counseling Register here!</h3>
                        <div>
                            <a href="" className='btn white-btn white-btn-arrow'>Register</a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default WattSellsAward