import "../components/navbar.css"
import Logo from "../assests/nav/logo.png"
import Cart from "../assests/nav/icon1.svg"
import Glass from "../assests/nav/icon3.svg"
// import './assests/font/Poppins-Light.otf'; 



function Navbar(){


    return (
        <div className = "row-Topbar">
           

           <div className = " column-Topbar">
                  <div className ='img-logo'>
                    <img id = "img-logo" src={Logo} alt="logo" />
                  </div>
                  <div  className ='list' >
                    <h4>Home</h4>
                  </div>
                  <div className="dot">
                  </div>
                  <div className ='list' >
                      <h4 className="dot-collection" >Collection</h4>
                  </div>
                  <div  className ='list' >
                        <h4>About Us</h4>
                  </div>
                  <div  className ='list'  >
                        <h4>Contact</h4>
                  </div>
                  <div  className ='list'  >
                        <h4>Sign Up</h4>
                  </div>
                  <div  className ='img-icon' >
                        <img  src={Cart} alt="glass"/>
                  </div>
                  <div className ='img-icon'> 
                        <img src={Glass} alt="glass"/>
                  </div>
           </div>



        </div>
    
      );
}


export default Navbar;