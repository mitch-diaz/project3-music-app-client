import axios from "axios";
import { useState } from "react";


function ArtistInfoUpdate({user, getUserInfo}) {

    const [artistInfoState, setArtistInfoState] = useState(user);

    const updateArtistInput = (e, thingToUpdate) => {
        setArtistInfoState({ ...artistInfoState, [thingToUpdate]: e.target.value });
    };    
    const updateFile = (e) => {
        setArtistInfoState({ ...artistInfoState, imageFile: e.target.files[0]});
    };   
    
    const submitForm = () => {

        const userDataForm = new FormData();
        userDataForm.append("firstName", artistInfoState.firstName)
        userDataForm.append("lastName", artistInfoState.lastName)
        userDataForm.append("creatorTitle", artistInfoState.creatorTitle)
        userDataForm.append("creatorProfile", artistInfoState.creatorProfile)
        userDataForm.append("imageFile", artistInfoState.imageFile)
      axios.put("http://localhost:5005/auth/update/"+user._id, userDataForm)
        .then((response) => {
          getUserInfo();
        })
        .catch((err) => {
          console.log(err)
        })
    }
    console.log(artistInfoState);

    return (
        <div className="update-form-box-container">
            <div className="update-form-box">
                <h2>Update your Profile</h2>

                <div>
                    <p>First Name:</p>
                    <input value={artistInfoState.firstName} onChange={(e)=>{updateArtistInput(e, "firstName")}} />
                </div>
                
                <div>
                    <p>Last Name:</p>
                    <input value={artistInfoState.lastName} onChange={(e)=>{updateArtistInput(e, "lastName")}}/>
                </div>
                
                <div>
                    <p>Band name (or your name):</p>
                    <input value={artistInfoState.creatorTitle} onChange={(e)=>{updateArtistInput(e, "creatorTitle")}}/>
                </div>
                
                <div>
                    <p>About:</p>
                    <textarea value={artistInfoState.creatorProfile} onChange={(e)=>{updateArtistInput(e, "creatorProfile")}} />
                </div>

                <div className="upload-input">
                    <p>Upload Photo:</p>
                    <input type="file" onChange={(e)=>{updateFile(e)}} />
                </div>

                <div>
                    <button onClick={submitForm}>Submit</button>
                </div>

            </div>

        </div>
    )
}

export default ArtistInfoUpdate