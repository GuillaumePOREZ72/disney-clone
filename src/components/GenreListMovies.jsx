import GenresList from "./GenresList";
import MoviesList from "./MoviesList";

export default function GenreListMovies() {
  return (
    <div>
      {GenresList.genere.map(
        (item, index) =>
          index <= 4 && (
            <div key={index} className="p-8 px-8 md:px-16">
              <h2 className="text-white text-[20px]">{item.name}</h2>
              <MoviesList genreId={item.id} indexId={index} />
            </div>
          )
      )}
    </div>
  );
}
