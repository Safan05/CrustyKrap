import React, { useEffect, useState } from 'react';
import Joi from 'joi-browser';
import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;

const Login = (props) => {
  const [data, setData] = useState({ Email: '', Password: '' });
  const [errors, setErrors] = useState({});
  const [Logged, setLogged] = useState(() => JSON.parse(localStorage.getItem('logged')) || false);
  const [Invalid, setInvalid] = useState(() => JSON.parse(localStorage.getItem('invalid')) || false);
  const [err, setErr] = useState(localStorage.getItem('error') || '');

  const schema = {
    Email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    Password: Joi.string().min(4).required(),
  };

  useEffect(() => {
    localStorage.setItem('logged', JSON.stringify(Logged));
    localStorage.setItem('invalid', JSON.stringify(Invalid));
    localStorage.setItem('error', err);
  }, [Logged, Invalid, err]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (validationErrors) return;

    try {
      await axios.post(`${apiUrl}/user/login`, {
        email: data.Email,
        password: data.Password,
      }, {
        withCredentials: true,
      });

      props.fetch();
      setInvalid(false);
      setLogged(true);
      setErr(''); 
    } catch (error) {
      const errorMessage = error.response?.data || "An unexpected error occurred.";
      setErr(errorMessage);
      setInvalid(true);
      setLogged(false);
      props.fetch();    
    }
  };

  const validate = () => {
    const validationErrors = {};
    const options = { abortEarly: false };
    const { error } = Joi.validate(data, schema, options);

    if (!error) {
      setErrors({});
      return null;
    }

    error.details.forEach((detail) => {
      validationErrors[detail.path[0]] = detail.message;
    });

    setErrors(validationErrors);
    return validationErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Email">Email address</label>
          <input
            name="Email"
            value={data.Email}
            type="email"
            onChange={handleChange}
            className="form-control"
            id="Email"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
          {errors.Email && <div className="alert alert-danger">{errors.Email}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="Password">Password</label>
          <input
            name="Password"
            value={data.Password}
            type="password"
            onChange={handleChange}
            className="form-control"
            id="Password"
          />
          {errors.Password && <div className="alert alert-danger">{errors.Password}</div>}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {Logged && <div className='alert alert-success'>Logged in Successfully</div>}
      {Invalid && err && <div className='alert alert-warning'>{err}</div>}
    </div>
  );
};

export default Login;
