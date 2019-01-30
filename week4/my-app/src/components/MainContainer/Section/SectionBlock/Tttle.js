import React from 'react'
import PropTypes from 'prop-types'

const Title = ({words}) => 
  <div className="section-title"> 
    {words.map(word=>
      <span key={word}>{word}</span>
    )}
  </div>

Title.propTypes = {
  words: PropTypes.array.isRequired
}
  
export default Title