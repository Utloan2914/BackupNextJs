import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useLanguage } from '@/context/languageContext';
interface SearchProps {
  searchTerm: string;
  onSearchTermChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  onClear: () => void;
}

const Search: React.FC<SearchProps> = ({ searchTerm, onSearchTermChange, onSearch, onClear }) => {
  const { language } = useLanguage(); 
  return (
    <div className="flex space-x-2">
      <div className="flex rounded-md overflow-hidden w-full">
        <input
          type="text"
          className="w-full text-xl rounded-l-md rounded-r-none px-3 py-2 text-sm border-gray-300 border-2 focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 focus:outline-none"
          value={searchTerm}
          placeholder={language === 'en' ? 'Search pet.....' : 'Tìm kiếm thú cưng'}
          onChange={onSearchTermChange}
        />
        <button
          className="bg-blue-500 text-xl hover:bg-blue-600 text-white px-4 py-2 rounded font-bold w-48 mr-2 "
          onClick={onSearch} 
        >
           {language === 'en' ? 'Search' : 'Tìm kiếm'} 
        </button>
      </div>
      <button
        className="bg-blue-500 text-xl hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={onClear}
      >
          {language === 'en' ? 'Clear' : 'Xóa'}
      </button>


    </div>
  );
};

export default Search;
