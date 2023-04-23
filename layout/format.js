// import Header from '../components/header'
// import Footer from '../components/footer'

export default function format({ children }) {
	return (
		<>
			<div id="page-container">
				{/* <Header></Header> */}
				<main className='main' id='main'>{children}</main>
				
				{/* <Footer></Footer> */}
			</div>
		</>
	)
}