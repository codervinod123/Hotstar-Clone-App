import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './Login';
import Register from './Register';

const Authentication = () => {

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default Authentication