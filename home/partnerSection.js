import Image from 'next/image'
import Slider from 'react-slick'
import { Tab } from "@headlessui/react"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios'
import _ from "lodash"
import { RiArrowDropDownLine } from 'react-icons/ri'



export default function partnerSection({ indexData ,dataCard_id}) {
	const [data, setData] = useState([])
	useEffect(() => {
		axios({
			method: "get",
			url: "http://localhost:1337/api/datacards/"+ dataCard_id+"?populate[0]=listitems&[populate][1]=listitems.datacard,listitems.datacarditems,listitems.subcards,listitems.subcards.item",
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
	let dataCard = _.get(data, "data.attributes.listitems.data", [])

	// {
	// 	dataCard.map((data) => {
	// 		let cardData = _.get(data, "attributes.subcards", [])
	// 		console.log("slider heading", cardData)

	// 		return (
	// 			<>
	// 				{
	// 					cardData.map((image) => {
	// 						let items = _.get(image, "item")
	// 						let heading1 = _.get(image, "heading")

	// 						return (
	// 							<>
	// 								{
	// 									items.map((data) => {
	// 										let image = _.get(data, "item")
	// 										console.log("slider iamges", image)
	// 									})
	// 								}

	// 							</>
	// 						)

	// 					})
	// 				}
	// 			</>
	// 		)
	// 	})
	// }
	var partnerSlider = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	};

	// const data = [{ id: 0, title: "Our Corporate Tie-Ups" }, { id: 1, title: "Our Loan Partners" }, { id: 2, title: "Media Recognitions" }];

	const [isActive, setActive] = useState(false);

	const showTab = () => {
		setActive(!isActive);
	};

	const [selectedItem, setSelectedItem] = useState(null);
	const [items, setItem] = useState(indexData);

	const handleItemClick = (id) => {
		selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
		setActive(!isActive);
	}
	return (
		<section className="section partner-section pt-0">
			<Tab.Group>
				<div className='container'>
					{
						dataCard.map((data) => {
							let cardData = _.get(data, "attributes.subcards", [])
							// console.log("slider heading", cardData)
							return (
								<>
									<div className='tab-head-row'>
										{/* <p className='tab-button-mobile tab-btn' onClick={showTab}>
											{selectedItem ? items.corporateTitle.find(item => item.id == selectedItem).title : "Our Corporate Tie-Ups"}
											<span className={'tab-head-box ' + ' ' + (isActive ? 'active' : '')}><RiArrowDropDownLine />
											</span>
										</p> */}
										<Tab.List className={'tab-header tab-head-box ' + ' ' + (isActive ? 'active' : '')}>
											{cardData.map((item) => {
												let title = _.get(item, "heading")
												return (
													<Tab className="tab-btn" onClick={e => handleItemClick(e.target.id)} id={item.id}>
														{title}
													</Tab>
												)
											})}
										</Tab.List>
									</div>
								</>
							)
						})
					}
					<div className='tab-container'>
						{
							dataCard.map((data) => {
								let cardData = _.get(data, "attributes.subcards", [])
								return(

								<div className='tab-box'>
									<Tab.Panels>
										{
											cardData.map((data => {
												let items = _.get(data,"item",[]) 
												// console.log("images",items)
												return <Tab.Panel>
													<div className='partner-slider'>
														<Slider {...partnerSlider}>
															{
																items.map((images => {
																	return <a href={images.path} target="_blank"><div className='logo-box resp-img-box'><Image src={images.item} layout="fill" className='resp-img' alt='' /></div></a>
																}))
															}
															<div className='logo-box resp-img-box'><h2 className='heading04'><Link href='/partners'> View More</Link></h2></div>
														</Slider>

													</div>
												</Tab.Panel>
											}))
										}
									</Tab.Panels>

								</div >
								)

							})
						}
					</div >

				</div >
			</Tab.Group>
		</section >
	)
}
