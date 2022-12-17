import './App.css';
import { Routes, Route } from "react-router-dom"; 
import LandingPage from './pages/LandingPage';
import SignUpOrLogin from "./pages/SignUpOrLogin";
import ArtistAcctHome from './pages/ArtistAcctHome';
import SongList from './components/song-related/SongList';
import VideoList from './components/video-related/VideoList';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  const [theUser, setTheUser] = useState(null);

  const getUserInfo = () =>{
    axios.get("http://localhost:5005/auth/serializeuser", {withCredentials: true})
    .then((response)=>{
      setTheUser(response.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    getUserInfo();
  }, [])


    console.log(theUser);
    return (
        <div>
                        
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/auth/login" element={<SignUpOrLogin action="login" getUserInfo={getUserInfo} />} />
                <Route path="/auth/signup" element={<SignUpOrLogin action="signup" getUserInfo={getUserInfo} />} />
                <Route path="/auth/user-profile" element={<ArtistAcctHome user={theUser} />} />
                {/* <Route path="/songs-list" element={<SongList/>} />
                <Route path="/video-list" element={<VideoList/>} /> */}
            </Routes>

        </div>
    );
}

export default App;
