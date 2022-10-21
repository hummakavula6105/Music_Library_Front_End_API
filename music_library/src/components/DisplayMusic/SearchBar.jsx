import React, {useState} from 'react';
import Song from '../Songs/Song';

const SearchBar = (props) => {

    const [query, setQuery] = useState('');

    function handleSubmit(event) {
        event.preventDefault()
        let query = {
            Song,
        };
        console.log(query);
        props.search(query)
    }

    return (
        <div onSubmit={handleSubmit} className = 'form-grid'>
            <input
                type = 'text'
                value={query}
                placeholder='Search'
                onChange={event => setQuery(event.target.value)} />
        </div>
    );
};

export default SearchBar;