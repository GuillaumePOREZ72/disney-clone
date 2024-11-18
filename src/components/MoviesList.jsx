import { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import getVideos from "../Services/CallApi";
import Card from "./Card";
import CardTitle from "./CardTitle";

export default function MoviesList({ genreId, indexId }) {
  const [moviesList, setMoviesList] = useState([]);

  const elementRef = useRef(null);

  useEffect(() => {
    getMovieByGenre();
  }, []);

  const getMovieByGenre = async () => {
    try {
      const response = await getVideos.getMovieById(genreId);
      console.log(response);
      setMoviesList(response.results);
    } catch (error) {
      console.error("Erreur lors de la récupération des vidéos:", error);
    }
  };

  const sliderRight = (el) => {
    el.scrollLeft += 500;
  };
  const sliderLeft = (el) => {
    el.scrollLeft -= 500;
  };

  return (
    <div className="relative">
      <IoIosArrowBack
        onClick={() => sliderLeft(elementRef.current)}
        className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute ${indexId % 3 == 0 ? "mt-[80px]" : "mt-[150px]"}`}
      />
      <div className="flex overflow-x-auto gap-8 scrollbar-hide scroll-smooth pt-4 px-3 pb-4">
        {moviesList.map((item, index) => (
          <>
            {indexId % 3 == 0 ? (
              <CardTitle key={index} movie={item} />
            ) : (
              <Card key={index} movie={item} />
            )}
          </>
        ))}
      </div>

      <IoIosArrowForward
        onClick={() => sliderRight(elementRef.current)}
        className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute top-0 right-0 ${indexId % 3 == 0 ? "mt-[80px]" : "mt-[150px]"}`}
      />
    </div>
  );
}
