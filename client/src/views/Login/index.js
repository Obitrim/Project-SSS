import './Login.css';
import React, { useState, useEffect } from 'react';
import LoginForm from '../../components/LoginForm';

const Index = (props) => {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const sliderInterval = setInterval(() => {
			setActiveIndex(activeIndex < 3 ? activeIndex + 1 : 0);
		}, 3000);

		return () => {
			clearInterval(sliderInterval);
		}
	}, [activeIndex])
	return (
		<section className="LoginView">
			 <div className="LoginView__Row">
		    	<div className="LoginView__Info">
					<h1 className="LoginView__Info__Heading">KNUST Student Support Portal</h1>
		    		<div className="SlidesWrapper" style={{ marginLeft: `${activeIndex * -100}%`}}>
		    			<div className="Slide">
		    				<img className="Slide__Icon" src="/svgs/campus_navigation_icon.svg" alt="campus navigation icon"/>
		    				<img className="Slide__Icon" src="/svgs/hostel_finder_icon.svg" alt="hostel finder icon"/>
		    				<p className="Slide__Text">Find your way around and book accomodations with ease</p>
		    			</div>
		    			<div className="Slide">
		    				<img className="Slide__Icon" src="/svgs/financial_assistance_icon.svg" alt="financial assistance icon"/>
		    				<img className="Slide__Icon" src="/svgs/counseling_assistance_icon.svg" alt="counseling assistance icon" />
		    				<img className="Slide__Icon" src="/svgs/SOS_icon.svg" alt="sos icon" />
		    				<p className="Slide__Text">Request Assistance</p>
		    			</div>
		    			<div className="Slide">
		    				<img className="Slide__Icon" src="/svgs/news_announcement_icon.svg" alt="information dissipation" />
		    				<p className="Slide__Text">Get informed and up to date</p>
		    			</div>
		    			<div className="Slide">
		    				<img className="Slide__Icon" src="/svgs/whistle_blower_icon.svg" alt="whistle blower icon" />
		    				<p className="Slide__Text">Be an Informant</p>
		    			</div>
		    		</div>
		    	</div>
		    	<LoginForm/>
		    </div>
		</section>
	)
}

export default Index;