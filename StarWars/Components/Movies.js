import React from 'react'

import { MovieContainer, MovieH2, MovieH3, MovieText } from './MoviesStyles'

const Movies = (props) => {
  return (
    <>
      <MovieContainer>
        <MovieH2>{props.title}</MovieH2>
        <MovieH3>{props.releaseDate}</MovieH3>
        <MovieText>{props.openingText}</MovieText>
      </MovieContainer>
    </>
  )
}

export default Movies