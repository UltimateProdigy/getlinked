import React from "react";
import "./introduction.css";
import Idea from "../../assets/images/Idea.png";

const Introduction = () => {
  return (
    <div className="intro-container">
      <div>
        <img className="ideaimage" src={Idea} alt="Idea" />
      </div>
      <div>
        <h3 className="introduction">Introduction to getlinked</h3>
        <h3 className="techhackaton">tech Hackaton 1.0</h3>
        <p className="abouttechhackaton">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
    </div>
  );
};

export default Introduction;
