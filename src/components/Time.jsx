import React from 'react'
import Moment from 'react-moment';
import 'moment-timezone';

const Time = () => {

    let today = new Date();
    let greeting =()=>{
        if(today.getHours() >= 5 && today.getHours() < 11){
            return "Good Morning, Gomu."
        } else if (today.getHours() >= 11 && today.getHours() < 17){
            return "Good Afternoon, Gomu."
        } else if (today.getHours() >= 17 && today.getHours() < 24){
            return "Good Evening, Gomu."
        } else{
            return "What are you doing Up at this hour"
        }
    }
  return (
    <div>
        <Moment format='LT' />
        <p>{greeting()}</p>
        
        </div>
  )
}

export default Time