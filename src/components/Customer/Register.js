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
    return (
   

            <div className="container mt-4">
              <h3 className="mb-4">Register</h3>
              <form>
                <div className="mb-3">
                  <label for="fistname" className="form-label">First Name</label>
                  <input type="text" name="fistname" className="form-control" id="fistname" aria-describedby="emailHelp"/>
                </div>

                <div className="mb-3">
                  <label for="lastname" className="form-label">Last Name</label>
                  <input type="text" name="lastname" className="form-control" id="lastname" aria-describedby="emailHelp"/>
                </div>


                <div className="mb-3">
                  <label for="username" className="form-label">Username</label>
                  <input type="text" name="username" className="form-control" id="username" aria-describedby="emailHelp"/>
                </div>

                <div className="mb-3">
                  <label for="email" className="form-label">Email</label>
                  <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                  <label for="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password"/>
                </div>
               
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
  
    )
}

export default Register;