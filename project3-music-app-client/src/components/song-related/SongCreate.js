import {useState} from "react";
import axios from "axios";




function SongCreate() {

    const [formState, setFormState] = useState({
        songTitle: "", 
        songUrl: "", 
    });

    const updateInput = (e, thingToUpdate) => {
        setFormState({...formState, [thingToUpdate]: e.target.value})
    }

    const createSongTitle = () => {
        console.log(formState);
        axios.post("http://localhost:5005/songs/add-song",{
            songTitle: formState.songTitle,
            songUrl: formState.songUrl,
        })
        .then((response)=>{
            console.log(response);
        }).catch((err)=>{
            console.log(err);
        })
    }

    return(
        <div>
            <div>
                <p>Your Song Title</p>
                <input type="text" value={formState.songTitle} onChange={(e)=>{updateInput(e,"songTitle")}} />
            </div>

            <div>
                <p>Upload Song File</p>
                <input type="text" value={formState.songUrl} onChange={(e)=>{updateInput(e,"songUrl")}} />
            </div>

            <button onClick={createSongTitle} >Submit</button>
        </div>
    )
}

export default SongCreate