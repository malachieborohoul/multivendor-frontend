import { useState } from "react";
import axios from 'axios'

function Logout() {
    localStorage.removeItem('customer_login')
    localStorage.removeItem('customer_username')


  const checkCustomer= 
  localStorage.getItem('customer_login')

  if (checkCustomer){
    window.location.href='/customer/login'
  }
}

export default Logout