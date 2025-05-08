import React from 'react';

function Square({ value, onClick }) {
  return (
    <button className="bg-gray-200 hover:bg-gray-300 text-4xl font-bold p-4 rounded focus:outline-none focus:shadow-outline h-20 w-20 flex items-center justify-center" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
