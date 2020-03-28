import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import List from './component/List';
import Search from './component/Search';
const App = ()=>{
    const [countries,setCountries] = useState([]);
    const [search, setSearch] = useState("");
    

    useEffect(()=>{
        axios
        .get("https://restcountries.eu/rest/v2/all")
        .then( response=>{
            console.log("API executed");
            setCountries(response.data);  
        })
    },[]);

    const searchHandler = (event)=> setSearch(event.target.value);
   

    return(
        <>
        <h1>Countries:</h1>
        <Search searchHandler={searchHandler} search = {search}/>
        <List countries = {countries} search = {search} setSearch={setSearch}/>
        </>
    );
}


ReactDOM.render(<App />, document.getElementById('root'));

