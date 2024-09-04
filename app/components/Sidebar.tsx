"use client"
import React, { useState } from 'react'
import { FaSearch, FaUserCircle } from 'react-icons/fa';

const users = [
    { name: 'John Doe', lastMessage: 'Hey there!', time: '2m ago' },
    { name: 'Jane Smith', lastMessage: 'How are you?', time: '10m ago' },
    { name: 'Alice Johnson', lastMessage: 'Let\'s catch up!', time: '1h ago' },
    { name: 'Bob Brown', lastMessage: 'Meeting at 3PM', time: '2h ago' },
    { name: 'Bob Brown', lastMessage: 'Meeting at 3PM', time: '2h ago' },
    { name: 'Bob Brown', lastMessage: 'Meeting at 3PM', time: '2h ago' },
    { name: 'Job Brown', lastMessage: 'Meeting at 3PM', time: '2h ago' },
    { name: 'Job Brown', lastMessage: 'Meeting at 3PM', time: '2h ago' },
    { name: 'Bob Brown', lastMessage: 'Meeting at 3PM', time: '2h ago' },
    { name: 'Jfdsa', lastMessage: 'Meeting at 3PM', time: '2h ago' },
  ];
export const Sidebar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div className="w-full sm:w-64 bg-gray-100 dark:bg-gray-800 p-4 hide-scrollbar overflow-hidden">
        <h2 className="text-2xl font-bold mb-4 dark:text-white ">Chats</h2>
        <div className="mb-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-2.5 text-gray-500 dark:text-primary" />
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="space-y-4 h-full overflow-scroll hide-scrollbar">
          {filteredUsers.map((user, index) => (
            <div
              key={index}
              className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              onClick={() => console.log(user)}
            >
              <FaUserCircle className="text-3xl text-gray-400 dark:text-gray-300" />
              <div className="ml-4">
                <h3 className="text-sm font-semibold dark:text-white">{user.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{user.lastMessage}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">{user.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}
