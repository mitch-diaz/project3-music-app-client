import axios from "axios";
import { useState } from "react";


function SignUpOrLogin({action, getUserInfo}) {

    const [formState, setFormState] = useState({
      email: "",
      password: "",
    });


    const updateInput = (e, thingToUpdate) => {
      setFormState({ ...formState, [thingToUpdate]: e.target.value });
    };

    const submitSignupForm = () => {
      let endpoint;
      if (action === "signup") endpoint = "signup";
      if (action === "login") endpoint = "login";

		axios.post("http://localhost:5005/auth/" + endpoint,
				{
					email: formState.email,
					password: formState.password,
				},
				{ withCredentials: true }
			)
			.then((response) => {
				getUserInfo();
			})
			.catch((err) => {
				console.log(err);
			});
	  };

    return (
        <div className={action}>
          {action === "signup" ? <h1>Signup</h1> : <h1>Login</h1>}
            
            <div>
                <h4>Email</h4>
                <input
                    type="text"
                    value={formState.email}
                    onChange={(e) => {updateInput(e, "email");}} />
            </div>

            <div>
                <h4>Password</h4>
                <input
                    type="text"
                    value={formState.password}
                    onChange={(e) => {updateInput(e, "password");}} />
            </div>

            <div>
                <button onClick={submitSignupForm}>Submit</button>
            </div>

        </div>
    );
}

export default SignUpOrLogin