import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";
const VideoBackground = ({ movieId }) => {
  useTrailerVideo(movieId);

  const youtubeKey = useSelector((store) => store.movies?.trailerVideo?.key);
  if (!youtubeKey) return;

  const youtubeUrl = "https://www.youtube.com/embed/";
  // fetch my trailer video

  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video"
        src={youtubeUrl + youtubeKey + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
