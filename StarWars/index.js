import React, { useCallback, useState, useEffect } from "react";
import "./index.css";
import MoviesList from "./Components/MoviesList";
import { Section, Button, LoadMessage } from "./Indexstyles";
import AddMovie from "./AddMovie";

const Home = () => {
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: "Some Dummy Movie",
  //     openingText: "This is the opening text of the movie",
  //     releaseDate: "2021-05-18",
  //   },
  //   {
  //     id: 2,
  //     title: "Some Dummy Movie 2",
  //     openingText: "This is the second opening text of the movie",
  //     releaseDate: "2021-05-19",
  //   },
  // ];

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-film-api-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      // const transformedMovies = data.map((movieData) => {
      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     openingText: movieData.opening_crawl,
      //     releaseDate: movieData.release_date,
      //   };
      // });
      setMovies(loadedMovies);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);


  async function addMovieHandler(movie) {
    const response = await fetch(
      "https://react-film-api-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
      fetchMoviesHandler(); 
  }, [fetchMoviesHandler]);

  let content = <LoadMessage>No movies added.</LoadMessage>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <LoadMessage>{error}</LoadMessage>;
  }

  if (isLoading) {
    content = <LoadMessage>Loading...</LoadMessage>;
  }



  return (
    <>
      <Section>
        <AddMovie onAddMovie={addMovieHandler} fetchMoviesHandler={fetchMoviesHandler} />
      </Section>
      <Section>
        <Button onClick={fetchMoviesHandler}>Fetch Movies</Button>
      </Section>
      <Section>
        {content}
        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && (
          <LoadMessage>No movies added.</LoadMessage>
        )}
        {!isLoading && error && <LoadMessage>{error}</LoadMessage>}
        {isLoading && <LoadMessage>Loading...</LoadMessage>} */}
      </Section>
    </>
  );
};

export default Home;
