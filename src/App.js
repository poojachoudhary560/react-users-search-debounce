import React from 'react';
import SearchDebounceFunctional from './SearchDebounceFunctional';
import SearchDebounceCustomHook from './SearchDebounceCustomHook';
import SearchDebounceCustom from './SearchDebounceCustom';
import './style.css';

export default function App() {
  return (
    <div>
      <SearchDebounceFunctional />
      <hr />
      <SearchDebounceCustomHook />
      <hr />
      <SearchDebounceCustom />
    </div>
  );
}
