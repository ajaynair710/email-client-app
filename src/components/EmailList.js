// src/components/EmailList.js
import React, { useState, useEffect } from 'react';
import { fetchEmails } from '../utils/api';
import { applyFilter } from '../utils/helpers';
import EmailItem from './EmailItem';

const EmailList = ({ onEmailSelect, filter }) => {
  const [emails, setEmails] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchEmails(page).then(data => setEmails(prevEmails => [...prevEmails, ...data.list]));
  }, [page]);

  const loadMoreEmails = () => setPage(page + 1);

  const filteredEmails = applyFilter(emails, filter);

  return (
    <div className="email-list">
      {filteredEmails.map(email => (
        <EmailItem key={email.id} email={email} onClick={() => onEmailSelect(email.id)} />
      ))}
      <button onClick={loadMoreEmails}>Load More</button>
    </div>
  );
};

export default EmailList;
