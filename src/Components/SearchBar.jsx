import React from 'react'

function SearchBar({searchTerm, setSearchTerm}) {






  return (
    <div>
      
        <input 
        type="text" 
        placeholder='Search by title or body'
        value={searchTerm} 
        onChange={(e) => { 
            console.log(e.target.value)
            setSearchTerm(e.target.value)} }
        className='search-input'    
       />
    </div>
  )
}

export default SearchBar