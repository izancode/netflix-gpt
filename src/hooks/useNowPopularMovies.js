import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPopularMovies } from "../utils/movieSlice";
const useNowPopularMovies = () => {
  //Fetch Data From TMDB API and update changes
  const dispatch = useDispatch();
  const getNowPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPopularMovies(json.results));
  };

  useEffect(() => {
    getNowPopularMovies();
  }, []);
};

export default useNowPopularMovies;
