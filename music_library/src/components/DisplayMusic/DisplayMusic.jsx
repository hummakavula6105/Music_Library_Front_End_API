import Song from "../Songs/Song";
import React from "react";

const DisplayMusic = (props) => {
  return (
    <div className="table">
      <div>
        {props.parentEntries.filter(entry=>
         entry.title.includes(props.query) || 
         entry.album.includes(props.query) || 
         entry.artist.includes(props.query) || 
         entry.genre.includes(props.query) || 
         entry.release_date.includes(props.query))
         .map((entry) => {
          return <Song entry={entry} key = {entry.id} />;
        })}
      </div>
    </div>
  );
};

export default DisplayMusic;