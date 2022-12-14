import './App.css';
import { Routes, Route } from "react-router-dom"; 
import LandingPage from './pages/LandingPage';
import SignUpOrLogin from "./pages/SignUpOrLogin";
import ArtistAcctHome from './pages/ArtistAcctHome';
import {useState, useEffect} from 'react';
import axios from 'axios';


function App() {

    return (
        <div>
                        
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/auth/login" element={<SignUpOrLogin />} />
                <Route path="/auth/signup" element={<SignUpOrLogin />} />
                <Route path="" element={<ArtistAcctHome />} />
            </Routes>

        </div>
    );
}

export default App;
