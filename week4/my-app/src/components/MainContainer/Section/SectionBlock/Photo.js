import React from 'react'
import PropTypes from 'prop-types'

const Photo = ({array,mobile}) => {
  return(
  <div className="photo-area">
    {array.map((el,index)=>
      <div 
        className="section-item experience" 
        key={index}
        style={{backgroundImage:`url('${mobile ? el.lgUrl : el.smUrl}')`}}>
        <div className="img-title"> 
          <span>{el.title}</span>
        </div>
      </div>
    )}
  </div>
  )
}

Photo.propTypes = {
  array: PropTypes.array.isRequired,
  mobile: PropTypes.bool.isRequired
}

export default Photo