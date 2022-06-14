import React from 'react';
import couch from '../assests/img1.png';
import '../components/furniture2.css';


// Yellow couch
function furniture2() {
  return (
    <div className='furniture2-img2'>
      <img  src={couch} alt="sofa "/>
    </div>
  )
}

export default furniture2;



// export default function furniture2() {
//   return (
//     <div classname = " furniture2-img2 ">
//       <img  className='img2' src={couch} alt="sofa "/>
//     </div>
//   )
// }
