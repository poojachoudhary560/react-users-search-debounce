import React, { useState } from 'react';

const Search = () => {
  const [searchKey, setSearchKey] = useState('');
  const [result, setResult] = useState([]);

  const handleChange = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json)
      .then(res => setResult(res));
  };
  return (
    <>
      <input type="text" val={searchKey} onchange={handleChange} />
      {JSON.stringify(results)}
      {result.map(item => {
        <p>{}</p>;
      })}
    </>
  );
};

export default Search;
