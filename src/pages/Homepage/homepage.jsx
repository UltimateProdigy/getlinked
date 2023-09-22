import React from "react";
import "./homepage.css";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import Herosection from "../../components/herosection/herosection";
import Introduction from "../../components/introduction/introduction";
import Rules from "../../components/rules/rules";
import Criteria from "../../components/criteria/criteria";
import Questions from "../../components/questions/questions";
import Timeline from "../../components/timeline/timeline";
import Prizes from "../../components/prizes/prizes";
import Sponsors from "../../components/sponsors/sponsors";
import Policy from "../../components/policy/policy";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Introduction />
      <Rules />
      <Criteria />
      <Questions />
      <Timeline />
      <Prizes />
      <Sponsors />
      <Policy />
      <Footer />
    </div>
  );
};

export default Homepage;
