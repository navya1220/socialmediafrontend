// src/FormPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormPage.css';

const FormPage = () => {
  const [user, setUser] = useState(() => {
    // Load initial state from localStorage
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });
  const [Name, setName] = useState('');
  const [SocialMediaHandler, setSocialMediaHandler] = useState('');
  const [Image, setImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Save users data to localStorage whenever it changes
    localStorage.setItem('users', JSON.stringify(user));
  }, [user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newStudent = { Name, SocialMediaHandler, Image };
    const updatedUserList = [...user, newStudent];
    setUser(updatedUserList);
    setName('');
    setSocialMediaHandler('');
    setImage(null);
  };

  const handleDisplay = () => {
    navigate('/display');
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Social Media Form</h1>
      <form onSubmit={handleSubmit} className="form">
        <label className="label">
          Name:
          <input type="text" value={Name} onChange={(event) => setName(event.target.value)} className="input" />
        </label>
        <br />
        <label className="label">
          SocialMediaHandler:
          <input type="text" value={SocialMediaHandler} onChange={(event) => setSocialMediaHandler(event.target.value)} className="input" />
        </label>
        <br />
        <label className="label">
          Image:
          <input type="file" onChange={(event) => setImage(event.target.files[0])} className="input" />
        </label>
        <br />
        <button type="submit" className="submit-button">Add Student</button>
      </form>
      <button className="display-button" onClick={handleDisplay}>Display Students</button>
    </div>
  );
};

export default FormPage;
