import React from 'react'
import PropTypes from 'prop-types'

const Button = ({showSection,show,hide}) => 
  <div 
    className= {`load-btn ${ hide ? 'hide-btn': null}`}
    style={{display: `${show ? 'none' : null}` }}
    onClick={()=>showSection()}> 
    <span>了</span>
    <span>解</span>
    <span>更</span>
    <span>多</span>
  </div>

Button.propTypes = {
  showSection: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  hide: PropTypes.bool.isRequired
}

export default Button