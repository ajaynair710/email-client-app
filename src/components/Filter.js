// src/components/Filter.js
import React from 'react';

const Filter = ({ setFilter }) => {
  return (
    <div className="filter-container">
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('favorite')}>Favorites</button>
      <button onClick={() => setFilter('read')}>Read</button>
      <button onClick={() => setFilter('unread')}>Unread</button>
    </div>
  );
};

export default Filter;
