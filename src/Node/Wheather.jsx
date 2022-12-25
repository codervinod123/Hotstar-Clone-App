import React,{useState} from 'react'
import "../Node/Wheather.css";

// const dates=new Date();
// const day=dates.getMonth();


const Wheather = () => {

    const state = {date: new Date()}
  return (
<div>
    <div className='box'>
        <h3>{this.state.date.toLocaleDateString()}</h3>
        <p id='dates'>v</p>
        <p id='temp'>25.9 C</p>
        <p id='mn_mx'>MIN_MAX</p>
    </div>
</div>    
  )
}

export default Wheather