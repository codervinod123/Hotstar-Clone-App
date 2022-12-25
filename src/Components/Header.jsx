import React from "react";
import "./Header.css";
import {Link} from "react-router-dom"
import logo from "../Assets/logo.svg";
import { AiFillHome } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { RiMovie2Fill } from "react-icons/ri";
import { BiCameraMovie } from "react-icons/bi";
import { useNavigate} from "react-router-dom";


// const user=0;
function Header() {

  const navigate=useNavigate();
  const routeChange=()=>{
          const path=`/auth`;
          navigate(path);
      }

  return (
    <div className="container">
      <div className="nav">
        <logo>
          <img src={logo} alt="Disney+" />
        </logo>
          <div className="navMenu">
          <Link to="/">
            <AiFillHome />
            {/* <Link to="/home">Home</Link> */}
            <span>Home</span>
            {/* <span> <Link to="/home">Home</Link></span> */}
          </Link>

          <Link to="/">
            <BiSearch />
            <span>SEARCH</span>
          </Link>

          <Link to="/">
            <FiPlus />
            <span>WATCHLIST</span>
          </Link>

          <Link to="/">
            <AiFillStar />
            <span>ORIGINALS</span>
          </Link>

          <Link to="/movies">
            <RiMovie2Fill />
            <span>MOVIES</span>
          </Link>

          <Link to="/">
            <BiCameraMovie />
            <span>SERIES</span>
          </Link>
        </div>
        <div className="login">
          <Link to="/login"><span onClick={routeChange}>Login</span></Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
