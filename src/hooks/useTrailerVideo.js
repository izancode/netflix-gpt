import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect, useState } from "react";
import { addTrailerVideo } from "../utils/movieSlice";
const useTrailerVideo = (id) => {
  const dispatch = useDispatch();
  console.log(id);
  const getTrailerVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getTrailerVideo();
  }, [id]);
};

export default useTrailerVideo;
