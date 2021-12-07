import React, { useState, useEffect, useRef } from 'react';

function debounce(fn, limit) {
  console.log('in dobounce');
  let timer;
  return wrapper;
  function wrapper(...args) {
    console.log('in debounce return');
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...args);
    }, limit);
  }
}
// normal js debounce do not work in react, issues with closure in react; useEffect is a good alternative

const SearchMedicine = (props) => {
  const [searchKey, setSearchKey] = useState('');
  const counter = useRef(0);
  const handleChange = (e) => {
    setSearchKey(e.target.value);
  };
  const fetchApiCall = () => {
    // counter.current++;
    console.log('Counter value: ', ++counter.current);
  };
  // const betterFn = debounce(fetchApiCall, 3000);
  useEffect(() => {
    if (searchKey) {
      console.log('Search Key ', searchKey);
      // betterFn();
      let timer = setTimeout(() => {
        fetchApiCall();
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [searchKey]);

  return (
    <>
      <p>Search with Custom Debounce Function</p>
      <input type="text" onChange={handleChange} value={searchKey} />
    </>
  );
};

export default SearchMedicine;
