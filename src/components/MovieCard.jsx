import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  <Link to={`/movie/${movie.imdbID}`} className="border rounded p-4 shadow-md w-full">
    <img src={movie.Poster} alt={movie.Title} className="w-full h-60 object-cover rounded border" />
    <h3 className="text-lg text-white font-titilium mt-2 font-bold">{movie.Title}</h3>
    <p className='text-white'>{movie.Year}</p>
  </Link>
);

export default MovieCard;
