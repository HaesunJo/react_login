import React, { useState } from 'react';

function Login() {

	// user id and password
	const user = {
		username: "haillie@qwerty.com",
		password: "1234"
	}

	const [userdata, setUser] = useState({ username: "", password: "" });
	const [err, setErrMsg] = useState('');

	// vaildation
	const LoginSuccess = userdata => {
		// console.log(userdata);
		
		// case 1: username and password matched
		if ((userdata.username === user.username) && (userdata.password === user.password)){
			console.log("User logged in :D");
		}

		// case 2: username is not matched
		if((userdata.username !== user.username) || (userdata.username === undefined)) {
			setErrMsg("Incorrect username")
		}

		// case 3: password is not matched
		else {
			// console.log("User data not matched!!")
			setErrMsg("Password is incorrect. Try again.")
		}
	}

	const loginHandler = e => {
		e.preventDefault();
		LoginSuccess(userdata);
	}

	return (

		// when the user log in, display landing page
		<div className="ff-login-page">
			<div className="ff-login">
				{(userdata.username === user.username && userdata.password === user.password) ? (
					<div className="ff-landing-page">
						<h1>Hello, {user.username}</h1>
					</div>
				) : (
					<div className="ff-loginform" >
						<form onSubmit={ loginHandler }>
							<h2>Login <span>EN</span><span>FR</span></h2>
								{(err !== "") ? (<div className="ff-error">{ err }</div>) : ""}
							<div className="ff-field">
								{/* <label htmlFor="username">Id</label> */}
								<input type="text" name="username" id="username" placeholder="email@email.com" onChange={ e => setUser({...userdata, username: e.target.value })} value={userdata.username} />
							</div>
							<div className="ff-field">
								{/* <label htmlFor="password">Password</label> */}
								<input type="password" name="password" id="password" placeholder="password" onChange={ e => setUser({...userdata, password: e.target.value })} value={userdata.password} />
							</div>
							<input type="submit" id="btnLogin" value="Login"/>
							</form>

							<div className="ff-social-gorup">
								<h3>Or you can also login with</h3>
								<div className="ff-socialLogin">
									<div className="ff-social social_azrue">
										<div id="text">Azrue</div>
									</div>
									<div className="ff-social social_bamboo">
										<div id="text">Bamboo</div>
									</div>
									<div className="ff-social social_adp">
										<div id="text">ADP</div>
									</div>
									<div className="ff-social social_okta">
										<div id="text">Okta</div>
									</div>
								</div>
							</div>

							<div className="notice-pw">
								<span id="notice-title">Don't like your password?</span>
								
								<p>We can send you a special link to your email that will log you in instantly and securely! <a href="#"id="click-here">Click here</a></p>								
							</div>
						</div>	
				)}
				
			</div>
		</div>

	)

}


export default Login
