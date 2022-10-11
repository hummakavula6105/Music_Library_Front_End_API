import React from 'react';

const Song = ({ entry }) => {
    if (entry.title === 'title') {
      return
    }
    return (
      <div>
        <div className='container my-4 border border-info rounded'>
              <div className='row'>
                  <div className='col-md-3'></div>
                    <div className='col-md-6'>
                    <h2>{entry.title}</h2>
                    <h3>{entry.artist}</h3>
                    <h4>{entry.album}</h4>
                    <h5>{entry.release_date}</h5>
                    <h6>{entry.genre}</h6>
                    </div>
                  <div className='col-md-3'></div>
                {/* // button to go here */}
              </div>
          </div>
      </div>
    );
  };
  
  export default Song;