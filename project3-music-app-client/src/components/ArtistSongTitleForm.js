import "../App.css";
import {useState} from "react";
import axios from "axios";




function ArtistSongTitleForm() {

  const [formState, setFormState] = useState({
        songTitle: "", 
    });

    const updateInput = (e, thingToUpdate) => {
        setFormState({...formState, [thingToUpdate]: e.target.value})
    }

    const createSongTitle = () => {
        console.log(formState);
        axios.post("http://localhost:5005/songs/add-song",{
            songTitle: formState.songTitle,
        })
        .then((response)=>{
            console.log(response);
        }).catch((err)=>{
            console.log(err);
        })
    }

    return(
        <div>
            <h3>Your Song Title</h3>
            <div>
                <input type="text" value={formState.songTitle} onChange={(e)=>{updateInput(e,"songTitle")}} />
            </div>

            <button onClick={createSongTitle} >Submit</button>
        </div>
    )
}

export default ArtistSongTitleForm