import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './components/DisplayMusic/DisplayMusic';
import CreateSong from './components/Songs/CreateSong';
import SearchBar from './components/DisplayMusic/SearchBar';


function App() {

  const [songs, setSongs] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    // getAllSongs();
  }, []);

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response.data);
    setSongs(response.data);
  }

  async function addNewSong(song){
    let response = await axios.post('http://127.0.0.1:8000/api/music/', song);
    console.log(response.data);
    getAllSongs()
  }

  return (
    <div>
        <SearchBar query={query} setQuery={setQuery}/>
        <CreateSong addNewSong={addNewSong}/>
        <DisplayMusic parentEntries={songs} query={query}/>
        <button onClick={() => getAllSongs()}>Get All Songs</button>
    </div>
  );
}

export default App;
