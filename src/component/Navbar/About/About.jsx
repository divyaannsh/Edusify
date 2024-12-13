import React from 'react';
import './About.css';
import about_img from '../../../assets/about.png';
import play_icon from '../../../assets/play-icon.png';

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="About Uni" className='about-img'/>
        <img src={play_icon} alt="Play Icon" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>About Uni</h3>
        <h2>Nurturing Tomorrow's World</h2>
        <p>
          At Uni, we believe in shaping a brighter future by providing a holistic education that fosters innovation, inclusivity, and global citizenship. With cutting-edge facilities, expert faculty, and a commitment to excellence, we prepare students to excel in their chosen fields and contribute meaningfully to society.
        </p>
        <p>
          Our programs are designed to cater to diverse interests, blending academic rigor with real-world applications. From groundbreaking research to collaborative projects, Uni offers a vibrant environment that inspires creativity and leadership.
        </p>
        <p>
          Join us in our mission to empower the leaders of tomorrow with the skills, knowledge, and vision to make a difference in the world.
        </p>
      </div>
    </div>
  );
};

export default About;
