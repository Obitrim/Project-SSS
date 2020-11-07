import './Home.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../../components/Banner';
import Container from '../../../components/Container';

const Index = (props) => {
	return (
		<>
			<Banner bgSrc="/images/banner-bg.jpg"/>
			
			<div className="QuickAccess">
				<Container>
					<h1 className="ViewHeading">Quick Access</h1>
					<div className="QuickAccess_NavLinks">
						<Link to="/app/navigation" className="QuickAccess__NavLink">
							<img className="QuickAccess__Icon" 
								src="/svgs/campus_navigation_icon.svg" 
								alt="campus navigation icon" 
							/>
							<span className="QuickAccess__Text">Campus Navigation</span>
						</Link>
						<Link to="/app/hostels" className="QuickAccess__NavLink">
							<img className="QuickAccess__Icon" 
								src="/svgs/hostel_finder_icon.svg" 
								alt="hostel finder icon" 
							/>
							<span className="QuickAccess__Text">Hostel Finder</span>
						</Link>
						<Link to="/app/finance" className="QuickAccess__NavLink">
							<img className="QuickAccess__Icon" 
								src="/svgs/financial_assistance_icon.svg" 
								alt="financial assistance icon" 
							/>
							<span className="QuickAccess__Text">Financial Assistance</span>
						</Link>
						<Link to="/app/whistle-blow" className="QuickAccess__NavLink">
							<img className="QuickAccess__Icon" 
								src="/svgs/whistle_blower_icon.svg" 
								alt="whistle blower icon" 
							/>
							<span className="QuickAccess__Text">Whistle Blow</span>
						</Link>
						<Link to="/app/news" className="QuickAccess__NavLink">
							<img className="QuickAccess__Icon" 
								src="/svgs/news_announcement_icon.svg" 
								alt="news icon" 
							/>
							<span className="QuickAccess__Text">News & Announcements</span>
						</Link>
						<Link to="/app/distress" className="QuickAccess__NavLink">
							<img className="QuickAccess__Icon" 
								src="/svgs/SOS_icon.svg" 
								alt="sos icon" 
							/>
							<span className="QuickAccess__Text">SOS</span>
						</Link>
						<Link to="/app/counselling" className="QuickAccess__NavLink">
							<img className="QuickAccess__Icon" 
								src="/svgs/campus_navigation_icon.svg" 
								alt="campus navigation" 
							/>
							<span className="QuickAccess__Text">Counselling Assistance</span>
						</Link>
					</div>
				</Container>
			</div>
		</>
	)
}

export default Index;