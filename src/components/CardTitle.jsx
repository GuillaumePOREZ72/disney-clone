const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

export default function CardTitle({ movie }) {
  return (
    <section className="hover:scale-110 transition-all">
      <img
        className="w-[110px] md:w-[260px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointer"
        src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
        alt="image film"
      />
      <h2 className="text-white mt-2 w-[110px] md:w-[260px] ">{movie.title}</h2>
    </section>
  );
}
