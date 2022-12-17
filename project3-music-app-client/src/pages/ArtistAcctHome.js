import ArtistInfoDetails from "../components/user-related/ArtistInfoDetails";
import ArtistInfoUpdate from "../components/user-related/ArtistInfoUpdate";
import SongUpload from "../components/song-related/SongUpload";
import SongList from "../components/song-related/SongList";
import VideoCreate from "../components/video-related/VideoCreate";
import VideoList from "../components/video-related/VideoList";
import Nav from "../components/Nav";


function ArtistAcctHome({user}) {

    return (
        <div className="Artist-acct-home">

            <div className="nav-container">
                <div>
                    {user && <Nav user={user}/>}
                </div>
            </div>
                
            <div className="User-section">
                <div>
                    {user && <ArtistInfoUpdate user={user}/>}
                </div>

                <div >
                    {user && <ArtistInfoDetails user={user}/>}
                </div>
            </div>

            <div className="Song-section">
                <div>
                    {user && <SongUpload user={user}/>}
                </div>

                <div>
                    {user && <SongList user={user}/>}
                </div>
            </div>

            <div className="Video-section">
                <div>
                    {user && <VideoCreate user={user}/>}
                </div>

                <div>
                    {user && <VideoList user={user}/>}
                </div>
            </div>

        </div>
    )
}

export default ArtistAcctHome