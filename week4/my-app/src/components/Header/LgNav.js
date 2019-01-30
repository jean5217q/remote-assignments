import React from 'react'
import PropTypes from 'prop-types'
import logo from '../../img/logo.svg'

const LgNav = ({navList}) => {
  return (
    <nav className="lg-navbar">
      <a className="header-logo" href="/">
        <img src={logo} alt="header-logo"/>
      </a>
      <ul>
        {navList.map((el,index)=>
          <li key={index}>
            <a 
              className="nav-item" 
              href={el.url}>{el.title}
            </a>
          </li>)}
      </ul>
    </nav>
  )
}

LgNav.propTypes = {
  navList: PropTypes.array.isRequired
}

export default LgNav