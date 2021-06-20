import React, { useState, useEffect } from 'react';

const Search = ({ label, handleInputChange }) => {
  const [searchKey, setSearchKey] = useState('');

  const handleChange = e => {
    console.log(e.target.value);
    setSearchKey(e.target.value);

    //handleInputChange(e.target.value);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      handleInputChange(searchKey);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchKey]);

  return (
    <>
      <label>{label}: </label>
      <input type="text" value={searchKey} onChange={handleChange} />
    </>
  );
};

export default Search;
