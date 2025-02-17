import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

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
	const[postalcode, setPostalcode] = useState("")
	const[county, setCounty] = useState("")
	const[landmark, setLandmark] = useState("")

	const onSubmit = async(e) =>{

	}

	return (
		<div className="container-fluid register-section">
			<div className="container">
				<div className="row register-wrapper">
					<div className="col register-content">
					<h1>All In One Solution For Restaurants In UK</h1>
					</div>
						<form action="" onSubmit={onSubmit}>
							<div className="col-4 register-form">
								<div className="row gy-4 m-3">
									<div className="col-12">
										<input type="email" className='form-control' placeholder='Enter your email'
										onChange={(e) => setEmail(e.target.value)}
										/>
									</div>
								</div>
								<div className="row gy-2 m-3">
									<div className="col-6">
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
										onChange={(e) => setPostalcode(e.target.value)}
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
									<button className='btn btn-primary' type='submit'>Create Account</button>
								</div>
							</div>
						</form>
				</div>
			</div>
		</div>
	)
}

export default App