import ArtistInfoForm from "../components/ArtistInfoForm";
import ArtistSongTitleForm from "../components/ArtistSongTitleForm";
import ArtistSongUploadForm from "../components/ArtistSongUploadForm";
import ArtistVideoForm from "../components/ArtistVideoForm";
import ArtistPictureUploadForm from "../components/ArtistPictureUploadForm";


function ArtistAcctHome() {

    return (
        <div>
            <ArtistInfoForm/>
            <ArtistPictureUploadForm/>
            <ArtistSongTitleForm/>
            <ArtistSongUploadForm/>
            <ArtistVideoForm/>
        </div>
    )
}

export default ArtistAcctHome