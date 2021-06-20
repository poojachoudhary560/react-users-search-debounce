import React, { useState } from 'react';
import Search from './Search';

const UserSearch = () => {
  const [searchKey, setSearchKey] = useState('');
  const [result, setResult] = useState([]);

  const handleInputChange = e => {
    setSearchKey(e);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => {
        console.log(res[0]);
        setResult(res);
      });
  };
  return (
    <>
      <Search
        label="User Search"
        searchKey={searchKey}
        handleInputChange={handleInputChange}
      />
      {result.map(item => {
        return (
          <p>
            <span>{item.name}</span> -----
            <span>{item.email}</span>
          </p>
        );
      })}
    </>
  );
};

export default UserSearch;
