import React, {useRef} from "react";
import {
  FormContainer,
  FormInputContainer,
  FormInputLabel,
  FormInput,
  FormTextArea,
} from "./AddMovieStyles";
import { Button } from "./Indexstyles";

const AddMovie = (props) => {
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");

  const handlesubmit = (event) => {
    event.preventDefault();

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);

  };

  let fetchHandler = props.fetchMoviesHandler;

  return (
    <>
      <FormContainer onSubmit={handlesubmit && fetchHandler}>
        <FormInputContainer>
          <FormInputLabel htmlFor="title">Title</FormInputLabel>
          <FormInput type="text" id="title" ref={titleRef} />
        </FormInputContainer>
        <FormInputContainer>
          <FormInputLabel htmlFor="opening-text">Opening Text</FormInputLabel>
          <FormTextArea
            rows="5"
            id="opening-text"
            ref={openingTextRef}
          ></FormTextArea>
        </FormInputContainer>
        <FormInputContainer>
          <FormInputLabel htmlFor="date">Release Date</FormInputLabel>
          <FormInput type="text" id="date" ref={releaseDateRef} />
        </FormInputContainer>
        <Button>Add Movie</Button>
      </FormContainer>
    </>
  );
};

export default AddMovie;
