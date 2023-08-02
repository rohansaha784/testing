import './about.css';
import React, { useState, useRef } from 'react';
import profile1 from './profile1.jpg';
import profile2 from './profile2.jpg';
import profile3 from './profile3.jpg';
import profile4 from './profile4.jpg';
import profile5 from './profile5.jpg';

const about = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const blocks = [
    {
      name: "Jake Fifer",
      title: "Software Engineer",
      content: "I absolutely love this website! It's so cool and fun to use. The interface is intuitive and the features are amazing. Highly recommended!",
      picture: "profile1.jpg",
    },
    {
      name: "Ritisha De",
      title: "Software Engineer",
      content: "This website is simply fantastic! It's incredibly interesting and engaging. I can spend hours exploring all the wonderful content. A must-visit for everyone!",
      picture: "profile2.jpg",
    },
    {
      name: "Emily Gul",
      title: "Software Engineer",
      content: "I can't get enough of this website! It's so much fun and has such a creative design. The interactive elements make the user experience truly enjoyable. I'm hooked!",
      picture: "profile3.jpg",
    },
    {
      name: "Darshan Savaliya",
      title: "Software Engineer",
      content: "This website is mind-blowing! The features are revolutionary and the content is top-notch. It's a refreshing and unique experience that keeps me coming back for more.",
      picture: "profile4.jpg",
    },
    {
      name: "Sumedh Salvi",
      title: "Software Engineer",
      content: "I'm absolutely amazed by this website! It's a perfect blend of creativity and functionality. The attention to detail is outstanding. I can't recommend it enough!",
      picture: "profile5.jpg",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? blocks.length - 3 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === blocks.length - 3 ? 0 : prevIndex + 1));
  };

  return (
    <div className="about-page">
      <h2 className="title">About the Developer</h2>
      <div className="content">
        <p className="body">Rohan Saha is an adorable and talented developer, born and raised in the magical world of Zinnia. With a sprinkle of creativity and a dash of coding magic, Rohan creates delightful experiences that bring joy to users all around. When not crafting pixel-perfect UIs, you can find Rohan exploring new coding adventures.</p>
        <div className="colorful-box">
          <p className="body">Join Rohan on this whimsical coding journey and let the magic of technology unfold!</p>
        </div>
      </div>
      <div className="block-container">
        {blocks.slice(activeIndex, activeIndex + 3).map((block, index) => (
          <div key={index} className="block">
            <div className="profile">
              <div className="profile-picture">
              <img src={
             block.picture === 'profile1.jpg' ? profile1 :
             block.picture === 'profile2.jpg' ? profile2 :
             block.picture === 'profile3.jpg' ? profile3 :
             block.picture === 'profile4.jpg' ? profile4 :
             block.picture === 'profile5.jpg' ? profile5 : ''} alt="Profile Picture"
                    style={{ width: '120px', height: '120px' }} />

              </div>
              <div className="profile-info">
                <h3 className="block-name">{block.name}</h3>
                <p className="block-title">{block.title}</p>
              </div>
            </div>
            <p className="block-content">{block.content}</p>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button className="prev-button" onClick={handlePrev}>Previous</button>
        <button className="next-button" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default about;
