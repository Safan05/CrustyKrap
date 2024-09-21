import React, { useState } from 'react';
import  Joi from 'joi-browser';
import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;
const AddItem = (props) => {
  const [name,setName]=useState("");
  const [price,setPrice]=useState(0);
  const [posted,setPosted]=useState(false);
  const [errors,setErrors]=useState([]);
  const schema={
    name:Joi.string().required(),
   price:Joi.number().required()
  }
  async function handleSubmit(e){
    e.preventDefault();
    const errors=validate();
    if(errors)
      return
    setPosted(true);
    console.log(errors);
    await axios.post(`${apiUrl}/user/admin`,{
      name:name,
      price:price
    })
    props.fetch();
  }
  function validate(){
    const errors={};
    const state={
      name:name,
      price:price
    }
    let res=Joi.validate(state,schema,{abortEarly: false});
    if(res.error==null){
      setErrors({errors:{}});
      return null;
    }
    for(const error of res.error.details){
      errors[error.path]=error.message;
    }
    setErrors({errors});
    return errors;
  }
 // console.log(errors.errors["name"]);
    return ( 
        <>
        <div className='container'>
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label for="name" className="form-label">name</label>
    <input type="text" value={name} onChange={(e)=>setName(e.currentTarget.value)} className="form-control" id="name" aria-describedby="emailHelp"/>
    {errors.errors&&errors.errors["name"]&& (<div className="alert alert-danger">{errors.errors["name"]}</div>) }
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="price" className="form-label">price</label>
    <input type="text" value={price} onChange={(e)=>setPrice(e.currentTarget.value)} className="form-control" id="price"/>
    {errors.errors&&errors.errors["price"]&& (<div className="alert alert-danger">{errors.errors["price"]}</div>) }
  </div>
  <button type="submit"  className="btn btn-primary">Submit</button>
</form>
{posted&&(<div className="alert alert-success mt-2">Item Added </div>)}
        </div>
        </>
     );
}
 
export default AddItem;