import React from "react";
import "./sponsors.css";
import Liberty from "../../assets/images/Liberty-Company.png";
import Whisper from "../../assets/images/Whisper-Company.png";
import Libertypay from "../../assets/images/Liberty-Pay.png";
import Winwise from "../../assets/images/Winwise-Company.png";

const Sponsors = () => {
  return (
    <div className="sponsors">
      <h3 className="partnernsponsors">Partners and Sponsors</h3>
      <p className="sponsorcompanies">
        Getlinked Hackathon 1.0 is honored to have the following major companies
        as its partners and sponsors
      </p>
      <div className="company-container">
        <div className="spon">
          <img className="company-logo1" src={Liberty} alt="liberty-company" />
          <hr className="sponsorhr" />
          <img className="company-logo2" src={Whisper} alt="whisper-company" />
        </div>
        <div className="sponsorvr">
          <div className="vertical-rule">.</div>
          <div className="vertical-rule">.</div>
        </div>
        <div className="spon2">
          <img
            className="company-logo3"
            src={Libertypay}
            alt="liberty-company"
          />
          <hr className="sponsorhr" />
          <h3 className="paybox">
            Pay<span className="box">box</span>
          </h3>
        </div>
        <div className="sponsorvr">
          <div className="vertical-rule">.</div>
          <div className="vertical-rule">.</div>
        </div>
        <div className="spon">
          <img className="winwise" src={Winwise} alt="liberty-company" />
          <hr className="sponsorhr" />
          <h3 className="visualpluz">
            Vuzual <span className="plus">Plus</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
