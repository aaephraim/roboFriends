import React from 'react'
import "./SearchBar.css";
const SearchBar = ({search}) => {
    return (
        <div>
            <input  className = " searchBar pa3 ba " type = "search" placeholder = "Search Robots" onChange={search}/>
        </div>
    )
}

export default SearchBar;