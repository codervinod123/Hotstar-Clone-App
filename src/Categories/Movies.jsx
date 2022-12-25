import React from 'react'
import "./Movies.css";


const URL="https://image.tmdb.org/t/p/w500";
const Movies = ({arr,title}) => {

    const routeClick=()=>{
        console.log("vinod kumar prajapati");
    }
  return (
    <div className='category_container'>

      
        {
             arr.map((items,index)=>{
             return(
                 <div key={index} className='category_item'>
                     <img src={`${URL}/${items.poster_path}`} onClick={routeClick} alt="lldid"/>
                  </div>
                 )
               })
           }
          
    </div>
  )
}

export default Movies