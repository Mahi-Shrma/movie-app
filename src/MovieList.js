import React from 'react';
import './index.css';

const MovieList = ({ movies }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie.title}>
            <td>{movie.title}</td>
            <td>{movie.genre}</td>
            <td>{movie.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MovieList;