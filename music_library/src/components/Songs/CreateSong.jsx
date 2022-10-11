import React, { useState } from 'react';

const AddSong = (props) => {

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
            releaseDate: releaseDate,
            genre: genre
            id: Math.random()
        };
        console.log(newSong);
        props.addNewSong(newSong)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4'>
            <form onSubmit={handleSubmit} className='form-grid'>
        <div className='form-group'>
            <label>Title</label>
            <input type='text' className='form-control' value={title} onChange={(event) => setTitle((event.target.value))} />
        </div>
        <div className='form-group'>
            <label>Artist</label>
            <input type='text' className='form-control' value={artist} onChange={(event) => setArtist(event.target.value)}/>
        </div>
        <div className='form-group'>
            <label>Album</label>
            <input type='text' className='form-control' value={album} onChange={(event) => setAlbum(event.target.value)}/>
        </div>
        <div className='form-group'>
            <label>Release Date</label>
            <input type='text' className='form-control' value={release_date} onChange={(event) => setReleaseDate(event.target.value)}/>
        </div>
        <div className='form-group'>
            <label>Genre</label>
            <input type='text' className='form-control' value={genre} onChange={(event) => setGenre(event.target.value)}/>
        </div>
        <div>
            <button type='submit' className='btn btn-primary' style={{'margin-top': '1em'}}>Submit</button>
        <div>
        </div>
        </div>
                </form>
                </div>
            <div className='col-md-4'></div>
            </div>
        </div>
    )
}

export default AddSong;