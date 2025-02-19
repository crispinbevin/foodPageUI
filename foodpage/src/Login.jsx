import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import {toast, ToastContainer} from 'react-toastify'
import Navbar from './Navbar'



function Login() {
    const [pass, setPass] = useState(" ")
    const [email, setEmail] = useState(" ")
    
    const onSubmit = async (e) =>{
        e.preventDefault()
        console.log("Submitted")
    
        await axios.post('https://foodpage.co.uk/development/v2/shop/user/login',
            {
                shopID: 1,
                user: email,
                password: pass
            }
        ).then(
            (response) => {
                console.log(response)
                if(response.status==200 || response.status==201){
                    toast.success("Logged In")
                    localStorage.setItem("loginToken", response.data.data.token)
                }else{
                    console.log("Error occured")
                    toast.error(response.error.errorMessage)
                }
            }
        )
    
    }

    return (
        <div className="container-fluid register-section">
        <ToastContainer />
        <Navbar />
            <div className="container login-section">
                <div className="row register-wrapper">
                <form action="" className="col-4 register-form" onSubmit={onSubmit}>
                            <div className="row gy-1 m-3">
                                <div className="col-12">
                                    <h1>Login</h1>
                                </div>
                            </div>
                            <div className="row gy-1 m-3">
                                <div className="col-12">
                                    <input type="email" className='form-control' placeholder='Email'
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="row gy-1 m-3">
                                <div className="col-12">
                                    <input type="password" className='form-control' placeholder='Password'
                                    onChange={(e) => setPass(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="row gy-2 m-3">
                                <button className='btn' type='submit'>Login</button>
                            </div>		
                            <div className="row gy-2 m-3">
                                <div className="col-12">
                                    <Link to='/'>No Account? Register here.</Link>
                                </div>
                            </div>			
                        </form>
                </div>
            </div>
    </div>
  )
}

export default Login