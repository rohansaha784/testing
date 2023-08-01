import React from "react";
import { useHistory } from "react-router-dom";
import './home.css'

const Home: React.FC = () => {
  const elements = [
    { id: 1, value: 'About Zinnia', path: '/aboutzinnia' },
    { id: 2, value: 'Suggestions', path: '/suggestions' },
    { id: 3, value: 'Policies', path: '/policies' },
    { id: 4, value: 'About', path: '/about' },
  ];

  const history = useHistory();

  const handleClick = (path: string) => {
    history.push(path);
  };

  return (
    <div>
      <div className="welcome-banner">
        <h1>Welcome!</h1>
      </div>
      <div className="explore-text">
        <h2>Explore our different pages</h2>
      </div>
      <div className="grid">
        {elements.map((element) => (
          <div
            key={element.id}
            className="grid-item"
            onClick={() => handleClick(element.path)}
          >
            {element.value}
          </div>
        ))}
      </div>
      <h2 className="more-innovative"> More Innovative. More Modern. More Dynamic.</h2>
      <video className="video" autoPlay loop muted src="https://zinnia.com/wp-content/uploads/2023/02/ezgif.com-gif-maker-2-1.mp4"></video>
    </div>
  );
};

export default Home;
