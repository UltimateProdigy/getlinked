import React from "react";
import "./questions.css";
import Question from "../../assets/images/Question.png";

const Questions = () => {
  return (
    <div className="question-container">
      <div className="qcd">
        <h3 className="frequentlyask">Frequently Ask</h3>
        <h3 className="questions">Question</h3>
        <p className="question-intro">
          We got answers to the questions that you might want to ask about
          <span className="glh"> getlinked Hackathon 1.0</span>
        </p>
        <div className="questionsdiv">
          <div className="question">
            <h3>Can I work on a project I started before the hackathon?</h3>
            <h3 className="plus">+</h3>
          </div>
          <hr className="hr" />
          <div className="question">
            <h3>What happens if I need help during the hackathon?</h3>
            <h3 className="plus">+</h3>
          </div>
          <hr />
          <div className="question">
            <h3>What happens if I don't have an idea for a project?</h3>
            <h3 className="plus">+</h3>
          </div>
          <hr />
          <div className="question">
            <h3>Can I join a team or do I have to come with one?</h3>
            <h3 className="plus">+</h3>
          </div>
          <hr />
          <div className="question">
            <h3>What happens after the hackathon ends</h3>
            <h3 className="plus">+</h3>
          </div>
          <hr />
          <div className="question">
            <h3>Can I work on a project I started before the hackathon?</h3>
            <h3 className="plus">+</h3>
          </div>
          <hr />
        </div>
      </div>
      <div>
        <img className="questionimg" src={Question} alt="question" />
      </div>
    </div>
  );
};

export default Questions;
