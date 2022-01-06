import React from 'react';
import './App.css';
import {FormikConsumer, useFormik} from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate: values => {
      let errors = {};
      if(!values.email) {
        errors.email = 'Field required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Username should be an email';
      }
      if (!values.password) errors.password = 'Field required';
      return errors;
    },
    onSubmit: values => {
      alert("Login successful")
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input name="email" id="emailField" type="text" onChange={formik.handleChange} value={formik.values.email}/>
        <br/>
        {formik.errors.email ? <div id="emailError" style={{color: 'red', fontSize: '0.5em'}}>*{formik.errors.email}</div>:null}
        <br/>
        <div>Password</div>
        <input name="password" id="pswField" type="text" onChange={formik.handleChange} value={formik.values.password}/>
        <br/>
        {formik.errors.password ? <div id="pswError" style={{color: 'red', fontSize: '0.5em'}}>*{formik.errors.password}</div>:null}
        <br/>
        <button id="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
