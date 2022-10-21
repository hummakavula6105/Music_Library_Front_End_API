import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './components/DisplayMusic/DisplayMusic';
import CreateSong from './components/Songs/CreateSong';
import SearchBar from './components/DisplayMusic/SearchBar';
import Calendar from './components/Songs/Calendar';


function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    // getAllSongs();
  }, []);

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response.data);
    setSongs(response.data);
  }

  return (
    <div>
        <SearchBar/>
        <CreateSong/>
        <Calendar/>
        <DisplayMusic parentEntries={songs}/>
        <button onClick={() => getAllSongs()}>Get All Songs</button>
    </div>
  );
}

export default App;
