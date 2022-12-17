import axios from 'axios';
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';



function SongDetails() {
    const {songId} = useParams();
    const [songDetails, setSongDetails] = useState([]);

    const fetchSongDetails = () => {
      axios.get("http://localhost:5005/songs/")
      .then((response) => {
          console.log(response);
          setSongDetails(response.data);
      })
      .catch((error) => {
          console.log(error);
      })
  }

  useEffect(() => {
    fetchSongDetails();
  }, [])
    
    return (
        <div>SongDetails</div>
    )
}

export default SongDetails