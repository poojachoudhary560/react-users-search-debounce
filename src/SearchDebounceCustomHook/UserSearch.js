import React, { useState, useEffect } from 'react';
import useDebounce from './useDebounce';

const UserSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const [debounceSearchTerm, isSearching, setIsSearching] = useDebounce(
    searchTerm,
    500
  );

  useEffect(() => {
    console.log(debounceSearchTerm);
    if (debounceSearchTerm) {
      //setIsSearching(true);

      getUsersData();
    } else {
      setResults([]);
    }
  }, [debounceSearchTerm]);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  const getUsersData = () => {
    //ssetIsSearching(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => {
        setResults(res);
        setIsSearching(false);
      });
  };
  return (
    <>
      <label>Search with Custom Hook: </label>
      <input type="text" value={searchTerm} onChange={handleChange} />
      {isSearching && <p>Searching ...</p>}
      {results.length > 0 &&
        results.map(result => {
          return <p key={result.email}>{result.email}</p>;
        })}
    </>
  );
};

export default UserSearch;
