import React from 'react';

const Song = ({ entry }) => {
    if (entry.title === 'title') {
      return
    }
    return (
      <div>
        <form>
            <h2>{entry.title}</h2>
            <h3>{entry.artist}</h3>
            <h4>{entry.album}</h4>
            <h5>{entry.release_date}</h5>
            <h6>{entry.genre}</h6>
          </form>
      </div>
    );
  };
  
  export default Song;