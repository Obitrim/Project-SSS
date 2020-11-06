import React, { useContext } from 'react';
import './AppHeader.css';
import Navbar from '../Navbar';
import Container from '../Container';
import SearchBox from '../SearchBox';
import ProfileBox from '../ProfileBox';
import { StoreContext } from '../../store';
import { useHistory } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
        			<button className="IconBtn MenuToggler" type="button" onClick={showSidebar}>
        				<MenuIcon className="MenuIcon"/>
        			</button>
        			<span className="AppName">KNUST SOS</span>
        			<SearchBox/>
        			<ProfileBox/>
        		</Container>
        	</div>
        	<div className="AppHeader__Bottom">
        		<Container>
        			<button className="IconBtn BackBtn" type="button" onClick={() => history.goBack()}>
        				<ArrowBackIcon className="BackArrowIcon"/>
        			</button>
        			<Navbar/>
        			<SearchBox/>
        		</Container>
        	</div>
        </header>
    )
}

export default Index;