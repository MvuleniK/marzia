import "../components/leftside.css"
// import './assests/font/Poppins-Light.otf'; 



function Leftside(){


    return (
        <div className = "leftside-container">
            <div className ="left-grid">
                <div className = "main-title">
                    <h1>Marzia</h1>
                </div>
                <div className = "collection">
                    <h2>Autumn Collection</h2>
                </div>
                <div className = "year">
                    <h3>2019</h3>
                </div>
                <div className="border-bottom">
                    {/* <hr></hr> */}
                </div>
                <div className = "add-to-card" >
                    <h4>Add to Card</h4>
                </div>
            </div>
        </div>
    
      );
}


export default Leftside;