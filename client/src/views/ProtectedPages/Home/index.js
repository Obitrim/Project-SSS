import './Home.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';

import Banner from '../../../components/Banner';
import Container from '../../../components/Container';

const Index = (props) => {
	return (
		<>
			<Banner bgSrc="/images/banner-bg.jpg"/>
			
			<div className="QuickAccess">
				<Container>
					<Paper className="QuickAccess__Paper">
						<h1 className="ViewHeading">Quick Access</h1>
						<div className="QuickAccess_NavLinks">
							<Link to="/app/navigation" className="QuickAccess__NavLink">
								<img className="QuickAccess__Icon" 
									src="/svgs/campus_navigation.svg" 
									alt="campus navigation icon" 
								/>
								<span className="QuickAccess__Text">Campus Navigation</span>
							</Link>
							<Link to="/app/hostels" className="QuickAccess__NavLink">
								<img className="QuickAccess__Icon" 
									src="/svgs/hostel_finder.svg" 
									alt="hostel finder icon" 
								/>
								<span className="QuickAccess__Text">Hostel Finder</span>
							</Link>
							<Link to="/app/finance" className="QuickAccess__NavLink">
								<img className="QuickAccess__Icon" 
									src="/svgs/financial_assistance.svg" 
									alt="financial assistance icon" 
								/>
								<span className="QuickAccess__Text">Financial Aid</span>
							</Link>
							<Link to="/app/distress" className="QuickAccess__NavLink">
								<img className="QuickAccess__Icon" 
									src="/svgs/whistle_blower.svg" 
									alt="sos icon" 
								/>
								<span className="QuickAccess__Text">Distress Signal</span>
							</Link>
							<Link to="/app/news" className="QuickAccess__NavLink">
								<img className="QuickAccess__Icon" 
									src="/svgs/news.svg" 
									alt="news icon" 
								/>
								<span className="QuickAccess__Text">News</span>
							</Link>
							<Link to="/app/counselling" className="QuickAccess__NavLink">
								<img className="QuickAccess__Icon" 
									src="/svgs/campus_navigation.svg" 
									alt="campus navigation" 
								/>
								<span className="QuickAccess__Text">Counselling</span>
							</Link>
						</div>
					</Paper>
				</Container>
			</div>
			<div className="EmergencyNumbers">
				<Container className="EmergencyNumbers__Container">
					<Paper className="EmergencyNumbers__Paper">
						<h1 className="ViewHeading">KNUST SECURITY SERVICE</h1>
						<h2 className="ViewSubHeading">Emergency numbers</h2>
						<div className="NumberCards">
							<div className="NumberCard">
								<strong>KNUST Security (Hotline)<br/> <span className="PhoneNumber">(0322-062-999)</span></strong>
								<a className="NumberCard__CallBtn" href="tel:0322062999">Call</a>
							</div>
							<div className="NumberCard">
								<strong>Police Buffalo<br/> <span className="PhoneNumber">(0322-033-545)</span></strong>
								<a className="NumberCard__CallBtn" href="tel:0322033545">Call</a>
							</div>
							<div className="NumberCard">
								<strong>KNUST Security (office)<br/> <span className="PhoneNumber">(0332-060-229)</span></strong>
								<a className="NumberCard__CallBtn" href="tel:0332060229">Call</a>
							</div>
							<div className="NumberCard">
								<strong>Police Information<br/> <span className="PhoneNumber">(0322-022-323)</span></strong>
								<a className="NumberCard__CallBtn" href="tel:0322022323">Call</a>
							</div>
							<div className="NumberCard">
								<strong>KNUST Police Station<br/> <span className="PhoneNumber">(0322-060-051)</span></strong>
								<a className="NumberCard__CallBtn" href="tel:0322060051">Call</a>
							</div>
						</div>
					</Paper>
				</Container>
			</div>
		</>
	)
}

export default Index;