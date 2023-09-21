import React from "react";
import "./rules.css";
import Rulesimg from "../../assets/images/Rules.png"

const Rules = () => {
  return (
    <div className="rules-container">
      <div>
        <h3 className="rulesand">Rules and</h3>
        <h3 className="guidelines">Guidelines</h3>
        <p className="rules-intro">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
      <div>
        <img className="rulesimg" src={Rulesimg} alt="rules" />
      </div>
    </div>
  );
};

export default Rules;
