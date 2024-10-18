// src/utils/helpers.js
export const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleString('en-GB', options);
  };
  
  export const applyFilter = (emails, filter) => {
    if (filter === 'favorite') {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      return emails.filter(email => favorites.includes(email.id));
    }
    if (filter === 'read') {
      return emails.filter(email => email.isRead);
    }
    if (filter === 'unread') {
      return emails.filter(email => !email.isRead);
    }
    return emails; // Default: no filter
  };
  