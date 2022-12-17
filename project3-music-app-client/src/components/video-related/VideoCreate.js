import axios from 'axios';
import {useState} from 'react';


function ArtistVideoForm() {
    const [formState, setFormState] = useState({
      videoTitle: "",
      videoUrl: "",
    });

    const updateInput = (e, thingToUpdate) => {
        setFormState({...formState, [thingToUpdate]: e.target.value})
    }

    const createVideoInfo = () => {
        console.log(formState);
        axios.post("http://localhost:5005/videos/add-video",{
          videoTitle: formState.videoTitle,
          videoUrl: formState.videoUrl,
        })
        .then((response)=>{
            console.log(response);
        }).catch((err)=>{
            console.log(err);
        })
    }

    return(
        <div className="update-form-box-container">

            <div className="update-form-box">
            <h2>Add Video Information</h2>

                <div >
                    <p>Your Video Title</p>
                    <input type="text" value={formState.videoTitle} onChange={(e)=>{updateInput(e,"videoTitle")}} />
                </div>

                <div>
                    <p>Your Video Link</p>
                    <input className="upload-input" type="text" value={formState.videoUrl} onChange={(e)=>{updateInput(e,"videoUrl")}} />
                </div>

                <button onClick={createVideoInfo} >Submit</button>

            </div>

        </div>
    )
}

export default ArtistVideoForm