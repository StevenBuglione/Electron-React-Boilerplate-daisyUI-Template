/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SideBar.css';
import {
  faAngleRight,
  faAngleLeft,
  faHome,
  faInfoCircle,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="flex flex-col h-screen">
      <ul className={`${isCollapsed ? 'hidden' : ''} w-64 p-4 space-y-4`}>
        <li>
          <a
            href="#"
            className="block px-4 py-2 font-semibold rounded sidebar-active"
          >
            <FontAwesomeIcon icon={faHome} /> Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 font-semibold rounded sidebar-item "
          >
            <FontAwesomeIcon icon={faInfoCircle} /> About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 font-semibold rounded sidebar-item"
          >
            <FontAwesomeIcon icon={faEnvelope} /> Contact
          </a>
        </li>
      </ul>
      {isCollapsed && (
        <div className="px-4 py-2 space-y-4">
          <a href="#" className="block font-semibold rounded sidebar-active">
            <FontAwesomeIcon icon={faHome} />
          </a>
          <a href="#" className="block font-semibold rounded sidebar-item">
            <FontAwesomeIcon icon={faInfoCircle} />
          </a>
          <a href="#" className="block font-semibold rounded sidebar-item">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      )}
      <button
        onClick={toggleCollapse}
        className="flex items-center px-4 py-2 focus:outline-none fixed bottom-0 left-0 sidebar-item"
      >
        <FontAwesomeIcon icon={isCollapsed ? faAngleRight : faAngleLeft} />
      </button>
    </nav>
  );
};

export default SideBar;
