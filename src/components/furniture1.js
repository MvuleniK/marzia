import React from 'react'
import couch from '../assests/img2.png';
import '../components/furniture1.css'

// Navy grey couch
function furniture1() {
  return (
    <div className='furniture-img1'>
      <img  src={couch} alt="sofa "/>
    </div>
  )
}

export default furniture1