import axios from "axios";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";


function SongList() {

  const [songList, setSongList] = useState([]);


  const fetchSongs = () => {
    axios.get("http://localhost:5005/songs/songs-list")
    .then((response) => {
        setSongList(response.data);
        console.log('songList response.data-->', response.data)
    })
    .catch((error) => {
        console.log(error);
    })
  }

    useEffect(() => {
        fetchSongs();
    }, [])

    const listOfSongs = songList.map((eachSong) => {
        return (
            <div key={eachSong._id} >
                <p>{eachSong.songTitle} - {eachSong.songFile} </p>
            </div>
        )
    })
    
    return (
        
        <div className="details-box-container">
            <h2>Your Song List</h2>
            {listOfSongs}
        </div>
    )
}

export default SongList