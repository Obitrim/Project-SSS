import React from 'react';
import './NewsCard.css';
import PropTypes from 'prop-types';
import ShareIcon from '@material-ui/icons/Share';

const Index = ({shadow, layout}) => {
  function isVertical(){
    return layout.toUpperCase() === 'V';
  }

  return (
    <a href="#" className={`NewsCard 
        ${ shadow && 'NewsCard--Shadow' }
        ${ !isVertical() && 'NewsCard--Horizontal'}
        `}>
    	<img className="NewsCard__Img" src="/images/banner-bg.jpg" alt="news image" />
    	<div className="NewsCard__Content">
        <h3 className="NewsCard__Heading">Lorem ipsum, dolor sit amet consectetur, adipisicing.</h3>
        <p className="NewsCard__Text">Lorem, porro asperiores blanditiis, magnam quidem, nobis porro asperiores bland</p>
        <div className="NewsCard__ActionBtns">
          <button className="ActionBtn" type="button">
            <ShareIcon/>
          </button>
        </div> 
      </div>
    </a>
  )
}

Index.propTypes = {
  shadow: PropTypes.bool,
  layout: PropTypes.oneOf(['v', 'h', 'V', 'H'])
}

Index.defaultProps = {
  shadow: true,
  layout: 'v'
}

export default Index;