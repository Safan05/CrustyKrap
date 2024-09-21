import React, { useState } from 'react';
import  Joi  from 'joi-browser';
import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;
const Register = () => {
    const [name,setName]=useState("");
    const [Email,setEmail]=useState("");
    const [Pass,setPass]=useState("");
    const [errors,setErrors]=useState([]);
    const [reg,setReg]=useState(false);
        const schema={
        name:Joi.string().required(),
        Email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        Pass:Joi.string().min(4).required()
    }
    async function handleSubmit(e){
        e.preventDefault();
        try{
        let error = validate();
        if(error){
            return
        }
        console.log("processing")
        await axios.post(`${apiUrl}/user/register`,{
      name:name,
      email:Email,
      password:Pass
    })
    setReg(true);
}
catch(err){
    console.log(err);
}
    }
    function validate(){
        const Errors={};
        const state={
            name:name,
            Email:Email,
            Pass:Pass
        }
    let res=Joi.validate(state,schema,{abortEarly: false});
      if(res.error==null){
        setErrors({Errors:{}});
        return null;
      }
      for(const error of res.error.details){
        Errors[error.path]=error.message;
      }
      setErrors(Errors);
      return Errors;
    }
    return ( 
        <>
        <div className="container">
 <form onSubmit={handleSubmit}>
 <div className="mb-3">
    <label for="Name" className="form-label">Name</label>
    <input type="text" className="form-control" id="Name" onChange={(e)=>setName(e.currentTarget.value)}/>
    {errors&&errors["name"]&& (<div className="alert alert-danger">{errors["name"]}</div>) }
  </div>
  <div className="mb-3">
    <label for="Email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="Email" onChange={(e)=>setEmail(e.currentTarget.value)} aria-describedby="emailHelp"/>
    {errors&&errors["Email"]&& (<div className="alert alert-danger">{errors["Email"]}</div>) }
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>setPass(e.currentTarget.value)} />
    {errors&&errors["Pass"]&& (<div className="alert alert-danger">{errors["Pass"]}</div>) }
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
{reg&&(<div className='alert alert-success'>Registered Successfully</div>)}
</div>
        </>
     );
}
 
export default Register;