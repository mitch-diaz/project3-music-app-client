import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function SignUp({ getUserInfo}) {
    
    const navigate = useNavigate();

    const [signupForm, setSignupForm] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });

    const signupInput = (e, inputToUpdate) => {
      setSignupForm({ ...signupForm, [inputToUpdate]: e.target.value });
    };

    const submitSignupForm = () => {
		axios.post("http://localhost:5005/auth/signup",
				{
          firstName: signupForm.firstName,
          lastName: signupForm.lastName,
					email: signupForm.email,
					password: signupForm.password,
				},
				{ withCredentials: true }
			)
			.then((response) => {
				getUserInfo();
        navigate("/auth/login");
			})
			.catch((err) => {
				console.log(err);
			});
	  };

    return (
        <div className="signUpOrLogin-form">

            <div >
                <h1>Signup</h1>
                <div>
                    <h4>First Name</h4>
                    <input
                      type="text"
                      value={signupForm.firstName}
                      onChange={(e) => {signupInput(e, "firstName");}} />
                </div>

                <div>
                    <h4>Last Name</h4>
                    <input
                      type="text"
                      value={signupForm.lastName}
                      onChange={(e) => {signupInput(e, "lastName");}} />
                </div>

                <div>
                    <h4>Email</h4>
                    <input
                      type="text"
                      value={signupForm.email}
                      onChange={(e) => {signupInput(e, "email");}} />
                </div>

                <div>
                    <h4>Password</h4>
                    <input
                      type="password"
                      value={signupForm.password}
                      onChange={(e) => {signupInput(e, "password");}} />
                </div>

                <br/>

                <button onClick={submitSignupForm}>Submit</button>

            </div>
            
        </div>
    );
}

export default SignUp