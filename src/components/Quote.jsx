import axios from 'axios'
import React, { useEffect, useState } from 'react'

const url ="https://goquotes-api.herokuapp.com/api/v1/random?count=1"

const Quote = () => {
    const [quote, setQuote] = useState(null);

    useEffect(() => {
        axios.get(url).then((res)=>{
            setQuote(res.data)
        }).catch((error)=>{
            console.log(error);
        });
    
      
    }, []);

    if (!quote) return null;
    
  return (
    <div>
        <p>{quote.quotes[0].text}</p>
        <p>-{quote.quotes[0].author}</p>
        </div>
  )
};

export default Quote