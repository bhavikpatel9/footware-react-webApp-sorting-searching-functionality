import React, { useState } from 'react';
import { AiFillStar } from "react-icons/ai";
import data from './data/data';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredData = data.filter(item => {
    const titleMatch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch = selectedCategory === 'all' || item.category.toLowerCase() === selectedCategory.toLowerCase();
    return titleMatch && categoryMatch;
  });

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="all"
            checked={selectedCategory === 'all'}
            onChange={handleCategoryChange}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            value="sneakers"
            checked={selectedCategory === 'sneakers'}
            onChange={handleCategoryChange}
          />
          Sneakers
        </label>
        <label>
          <input
            type="radio"
            value="flats"
            checked={selectedCategory === 'flats'}
            onChange={handleCategoryChange}
          />
          Flats
        </label>
        <label>
          <input
            type="radio"
            value="sandals"
            checked={selectedCategory === 'sandals'}
            onChange={handleCategoryChange}
          />
          Sandals
        </label>
        <label>
          <input
            type="radio"
            value="heels"
            checked={selectedCategory === 'heels'}
            onChange={handleCategoryChange}
          />
          Heels
        </label>
      </div>
      <div className="card-container">
        {filteredData.map((item, index) => (
          <div key={index} className="card">
            <img src={item.img} alt={item.title} className='card-img'/>
            <div>{item.title}</div>
            <div>{item.star}</div>
            <div>{item.reviews}</div>
            <div>{item.prevPrice}</div>
            <div>{item.newPrice}</div>
            <div>{item.company}</div>
            <div>{item.color}</div>
            <div>{item.category}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
