import React, {useState} from "react";
import "./navBar.scss";
import img from "../../assets/internet.svg";

const NavBar = () => {
  const [hambergerOpen, setHambergerOpen] = useState(false)



  return (
    <div className="NavBar">
      <div onClick={() => setHambergerOpen(!hambergerOpen)} className="hamberger">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <a className="img" href="#Home">
        <img src={img} alt="compeny logo" />
      </a>
      <ul style={{left: hambergerOpen ? 0 : "-300px"}}>
        <a href="#Home">
          <li>Home</li>
        </a>
        <a href="#Packeges">
          <li>Packeges</li>
        </a>
        <a href="#Calculator">
          <li>Calculatir</li>
        </a>
        <a href="#Contact">
          <li>Contact</li>
        </a>
      </ul>
    </div>
  );
};

export default NavBar;
