import Image from 'next/image'


const Analytics = ({ examData, showStrip }) => {


    return (
        <>
            <section className='analytics-section section'>
                <div className="container-l">
                    <h2 className='heading02'>Data Analytics</h2>
                    <h3 className='heading04'>Key Topics</h3>
                    <div className='key-topics-flex'>
                        <div className='box'><h4 className='heading05'>How to Develop a Data-Driven Mindset</h4></div>
                        <div className='box'><h4 className='heading05'>How to Approach a Data Analytics Project</h4></div>
                        <div className='box'><h4 className='heading05'>Understanding Data and the Data Ecosystem</h4></div>
                    </div>
                    <div className='skills-list'>
                        <h3 className='heading04'>Skills Gained Through Data Analytics</h3>
                        <ul>
                            <li className='heading05'><div className='count'>1</div> Recall the Analytical and Data-Driven Mindset's Characteristics.</li>
                            <li className='heading05'><div className='count'>2</div>Recognize how to set business or client objectives and desired outcomes for a data analytics project.</li>
                            <li className='heading05'><div className='count'>3</div>Recognize the various methods for describing and interpreting data.</li>
                            <li className='heading05'><div className='count'>4</div>Identify the Types and Categories of Data.</li>
                            <li className='heading05'><div className='count'>5</div>Recognize the Relationship Between Data Science and Data Analytics.</li>
                            <li className='heading05'><div className='count'>6</div>Recognize the Technology and Data Ecosystem's Characteristics for Data Analytics.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* DATA VISUALIZATION */}
            <section className='analytics-section section visualization-section '>
                <div className="container-l">
                    <h2 className='heading02'>Data Visualization</h2>
                    <h3 className='heading04'>Key Topics</h3>
                    <div className='key-topics-flex'>
                        <div className='box'><h4 className='heading05'>Communicating Insights from Data</h4></div>
                        <div className='box'><h4 className='heading05'>Making Decisions from Data</h4></div>
                        <div className='box'><h4 className='heading05'>Ways to Visualize Data</h4></div>
                        <div className='box'><h4 className='heading05'>Design Principles for Visualizing Data</h4></div>
                        <div className='box'><h4 className='heading05'>Setting up Business Intelligence in Organizations</h4></div>
                        <div className='box'><h4 className='heading05'>Components of BI Platforms</h4></div>
                        <div className='box'><h4 className='heading05'>How Underlying Data Architecture Affects Reporting and Predictive Analytics Techniques</h4></div>
                    </div>
                    <div className='skills-list'>
                        <h3 className='heading04'>Skills Gained Through Data Visualization</h3>
                        <ul>
                            <li className='heading05'><div className='count'>1</div>Create a data story that includes visualisations.</li>
                            <li className='heading05'><div className='count'>2</div>Determine the perspectives of key stakeholders.</li>
                            <li className='heading05'><div className='count'>3</div>Determine the data requirements of the organisation.</li>
                            <li className='heading05'><div className='count'>4</div>Distinguish Between Common Business Intelligence Frameworks.</li>
                            <li className='heading05'><div className='count'>5</div>Share Data Stories Across the Organization Using Visualization Tools.</li>
                            <li className='heading05'><div className='count'>6</div>Best Practices for Recall Visualization.</li>
                        </ul>
                    </div>
                </div>
            </section>



        </>
    )
}

export default Analytics;