import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function Login({ getUserInfo}) {

    const navigate = useNavigate();

    const [loginForm, setLoginForm] = useState({
      email: "",
      password: "",
    });

    const loginInput = (e, inputToUpdate) => {
      setLoginForm({ ...loginForm, [inputToUpdate]: e.target.value });
    };

    const submitSignupForm = () => {
		axios.post("http://localhost:5005/auth/login",
			{
				email: loginForm.email,
				password: loginForm.password,
			},
			{ withCredentials: true }
		)
		.then((response) => {
		    getUserInfo();
            navigate("/auth/user-profile");
		})
		.catch((err) => {
			console.log(err);
		});
	};

    return (
        <div className="signUpOrLogin-form">

            <div >
                <h1>Login</h1>
                <div>
                    <h4>Email</h4>
                    <input
                      type="text"
                      value={loginForm.email}
                      onChange={(e) => {loginInput(e, "email");}} />
                </div>

                <div>
                    <h4>Password</h4>
                    <input
                      type="password"
                      value={loginForm.password}
                      onChange={(e) => {loginInput(e, "password");}} />
                </div>

                <br/>

                <button onClick={submitSignupForm}>Submit</button>

            </div>
            
        </div>
    )
}

export default Login