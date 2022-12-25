import React,{useState} from "react";
import "./Register.css";
import LOGO from "../../src/Assets/logo.svg";
import {toast,ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {Link} from "react-router-dom";

const Register = () => {


  const message={
    theme:"blue",
    position:"bottom-right",
    autoClose:4000,
    pauseOnHover:true,
    draggable:true,
  }

  const [values, setValues] = useState({
     username:"",
     email:"",
     mobile:"",
     password:"",
     conformpassword:""
});

  const handleChange=(e)=>{
        e.preventDefault();
        setValues({...values,[e.target.name]:e.target.value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(validateForm)
    {
      console.log(values.username);
      console.log(values.email);
      console.log(values.mobile);
      console.log(values.password);
      console.log(values.conformpassword);
      toast.success("success",message);
    }else{
      console.log("kumar");
    }
  }

  const validateForm=()=>{
       const {username,email,mobile,password,conformpassword}=values;
       if(username.length<3)
       {
        return false;
       }else if(!email)
       {
        return false;
       }else if(password!==conformpassword)
       {
        return false;
       }else if(!mobile)
       {
        return false;
       }
       return true;
  }

  

  

  return (
   <>
    <div className="registration_container">
      <div className="form_container">
        <form onSubmit={(e)=>handleSubmit(e)}>
          <div className="app_info">
            <img src={LOGO} alt="" />
          </div>

          <input 
             type="text" 
             placeholder="Enter User Name" 
             name="username"
             onChange={(e)=>handleChange(e)} 
          />

          <input 
             type="email" 
             placeholder="Enter User Email" 
             name="email" 
             onChange={(e)=>handleChange(e)}
          />

          <input 
             type="number"
             placeholder="Enter User Mobile" 
             name="mobile" 
             onChange={(e)=>handleChange(e)}
          />

          <input
            type="password"
            placeholder="Enter User Password"
            name="password"
            onChange={(e)=>handleChange(e)}
          />

          <input
            type="password"
            placeholder="Re-Enter Password"
            name="conformpassword"
            onChange={(e)=>handleChange(e)}
          />
          <button className="btn" type="submit">Create User</button>
          <span>Have an Account ? <Link to="/login">Login</Link></span>
        </form>
        
      </div>
     
    </div>
    <ToastContainer/>
   </>
  );
};

export default Register;
