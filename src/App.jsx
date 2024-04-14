import React, { useState } from 'react';
import { AiFillStar } from "react-icons/ai";
import data from './data/data';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    setSelectedPriceRange(event.target.value);
  };

  const filteredData = data.filter(item => {
    const titleMatch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch = selectedCategory === 'all' || item.category.toLowerCase() === selectedCategory.toLowerCase();
    const priceMatch = selectedPriceRange === 'all' ||
      (selectedPriceRange === '$0-$50' && parseInt(item.newPrice) <= 50) ||
      (selectedPriceRange === '$50-$100' && parseInt(item.newPrice) > 50 && parseInt(item.newPrice) <= 100) ||
      (selectedPriceRange === '$100-$150' && parseInt(item.newPrice) > 100 && parseInt(item.newPrice) <= 150) ||
      (selectedPriceRange === 'over $150' && parseInt(item.newPrice) > 150);
    return titleMatch && categoryMatch && priceMatch;
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

      <div>
        <label>
          <input
            type="radio"
            value="all"
            checked={selectedPriceRange === 'all'}
            onChange={handlePriceRangeChange}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            value="$0-$50"
            checked={selectedPriceRange === '$0-$50'}
            onChange={handlePriceRangeChange}
          />
          $0-$50
        </label>
        <label>
          <input
            type="radio"
            value="$50-$100"
            checked={selectedPriceRange === '$50-$100'}
            onChange={handlePriceRangeChange}
          />
          $50-$100
        </label>
        <label>
          <input
            type="radio"
            value="$100-$150"
            checked={selectedPriceRange === '$100-$150'}
            onChange={handlePriceRangeChange}
          />
          $100-$150
        </label>
        <label>
          <input
            type="radio"
            value="over $150"
            checked={selectedPriceRange === 'over $150'}
            onChange={handlePriceRangeChange}
          />
          over $150
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
