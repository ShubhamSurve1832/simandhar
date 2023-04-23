import Image from 'next/image'
import DownloadFormComponents from '../components/download_form'
import { useEffect, useState } from 'react'
import axios from 'axios'
import _ from "lodash"

export default function awardSection() {
	const [isShow, setIsShow] = useState(false);
	const [data, setData] = useState([])
	useEffect(() => {
		axios({
			method: "get",
			url: "http://localhost:1337/api/datacards/9?populate[0]=listitems&[populate][1]=listitems.datacard,listitems.datacarditems,listitems.subcards",
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

	let title = _.get(data, "data.attributes.title")
	let subTitle = _.get(data, "data.attributes.subTitle")
	let innerData = _.get(data, "data.attributes.listitems.data", [])
	// console.log("inner me",innerTitle)

	{
		innerData.map((data => {
			let title2 = _.get(data, "attributes")
			return <h2>{title2.title}</h2>
		}))
	}
	const showDwnPopup = () => {
		setIsShow(!isShow);
	};
	return (
		<>
			<section className="award-section">
				<div className='award-container'>
					<h4 className='heading04'>{title}</h4>
					<p>{subTitle}</p>
				</div>
				{
					innerData.map((data => {
						let title = _.get(data, "attributes")
						return (
							<div className='award-right-box'>
								<h3 className='heading04'>{title.title }</h3>
								<p>{title.subtitle}</p>
								<a className='btn white-btn white-btn-arrow' onClick={showDwnPopup}>{title.goto_url_text}</a>
							</div>
						)
					}))
				}


			</section>
			<div className='download-overlay' onClick={showDwnPopup} style={{ display: isShow ? 'block' : 'none' }}></div>
			<div className='download-popup' style={{ display: !isShow ? 'none' : 'block' }}><DownloadFormComponents /></div>
		</>
	)
}
