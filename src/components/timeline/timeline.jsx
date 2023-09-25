import React from "react";
import "./timeline.css";

const Timeline = () => {
  return (
    <div className="timeline-div">
      <h3 className="timeline-title">Timeline</h3>
      <p className="timeline-intro">
        Here is the breakdown of the time we anticipate using for the upcoming
        event.
      </p>

      <div className="timeline-announcement">
        <div className="div">
          <h3 className="hackathon-announcement">Hackathon Announcement</h3>
          <p className="hackathon-public">
            The getlinked tech hackathon 1.0 is formally announced to the
            general public and teams begin to get ready to register
          </p>
        </div>
        <div className="vr">
          <div className="vertical-rule">.</div>
          <div className="timeline-number">
            <h1 className="num">1</h1>
          </div>
        </div>
        <div>
          <h3 className="announcement">November 18, 2023</h3>
        </div>
      </div>

      <div className="second-container">
        <div>
          <h3 className="registration-date">November 18, 2023</h3>
        </div>
        <div className="vr2">
          <div className="vertical-rule">.</div>
          <div className="timeline-number">
            <h1 className="num">2</h1>
          </div>
        </div>
        <div className="div2">
          <h3 className="registration-begins">Teams Registration begins</h3>
          <p className="registers">
            Interested teams can now show their interest in the getlinked tech
            hackathon 1.0 2023 by proceeding to register
          </p>
        </div>
      </div>

      <div className="timeline-announcement">
        <div className="div">
          <h3 className="registration-ends">Teams Registration ends</h3>
          <p className="no-registration">
            Interested Participants are no longer Allowed to register
          </p>
        </div>
        <div className="vr3">
          <div className="vertical-rule">.</div>
          <div className="timeline-number">
            <h1 className="num">3</h1>
          </div>
        </div>
        <div>
          <h3 className="registration-end-date">November 18, 2023</h3>
        </div>
      </div>

      <div className="second-container">
        <div>
          <h3 className="teamsandideadate">November 18, 2023</h3>
        </div>
        <div className="vr4">
          <div className="vertical-rule">.</div>
          <div className="timeline-number">
            <h1 className="num">4</h1>
          </div>
        </div>
        <div className="div4">
          <h3 className="teamsandideas">
            Announcement of the accepted teams and ideas
          </h3>
          <p className="teamsandideasdiv">
            All teams whom idea has been accepted into getlinked tech hackathon
            1.0 2023 are formally announced
          </p>
        </div>
      </div>

      <div className="timeline-announcement">
        <div className="div">
          <h3 className="begin">Getlinked Hackathon 1.0 Offically Begins</h3>
          <p className="beginners">
            Accepted teams can now proceed to build their ground breaking skill
            driven solutions
          </p>
        </div>
        <div className="vr5">
          <div className="vertical-rule">.</div>
          <div className="timeline-number">
            <h1 className="num">5</h1>
          </div>
        </div>
        <div>
          <h3 className="begin-time">November 18, 2023</h3>
        </div>
      </div>

      <div className="second-container">
        <div>
          <h3 className="demo-time">November 18, 2023</h3>
        </div>
        <div className="vr6">
          <div className="vertical-rule">.</div>
          <div className="timeline-number">
            <h1 className="num">6</h1>
          </div>
        </div>
        <div className="div2">
          <h3 className="demo-day">Demo Day</h3>
          <p className="demo">
            Teams get the opportunity to pitch their projects to judges. The
            winner of the hackathon will also be announced on this day
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
