import React from 'react'
import PropTypes from 'prop-types'
import Title from './Tttle'
import Photo from './Photo'

const SectionBlock = ({item,mobile,name}) => {
  return (
    <div className={name}>
      <Title words={item.title.split('')}/>
      <Photo 
        array={item.photo}
        mobile={mobile}/>
    </div>
  )
}

SectionBlock.propTypes = {
  item: PropTypes.object.isRequired,
  mobile: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
}

export default SectionBlock