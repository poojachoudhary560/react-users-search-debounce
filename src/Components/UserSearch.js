import React, { useState } from 'react';
import Search from './Search';

const UserSearch = () => {
  const [searchKey, setSearchKey] = useState('');
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = e => {
    setSearchKey(e);
    if (e.length > 0) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res => {
          console.log(res[0]);
          setResult(res);
          setLoading(false);
        });
    } else {
      setResult([]);
      setLoading(false);
    }
  };

  const handleLoading = val => {
    setLoading(val);
    setResult([])
  };
  return (
    <>
      <Search
        label="User Search"
        searchKey={searchKey}
        handleInputChange={handleInputChange}
        handleLoading={handleLoading}
      />
      {loading && <p>Loading.....</p>}
      {result.length > 0 &&
        result.map(item => {
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
