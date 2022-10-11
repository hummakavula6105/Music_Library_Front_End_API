import Song from "../Songs/Song";
import React from "react";

const DisplayMusic = (props) => {
  return (
    <div className="table">
      <div>
        {props.parentEntries.map((entry) => {
          return <Song entry={entry} key = {entry.id} />;
        })}
      </div>
    </div>
  );
};

export default DisplayMusic;