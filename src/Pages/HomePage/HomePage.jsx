import React from 'react';
import { Search, MapPin, Calendar } from 'lucide-react';
import './HomePage.css';

import image1 from '../../../src/assets/HomePage/left1.png';
import image2 from '../../../src/assets/HomePage/left2.png';
import image3 from '../../../src/assets/HomePage/left3.png';
import image4 from '../../../src/assets/HomePage/left4.png';
import image5 from '../../../src/assets/HomePage/right1.png';
import image6 from '../../../src/assets/HomePage/right2.png';
import image7 from '../../../src/assets/HomePage/right3.png';
import image8 from '../../../src/assets/HomePage/right4.png';
import SearchForm from '../../Components/SearchForm/SearchForm';

const HomePage = () => {
  // Column 1 images (1, 2, 3, 4)
  const column1Images = [image1, image2, image3, image4];
  
  // Column 2 images (5, 6, 7, 8)
  const column2Images = [image5, image6, image7, image8];
  
  // All images for mobile view (1, 2, 3, 4, 5, 6, 7, 8)
  const allImages = [image1, image2, image3, image4, image5, image6, image7, image8];

  return (
    <div className="homepage-container">
      {/* Desktop View */}
      <div className="desktop-view">
        {/* Animated Image Columns */}
        <div className="image-columns">
          {/* Column 1 - Top to Bottom */}
          <div className="column column-1">
            <div className="scroll-down">
              {[...column1Images, ...column1Images, ...column1Images].map((img, index) => (
                <div key={`col1-${index}`} className="image-card">
                  <img src={img} alt={`Medical ${(index % 4) + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 - Bottom to Top */}
          <div className="column column-2">
            <div className="scroll-up">
              {[...column2Images, ...column2Images, ...column2Images].map((img, index) => (
                <div key={`col2-${index}`} className="image-card">
                  <img src={img} alt={`Medical ${(index % 4) + 5}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="main-content">
            <div className="form-container">
              <div className="header-section">
               <h1 className="main-title">
  Book an appointment with <span className="highlight-blue"> <br></br>lifestyle medicine</span> experts
</h1>
<p className="subtitle">
  Optimize your lifestyle and reverse chronic diseases.
</p>
              </div>

              <SearchForm/>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="mobile-view">
        <div className="mobile-container">
          <div className="mobile-header">
            <h1 className="mobile-title">
  Book an appointment with <span className="mobile-highlight"> <br></br>lifestyle medicine</span> experts
</h1>
            <p className="mobile-subtitle">
              Optimize your lifestyle and reverse chronic diseases.
            </p>
          </div>

          <div className="mobile-form">
            <div className="input-group">
              <Search className="input-icon" size={20} />
              <input
                type="text"
                placeholder="Condition, procedure, etc."
                className="form-input"
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

            <button className="find-button-mobile">
              <Search size={20} />
              Find now
            </button>
          </div>

          {/* Mobile Horizontal Scrolling Images */}
          <div className="mobile-images">
            <div className="scroll-horizontal">
              {[...allImages, ...allImages, ...allImages].map((img, index) => (
                <div key={`mobile-${index}`} className="mobile-image-card">
                  <img src={img} alt={`Medical ${(index % 4) + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;