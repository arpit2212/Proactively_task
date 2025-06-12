import React, { useState, useEffect } from 'react';

// Import all images
import nutritionImage from '../../assets/MainPage/Cards/Nutrition.png';
import physicalActivityImage from '../../assets/MainPage/Cards/PhysicalActivity.png';
import sleepImage from '../../assets/MainPage/Cards/RetrospectiveSleep.png';
import stressImage from '../../assets/MainPage/Cards/StressManagment.png';
import socialImage from '../../assets/MainPage/Cards/SocialConnect.png';
import substanceImage from '../../assets/MainPage/Cards/SubstanceAbuse.png';

import nutritionIcon from '../../assets/MainPage/Cards/UnitIcon/Nutrition.png';
import physicalIcon from '../../assets/MainPage/Cards/UnitIcon/PhysicalActivity.png';
import sleepIcon from '../../assets/MainPage/Cards/UnitIcon/RetrospectiveSleep.png';
import stressIcon from '../../assets/MainPage/Cards/UnitIcon/StressManagment.png';
import socialIcon from '../../assets/MainPage/Cards/UnitIcon/SocialConnection.png';
import substanceIcon from '../../assets/MainPage/Cards/UnitIcon/SubstanceAbuse.png';

const MainPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cards = [
    {
      id: 1,
      title: "Nutrition",
      description: "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.",
      image: nutritionImage,
      duration: "121/80",
      unit: "mmHg",
      unit_img: nutritionIcon
    },
    {
      id: 2,
      title: "Physical activity",
      description: "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.",
      image: physicalActivityImage,
      duration: "32",
      unit: "minutes",
      unit_img: physicalIcon
    },
    {
      id: 3,
      title: "Restorative sleep",
      description: "Consistent, quality sleep is fundamental to physical health, mental clarity, and emotional well-being.",
      image: sleepImage,
      duration: "8",
      unit: "hours",
      unit_img: sleepIcon
    },
    {
      id: 4,
      title: "Stress management",
      description: "Effective stress management techniques help reduce anxiety, improve focus, and enhance overall quality of life.",
      image: stressImage,
      duration: "60",
      unit: "bpm",
      unit_img: stressIcon
    },
    {
      id: 5,
      title: "Social connection",
      description: "Strong social relationships and community connections are vital for mental health and longevity.",
      image: socialImage,
      duration: "Feeling",
      unit: "better",
      unit_img: socialIcon
    },
    {
      id: 6,
      title: "Substance abuse",
      description: "Avoiding harmful substances and addressing addiction issues is crucial for maintaining optimal health.",
      image: substanceImage,
      duration: "62",
      unit: "Days",
      unit_img: substanceIcon
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Touch handlers for mobile swipe
  const onTouchStart = (e) => {
    if (!isMobile) return;
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    if (!isMobile) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!isMobile || !touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div 
      className="main-page"
      style={{
        padding: '60px 20px',
        backgroundImage: 'url(/assets/bgMainPage.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
      }}
    >
      <div 
        className="main-page-container"
        style={{
          maxWidth: '1600px',
          margin: '0 auto'
        }}
      >
        <div 
          className="header-with-nav"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '40px',
            gap: '20px',
            ...(isMobile && {
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '16px'
            })
          }}
        >
          <div 
            className="header-section"
            style={{
              textAlign: 'left',
              flex: 1
            }}
          >
            <p 
              className="how-it-works"
              style={{
                fontSize: isMobile ? '24px' : '36px',
                fontWeight: '700',
                color: '#707070',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '16px'
              }}
            >
              HOW IT WORKS
            </p>
            <h2 
              className="main-title"
              style={{
                fontSize: isMobile ? '28px' : '36px',
                fontWeight: '700',
                margin: '0',
                lineHeight: '1.2'
              }}
            >
              <span 
                className="lifestyle-text"
                style={{
                  background: 'linear-gradient(to right, #F1CA72, #D96E6C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}
              >
                Lifestyle as medicine 
              </span>
              <span 
                className="subtitle"
                style={{ color: '#707070' }}
              >
                : The six pillars
              </span>
            </h2>
          </div>
          
          {!isMobile && (
            <div 
              className="nav-buttons"
              style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                flexShrink: 0
              }}
            >
              <button 
                className="nav-btn prev-btn" 
                onClick={prevSlide}
                style={{
                  background: '#ffffff',
                  border: '2px solid #e5e7eb',
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                className="nav-btn next-btn" 
                onClick={nextSlide}
                style={{
                  background: '#ffffff',
                  border: '2px solid #e5e7eb',
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          )}
        </div>

        {!isMobile && (
          <div 
            className="tab-navigation"
            style={{
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap'
            }}
          >
            {cards.map((card, index) => (
              <button
                key={card.id}
                className={`tab-btn ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                style={{
                  padding: '8px 16px',
                  border: '2px solid #e5e7eb',
                  background: index === currentIndex ? '#111827' : 'white',
                  borderColor: index === currentIndex ? '#111827' : '#e5e7eb',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: index === currentIndex ? 'white' : '#6b7280',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                {card.title}
              </button>
            ))}
          </div>
        )}

        <div 
          className="cards-wrapper"
          style={{
            flex: 1,
            overflow: 'hidden',
            borderRadius: '12px',
            marginTop: '46px',
            width: '100%'
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div 
            className="cards-container"
            style={{
              display: 'flex',
              transition: 'transform 0.5s ease',
              width: isMobile ? '600%' : '200%',
              transform: isMobile 
                ? `translateX(-${currentIndex * (282 + 10)}px)` 
                : `translateX(-${currentIndex * 513}px)`,
              gap: isMobile ? '10px' : '0'
            }}
          >
            {cards.map((card, index) => (
              <div 
                key={card.id} 
                className="card"
                style={{
                  flex: isMobile ? '0 0 282px' : '0 0 calc(100% / 3)',
                  marginRight: isMobile ? '10px' : '20px',
                  background: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  maxWidth: isMobile ? '282px' : '493px',
                  width: isMobile ? '282px' : 'auto',
                  height: isMobile ? '418px' : '485px',
                  minHeight: isMobile ? '418px' : 'auto'
                }}
              >
                <div 
                  className="card-image"
                  style={{
                    position: 'relative',
                    width: isMobile ? '100%' : '493px',
                    height: isMobile ? '240px' : '320px',
                    overflow: 'hidden'
                  }}
                >
                  <img 
                    src={card.image} 
                    alt={card.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div 
                    className="card-overlay"
                    style={{
                      position: 'absolute',
                      bottom: isMobile ? '12px' : '16px',
                      left: isMobile ? '12px' : '16px'
                    }}
                  >
                    <div 
                      className="duration-badge"
                      style={{
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '24px',
                        padding: isMobile ? '6px 12px' : '8px 16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '14px',
                        color: '#374151',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      <img 
                        src={card.unit_img} 
                        alt={card.unit} 
                        className="unit-icon"
                        style={{
                          width: isMobile ? '16px' : '25px',
                          height: isMobile ? '16px' : '23px',
                          borderRadius: '50%',
                          objectFit: 'cover'
                        }}
                      />
                      <span 
                        className="duration-text"
                        style={{
                          fontSize: isMobile ? '13px' : '14px',
                          color: '#374151'
                        }}
                      >
                        <strong style={{ fontWeight: '700', color: '#111827' }}>
                          {card.duration}
                        </strong>{' '}
                        <span style={{ color: '#707070' }}>
                          {card.unit}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div 
                  className="card-content"
                  style={{
                    padding: isMobile ? '20px' : '24px',
                    height: isMobile 
                      ? 'calc(418px - 240px - 40px)' 
                      : 'calc(485px - 320px - 48px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start'
                  }}
                >
                  <h3 
                    className="card-title"
                    style={{
                      fontSize: isMobile ? '18px' : '22px',
                      fontWeight: '700',
                      color: '#111827',
                      margin: '0 0 12px 0',
                      lineHeight: '1.3'
                    }}
                  >
                    {card.title}
                  </h3>
                  <p 
                    className="card-description"
                    style={{
                      fontSize: isMobile ? '14px' : '15px',
                      lineHeight: '1.6',
                      color: '#6b7280',
                      margin: '0'
                    }}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile swipe indicator dots */}
        {isMobile && (
          <div 
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '20px'
            }}
          >
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  border: 'none',
                  background: index === currentIndex ? '#111827' : '#e5e7eb',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;