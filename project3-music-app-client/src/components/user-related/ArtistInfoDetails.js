import axios from 'axios';
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';



function ArtistInfoDetails({user}) {
    
    // const {id} = useParams();
    const [artistDetails, setArtistDetails] = useState([]);

    const fetchArtistDetails = () => {
        axios.get("http://localhost:5005/auth/user-profile/"+user._id)
        .then((response) => {
            console.log(response);
            setArtistDetails(response.data.artistDetails);
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
      <div className="details-box">
        <h2>Artist Info Details</h2>

      </div>
    </div>
  )
}

export default ArtistInfoDetails