"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import useScreenWidth from "../helper/UseScreenWidth";
const users = [
  { name: "John Doe", lastMessage: "Hey there!", time: "2m ago" },
  { name: "Jane Smith", lastMessage: "How are you?", time: "10m ago" },
  { name: "Alice Johnson", lastMessage: "Let's catch up!", time: "1h ago" },
  { name: "Bob Brown", lastMessage: "Meeting at 3PM", time: "2h ago" },
  { name: "Bob Brown", lastMessage: "Meeting at 3PM", time: "2h ago" },
  { name: "Bob Brown", lastMessage: "Meeting at 3PM", time: "2h ago" },
  { name: "Job Brown", lastMessage: "Meeting at 3PM", time: "2h ago" },
  { name: "Job Brown", lastMessage: "Meeting at 3PM", time: "2h ago" },
  { name: "Bob Brown", lastMessage: "Meeting at 3PM", time: "2h ago" },
  { name: "Jfdsa", lastMessage: "Meeting at 3PM", time: "2h ago" },
  { name: "Jfdsa", lastMessage: "Meeting at 3PM", time: "2h ago" },
  { name: "Jfdsa", lastMessage: "Meeting at 3PM", time: "2h ago" },
  { name: "Jfdsa", lastMessage: "Meeting at 3PM", time: "2h ago" },
  { name: "Jfdsa", lastMessage: "Meeting at 3PM", time: "2h ago" },
  { name: "Jfdsa", lastMessage: "Meeting at 3PM", time: "2h ago" },
  { name: "Jfdsa", lastMessage: "Meeting at 3PM", time: "2h ago" },
  { name: "Jfdsa", lastMessage: "Meeting at 3PM", time: "2h ago" },
  { name: "Jfdsa", lastMessage: "Meeting at 3PM", time: "2h ago" },
  { name: "Jfdsa", lastMessage: "Meeting at 3PM", time: "2h ago" },
  { name: "ffffffffffff", lastMessage: "Meeting at 3PM", time: "2h ago" },
];
function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeUser, setActiveUser] = useState(users[0]);
  const [activeChat, setActiveChat] = useState(false);
  const screenWidth = useScreenWidth();
  console.log("🚀 ~ Home ~ screenWidth:", screenWidth);
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClick = (user: any) => {
    setActiveUser(user);
    if (screenWidth <= 768) {
      // Check if the screen width is medium (md) or larger
      setActiveChat(true);
    }
  };
  return (
    <div className="hide-scrollbar overflow-auto block md:flex  h-[92.6vh]">
      <div
        className={`w-full ${
          activeChat ? "hidden" : "block"
        } md:w-[18rem] bg-gray-100 dark:bg-gray-800 p-4 hide-scrollbar overflow-hidden`}
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-white ">Chats</h2>
        <div className="mb-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-3.5 text-gray-500 dark:text-primary" />
            <input
              type="text"
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="space-y-4 h-[92vh] overflow-scroll hide-scrollbar p-0 md:pb-24">
          {filteredUsers.map((user, index) => (
            <div
              key={index}
              className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              onClick={() => handleClick(user)}
            >
              <FaUserCircle className="text-3xl text-gray-400 dark:text-gray-300" />
              <div className="ml-4 flex justify-between w-full items-center">
                <div>
                  <h3 className="text-sm font-semibold dark:text-white">
                    {user.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {user.lastMessage}
                  </p>
                </div>
                <div className="ml-4 flex justify-between">
                  <p className="text-xs text-gray-500 dark:text-gray-500 mr-2">
                    {user.time}
                  </p>
                  <p className="bg-primary text-dark font-bold text-xs rounded-full relative w-4 h-4 flex justify-center items-center">
                    <span className="text-[10px] ">9+</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ChatWindow
        activeUser={activeUser}
        activeChat={activeChat}
        setActiveChat={setActiveChat}
      />
    </div>
  );
}

export default Home;
