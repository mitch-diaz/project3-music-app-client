import axios from 'axios';
import { useState } from 'react';


function VideoCreate() {
    const [theUser, setTheUser] = useState();
    const [videoFormState, setVideoFormState] = useState({
      videoTitle: "",
      videoUrl: "",
    });

    // const [videoFormState, setVideoFormState] = useState(user);

    const updateInput = (e, inputToUpdate) => {
        setVideoFormState({...videoFormState, [inputToUpdate]: e.target.value})
    }

    const submitVideoForm = () => {
        // const videoFormData = new FormData();
        // videoFormData.append("videoTitle", videoFormState.videoTitle)
        // videoFormData.append("videoUrl", videoFormState.videoUrl)
        axios.post("http://localhost:5005/videos/add-video/", {
            videoTitle: videoFormState.videoTitle,
            videoUrl: videoFormState.videoUrl,
        })
        .then((response)=>{
            setVideoFormState(response.data);
            // getUserInfo()
            console.log('THE RESPONSE-->', response)
        }).catch((err)=>{
            console.log(err);
        })
    }
    console.log(videoFormState)

    return(
        <div className="update-form-box-container" >

            <div className="update-form-box">
            <h2>Add Video Information</h2>

                <div >
                    <p>Your Video Title</p>
                    <input type="text" value={videoFormState.videoTitle} onChange={(e)=>{updateInput(e,"videoTitle")}} />
                </div>

                <div>
                    <p>Your Video Link</p>
                    <input className="upload-input" type="text" value={videoFormState.videoUrl} onChange={(e)=>{updateInput(e,"videoUrl")}} />
                </div>

                <button onClick={submitVideoForm} >Submit</button>

            </div>

        </div>
    )
}

export default VideoCreate