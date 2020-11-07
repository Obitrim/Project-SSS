import React from 'react';
import './FinancialAssistance.css';
import NewsCard from '../../../components/NewsCard';
import Container from '../../../components/Container';

const Index = (props) => {
  return (
    <section className="FinancialAssistance V-whitespace">
    	<Container>
    		<h1 className="ViewHeading">Financial Assistance</h1>
    		<div className="FinancialAssistance__Wrapper">
    			{/*Form*/}
    			<form className="FinancialAssistance__Form">
    				Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Perferendis nam quo aliquam eveniet beatae ipsa ad tempore provident porro asperiores blanditiis, magnam quidem, nobis illum minima minus? Nihil explicabo labore alias nisi iure aperiam odio repellat fugiat
    			</form>
    			{/*News*/}
    			<aside className="FinancialAssistance__NewsFeed">
    				<h3>News Feed</h3>
    				<NewsCard shadow={false} layout="H"/>
    			</aside>
    		</div>
    	</Container>
    </section>
  )
}

export default Index;