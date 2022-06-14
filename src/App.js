// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Leftside from './components/leftside';
import Rigthside from'./components/rightside';

function App() {
  return (

    <div className="container">
     

     {/* Right side styling done in app_css */}
     <div className = "right-side">

      <div className = "yellow-circle">
        <div className = "inner-circle ">

        </div>
      </div>

       {/* Rightside panel */}
       <div className='right-container'>
       <Rigthside />
       </div>
       
       
     </div>

     <div className ="left-side">
        {/* leftside panel*/}
          <Leftside />
     </div>

     <div className ="Navigation-bar">
        {/* Navigation */}
          <Navbar/>
     </div>


     <div  className ="footer-bar" >
        {/* footer */}
          <Footer/>
     </div>



    </div>
  );
}

export default App;
