import React from 'react'
import {useNavigate} from 'react-router-dom';
import "../Components/Landing.css";
import logo1 from "../Assets/logo1.svg";
import logo2 from "../Assets/logo4.png";

const Landing = () => {

   const navigate=useNavigate();
   const routeChange=()=>{
           const path=`/login`;
           navigate(path);
          }

          return (
            <section>
                <div className="content">
                    <img className='logo' src={logo1} alt="logo1" />
                    <div className="logo">
                        <button onClick={routeChange}>Get All There</button>
                    </div>
        
                    <p className='para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit fugit voluptatum eaque beatae dicta dolor deserunt repellat odio adipisci. Laudantium!</p>
        
                    <img className='logo' src={logo2} alt="logo2" />
                </div>
            </section>
          )
}
export default Landing;




