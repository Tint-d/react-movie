import React, { useState } from "react";
import { useGetPopularQuery } from "../redux/api/movieApi";

const Movies = () => {
  const [activePage, setActivePage] = useState(1);
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWFlMGVlZTY5ZDBkYTg0ZjUxMDY1ODdiZWZjZTJkMCIsInN1YiI6IjYzNjIzMTRhMGMzZWM4MDA5MGI1ZmQ0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SIBSF6zJS5w5ZU8UVdiZGGs6evh16QyHREjmDDnMm-o";
  const { data: movies } = useGetPopularQuery({ page: activePage, token });
  console.log(movies);
  return (
    <div>
      {movies?.results.map((movie) => {
        return (
          <div>
            <p>{movie?.original_title}</p>
          </div>
        );
      })}
      <button></button>
    </div>
  );
};

export default Movies;
