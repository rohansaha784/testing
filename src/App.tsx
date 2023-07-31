// import React, { useEffect, useRef, useState } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { Switch } from 'react-router';
// import aboutzinnia from './components/aboutzinnia/aboutzinnia';
// import suggestions from './components/suggestions/suggestions';
// import Page3 from './components/Page3';
// import ListGroup from './components/ListGroup';
// import './index.css';
// import SideSheet from './components/SideSheet';
// import { FiMenu } from 'react-icons/fi';

// const App: React.FC = () => {
//   const [showSideSheet, setShowSideSheet] = useState(false);
//   const sideSheetRef = useRef<HTMLDivElement>(null);

//   const toggleSideSheet = () => {
//     setShowSideSheet(!showSideSheet);
//   };



//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (sideSheetRef.current && !sideSheetRef.current.contains(event.target as Node)) {
//         setShowSideSheet(false);
//       }
//     };
  
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <Router>
//       <div className={`app ${showSideSheet ? 'side-sheet-open' : ''}`}>
//         <button className={`toggle-button ${showSideSheet ? 'hide' : ''}`} onClick={toggleSideSheet}>
//         <FiMenu className="icon" />
//         </button>
//         <SideSheet isOpen={showSideSheet} toggleSideSheet={toggleSideSheet} ref={sideSheetRef}>
//           <ul className="nav-links no-bullet">
//             <li>
//               <Link to="/" className="button-link">
//                 Home
//                 </Link>
//             </li>
//             <li>
//               <Link to="/aboutzinnia" className="button-link">
//                 About Zinnia
//                 </Link>
//             </li>
//             <li>
//               <Link to="/suggestions" className="button-link">
//                 Suggestions
//                 </Link>
//             </li>
//             <li>
//               <Link to="/page3" className="button-link">
//                 Page 3
//                 </Link>
//             </li>
//           </ul>
//         </SideSheet>
//         <Switch>
//           <Route exact path="/" component={ListGroup} />
//           <Route path="/aboutzinnia" component={aboutzinnia} />
//           <Route path="/suggestions" component={suggestions} />
//           <Route path="/page3" component={Page3} />
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { Switch } from 'react-router';
import aboutzinnia from './components/aboutzinnia/aboutzinnia';
import suggestions from './components/suggestions/suggestions';
import policies from './components/policies/policies';
import home from './components/home/home';
import './index.css';
import { SideSheet, CustomNavLink } from './components/SideSheet';
import { FiMenu } from 'react-icons/fi';
import styles from './components/policies/policies.module.css';
import PolicyDetails from './components/PolicyDetails/PolicyDetails';

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
          </ul>
        </SideSheet>
        <Switch>
        <Route exact path="/home" component={home} />
          <Route path="/aboutzinnia" component={aboutzinnia} />
          <Route path="/suggestions" component={suggestions} />
          <Route exact path="/policies" component={policies} />
          <Route path="/policies/:id" component={PolicyDetails} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;