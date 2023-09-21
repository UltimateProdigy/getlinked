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
          <p className="hackathon-time">
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
          <h3 className="hackathon-time-2">November 18, 2023</h3>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
