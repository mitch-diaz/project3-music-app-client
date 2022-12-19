import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";



function Nav() {
  const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const logout = () => {
        axios.post("http://localhost:5005/auth/logout",{}, {withCredentials: true})
        .then((response)=>{
          console.log(response.data)
          if(response.data.message === "successfully logged out")setUser(null);
          navigate("/");
        })
        .catch((err)=>{
          console.log(err);
        })
      }

    return (
        <nav className="navbar">
             
            <div className="logout-btn">
                <button onClick={logout}>Logout</button>
                <h4>View Public Profile</h4>
            </div>
        </nav>
    )
}

export default Nav