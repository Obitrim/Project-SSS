import React from 'react';
import './NewsAndAnnouncements.css';
import Container from '../../../components/Container';
import NewsCard from '../../../components/NewsCard';

const Index = (props) => {
	return (
		<div className="News V-whitespace">
			<Container>
		    	<h1 className="ViewHeading">News & Announcements</h1>
		   		<div className="News__Cards">
		   			<NewsCard/>
		   			<NewsCard/>
		   			<NewsCard/>
		   			<NewsCard/>
		   			<NewsCard/>
		   			<NewsCard/>
		   			<NewsCard/>
		   			<NewsCard/>
		   			<NewsCard/>
		   			<NewsCard/>
		   			<NewsCard/>
		   			<NewsCard/>
		   			<NewsCard/>
		   		</div>
		 	</Container>
		</div>
	)
}

export default Index;