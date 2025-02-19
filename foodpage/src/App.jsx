import React, { Fragment } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function App() {

	const [fname, setFname] = useState("")
	const [lname, setLname] = useState("")
	const [postcode, setPostcode] = useState("")
	const [mobile, setMobile] = useState("")
	const [email, setEmail] = useState("")
	const[pass,setPass] = useState("")
	const[address1, setAddress1] = useState("")
	const[address2, setAddress2] = useState("")
	const[town, setTown] = useState("")
	const[county, setCounty] = useState("")
	const[landmark, setLandmark] = useState("")

	  
  const onSubmit = async (e) => {
    e.preventDefault()
    console.log("Form Submitted",email)

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const response = await axios.post('https://foodpage.co.uk/development/v2/shop/user/registration',
      {
        "shopID": 1,
        "userFirstName": fname,
        "userLastName": lname,
        "userPostCode": postcode,
        "userMobile": mobile,
        "userEmail": email,
        "userPassword": pass,
        "userAddress": {
          "line1": address1,
          "line2": address2,
          "town": town,
          "postalcode": postcode,
          "county": county,
          "landmark": landmark
        }
      }
    


    ).then(
      response => {
        console.log(response)
        if(response.status===200 || response.status===201){
          console.log("User Created")
        }
      }
    ).catch(
      console.log("Error occured")
    )
  }

	return (
		<Fragment>
		<Navbar />
		<div className="container-fluid register-section">
			<div className="container">
				<div className="row register-wrapper">
					<div className="col register-content">
						<h1>All In One Solution For Restaurants In UK</h1>
					</div>						
					<form action="" className="col-4 register-form" onSubmit={onSubmit}>
						<div className="row gy-1 m-3">
							<div className="col-12">
								<h1>Register</h1>
							</div>
						</div>
						<div className="row gy-1 m-3">
							<div className="col-12">
								<input type="email" className='form-control' placeholder='Enter your email'
								onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
						</div>
						<div className="row gy-2 m-3">
							<div className="col-lg-6">
								<input type="text" className='form-control' placeholder='First Name'
								onChange={(e) => setFname(e.target.value)}
								/>
							</div>
							<div className="col-6">
								<input type="text" className='form-control' placeholder='Last Name'
								onChange={(e) => setLname(e.target.value)}
								/>
							</div>
						</div>
							<div className="row gy-2 m-3">
								<div className="col-12">
								<input type="password" className='form-control' placeholder='Set Password'
								onChange={(e) => setPass(e.target.value)}
								/>
								</div>
						</div>
						<div className="row gy-2 m-3">
							<div className="col-6">
								<input type="" className='form-control' placeholder='Mobile Number'
								onChange={(e) => setMobile(e.target.value)}
								/>
							</div>
							<div className="col-6">
								<input type="text" className='form-control' placeholder='Postcode'
								onChange={(e) => setPostcode(e.target.value)}
								/>
							</div>
						</div>
						<div className="row gy-2 m-3">
							<div className="col-6">
							<input type="text" className='form-control' placeholder='Address Line 1'
							onChange={(e) => setAddress1(e.target.value)}
							/>
							</div>
							<div className="col-6">
							<input type="text" className='form-control' placeholder='Address Line 2'
							onChange={(e) => setAddress2(e.target.value)}
							/>
							</div>
						</div>
						<div className="row gy-2 m-3">
							<div className="col-4">
								<input type="text" className='form-control' placeholder='Town'
								onChange={(e) => setTown(e.target.value)}
								/>
							</div>
							<div className="col-4">
								<input type="text" className='form-control' placeholder='County'
								onChange={(e) => setCounty(e.target.value)}/>
							</div>
							<div className="col-4">
								<input type="text" className='form-control' placeholder='Landmark'
								onChange={(e) => setLandmark(e.target.value)}
								/>
							</div>
						</div>
						<div className="row gy-2 m-3">
							<button className='btn' type='submit'>Create Account</button>
						</div>
						<div className="row gy-2 m-3">
							<div className="col-12">
								<Link to='/login'>Have an account? Login here.</Link>
							</div>
						</div>					
					</form>
				</div>
			</div>
		</div>
	</Fragment>
	)
}

export default App