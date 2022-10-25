import React, { useState } from 'react';
import './ButtonHandler'
import './Index.css';
import ImagePresenter from '../DisplayMusic/ImagePresenter';
import musicLibraryNeon from "../../assets/music-library-neon.jpg";
import ButtonHandler from './ButtonHandler';

const AddSong = ({addNewSong}) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');

    function handleSubmit(event) {
        event.preventDefault()
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: releaseDate,
            genre: genre,
        };
        console.log(newSong);
        addNewSong(newSong)
    }

    return (
        <body>
            <image className="image">
                <ImagePresenter image={musicLibraryNeon} altText="Main Page Image"/>
            </image>
            <form onSubmit={handleSubmit} className='form-grid'>
                <section class='main section'>
                    <div>
                        <label>Title</label>
                        <input type='text' value={title} onChange={(event) => setTitle((event.target.value))} />
                    </div>
                    <div>
                        <label>Artist</label>
                        <input type='text' value={artist} onChange={(event) => setArtist(event.target.value)}/>
                    </div>
                    <div>
                        <label>Album</label>
                        <input type='text' value={album} onChange={(event) => setAlbum(event.target.value)}/>
                    </div>
                    <div>
                        <label>Release Date</label>
                        <input type='date' value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)}/>
                    </div>
                    <div>
                        <label>Genre</label>
                        <input type='text' value={genre} onChange={(event) => setGenre(event.target.value)}/>
                    </div>
                    <div>
                        <ButtonHandler type='submit' className='btn btn-primary' style={{marginTop: '1em'}}>Submit</ButtonHandler>
                    <div>
                    </div>
                    </div>
                </section>
            </form>
        </body>
    )
}

export default AddSong;