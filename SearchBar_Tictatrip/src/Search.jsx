import React, { useEffect, useState } from 'react'
import './Search.css'

export default function Search() {

    useEffect(()=>{
        fetch('https://api.comparatrip.eu/cities/autocomplete/?q=par')
        .then(res => res.json())
        .then(data => {
            console.log(data) ;
            setData(data);
            setFilterData(data);
        })
        .catch(err => console.log(err));
    },[])
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const handleFilter = (value) => {
        const res = filterData.filter(f => f.local_name.toLowerCase().includes(value))
        setData(res); 
        if(value === ""){
            setData([])
        }
    }
  return ( 
    <div className='search-top'>
        <div className='search'>
            <input type='text' placeholder='Search here' onChange={ e => handleFilter(e.target.value)}/>
        </div>
        <div className='search-result'>
            {data.map((d,i)=>(
                <div key={i}>
                    {d.local_name}
                </div>
            ))}
        </div>
        
    </div>
  
  )
}

