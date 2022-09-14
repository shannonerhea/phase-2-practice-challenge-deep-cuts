import React from 'react'

function Search({searchTerm, onSearchChange}) {
  //console.log(searchTerm)
  return (
    <div className="search">
        <input
          type="text"
          placeholder="Search your Tracks"
          onChange={(e) => onSearchChange(e.target.value)}
          value={searchTerm}
        />
        <i>🔎</i>
  </div>
  )
}

export default Search
