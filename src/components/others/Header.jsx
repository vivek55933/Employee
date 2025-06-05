import React from 'react';

const Header = (props) => {

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  };

  return (
    <header className="flex items-center justify-between px-8 py-6 bg-white border border-gray-200 shadow-md rounded-xl">
      <div>
        <p className="text-sm text-gray-500">Welcome back,</p>
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          {props.employee?.firstName || 'User'} <span className="text-3xl">👋</span>
        </h1>
      </div>

      <button onClick={logOutUser} className="bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition-transform duration-200 hover:scale-105">
        Logout
      </button>
    </header>
  );
};

export default Header;
