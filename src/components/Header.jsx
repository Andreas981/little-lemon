import React, { useState} from 'react';
import "../styles/Header.css";
import Logo from "../assets/littleLemonLogo.jpg"
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <header className="header-container">
        <NavLink to = "/">
            <img className="logo-img" src={Logo} alt="little lemon" />
        </NavLink>
        <nav>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/reservation">Reservations</NavLink></li>
            </ul>
        </nav>
        <div className="hamburger" onClick = {handleClick}>
            {click ? (<AiOutlineClose size={20} />) : (<AiOutlineMenu size={30} style={{ borderLeft: "1px solid #333333", paddingLeft: "10px", height: "20px"}}/>)}  
        </div>
      </header>
    </>
  )
}

export default Header
