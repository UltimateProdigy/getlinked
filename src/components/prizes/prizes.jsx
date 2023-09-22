import React from "react";
import "./prizes.css";
import Trophy from "../../assets/images/Trophy.png";
import Silver from "../../assets/images/Silver.png";
import Gold from "../../assets/images/Gold.png";
import Bronze from "../../assets/images/Bronze.png"

const Prizes = () => {
  return (
    <div>
      <div className="right-div">
        <h3 className="prizesand">Prizes and</h3>
        <h3 className="rewards">Rewards</h3>
        <p className="aboutreward">
          Highlight of the prizes or rewards for the winners and for
          participants.
        </p>
      </div>
      <div className="flex-container">
        <div>
          <img className="trophy" src={Trophy} alt="trophy" />
        </div>
        <div className="medals">
          <div className="runnerup-div">
            <img className="silver" src={Silver} alt="silver-medal" />
            <div>
              <h3 className="position">
                2nd <span className="runner">Runner</span>
              </h3>
            </div>
            <div>
              <h3 className="prizeamount">N300,000</h3>
            </div>
          </div>
          <div className="winner">
            <img className="gold" src={Gold} alt="gold-medal" />
            <div>
              <h3 className="position">
                1st <span className="runner">Runner</span>
              </h3>
            </div>
            <div>
              <h3 className="prizeamount">N400,000</h3>
            </div>
          </div>
          <div className="third-runnerup-div">
            <img className="bronze" src={Bronze} alt="bronze-medal" />
            <div>
              <h3 className="position">
                3rd <span className="runner">Runner</span>
              </h3>
            </div>
            <div>
              <h3 className="prizeamount">N150,000</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
