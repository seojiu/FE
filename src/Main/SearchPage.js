import './SearchPage.css';
import React, { useState } from 'react';
import picture1 from '../images/back.png';
import x from '../images/x.png';

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && searchTerm.trim() !== '') {
      setSearchHistory([searchTerm, ...searchHistory]);
      setSearchTerm('');
    }
  };

  const handleDeleteHistory = (termToDelete) => {
    setSearchHistory(searchHistory.filter(term => term !== termToDelete));
  };

  const handleClearHistory = () => {
    setSearchHistory([]);
  };

  return (
    <div className="container">
      <div className="content">

        <div className="top-bar9">
          <img src={picture1} alt="back" />
          <input 
            type="text" 
            placeholder=" 검색창 " 
            value={searchTerm}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </div>

        <div className="line-9">
          <div className="line-bar-9"></div>
        </div>

        <div className="search-history">

          <div className="history-header">
            <span className="Text-9-1">최근검색</span>
            <span className="clear-history" onClick={handleClearHistory}>전체삭제</span>
          </div>

          {searchHistory.map((term, index) => (
            <div key={index} className="history-item">
              <span>{term}</span>
              <img src={x} className="delete-item" onClick={() => handleDeleteHistory(term)}></img>
            </div>
          ))}


        </div>
      </div>
    </div>
  );
}

export default SearchPage;
