import axios from "axios";
import { useState } from "react";


function SongUpload() {
    const [newSong, setNewSong] = useState("");

    const updateSongInput = (e, songToUpdate) => {
        setNewSong({ ...newSong, [songToUpdate]: e.target.value });
    }; 

    const updateFile = (e) => {
        setNewSong({ ...newSong, songFile: e.target.files[0]});
    };  
    

    const submitForm = () => {
        const songFormData = new FormData();
        songFormData.append("songTitle", newSong.songTitle)
        songFormData.append("songFile", newSong.songFile)
      axios.put("http://localhost:5005/songs/add-song", songFormData)
        .then((response) => {
            setNewSong("");
        })
        .catch((err) => {
          console.log(err)
        })
    }
    console.log(newSong);

    return (
        <div className="update-form-box-container">
            <div className="update-form-box">
                <h2>Add A Song</h2>

                <div>
                    <p>Song Title:</p>
                    <input value={newSong.songTitle} onChange={(e)=>{updateSongInput(e, "songTitle")}} />
                </div>

                <div className="upload-input">
                    <p>Upload Song File:</p>
                    <input type="file" onChange={(e)=>{updateFile(e)}} />
                </div>

                <div>
                    <button onClick={submitForm}>Submit</button>
                </div>

            </div>

        </div>
    )
}

export default SongUpload