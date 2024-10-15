import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 shadow-md">
      <nav className="max-w-4xl mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">JobLog</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-300">Add Job</Link>
          </li>
          <li>
            <Link to="/list" className="hover:text-gray-300">Job List</Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
