import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import { useState } from "react";
import axios from 'axios'

// LoginLoginLoginLoginLoginLog
function Login(props) {
  const baseUrl = 'http://127.0.0.1:8000/api';


  const[loginFormData, setLoginFormData]=useState({
    'username':'',
    'password':''
  }) 
  const[formError, setFormError]=useState(false)
  const[errorMsg, setErrorMsg]=useState('')

 const inputHandler=(event)=>{
    setLoginFormData({
      ...loginFormData,[event.target.name]:event.target.value
    })
  }

  const submitHandler=(event)=>{
    const formData = new FormData()
    formData.append('username', loginFormData.username)
    formData.append('password', loginFormData.password)
    // console.log(formData)

    axios.post(baseUrl+`/customers/login/`, formData)
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

  const buttonEnable=(loginFormData.username != '') && (loginFormData.password != '')

  const checkCustomer= 
  localStorage.getItem('customer_login')

  if (checkCustomer){
    window.location.href='/customer/dashboard'
  }
  // console.log(loginFormData)
    return (
   

            <div className="container mt-4">
               
              <h3 className="mb-4">Login</h3>
              {formError && 
                <p className="text-danger">{errorMsg}</p>
                }
              <form>

                <div className="mb-3">
                  <label for="username"  className="form-label">Username</label>
                  <input type="text"  name="username" className="form-control" value={loginFormData.username} onChange={inputHandler} id="username" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                  <label for="password" className="form-label">Password</label>
                  <input type="password" className="form-control" name="password" id="password" value={loginFormData.password} onChange={inputHandler}/>
                </div>
               
                <button type="button" disabled={!buttonEnable} onClick={submitHandler} className="btn btn-primary">Submit</button>

               
              </form>
            </div>
  
    )
}

export default Login;