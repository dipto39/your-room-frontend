"use client"
import React, { useState, useContext, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';
import Link from 'next/link';

const Header = () => {

    const { mode, setMode }: any = useContext(ThemeContext as any);
    console.log("🚀 ~ Header ~ darkMode:", mode)

  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState<boolean>(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(prev => !prev);
  };

  useEffect(() => {
    localStorage.setItem("theme", mode);
    const localTheme: any = localStorage.getItem("theme");
    (document.querySelector("html") as HTMLElement).setAttribute("data-theme", localTheme);
  }, [mode])

  const toggleMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
    localStorage.setItem('theme', mode === 'dark' ? 'light' : 'dark');
  };
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center flex-1 border-b-2 border-[#444f64]">
      <Link href="/" className="flex items-center space-x-4">
        <img src="/logo.png" alt="Logo" className="h-10" />
        <h1 className="text-xl font-bold dark:text-light">My Room</h1>
      </Link>
      <div className="flex items-center space-x-4">
        <button onClick={toggleMode} className="p-2 rounded-full focus:outline-none">
          {mode === 'dark' ? (
            <FaSun className="text-yellow-500" />
          ) : (
            <FaMoon className="text-gray-600" />
          )}
        </button>
        <button className="relative focus:outline-none">
          <span className="sr-only">View notifications</span>
          <svg className="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 7 7.388 7 8.8V11c0 .816-.392 1.544-1.095 2.045L5 17h5m0 0v1a3 3 0 01-6 0v-1m6 0h-6" />
          </svg>
          <span className="absolute top-0 right-0 block h-2 w-2 transform translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600"></span>
        </button>
        <div className="relative">
          <button onClick={toggleProfileDropdown} className="flex items-center focus:outline-none">
            <img src="/user.png" alt="Profile" className="h-8 w-8 rounded-full" />
            <svg className="ml-2 h-4 w-4 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isProfileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg z-10">
              <a href="/profile" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600">Your Profile</a>
              <a href="/settings" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600">Settings</a>
              <a href="/logout" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600">Sign out</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
