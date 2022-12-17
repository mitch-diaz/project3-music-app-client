import axios from "axios";
import { useState } from "react";


function SongUpload() {
    const [newSong, setNewSong] = useState("");

    const updateSongInput = (e, thingToUpdate) => {
        setNewSong({ ...newSong, [thingToUpdate]: e.target.value });
    }; 

    const updateFile = (e) => {
        setNewSong({ ...newSong, imageFile: e.target.files[0]});
    };  
    

    const submitForm = () => {
        const songFormData = new FormData();
        songFormData.append("firstName", newSong.firstName)
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
                    <input value={newSong.firstName} onChange={(e)=>{updateSongInput(e, "firstName")}} />
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