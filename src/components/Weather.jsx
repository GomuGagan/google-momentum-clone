import React, { useEffect, useState } from 'react'
import axios from 'axios'

const url="https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=89056c8c3faf1a7b2c944783c824608c&units=imperial"

const Weather = () => {
    const [data, setData] = useState(null);

    useEffect(()=>{
        axios.get(url).then((res)=>{
            setData(res.data)
        }).catch((error)=>{
            console.log(error)
        })

    }, []);

    if(!data) return null;
  return (
    <div>
        <p>{data.main.temp}</p>
    </div>
  )
}

export default Weather