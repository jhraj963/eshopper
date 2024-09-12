import React from 'react'
import AuthLayout from '../../layouts/AuthLayout';
import { Link } from 'react-router-dom';

function Login() {
    return (
        
		<AuthLayout>

			<div className="col-sm-12 padding-right">
				<section id="form">
					<div className="container">
						<div className="row">
							<div className="col-sm-4 col-sm-offset-1">
								<div className="login-form">
									<img src="./assets/images/home/logo.png" height="48" className='mb-4' />
									<h2>Login to your account</h2>
									<form action="#">
										<input type="text" placeholder="Name" />
										<input type="email" placeholder="Email Address" />
										<span>
											<input type="checkbox" className="checkbox" />
											Keep me signed in
										</span>
										<br/>
										<Link to="/Register">Don't have an account? Click Here to Reigster</Link>
										<button type="submit" className="btn btn-default">Login</button>
									</form>
									
								</div>
							</div>
							<div className="col-sm-1">
								<h2 className="or">OR</h2>
							</div>
							<div className="col-sm-4">
								<div className="signup-form">
									<h2>New User Signup!</h2>
									<form action="#">
										<input type="text" placeholder="Name" />
										<input type="email" placeholder="Email Address" />
										<input type="password" placeholder="Password" />
										<button type="submit" className="btn btn-default">Signup</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>

		</AuthLayout>
		

        
    )
}

export default Login