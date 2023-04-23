import Image from 'next/image'
import { useEffect, useState } from 'react'
import axios from 'axios'
import _ from "lodash"


export default function achieversSection({ dataCard_id }) {

	const [data, setData] = useState([])
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:1337/api/datacards/5?populate[0]=listitems&[populate][1]=listitems.datacard,listitems.datacarditems,listitems.subcards",
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

  let heading = _.get(data,"data.attributes.title")

	return (
		<section className="section achiever-section pt-0">
			<div className='container'>
				<h2 className='heading02'>{heading}</h2>
				<div className='achiever-container'>
					
					{
						<figure className='achiever-box'>
							<div className='achiever-img resp-img-box'>
								<Image src='/img/ashwiniNathan.jpg' layout="fill" className='resp-img' alt=''/>
							</div>

							<figcaption>
								<p>I'm thrilleed to share that I have cleared all 4 parts of the US CPA examination. It's been a challenging journey and a lot of ups and downs from deciding to quit my job to studying full time and..</p>
								<p><a href='#' className='rm-btn'>Read More</a></p>
								<div>
									<span className='achiever-name'>Ashwini Nathan</span>
									<span className='achiever-pos'>US CPA</span>
								</div>
							</figcaption>
						</figure>
					}
					{/* <figure className='achiever-box'>
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
					</figure> */}
				</div>
				<div className='btn-wrap text-center'><a className='btn maroon-border-btn maroon-border-btn-arrow'>View All Testimonials</a></div>
			</div>

		</section>
	)
}