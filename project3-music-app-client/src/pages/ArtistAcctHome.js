import ArtistInfoDetails from "../components/user-related/ArtistInfoDetails";
import ArtistInfoUpdate from "../components/user-related/ArtistInfoUpdate";
import ArtistSongTitleForm from "../components/song-related/SongCreate";
import ArtistSongUploadForm from "../components/song-related/SongUpload";
import VideoCreate from "../components/video-related/VideoCreate";


function ArtistAcctHome() {

    return (
        <div>
            <ArtistInfoDetails/>
            <ArtistInfoUpdate/>
        </div>
    )
}

export default ArtistAcctHome