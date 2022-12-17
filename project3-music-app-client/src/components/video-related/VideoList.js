import axios from 'axios';
import {useState, useEffect} from 'react';
// import { Link } from 'react-router-dom';


function VideoList() {

  const [videos, setVideos] = useState([]);

  const fetchVideos = ()=>{
      axios.get("http://localhost:5005/videos/video-list")
      .then((response)=>{
          console.log(response);
          setVideos(response.data);
      })
      .catch((err)=>{
          console.log(err);
      })
  }

  useEffect(() => {
      fetchVideos();
  },  [])

  const listOfVideos = videos.map((eachVideo)=>{
    return(
        <div key={eachVideo._id} >
            <p>{eachVideo.videoTitle} - {eachVideo.videoUrl}</p>
        </div>
    )
  })

    return (
        <div className="details-box-container">
            <h2>Your Video List</h2>
            {listOfVideos}
        </div>
    )
}

export default VideoList