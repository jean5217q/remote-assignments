import React from 'react'
import PropTypes from 'prop-types'
import HeroImage from './HeroImage'
import Section from './Section'

const MainContainer = ({mobile}) => 
  <main className="main-container">
    <HeroImage mobile={mobile}/>
    <Section mobile={mobile}/>
  </main>

MainContainer.propTypes = {
  mobile: PropTypes.bool.isRequired
}

export default MainContainer