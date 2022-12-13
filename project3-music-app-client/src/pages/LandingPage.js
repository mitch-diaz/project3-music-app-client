// import { Link } from "react-router-dom"; 
// import axios from "axios";


function LandingPage() {

    // axios.get("http://localhost:5005")
    // .then()
    // .catch()

  return (
    <div>
        <div className="App-header">

                <h1>Music App</h1>
                <p>Build your playlist and share your music creations with the world.</p>

                <div className="App-btns-container">

                    <button className="App-btn1"> Login
                        {/* <Link to="/auth/login">Login</Link>  */}
                    </button>
                    
                    <button className="App-btn2"> Creator Sign up
                        {/* <Link to="/auth/signup">Creator Sign up</Link>  */}
                    </button>

                </div>

            </div>

            <div className="home-photo">
                <div className="photo-credit">
                    <p>Photo by Matthew Kalapuch on Unsplash</p>
                </div>
            </div>
    </div>
  )
}

export default LandingPage