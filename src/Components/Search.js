import React, { useState } from 'react';

const Search = ({ label, searchKey, handleInputChange }) => {
  const handleChange = e => {
    // console.log(e.target.value);
    handleInputChange(e.target.value);
  };
  return (
    <>
      <label />
      <input type="text" value={searchKey} onChange={handleChange} />
    </>
  );
};

export default Search;
