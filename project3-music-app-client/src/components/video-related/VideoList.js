import axios from 'axios';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


function VideoList() {

  const [videos, setVideos] = useState([]);

  const fetchVideos = ()=>{
      axios.get("http://localhost:5005/video-list")
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
        <div key={eachVideo._id} className="video-list">
            <Link to={"/videos/"+eachVideo._id}>
                <p>{eachVideo.videoTitle}</p>
            </Link>
        </div>
    )
  })

    return (
        <div>
            {listOfVideos}
        </div>
    )
}

export default VideoList