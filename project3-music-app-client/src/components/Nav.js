import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar">
            <ul>
                <Link to="/auth/user-profile">Account Home</Link>
                <Link to="/songs-list">Your Songs</Link>
                <Link to="/video-list">Your Videos</Link>
            </ul>
        </nav>
    )
}

export default Nav