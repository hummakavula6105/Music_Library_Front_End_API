import Song from "../Songs/Song";
import React from "react";

const DisplayMusic = (props) => {
  return (
    <div className="table">
      <div>
        {props.parentEntries.filter(entry=>
         entry.title.includes(props.entry) || 
         entry.album.includes(props.entry) || 
         entry.artist.includes(props.entry) || 
         entry.genre.includes(props.entry) || 
         entry.release_date.includes(props.entry))
         .map((entry) => {
          return <Song entry={entry} key = {entry.id} />;
        })}
      </div>
    </div>
  );
};

export default DisplayMusic;