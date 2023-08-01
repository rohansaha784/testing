import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Switch } from 'react-router';
import aboutzinnia from './components/aboutzinnia/aboutzinnia';
import suggestions from './components/suggestions/suggestions';
import policies from './components/policies/policies';
import home from './components/home/home';
import './index.css';
import { SideSheet, CustomNavLink } from './components/SideSheet';
import { FiMenu } from 'react-icons/fi';
import PolicyDetails from './components/PolicyDetails/PolicyDetails';
import about from './components/about/about';


const App: React.FC = () => {
  const [showSideSheet, setShowSideSheet] = useState(false);
  const sideSheetRef = useRef<HTMLDivElement>(null);

  const toggleSideSheet = () => {
    setShowSideSheet(!showSideSheet);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sideSheetRef.current && !sideSheetRef.current.contains(event.target as Node)) {
        setShowSideSheet(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Router>
      <div className={`app ${showSideSheet ? 'side-sheet-open' : ''}`}>
      <Redirect from="/" to="/home" />
        <button className={`toggle-button ${showSideSheet ? 'hide' : ''}`} onClick={toggleSideSheet}>
          <FiMenu className="icon" />
        </button>
        <SideSheet isOpen={showSideSheet} toggleSideSheet={toggleSideSheet} ref={sideSheetRef}>
          <ul className="nav-links no-bullet">
            <li>
              <CustomNavLink to="/home">Home</CustomNavLink>
            </li>
            <li>
              <CustomNavLink to="/aboutzinnia">About Zinnia</CustomNavLink>
            </li>
            <li>
              <CustomNavLink to="/suggestions">Suggestions</CustomNavLink>
            </li>
            <li>
              <CustomNavLink to="/policies">Policies</CustomNavLink>
            </li>
            <li>
              <CustomNavLink to="/about">About</CustomNavLink>
            </li>
          </ul>
        </SideSheet>
        <Switch>
        <Route exact path="/home" component={home} />
          <Route path="/aboutzinnia" component={aboutzinnia} />
          <Route path="/suggestions" component={suggestions} />
          <Route exact path="/policies" component={policies} />
          <Route path="/policies/:id" component={PolicyDetails} />
          <Route path="/about" component={about} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;