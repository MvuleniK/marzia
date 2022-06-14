import '../components/rightside.css'
import React, { useState } from 'react';


import Furniture1 from '../components/furniture1';
import Furniture2 from '../components/furniture2';
import Furniture3 from '../components/furniture3';
import Furniture4 from '../components/furniture4';
import Furniture5 from '../components/furniture5';



function Rightside() {

    const [activeBtn,setActiveBtn] = useState(0);
        const toogle =(index) =>{
            setActiveBtn(index)
        }

        return (
            <div className="content">
            {/* <h1>Furniture comes here!</h1> */}
            <div className="detailContent">
              
                <ul className='colour-button' >
                    <li onClick={()=>toogle(0)} className={activeBtn === 0 ? 'activebtn' : "activebtn2" }><span><button className='outer-circle1'><button className='inner-circle1'></button></button></span></li>
                    <li onClick={()=>toogle(1)} className={activeBtn === 1 ? 'activebtn' : "activebtn2" }><span><button className='outer-circle2'><button className='inner-circle2'></button></button></span></li>
                    <li onClick={()=>toogle(2)} className={activeBtn === 2 ? 'activebtn' : "activebtn2" }><span><button className='outer-circle3'><button className='inner-circle3'></button></button></span></li>
                    <li onClick={()=>toogle(3)} className={activeBtn === 3 ? 'activebtn' : "activebtn2" }><span><button className='outer-circle4'><button className='inner-circle4'></button></button></span></li>
                    <li onClick={()=>toogle(4)} className={activeBtn === 4 ? 'activebtn' : "activebtn2" }><span><button className='outer-circle5'><button className='inner-circle5'></button></button></span></li>
                </ul>
            </div>

            <div className="bottomContent">

                {/* we use a cascaded compact if statement to set the color variation coherent with the colour of the furniture */}
                <div className="rightBottom">
                    {
                        ( activeBtn === 0 ? <Furniture1/> : activeBtn === 1 ? <Furniture2 /> : activeBtn === 2 ? <Furniture3/> : activeBtn === 3 ? <Furniture4/>:  <Furniture5 /> )
                    }
                 
                </div>
        
            </div>
            </div>
          )
}

export default Rightside

                        


// import ImageSlider from "./imageslider";

// const Rigthside = () => {

//     const slides  = [

//         {url: "../assests/img1.png",title:"navy"},
//         {url: "../assests/img2.png",title:"yellow"},
//         {url: "../assests/img3.png",title:"orange"},
//         {url: "../assests/img4.png",title:"Brown"},
//     ];

//     const containerStyles = {
//         width: "500px",
//         height: "280px",
//         margin: "0 auto",
//         // position:"relative",
//         // right:"4em"
//       };


//     return(


//         <div classname = "right-container"> 

//             <h1> </h1>
//             <div style={containerStyles}>
//                 <ImageSlider slides={slides} />
//             </div>

//         </div>


//     );

// };

// export default Rigthside;