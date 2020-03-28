import React,{useState, useEffect} from 'react';
import axios from 'axios';
const Details = ({country})=>{
    const [current,setCurrent] = useState({});
    const languages =()=>{
        console.log(country);
        return country.languages.map((language,i) => <li key={i}>{language.name}</li>);
    }
    
    useEffect(()=>{
        const baseUrl = "http://api.weatherstack.com/current?access_key="+process.env.REACT_APP_WEATHER_API+"&query="+country.capital; 
        axios
        .get(baseUrl)
        .then( response =>{

            console.log("weather executed");
            setCurrent(response.data.current);
        })
    }
    ,[country.capital])
    
    return(
        <>
        <h1>{country.name}</h1>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <div>
            <h4>Language</h4>
            <ul>
                {languages()}
            </ul>
        </div>
        <img width="15%" height="22%" src={country.flag} alt ={country.name}/>

        <h3>Weather in {country.capital}</h3>
        <p>temperature: {current.temperature} C</p>
        <img width="5%" height="5%" src={current.weather_icons} alt ={country.name}/>
        <p>wind: {current.wind_speed} kph direction {current.wind_dir}</p>
        </>
    )
}
export default Details;