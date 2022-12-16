import {useState} from 'react';
import axios from 'axios';



function Nav() {

    const [user, setUser] = useState(null);

    const logout = () => {
        axios.post("http://localhost:5005/auth/logout",{}, {withCredentials: true})
        .then((response)=>{
          console.log(response.data)
          if(response.data.message === "successfully logged out")setUser(null);
        })
        .catch((err)=>{
          console.log(err);
        })
      }

    return (
        <nav className="navbar">
            {user && 
            <div>
                <button onClick={logout}>Logout</button>
            </div>}
        </nav>
    )
}

export default Nav