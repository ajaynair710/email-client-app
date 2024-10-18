// src/components/EmailBody.js
import React, { useState, useEffect } from 'react';
import { fetchEmailBody } from '../utils/api';
import { formatDate } from '../utils/helpers';

const EmailBody = ({ selectedEmailId }) => {
  const [emailBody, setEmailBody] = useState(null);

  useEffect(() => {
    if (selectedEmailId) {
      fetchEmailBody(selectedEmailId).then(data => setEmailBody(data));
    }
  }, [selectedEmailId]);

  const handleMarkAsFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(selectedEmailId)) {
      favorites.push(selectedEmailId);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  };

  if (!emailBody) return <div>Loading...</div>;

  return (
    <div className="email-body">
      <h2>{emailBody.subject}</h2>
      <p>{emailBody.body}</p>
      <p><strong>Date:</strong> {formatDate(emailBody.date)}</p>
      <button onClick={handleMarkAsFavorite}>Mark as Favorite</button>
    </div>
  );
};

export default EmailBody;
