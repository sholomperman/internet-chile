import React, { useState } from "react";
import "./contact.scss";
import Btn from "../../components/btn/Btn";
import fingerprint from "../../assets/fingerprint.svg";
import person from "../../assets/person1.svg";
import chat from "../../assets/chat.svg";
import axios from "axios";

const Contact = () => {
  const [data, setData] = useState({
    userName: "",
    userEmail: "",
    userMessage: "",
  });

  console.log(data);

  const handelChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handelSubmit = () => {
    try {
      const api = async () => {
        await axios.post("http://localhost:8080/api/login", {
          userName: data.userName,
          userEmail: data.userEmail,
          userMessage: data.userMessage,
        });
        // setData({
        //   userName: "",
        //   userEmail: "",
        //   userMessage: "",
        // });
      };
      api();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="Contact">
      <div className="login-contariner">
        <div className="login-left">
          <div>
            <img src={fingerprint} alt="fingerprint icon" />
          </div>
          <h2>Lorem ipsum dolor sit amet,</h2>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            earum necessitatibus corporis inventore optio cupiditate quae odio
            eum. Recusandae rerum tempore in sint quasi quaerat, hic cumque
            illum quis eum. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Nostrum earum necessitatibus corporis inventore optio
            cupiditate quae odio eum. Recusandae rerum tempore in sint quasi
            quaerat, hic cumque illum quis eum.
          </h3>
        </div>

        <div className="login-right">
          <div className="login-right-header">
            <h1>Send us some feed back</h1>
            <p>we'll get back to you ASAP.</p>
          </div>
          <div className="login-right-inputs-container">
            <div>
              <input
                onChange={handelChange}
                name="userName"
                value={data.userName}
                placeholder="Enter your name"
                type="text"
              />
              <img src={person} alt="person icon" />
            </div>
            <div>
              <input
                onChange={handelChange}
                name="userEmail"
                value={data.userEmail}
                placeholder="Enter your email"
                type="email"
              />
              <img src={person} alt="person icon" />
            </div>
            <div>
              <textarea
                onChange={handelChange}
                name="userMessage"
                value={data.userMessage}
                placeholder="Enter your massege"
                type="text"
              />
              <img src={chat} alt="chat icon" />
            </div>
          </div>
          <div onClick={() => handelSubmit()} className="login-right-btn">
            <Btn text="Send" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
