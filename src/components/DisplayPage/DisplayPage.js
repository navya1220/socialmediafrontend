// src/DisplayPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DisplayPage.css';

const DisplayPage = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const handleBack = () => {
    navigate('/form');
  };

  const handleDelete = (indexToDelete) => {
    const updatedUsers = users.filter((_, index) => index !== indexToDelete);
    setUsers(updatedUsers);
  };

  return (
    <div className="display-container">
      <h1 className="display-title">SocialMedia Details</h1>
      <ul className="user-list">
        {users.map((student, index) => (
          <li className="card" key={index}>
            <h2 className="student-name">{student.Name}</h2>
            <p className="social-media-handler">{student.SocialMediaHandler}</p>
            {student.Image && (student.Image instanceof Blob || student.Image instanceof File) ? (
              <img src={URL.createObjectURL(student.Image)} alt={student.Name} className="student-image" />
            ) : student.Image ? (
              <img src={student.Image} alt={student.Name} className="student-image" />
            ) : (
              <p>No image available</p>
            )}
            <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button className="back-button" onClick={handleBack}>Back to Form</button>
    </div>
  );
};

export default DisplayPage;
