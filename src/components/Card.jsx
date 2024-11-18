/* eslint-disable react/prop-types */
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

export default function Card({ movie }) {
  return (
    <>
      <img
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt=""
        className="rounded-lg cursor-pointer w-[110px] md:w-[200px] hover:border-[3px] border-gray-300 hover:scale-110 transition-all"
      />
    </>
  );
}
