import { Link } from "react-router-dom"; 


function LoginOrSignupBtns() {
  return (
    <div>
        <div className="App-btns-container">

            <button className="App-btn1">
                <Link to="/auth/login">Login</Link> 
            </button>

            <button className="App-btn2">
                <Link to="/auth/signup">Creator Sign up</Link> 
            </button>

        </div>
    </div>
  )
}

export default LoginOrSignupBtns