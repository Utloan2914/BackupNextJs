import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

interface SearchProps {
  searchTerm: string;
  onSearchTermChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  onClear: () => void;
}

const Search: React.FC<SearchProps> = ({ searchTerm, onSearchTermChange, onSearch, onClear }) => {
  return (
    <div className="flex space-x-2">
      <div className="flex rounded-md overflow-hidden w-full">
        <input
          type="text"
          className="w-full rounded-l-md rounded-r-none px-3 py-2 text-sm border-gray-300 border-2 focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 focus:outline-none"
          value={searchTerm}
          placeholder='Search product...'
          onChange={onSearchTermChange}
        />
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded mr-2 hover:bg-indigo-900"
          onClick={onSearch} 
        >
          Search
        </button>
      </div>
      <button
        className="bg-blue-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        onClick={onClear}
      >
        Clear
      </button>


    </div>
  );
};

export default Search;
