import React from "react";
import { useGetVideoQuery } from "../../redux/api/movieApi";
import Cookies from "js-cookie";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ReactPlayer from 'react-player';


const TvSlider = () => {
  const token = Cookies.get("token");
  const { data: videos } = useGetVideoQuery(token);
  console.log(videos?.results);


  
  
  return (
    <div>
     {videos?.results?.map(video => (
      <div key={video?.id}>
        {/* <ReactPlayer url={`https://www.youtube.com/watch?v=${video.key}`} controls /> */}
      </div>
     ))}
    </div>
  );
};

export default TvSlider;
