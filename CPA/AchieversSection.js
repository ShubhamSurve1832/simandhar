import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useState, useEffect } from 'react'
import ReactReadMoreReadLess from "react-read-more-read-less";
import axios from 'axios'
import _ from 'lodash'




const AchieversSection = ({ achieverData, showData, showData1, showlogo, showbtn, dataCard_id }) => {
	const [data, setData] = useState([])
	useEffect(() => {
		axios({
			method: "get",
			url: "http://localhost:1337/api/datacards/" + dataCard_id + "?populate[0]=listitems&[populate][1]=listitems.datacard,listitems.datacarditems,listitems.subcards,listitems.test_image",
			responseType: 'json',
			headers: { "Authorization": "Bearer f7d1423065e7dfad4ff8aa84d496bd543a5cbc619216dfcd5ab593c7cb6101b82aa49976194a9d2332238b31d1942548e7469ed662e3c30881baf8deae11c3e46fb40b5ecfe15f2c5d02bf4e4dc9d20a53c37ffdec9903f13ba5850c24263fe4fcaaad033294bb29d4a6a84392c853a1e6a597ea26f7f2a997a3699b4d187be0" },
		})
			.then((res) => {
				if (!_.isEmpty(res.data))
					setData(res.data)
				// console.log(data)
			}
			)
			.catch((err) =>
				console.log("here is error", err.message)
			)
	}, [])

	let heading = _.get(data, "data.attributes.title")
	let cta_title = _.get(data, "data.attributes.cta_title")
	let cardData = _.get(data, "data.attributes.listitems.data", [])
	// console.log("main data", cardData)

	//   {
	// 	cardData.map((data =>{
	// 		let datacard = _.get(data)
	// 		console.log("main card daat",datacard)
	// 	}))
	//   }


	const [show, setShow] = useState(false);
	const showMenu = () => {
		setShow(!show);
	};

	const [active, setActive] = useState(false);
	const addActiveClass = () => {
		setActive(!active);
	};
	// export default function achieversSection({ data }) {
	return (
		<section className="section achiever-section pt-8">
			<div className='container'>
				<h2 className='heading02'>{heading}</h2>
				{
					showData1 ? (<h3 className='title01'>{achieverData.description}</h3>) : ("")
				}

				<div className={'achiever-container' + ' ' + (active ? 'active' : '')} >
					{cardData.map((box => {
						let data = _.get(box, "attributes")
						return (<figure className='achiever-box'>
							<div className='achiever-img resp-img-box'>
								<Image src={data.image_url} layout="fill" className='resp-img' alt="" />
							</div>
							<figcaption>
								<div className={'content' + ' ' + (show ? " active" : " ")}>
									<p>
										{
											showData ? (
												<ReactReadMoreReadLess
													readMoreClassName="readMoreClassName read-more"
													charLimit={200}
													readMoreText="Read More"
													readLessText="Read Less">
													{data.description}

												</ReactReadMoreReadLess>
											) : ("")
										}
									</p>
								</div>

								<div className='flex-row'>
									<div>
										<span className='achiever-name'>{data.title}</span>
										<span className='achiever-pos'>{data.subtitle}</span>
									</div>

								{showlogo ?
										<div className='logo'>
											<Link href={data.goto_url} target='_blank'><Image src="/img/linkdin.png" layout="fill" className='resp-img' alt=" " /></Link>
										</div> : " "
									}

									{
										showData1 ? (
											<>
												<span className='achiever-pos'>{data.list_heading}</span>
												<span className='achiever-name'>{ }</span>
											</>
										) :
											("")
									}
								</div>
							</figcaption>
						</figure >
						)
					}))}




					{/* {achieverData.list.map((box => {
						return <> <figure className='achiever-box'>
							<div className='achiever-img resp-img-box'>
								<Image src={box.img} layout="fill" className='resp-img' alt=""/>
							</div>
							<figcaption>
								<div className={'content' + ' ' + (show ? " active" : " ")}>
									{
										showData ? (
											<p>
												<ReactReadMoreReadLess
													readMoreClassName="readMoreClassName read-more"
													charLimit={200}
													readMoreText="Read More"
													readLessText="Read Less">
													{box.para}
												</ReactReadMoreReadLess>
											</p>
										) : ("")
									}
								</div>
								<div className='flex-row'>
									<div>
										<span className='achiever-name'>{box.title}</span>
										<span className='achiever-pos'>{box.caption}</span>
									</div>

									{ showlogo ?
									<div className='logo'>
										<Image src="/img/linkdin.png" layout="fill" className='resp-img' alt=" " />
									</div> : " "
									}

									{
										showData1 ? (
											<>
												<span className='achiever-pos'>{box.position}</span>
												<span className='achiever-name'>{box.company}</span>
											</>

										) :
											("")
									}
								</div>
							</figcaption>
						</figure>
						</>
					}))} */}
				</div>



				{/* <figure className='achiever-box'>
						<div className='achiever-img resp-img-box'>
							<Image src='/img/ashwiniNathan.jpg' layout="fill" className='resp-img' />
						</div>
						<figcaption>
							<p>I'm thrilled to share that I have cleared all 4 parts of the US CPA examination. It's been a challenging journey and a lot of ups and downs from deciding to quit my job to studying full time and..</p>
							<p><a href='#' className='rm-btn'>Read More</a></p>
							<span className='achiever-name'>Ashwini Nathan</span>
							<span className='achiever-pos'>US CPA</span>
						</figcaption>
					</figure>
					<figure className='achiever-box'>
						<div className='achiever-img resp-img-box'>
							<Image src='/img/raghavPrassana.png' layout="fill" className='resp-img' />
						</div>
						<figcaption>
							<p>Top-notch quality of student service. Truly a student development oriented organization. The placements and the value adds are impeccable. Great place! Wonderful staff! I definitely recommend!</p>
							<p><a href='#' className='rm-btn'>Read More</a></p>
							<span className='achiever-name'>Raghav Prassanna</span>
							<span className='achiever-pos'>US CPA</span>
						</figcaption>
					</figure>
					<figure className='achiever-box'>
						<div className='achiever-img resp-img-box'>
							<Image src='/img/wasinMankad.png' layout="fill" className='resp-img' />
						</div>
						<figcaption>
							<p>And here starts my journey to the US CPA. One down and 3 more subjects to go. Thank you Simandhar team for the exception support!</p>
							<p><a href='#' className='rm-btn'>Read More</a></p>
							<span className='achiever-name'>Wasim Mankad</span>
							<span className='achiever-pos'>US CPA</span>
						</figcaption>
					</figure>
				</div>  */}

				{
					showbtn ?
						<div className='btn-wrap text-center'><a className='btn maroon-border-btn maroon-border-btn-arrow' onClick={addActiveClass}>{cta_title}</a></div>
						: ""
				}
			</div>

		</section >
	)
}
export default AchieversSection
