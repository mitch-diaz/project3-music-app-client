import axios from 'axios';
import {useState, useEffect} from 'react';


function ArtistInfoDetails() {

    const [artistDetails, setArtistDetails] = useState([]);

    const getArtistDetails = () => {
        axios.get("http://localhost:5005/auth/user-profile")
        .then((response) => {
            console.log(response);
            setArtistDetails(response.data[0]);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
      getArtistDetails();
    }, []);

  return (
    <div className="details-box-container">
      <div>
        <h2>Artist Info Details</h2>
        
        <p> <span>Artist Name:</span> {artistDetails.firstName} {artistDetails.lastName}</p>
        
        <p> <span>Band Name:</span> {artistDetails.creatorTitle}</p>
        
        <p> <span>About:</span> {artistDetails.creatorProfile}</p>
        
        <span>Picture</span>
        <div className="artistPic">
          <img src={artistDetails.imageFile} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ArtistInfoDetails