import React from "react";
import "./herosection.css";
import Button from "../button/button";
import Man from "../../assets/images/Man.png";
import Atom from "../../assets/images/Atom.png";
import Underline from "../../assets/images/Underline.png";

const Herosection = () => {
  return (
    <div
      className="herosection"
      style={{
        backgroundImage: `url(${Man})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "40vw",
        backgroundPositionY: "160px",
      }}
    >
      <div className="underline"
        style={{
          backgroundImage: `url(${Underline})`,
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "70vw",
          backgroundPositionY: "40px",
        }}
      >
        <h2 className="ignite">Igniting a Revolution in HR Innovation</h2>
      </div>
      <h2 className="intro">getlinked Tech</h2>
      <h1 className="hackaton">
        Hackaton <span>1.0</span>
      </h1>
      <p className="about">
        Participate in getlinked tech Hackathon 2023 stand a chance to win a Big
        prize
      </p>
      <Button name="Register" />
      <p className="timer">
        00<span className="timerspan">H</span> 00
        <span className="timerspan">M</span> 00
        <span className="timerspan">S</span>
      </p>
      <img className="atom" src={Atom} alt="atom" />
    </div>
  );
};

export default Herosection;
