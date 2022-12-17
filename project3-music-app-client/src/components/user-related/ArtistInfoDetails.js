import axios from 'axios';
// import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';



function ArtistInfoDetails({user}) {
    
    // const {userId} = useParams();
    const [artistDetails, setArtistDetails] = useState([]);

    const fetchArtistDetails = () => {
        axios.get("http://localhost:5005/auth/user-profile")
        .then((response) => {
            console.log(response);
            setArtistDetails(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
      fetchArtistDetails();
    }, [])

  return (
    <div className="details-box-container">
      <div>
        <h2>Artist Info Details</h2>
        <p>{artistDetails.firstName} {artistDetails.lastName}</p>
        <p>{artistDetails.creatorTitle}</p>
        <p>{artistDetails.creatorProfile}</p>
        <img src={artistDetails.imageUrl} alt="" />
      </div>
    </div>
  )
}

export default ArtistInfoDetails