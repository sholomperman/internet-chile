import React, {useState} from "react";
import "./navBar.scss";
import close from "../../assets/close_FILL0.svg";
import menu from "../../assets/menu_FILL0.svg";
import img from "../../assets/internet.svg";
import { Link } from 'react-router-dom'
import useWindowDimensions from "../../hooks/useWindowDimensions";

const NavBar = () => {
  const [hambergerOpen, setHambergerOpen] = useState(false)
  const { width } = useWindowDimensions()
  const closeMane = () => {
    setHambergerOpen(false)
  }
  return (
    <div className="NavBar">
      <div onClick={() => setHambergerOpen(!hambergerOpen)} className="hamberger">
        <img src={hambergerOpen ? close : menu} alt="" />
      </div>
      <Link to='/' className="img">
        <img src={img} alt="compeny logo" />
      </Link>
      <ul style={{left: hambergerOpen ? 0 : "-300px"}}>
        <Link onClick={()=>closeMane()} to='/'>
          <li>Home</li>
        </Link>
        <Link onClick={()=>closeMane()} to='Packeges' >
          <li>Packeges</li>
        </Link>
        <Link style={{display: width < 800 ? 'none' : 'block'}} onClick={()=>closeMane()} to="Calculator" >
          <li>Calculatir</li>
        </Link>
        <Link onClick={()=>closeMane()} to='Contact' >
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
