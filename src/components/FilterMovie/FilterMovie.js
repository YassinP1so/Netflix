import React from 'react';
import Form from 'react-bootstrap/Form';
import './FilterMovie.css';

const MovieFilter = ({setInputSearch,inputSearch}) => {
  return (
    <div className='movie-title'>
        <Form.Control type="email" placeholder="Movie Title" onChange={(e) => setInputSearch(e.target.value)} value={inputSearch} />
    </div>
  );
}

export default MovieFilter;
