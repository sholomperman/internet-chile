import React from "react";
import "./footer.scss";
import insta from "../../assets/insta.svg";
import twiter from "../../assets/twiter.svg";
import facebook from "../../assets/facebook.svg";
import Wave from "../../assets/Wave.png";
import Btn from "../../components/btn/Btn";

const Footer = () => {
  return (
    <div className="Footer" id="Contact">
      <img className="wave" src={Wave} alt="" />
      <div className="left"></div>

      <div className="right">
        <p className="fade">Email Us</p>
        <div className="right-top">
          <p>loremipsom@gmail.com</p>
        </div>
        <p className="fade">Keep In Touch</p>
        <div className="right-middel">
          <input placeholder="Full Name" type="text" />
          <input placeholder="Email" type="email" />
        </div>
        <div className="right-bottom">
          <textarea placeholder="Message" />
          <Btn text="Send" />
        </div>
        <p className="fade">Follow Us</p>
        <div className="social">
          <img src={insta} alt="" />
          <img src={twiter} alt="" />
          <img src={facebook} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
