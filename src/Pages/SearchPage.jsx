import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';
import Filter from '../components/Filter';
import { searchMovies, filterMovies, getRandomMovies } from '../api/api';

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [type, setType] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRandomMovies = async () => {
      try {
        const data = await getRandomMovies();
        setMovies(data.Search || []);
        setError(data.Error || null);
      } catch (error) {
        setError("Unable to fetch movies.");
      }
    };

    fetchRandomMovies();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = type ? await filterMovies(query, type) : await searchMovies(query, currentPage);
        setMovies(data.Search || []);
        setError(data.Error || null);
      } catch (error) {
        setError("Unable to fetch movies.");
      }
    };

    if (query) fetchMovies();
  }, [query, currentPage, type]);

  return (
    <div className="container mx-auto p-4 bg-slate-900">
      <h1 className='text-center text-red-600 mb-4 font-titilium font-extrabold text-5xl'>NETFLIXO</h1>
      <SearchBar onSearch={(query) => { setQuery(query); setCurrentPage(1); }} />
      <div className='flex justify-center mt-3 bg-transparent'>
        <Filter onFilterChange={setType} />
      </div>
      {error ? (
        <p className="text-red-500 mt-4">{error}</p>
      ) : (
        <div className="grid grid-cols-3 gap-4 mt-4">
          {movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)}
        </div>
      )}
      <Pagination currentPage={currentPage} onPageChange={setCurrentPage} />
    </div>
  );
};

export default SearchPage;