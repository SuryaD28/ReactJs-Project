import React, { useState } from 'react';

const withSearch = (WrappedComponent, data) => {
  return (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };

    const filteredData = data.filter(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <WrappedComponent data={filteredData} {...props} />
      </div>
    );
  };
};

export default withSearch;