import React from 'react';
import Details from './Details';
const List = ({countries,search,setSearch})=>{      
    if(search === ''){
        return <li> Please Enter name to Filter</li> 
    }
    const filterName = countries.filter((country) => 
        country.name.toLowerCase().indexOf(search.toLowerCase()) >= 0
    )
    
    if(filterName.length === 1) return <Details country ={filterName[0]}/>
    if(filterName.length > 10 ) return <li>Too many matches, apply more filter.</li>

    const countriesList = filterName.map((country,i) => <ListEntry country ={country} key={i} setSearch={setSearch} /> );
        
    
    return (
        <div>
            {countriesList}
        </div>
    );
}

const ListEntry = ({country,setSearch})=>{
    const setFilterToCountry = (country) => {
        return () => {
            setSearch(country)
        }
    }

    return(
        <div>
        {country.name}
        <button onClick = {setFilterToCountry(country.name)}>show</button> 
        </div>
    );


}

export default List;