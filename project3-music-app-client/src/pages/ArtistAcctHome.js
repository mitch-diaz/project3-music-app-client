import ArtistInfoDetails from "../components/user-related/ArtistInfoDetails";
import ArtistInfoUpdate from "../components/user-related/ArtistInfoUpdate";
import ArtistSongTitleForm from "../components/song-related/SongCreate";
import ArtistSongUploadForm from "../components/song-related/SongUpload";
import VideoCreate from "../components/video-related/VideoCreate";
import Nav from "../components/Nav";


function ArtistAcctHome({user}) {

    return (
        <div className="Artist-acct-home">
            <div>
                {user && <Nav user={user}/>}
                
                
                <div>
                    {user && <ArtistInfoDetails user={user}/>}
                </div>

                <div>
                    {user && <ArtistInfoUpdate user={user}/>}
                </div>

            </div>
        </div>
    )
}

export default ArtistAcctHome