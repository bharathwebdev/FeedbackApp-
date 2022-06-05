import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const Header = ({text,bgColor,textColor}) => {
  const headerstyle={
    backgroundColor:bgColor,
    color:textColor,
  
  }
  return (
   <header style={headerstyle} >
       <div className="container">
         {/* <Link to='/'> */}
         <h2>{text}</h2>
         {/* </Link> */}
       </div>
   </header>
  )
}
Header.defaultProps = {
  text:"FeedBack UI",
  bgColor:'rgba(0,0,0,0.4)',
  textColor:'#ff6a95'
}
Header.propTypes={
    text:PropTypes.string
}

export default Header
