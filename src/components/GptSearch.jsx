import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import bg from "../../Public/bg/bg.jpg";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={bg} alt="Bg" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
