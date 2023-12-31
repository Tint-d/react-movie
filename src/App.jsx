import React, { useEffect, useState } from "react";
import Routes from "./routes/Routes";
import axios from "axios";
import ReactPlayer from "react-player";
// import { data } from 'autoprefixer';

const App = () => {
  const [videoKey, setVideoKey] = useState([]);

  const token = `
  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWFlMGVlZTY5ZDBkYTg0ZjUxMDY1ODdiZWZjZTJkMCIsInN1YiI6IjYzNjIzMTRhMGMzZWM4MDA5MGI1ZmQ0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SIBSF6zJS5w5ZU8UVdiZGGs6evh16QyHREjmDDnMm-o
  `;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWFlMGVlZTY5ZDBkYTg0ZjUxMDY1ODdiZWZjZTJkMCIsInN1YiI6IjYzNjIzMTRhMGMzZWM4MDA5MGI1ZmQ0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SIBSF6zJS5w5ZU8UVdiZGGs6evh16QyHREjmDDnMm-o",
    },
    mode: "cors",

  };
  useEffect(() => {
    datafetch();
  }, []);

  const datafetch = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/502356/videos?language=en-US",
        options
      );
      const data = await res.json();
      setVideoKey(data?.results);
      console.log(data?.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {videoKey.map((video) => {
        return (
          <div key={video.id}>
            <ReactPlayer
              // url={`https://www.youtube.com/watch?v=${video.key}`}
              controls
              width="640px"
              height="360px"
            />
            <p>{video.id}</p>
          </div>
        );
      })}
      {/* <Routes/> */}
    </div>
  );
};

export default App;
