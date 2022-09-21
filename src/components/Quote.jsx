import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {QuoteContainer, Text} from "./QuoteStyle"

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
    <QuoteContainer>
        <Text>{quote.quotes[0].text}</Text>
        <Text>-{quote.quotes[0].author}</Text>
        </QuoteContainer>
  )
};

export default Quote