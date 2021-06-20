import React, { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  useEffect(() => {
    if (value.length > 0) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearInterval(timer);
    };
  }, [value]);

  return [debouncedValue, isSearching, setIsSearching];
};

export default useDebounce;
