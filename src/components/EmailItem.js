// src/components/EmailItem.js
import React from 'react';
import { formatDate } from '../utils/helpers';

const EmailItem = ({ email, onClick }) => {
  return (
    <div className={`email-item ${email.isRead ? 'read' : 'unread'}`} onClick={onClick}>
      <div className="email-avatar">{email.from.name[0]}</div> {/* Make sure this is correct */}
      <div className="email-content">
        <div className="email-header">
          <span className="email-from">{email.from.name}</span> {/* Update this line */}
          <span className="email-date">{formatDate(email.date)}</span>
        </div>
        <div className="email-subject">{email.subject}</div>
        <div className="email-short-description">{email.short_description}</div>
      </div>
    </div>
  );
};

export default EmailItem;
