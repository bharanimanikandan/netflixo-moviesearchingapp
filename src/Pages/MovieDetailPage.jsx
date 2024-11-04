import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../api/api';

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
        setError(data.Error || null);
      } catch (error) {
        setError("Error fetching movie details.");
      }
    };

    fetchMovieDetails();
  }, [id]);

  return movie ? (
    <div className="h-full pt-20 pb-20 flex flex-row p-5 gap-10 bg-slate-900">
        <img src={movie.Poster} alt={movie.Title} className="w-6/12 h-auto object-cover rounded mb-4 border-2" />
      <div className=''>
        <h2 className="text-7xl font-extrabold text-white space-y-5 mt-20 mb-2 font-orbitron">{movie.Title}</h2>
        <p className="text-xl text-white mb-16 font-titilium">{movie.Year}</p>
        <p className="text-xl mt-2 text-white"><strong>Director : </strong> {movie.Director}</p>
        <p className="text-xl mt-2 mb-3 text-white font-titilium"><strong>Genre : </strong> {movie.Genre}</p>
        <p className="text-xl mt-2 text-white"><strong>Cast : </strong> {movie.Actors}</p>
        <p className="text-lg mt-2 mb-3 text-white"><strong>Plot : </strong> {movie.Plot}</p>
        <p className="text-xl mt-2 text-white"><strong>Released : </strong> {movie.Released}</p>
        <p className="text-xl mt-2 text-white"><strong>Boxoffice : </strong> {movie.BoxOffice}</p>
        <p className="text-xl mt-2 text-white"><strong>IMDB Rating : </strong> {movie.imdbRating}</p>
      </div>
    </div>
  ) : (
    <p className="text-red-500 mt-4">{error}</p>
  );
};

export default MovieDetailPage;
