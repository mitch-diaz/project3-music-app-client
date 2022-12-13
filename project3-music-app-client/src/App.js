import './App.css';
import { Routes, Route } from "react-router-dom"; 
import LandingPage from './pages/LandingPage';
import SignUpForm from "./components/SignUpForm"
import { UserProvider } from "./contexts/UserContext";


function App() {

    return (
        <div className="App">
            <UserProvider>

                <LandingPage/>

                <Routes>
                    <Route path="/auth/login" element={<SignUpForm />} />
                    <Route path="/auth/signup" element={<SignUpForm />} />
                </Routes>

            </UserProvider>

        </div>
    );
}

export default App;
