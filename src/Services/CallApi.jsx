import axios from "axios";

// Configuration de base pour l'API
const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "636dc21c68c13fecc701e6cfe0ac675e";

// Fonction générique pour récupérer des vidéos
const getVideos = async (endpoint = "/trending/all/day") => {
  try {
    const response = await axios.get(
      `${movieBaseUrl}${endpoint}?api_key=${api_key}`
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des vidéos", error);
    throw error;
  }
};

const movieByGenreBaseUrl =
  "https://api.themoviedb.org/3/discover/movie?api_key=636dc21c68c13fecc701e6cfe0ac675e";

const getMovieById = async (id) => {
  try {
    const response = await axios.get(
      `${movieByGenreBaseUrl}&with_genres=${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des vidéos", error);
    throw error;
  }
};

export default { getVideos, getMovieById };
