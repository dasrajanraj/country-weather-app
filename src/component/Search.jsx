import React from 'react';

const Search = ({searchHandler,search})=>{
    
    return(
        <form>
            <label>Name</label>
            <input type="text" value={search} onChange ={searchHandler}/> 
        </form>
    );
}

export default Search;