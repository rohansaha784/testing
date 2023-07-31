// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FiMenu } from 'react-icons/fi';

// const SideSheet = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSideSheet = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="side-sheet">
//       <div className={`toggle-button ${isOpen ? 'hide' : ''}`} onClick={toggleSideSheet}>
//         <FiMenu className="icon" />
//       </div>
//       <div className={`close-button ${isOpen ? '' : 'hide'}`} onClick={toggleSideSheet}>
//         Close
//       </div>
//       {isOpen && (
//         <ul className="nav-links">
//           <li>
//             <Link to="/page1">Page 1</Link>
//           </li>
//           <li>
//             <Link to="/page2">Page 2</Link>
//           </li>
//           <li>
//             <Link to="/page3">Page 3</Link>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SideSheet;








// import React, { ReactNode, forwardRef, Ref} from 'react';
// import { FiMenu } from 'react-icons/fi';

// interface SideSheetProps {
//     isOpen: boolean;
//     toggleSideSheet: () => void;
//     children: ReactNode;
//   }
  
//   const SideSheet = forwardRef<HTMLDivElement, SideSheetProps>((props, ref) => {
//     const { isOpen, toggleSideSheet, children } = props;
  
//     return (
//       <div className={`side-sheet ${isOpen ? 'open' : ''}`} ref={ref}>
//         <div className="toggle-button-container">
//           <div className="toggle-button" onClick={toggleSideSheet}>
//             <FiMenu className="icon" />
//           </div>
//         </div>
//         {children}
//       </div>
//     );
//   });
  
//   export default SideSheet;


import React, { ReactNode, forwardRef, Ref } from 'react';
import { FiMenu } from 'react-icons/fi';
import { NavLink, useLocation } from 'react-router-dom';

interface SideSheetProps {
  isOpen: boolean;
  toggleSideSheet: () => void;
  children: React.ReactNode;
}

const SideSheet = forwardRef<HTMLDivElement, SideSheetProps>((props, ref) => {
  const { isOpen, toggleSideSheet, children } = props;

  return (
    <div className={`side-sheet ${isOpen ? 'open' : ''}`} ref={ref}>
      <div className="toggle-button-container">
        <div className="toggle-button" onClick={toggleSideSheet}>
          <FiMenu className="icon" />
        </div>
      </div>
      {children}
    </div>
  );
});

interface NavLinkProps {
  to: string;
  children: ReactNode;
}

const CustomNavLink = ({ to, children }: NavLinkProps) => {
    const currentLocation = useLocation().pathname;
    const isSelected = currentLocation === to;
  
    return (
      <NavLink to={to} className={`button-link ${isSelected ? 'selected' : ''}`} activeClassName="selected">
        {children}
      </NavLink>
    );
  };

export { SideSheet, CustomNavLink };
