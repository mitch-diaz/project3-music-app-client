import axios from "axios";
import { useState } from "react";



function ArtistInfoForm({user, getUserInfo}) {

    const [artistInfoState, setArtistInfoState] = useState(user);

    const updateArtistInput = (e, thingToUpdate) => {
        setArtistInfoState({ ...artistInfoState, [thingToUpdate]: e.target.value });
    };    
    
    const submitForm = () => {
      axios.put("http://localhost:5005/auth/update/"+user._id, {
          firstName: artistInfoState.firstName,
          lastName: artistInfoState.lastName,
          creatorTitle: artistInfoState.creatorTitle,
          creatorProfile: artistInfoState.creatorProfile,
      })
        .then((response) => {
          getUserInfo();
        })
        .catch((err) => {
          console.log(err)
        })
    }
    

    return (
        <div>
            <div>

                <div>
                    <p>First Name:</p>
                    <input value={artistInfoState.firstName} onChange={(e)=>{updateArtistInput(e, "firstName")}} />
                </div>
                
                <div>
                    <p>Last Name:</p>
                    <input value={artistInfoState.lastName} onChange={(e)=>{updateArtistInput(e, "lastName")}}/>
                </div>
                
                <div>
                    <p>Band name or your name:</p>
                    <input value={artistInfoState.creatorTitle} onChange={(e)=>{updateArtistInput(e, "creatorTitle")}}/>
                </div>
                
                <div>
                    <p>About:</p>
                    <input value={artistInfoState.creatorProfile} onChange={(e)=>{updateArtistInput(e, "creatorProfile")}} />
                </div>

            </div>

            <button onClick={submitForm}>Submit</button>
        </div>
    )
}

export default ArtistInfoForm