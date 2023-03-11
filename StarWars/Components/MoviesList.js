import React from "react";
import Movies from "./Movies";
import { MovielistContainer } from "./MoviesListStyles";

const MoviesList = (props) => {
  return (
    <MovielistContainer>
      {props.movies.map((movie) => (
        <Movies 
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </MovielistContainer>
  );
};

export default MoviesList;
