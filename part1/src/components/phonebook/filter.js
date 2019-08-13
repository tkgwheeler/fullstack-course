import React from "react";

const Filter = ({ term, change }) => {
  const handleFilterChange = event => {
    change(event.target.value);
  };
  return (
    <div>
      Filter contact: <input value={term} onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;
