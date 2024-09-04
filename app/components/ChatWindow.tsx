"use client";
import React, { useState, ChangeEvent, useEffect } from "react";
import {
  FaPaperPlane,
  FaPhotoVideo,
  FaInfoCircle,
} from "react-icons/fa";
import { FaArrowLeft, FaInfo, FaPhone, FaVideo } from "react-icons/fa6";

interface Message {
  id: number;
  text: string;
  sender: "me" | "other";
  media?: string | null;
}

const ChatWindow = ({ activeUser, activeChat, setActiveChat }: any) => {

  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! How are you?", sender: "other" },
    { id: 2, text: "I am good, thank you! How about you?", sender: "me" },
    { id: 4, text: "I am doing well, thanks for asking.", sender: "other" },
    { id: 5, text: "I am doing well, thanks for asking.", sender: "other" },
    { id: 6, text: "I am doing well, thanks for asking.", sender: "other" },
    { id: 7, text: "I am doing well, thanks for asking.", sender: "other" },
    { id: 3, text: "I am good, thank you! How about you?", sender: "me" },
    { id: 3, text: "I am good, thank you! How about you?", sender: "me" },
    { id: 3, text: "I am good, thank you! How about you?", sender: "me" },
    { id: 3, text: "I am good, thank you! How about you?", sender: "me" },
    { id: 3, text: "I am good, thank you! How about you?", sender: "me" },
    { id: 3, text: "I am good, thank you! How about you?", sender: "me" },
    { id: 3, text: "I am good, thank you! How about you?", sender: "me" },
    { id: 3, text: "I am good, thank you! How about you?", sender: "me" },
    { id: 3, text: "I am good, thank you! How about you?", sender: "me" },
    { id: 3, text: "I am good, thank you! How about you?", sender: "me" },
    { id: 3, text: "I am good, thank you! How about you?", sender: "me" },
    { id: 3, text: "I am good, thank you! How about you?", sender: "me" },
    { id: 3, text: "I am good, thank you! How about you?", sender: "me" },
    { id: 3, text: "I am good, thank you! How about you?", sender: "me" },
    { id: 3, text: "I am good, thank you! How about you?", sender: "me" },
    { id: 3, text: "I am good, thank you! How about you?", sender: "me" },
    { id: 3, text: "I am good, thank you! How about you?", sender: "me" },
    { id: 3, text: "I am good, thank you! How about you?", sender: "me" },
    { id: 3, text: "I am good, thank you! How about you?", sender: "me" },
    { id: 3, text: "I am good, thank you! How about you?", sender: "me" },
    { id: 3, text: "I am good, thank you! How about you?", sender: "me" },
    { id: 3, text: "I am good, thank you! How about you?", sender: "me" },
    { id: 3, text: "I am good, thank you! How about you?", sender: "me" },
    { id: 3, text: "I am good, thank you! How about you?", sender: "me" },
    { id: 3, text: "I am good, thank you! How about you?", sender: "me" },
    { id: 3, text: "I am good, thank you! How about you?", sender: "me" },
    { id: 3, text: "I am good, thank you! How about you?", sender: "me" },
    { id: 3, text: "I am good, thank you! How about you?", sender: "me" },
  ]);

  const [input, setInput] = useState<string>("");
  const [media, setMedia] = useState<string | null>(null);

  const handleSendMessage = () => {
    if (input.trim() || media) {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: input, media: media, sender: "me" },
      ]);
      setInput("");
      setMedia(null);
    }
  };

  const handleMediaChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setMedia(URL.createObjectURL(event.target.files[0]));
    }
  };
  
  const startVideoCall = () => {
    alert("It is not implemented yet");
  };
  useEffect(() => {
    // scroll to bottom
    const chatContainer = document.getElementById("chat-container");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
    
  })
  return activeUser === undefined ? (
    <div className="h-full hidden md:flex flex-1  justify-center items-center bg-gray-50  dark:bg-gray-700 p-4 relative">
      <h3 className="text-2xl font-bold dark:text-gray-300">
        Please select a contact
      </h3>
    </div>
  ) : (
    <div className={`h-full flex-1 ${activeChat ? "flex" : "hidden md:flex"}  flex-col bg-gray-50  dark:bg-gray-900 p-4 relative`}>
      <div className="flex items-center justify-between border-b border-gray-300 dark:border-gray-700 pb-2 mb-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setActiveChat(false)}
            className="text-primary md:hidden block"
          >
            <FaArrowLeft className="w-5 h-5" />
          </button>
          <img
            src="https://via.placeholder.com/40" // Replace with actual profile picture URL
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h1 className="text-xl font-bold dark:text-white">
              {activeUser?.name}
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">Online</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
         <button className="text-primary" onClick={startVideoCall}>
            <FaVideo className="w-5 h-5" />
          </button>
          <button className="text-primary" onClick={() => alert("It is not implemented yet")}>
            <FaPhone className="w-5 h-5" />
          </button>
          <button className="text-primary" onClick={() => alert("It is not implemented yet")}>
            <FaInfoCircle className="w-5 h-5" />
          </button>
          
        </div>
      </div>
      <div className="flex-1 overflow-auto space-y-4 mb-4 hide-scrollbar " id="chat-container">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex relative ${
              message.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs p-3 rounded-lg text-white ${
                message.sender === "me" ? "bg-primary" : "bg-gray-700"
              }`}
            >
              {message.media && (
                <img
                  src={message.media}
                  alt="media"
                  className="mb-2 rounded-lg"
                />
              )}
              <p className="break-words">{message.text}</p>
              {/* <span className="text-[8px] text-light text-right p-0 m-0 bottom-0 right-0" >12:34 PM</span> */}
            </div>
          </div>
        ))}
      </div>
      {media && (
        <div className="mb-4">
          <img
            src={media}
            alt="preview"
            className="w-32 h-32 object-cover rounded-lg"
          />
        </div>
      )}
      <div className="flex items-center space-x-2 ">
        <input
          type="file"
          accept="image/*"
          id="mediaInput"
          className="hidden"
          onChange={handleMediaChange}
        />
        <label htmlFor="mediaInput" className="cursor-pointer">
          <FaPhotoVideo className="w-6 h-6 text-primary" />
        </label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2"
        />
        <button
          onClick={handleSendMessage}
          className="bg-primary text-white px-4 py-2 rounded-lg flex items-center"
        >
          <FaPaperPlane className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
