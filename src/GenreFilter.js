import React from 'react';

const GenreFilter = ({ genres }) => {
  const handleGenreClick = (genre) => {
    console.log(`Selected genre: ${genre}`);
  };

  return (
    <div>
      {genres.map((genre) => (
        <button key={genre} onClick={() => handleGenreClick(genre)}>
          {genre}
        </button>
      ))}
    </div>
  );
};
export default GenreFilter;