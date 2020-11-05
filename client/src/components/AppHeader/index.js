import React, { useContext } from 'react';
import './AppHeader.css';
import Navbar from '../Navbar';
import Container from '../Container';
import SearchBox from '../SearchBox';
import { StoreContext } from '../../store';
import { useHistory } from 'react-router-dom';

const Index = (props) => {
    const history = useHistory();
    const { dispatch } = useContext(StoreContext);

    function showSidebar(){
        dispatch({ type: 'SHOW_SIDEBAR', open: true })
    }

    return (
        <header className="AppHeader">
        	<div className="AppHeader__Top">
        		<Container>
        			<button className="MenuToggler" type="button" onClick={showSidebar}>
        				<img src="/svgs/Menu.svg" alt="menu icon"/>
        			</button>
        			<span className="AppName">KNUST SOS</span>
        			<SearchBox/>
        			<button className="ProfileToggler" type="button">
        				<img src="/icons/Profile.png" alt="profile icon"/>
        			</button>
        		</Container>
        	</div>
        	<div className="AppHeader__Bottom">
        		<Container>
        			<button className="BackBtn" type="button" onClick={() => history.goBack()}>
        				<img src="/svgs/Menu.svg" alt="menu icon"/>
        			</button>
        			<Navbar/>
        			<SearchBox/>
        		</Container>
        	</div>
        </header>
    )
}

export default Index;