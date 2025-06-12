// src/components/SearchForm/SearchForm.jsx
import React from 'react';
import { Search, MapPin, Calendar } from 'lucide-react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <div className="search-form-wrapper">
      <div className="search-form">
        <div className="conditon-input-group input-group">
          <Search className="input-icon" size={20} />
          <input
            type="text"
            placeholder="Condition, procedure, speciality..."
            className="form-input "
          />
        </div>

        <div className="input-group">
          <MapPin className="input-icon" size={20} />
          <input
            type="text"
            placeholder="City, state, or zipcode"
            className="form-input"
          />
        </div>

        <div className="input-group">
          <Calendar className="input-icon" size={20} />
          <input
            type="text"
            placeholder="Insurance carrier"
            className="form-input"
          />
        </div>

        <button className="find-button">
          <Search size={20} />
          Find now
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
