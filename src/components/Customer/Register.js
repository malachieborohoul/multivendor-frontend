import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import { useState } from "react";
import axios from 'axios'

function Register(props) {
  const baseUrl = 'http://127.0.0.1:8000/api';


  const[registerFormData, setRegisterFormData]=useState({
    'fistname':'',
    'lastname':'',
    'username':'',
    'email':'',
    'password':'',
  }) 
  const[formError, setFormError]=useState(false)
  const[errorMsg, setErrorMsg]=useState('')

  const inputHandler=(event)=>{
    setRegisterFormData({
      ...registerFormData,[event.target.name]:event.target.value
    })
  }

  const submitHandler=(event)=>{
    const formData = new FormData()
    formData.append('fistname', registerFormData.fistname)
    formData.append('lastname', registerFormData.lastname)
    formData.append('username', registerFormData.username)
    formData.append('email', registerFormData.email)
    formData.append('password', registerFormData.password)
    // console.log(formData)

    axios.post(baseUrl+`/customers/register/`, formData)
    .then(function (response) {
      if (response.data.bool===false){
        setFormError(true)
        setErrorMsg(response.data.msg)
      }else{
        console.log(response.data.user)
        localStorage.setItem('customer_login', true)
        localStorage.setItem('customer_username', response.data.user)
        setFormError(false)
        setErrorMsg('')
      }
          
    })
    .catch(function (error) {
      console.log(error);
    });
  }
    return (
   

            <div className="container mt-4">
              <h3 className="mb-4">Register</h3>
              <form>
                <div className="mb-3">
                  <label for="fistname" className="form-label">First Name</label>
                  <input type="text" name="fistname" className="form-control" id="fistname" onChange={inputHandler} value={registerFormData.fistname} aria-describedby="emailHelp"/>
                </div>

                <div className="mb-3">
                  <label for="lastname" className="form-label">Last Name</label>
                  <input type="text" name="lastname" className="form-control" id="lastname" onChange={inputHandler} value={registerFormData.lastname} aria-describedby="emailHelp"/>
                </div>


                <div className="mb-3">
                  <label for="username" className="form-label">Username</label>
                  <input type="text" name="username" className="form-control" id="username" onChange={inputHandler} value={registerFormData.username} aria-describedby="emailHelp"/>
                </div>

                <div className="mb-3">
                  <label for="email" className="form-label">Email</label>
                  <input type="email" name="email" className="form-control" id="email" onChange={inputHandler} value={registerFormData.email} aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                  <label for="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" onChange={inputHandler} value={registerFormData.password}/>
                </div>
               
                <button type="submit" onClick={submitHandler} className="btn btn-primary">Submit</button>
              </form>
            </div>
  
    )
}

export default Register;