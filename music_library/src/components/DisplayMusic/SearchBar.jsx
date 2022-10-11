import React, {useState} from 'react';

const SearchBar = () => {

    const [searchInput] = useState("");

    return (
        <div className='text-right'>
            <input
                type='search'
                placeholder='Search'
                onChange={handleChange}
                value={searchInput} />
        </div>
    );
};

export default SearchBar;