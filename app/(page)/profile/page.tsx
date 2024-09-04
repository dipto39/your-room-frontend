"use client"
import React, { useState } from 'react';

const ProfileSettings: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('user@example.com'); // Set a default email for demonstration
  const [password, setPassword] = useState<string>('');
  const [profilePicture, setProfilePicture] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Profile updated:', { name, email, password, profilePicture });
  };

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePicture(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-light dark:bg-dark">
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center text-dard dark:text-light">Profile Settings</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col items-center">
          <label htmlFor="profilePicture" className="block text-lg font-medium text-gray-400 mb-2">Profile Picture</label>
          <input
            type="file"
            id="profilePicture"
            accept="image/*"
            onChange={handleProfilePictureChange}
            className="hidden"
          />
          <div className="flex items-center space-x-3">
            <img
              src={profilePicture ? URL.createObjectURL(profilePicture) : '/default-profile.png'}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
            <button
              type="button"
              onClick={() => document.getElementById('profilePicture')?.click()}
              className="py-2 px-4 bg-primary text-white rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Change Picture
            </button>
          </div>
        </div>
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-dark dark:text-lightWithe">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 block w-full px-4 py-2  bg-light dark:bg-dark text-dark dark:text-light rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-dark dark:text-lightWithe">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            readOnly
            className="mt-2 block w-full px-4 py-2  bg-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary cursor-not-allowed"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-lg font-medium text-dark dark:text-lightWithe">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 block w-full px-4 py-2  bg-light dark:bg-dark text-dark dark:text-light rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="py-2 px-6 bg-primary text-white font-medium rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default ProfileSettings;
