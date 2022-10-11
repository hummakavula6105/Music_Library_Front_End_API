import Song from "../Songs/Song";
import React from "react";
import ImagePresenter from "./ImagePresenter";

const DisplayMusic = (props) => {
  return (
    <div className="table">
      <div>
        {props.parentEntries.map((entry) => {
          return <Song entry={entry} key = {entry.id} />;
        })}
      </div>
      <div>
        <image className="Main Page Display">
            <ImagePresenter image={music-library-neon.jpg} altText="Main Page Image"/>
        </image>
      </div>
    </div>
  );
};

export default DisplayMusic;