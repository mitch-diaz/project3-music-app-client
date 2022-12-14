import { Link } from "react-router-dom"; 
import axios from "axios";
import LoginOrSignupBtns from "../components/LoginOrSignupBtns";

function LandingPage() {

    axios.get("http://localhost:5005")
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    })

  return (
    <div className="App">
            <div className="App-header">

                <h1>Music App</h1>
                <p>Build your playlist and share your music creations with the world.</p>
                
                <LoginOrSignupBtns/>

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