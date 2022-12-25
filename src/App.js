import React,{useState,useEffect} from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from './Components/Header';
import Landing from './Components/Landing';
import Home from './Components/Home';
// import Authentication from './Authentication/Authentication';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import Movies from './Categories/Movies';
import axios from 'axios';



const App = () => {


  const [arr, setArr] = useState([]);


  useEffect(()=>{
    const fetchPopular=async ()=>{
      const {data : {results}}=await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=44ac9604ae510ac323d54b879990e954&language=en-US&page=1");
      setArr(results);

     };
     fetchPopular();
},[])



  return (

    <div className='App'>
       <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path="/movies" element={<Movies mv={arr} title={"movies section"} />}/>
        </Routes>
       </BrowserRouter>
    </div>
   
  )
}

export default App;
