import React, { useState } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import User_1 from '../../assets/user-1.png';
import User_2 from '../../assets/user-2.png';
import User_3 from '../../assets/user-3.png';
import User_4 from '../../assets/user-4.png';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      image: User_1,
      name: 'William Jackson',
      company: 'Edusity, USA',
      review: 'Choosing to pursue my degree at Edusity was one of the best decisions I\'ve ever made.',
    },
    {
      image: User_2,
      name: 'William Jackson',
      company: 'Edusity, USA',
      review: 'Choosing to pursue my degree at Edusity was one of the best decisions I\'ve ever made.',
    },
    {
      image: User_3,
      name: 'William Jackson',
      company: 'Edusity, USA',
      review: 'Choosing to pursue my degree at Edusity was one of the best decisions I\'ve ever made.',
    },
    {
      image: User_4,
      name: 'William Jackson',
      company: 'Edusity, USA',
      review: 'Choosing to pursue my degree at Edusity was one of the best decisions I\'ve ever made.',
    },
  ];

  const handleNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the first testimonial
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(testimonials.length - 1); // Loop back to the last testimonial
    }
  };

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="Next" className='next-btn' onClick={handleNext} />
      <img src={back_icon} alt="Back" className='back-btn' onClick={handleBack} />  

      <div className="slider">
        <ul style={{ transform: `translateX(-${currentIndex * 50}%)` }}>
          {testimonials.map((testimonial, index) => (
            <li key={index}>
              <div className="slide">
                <div className="user-info">
                  <img src={testimonial.image} alt="" />
                </div>
                <div>
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.company}</span>
                </div>
                <p>{testimonial.review}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;
