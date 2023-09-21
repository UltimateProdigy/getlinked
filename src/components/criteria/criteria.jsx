import React from "react";
import "./criteria.css";
import Judges from "../../assets/images/Judges.png";
import Button from "../button/button";

const Criteria = () => {
  return (
    <div className="criteria-container">
      <div>
        <img className="judgeimg" src={Judges} alt="judges" />
      </div>
      <div className="cri-con">
        <h3 className="judgecriteria">Judging Criteria</h3>
        <h3 className="attributes">Key attributes</h3>
        <p className="criterias">
          <span className="criteria-header">Innovation and Creativity: </span>
          Evaluate the uniqueness and creativity of the solution. Consider
          whether it addresses a real-world problem in a novel way or introduces
          innovative features.
        </p>
        <p className="criterias">
          <span className="criteria-header">Functionality: </span> Assess how
          well the solution works. Does it perform its intended functions
          effectively and without major issues? Judges would consider the
          completeness and robustness of the solution.
        </p>
        <p className="criterias">
          <span className="criteria-header">Impact and Relevance: </span>
          Determine the potential impact of the solution in the real world. Does
          it address a significant problem, and is it relevant to the target
          audience? Judges would assess the potential social, economic, or
          environmental benefits.
        </p>
        <p className="criterias">
          <span className="criteria-header">Technical Complexity: </span>
          Evaluate the technical sophistication of the solution. Judges would
          consider the complexity of the code, the use of advanced technologies
          or algorithms, and the scalability of the solution.
        </p>
        <p className="criterias">
          <span className="criteria-header">Adherence to Hackathon Rules: </span>
          Judges will Ensure that the team adhered to the rules and guidelines
          of the hackathon, including deadlines, use of specific technologies or
          APIs, and any other competition-specific requirements.
        </p>
        <Button name="Read More" />
      </div>
    </div>
  );
};

export default Criteria;
